const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { webcrypto } = require('crypto');
const { TextEncoder } = require('util');

const root = path.resolve(__dirname, '..');
const store = new Map();
const sessionStore = new Map();
const storage = (map) => ({
  getItem: (key) => map.has(key) ? map.get(key) : null,
  setItem: (key, value) => map.set(key, String(value)),
  removeItem: (key) => map.delete(key),
  clear: () => map.clear()
});

const context = {
  console,
  window: null,
  localStorage: storage(store),
  sessionStorage: storage(sessionStore),
  crypto: webcrypto,
  TextEncoder,
  navigator: { userAgent: 'Admin QA' },
  location: { pathname: '/admin-dashboard.html', replace: () => {} },
  setTimeout,
  clearTimeout,
  Date,
  Intl,
  URL,
  Uint8Array,
  Math,
  JSON,
  Map,
  Set
};
context.window = context;
vm.createContext(context);

for (const file of ['assets/config.js', 'assets/automotive-data.js', 'assets/storage.js', 'assets/admin-auth.js']) {
  vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), context, { filename: file });
}

const assert = (condition, message) => {
  if (!condition) throw new Error(message);
  console.log(`✓ ${message}`);
};

(async () => {
  const { WA } = context;
  WA.Storage.init();
  WA.AdminAuth.ensureBootstrapUsers();

  assert(WA.Config.storageKeys.includes('wa_admin_users'), 'إضافة جدول مستخدمي الإدارة إلى نموذج البيانات');
  assert(WA.Config.storageKeys.includes('wa_admin_sessions'), 'إضافة جدول جلسات الإدارة إلى نموذج البيانات');
  assert(WA.Config.storageKeys.includes('wa_audit_logs'), 'إضافة جدول سجل التدقيق إلى نموذج البيانات');

  const users = WA.Storage.get('wa_admin_users');
  assert(users.length === 6, 'تجهيز ستة أدوار داخلية مستقلة');
  assert(new Set(users.map((u) => u.role)).size === 6, 'عدم تكرار الأدوار في الحسابات الأولية');

  const logged = await WA.AdminAuth.login('sysadmin', 'WainOps@2026!');
  assert(logged.user.role === 'system_admin', 'تسجيل دخول مدير النظام بكلمة المرور المشفرة');
  assert(WA.AdminAuth.can(logged.user, 'finance.manage'), 'مدير النظام يملك جميع الصلاحيات');

  const support = users.find((u) => u.role === 'customer_service');
  const accountant = users.find((u) => u.role === 'accountant');
  assert(WA.AdminAuth.can(support, 'requests.manage'), 'خدمة العملاء تستطيع إدارة الطلبات');
  assert(!WA.AdminAuth.can(support, 'finance.manage'), 'خدمة العملاء لا تستطيع إدارة الحسابات');
  assert(WA.AdminAuth.can(accountant, 'finance.manage'), 'المحاسب يستطيع إدارة الحسابات');
  assert(!WA.AdminAuth.can(accountant, 'requests.manage'), 'المحاسب لا يستطيع تغيير الطلبات');

  assert(WA.AdminAuth.getSessionBundle()?.user.id === logged.user.id, 'استعادة جلسة الإدارة النشطة');
  assert(WA.Storage.get('wa_audit_logs').some((row) => row.action === 'تسجيل دخول'), 'تسجيل الدخول في سجل التدقيق');
  WA.AdminAuth.logout();
  assert(!WA.AdminAuth.getSessionBundle(), 'إنهاء جلسة الإدارة عند تسجيل الخروج');

  const publicHtml = fs.readdirSync(root).filter((name) => name.endsWith('.html') && !name.startsWith('admin-'));
  const leaked = publicHtml.filter((name) => /admin-(login|dashboard)\.html/.test(fs.readFileSync(path.join(root, name), 'utf8')));
  assert(leaked.length === 0, 'عدم إظهار روابط بوابة الإدارة في الصفحات العامة');

  const adminLogin = fs.readFileSync(path.join(root, 'admin-login.html'), 'utf8');
  const adminDashboard = fs.readFileSync(path.join(root, 'admin-dashboard.html'), 'utf8');
  assert(/assets\/admin-auth\.js/.test(adminLogin) && /assets\/admin-login\.js/.test(adminLogin), 'ربط صفحة الدخول بمنطق المصادقة الداخلي');
  assert(/assets\/admin-dashboard\.js/.test(adminDashboard) && /data-admin-tab="audit"/.test(adminDashboard), 'ربط لوحة الإدارة بالتبويبات وسجل التدقيق');
  assert(WA.Storage.integrityCheck().length === 0, 'سلامة علاقات مستخدمي وجلسات الإدارة');

  console.log('\nALL_ADMIN_QA_PASSED');
})().catch((error) => {
  console.error(error.stack || error.message);
  process.exit(1);
});
