# الكود الكامل للملفات الجديدة والمعدلة — بوابة الإدارة الداخلية

## `admin-login.html`

```html
<!doctype html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <meta name="theme-color" content="#0b1d33">
  <meta name="robots" content="noindex,nofollow,noarchive">
  <meta name="description" content="دخول أعضاء فريق وين أوديها إلى بوابة الإدارة الداخلية.">
  <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; connect-src 'none'; object-src 'none'; base-uri 'self'; frame-ancestors 'none'; form-action 'self'">
  <title>دخول فريق المشروع — وين أوديها</title>
  <link rel="icon" href="assets/images/favicon.png" type="image/png">
  <link rel="stylesheet" href="assets/styles.css">
</head>
<body data-page="admin-login" class="admin-page">
  <header class="site-header unified-site-header admin-site-header">
    <a class="skip-link" href="#main-content">تجاوز إلى المحتوى</a>
    <div class="container nav-shell unified-header-shell">
      <a class="brand unified-brand" href="index.html" aria-label="وين أوديها — الموقع العام">
        <img class="brand-logo" src="assets/images/logo.png" width="900" height="283" alt="وين أوديها">
      </a>
      <span class="current-page-label" aria-current="page">بوابة فريق المشروع</span>
      <a class="btn btn-ghost btn-sm" href="index.html" data-icon="home">الموقع العام</a>
    </div>
  </header>

  <main id="main-content" class="section auth-section admin-auth-section">
    <div class="container auth-layout admin-auth-layout">
      <section class="card auth-card">
        <div class="section-head">
          <div class="kicker">دخول داخلي</div>
          <h1>إدارة عمليات «وين أوديها»</h1>
          <p>استخدم حسابك الفردي. تظهر لك الأقسام والإجراءات المرتبطة بدورك فقط.</p>
        </div>
        <form id="adminLoginForm" class="form-grid" novalidate>
          <div class="form-field">
            <label class="required" for="adminUsername">اسم المستخدم</label>
            <input id="adminUsername" name="username" autocomplete="username" required maxlength="80" dir="ltr" placeholder="username">
          </div>
          <div class="form-field">
            <label class="required" for="adminPassword">كلمة المرور</label>
            <input id="adminPassword" name="password" type="password" autocomplete="current-password" required minlength="10" placeholder="••••••••••" dir="ltr">
          </div>
          <button id="adminLoginSubmit" class="btn btn-primary btn-block" type="submit" data-icon="lock">دخول لوحة الإدارة</button>
        </form>
      </section>

      <aside class="auth-aside admin-security-aside">
        <div class="card-icon" data-icon="shield" aria-hidden="true"></div>
        <h2>وصول مخصص حسب الدور</h2>
        <ul class="feature-checklist">
          <li>حساب مستقل لكل عضو في الفريق.</li>
          <li>صلاحيات للأقسام والإجراءات الحساسة.</li>
          <li>سجل تدقيق يحفظ كل تعديل إداري.</li>
        </ul>
        <div class="legal-note">هذه الحماية مناسبة للعرض الداخلي على جهاز واحد فقط. التشغيل الفعلي يتطلب مصادقة وصلاحيات في Backend آمن.</div>
      </aside>
    </div>
  </main>

  <footer class="site-footer unified-site-footer admin-site-footer">
    <div class="container unified-footer-shell">
      <a class="footer-logo-link" href="index.html" aria-label="وين أوديها — الموقع العام"><span class="footer-logo-plate"><img class="footer-logo" src="assets/images/logo.png" width="900" height="283" alt="وين أوديها"></span></a>
      <p class="admin-footer-note">بوابة داخلية لأعضاء فريق المشروع المصرح لهم فقط.</p>
      <span class="unified-footer-copy">© 2026 وين أوديها</span>
    </div>
  </footer>

  <script defer src="assets/config.js"></script>
  <script defer src="assets/automotive-data.js"></script>
  <script defer src="assets/storage.js"></script>
  <script defer src="assets/seed.js"></script>
  <script defer src="assets/lifecycle.js"></script>
  <script defer src="assets/common.js"></script>
  <script defer src="assets/admin-auth.js"></script>
  <script defer src="assets/admin-login.js"></script>
</body>
</html>
```

## `admin-dashboard.html`

```html
<!doctype html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <meta name="theme-color" content="#0b1d33">
  <meta name="robots" content="noindex,nofollow,noarchive">
  <meta name="description" content="لوحة الإدارة الداخلية لمنصة وين أوديها.">
  <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; connect-src 'none'; object-src 'none'; base-uri 'self'; frame-ancestors 'none'; form-action 'self'">
  <title>لوحة الإدارة الداخلية — وين أوديها</title>
  <link rel="icon" href="assets/images/favicon.png" type="image/png">
  <link rel="stylesheet" href="assets/styles.css">
</head>
<body data-page="admin-dashboard" class="admin-page">
  <header class="site-header unified-site-header admin-site-header">
    <a class="skip-link" href="#main-content">تجاوز إلى المحتوى</a>
    <div class="container nav-shell unified-header-shell admin-header-shell">
      <a class="brand unified-brand" href="admin-dashboard.html" aria-label="وين أوديها — لوحة الإدارة">
        <img class="brand-logo" src="assets/images/logo.png" width="900" height="283" alt="وين أوديها">
      </a>
      <span class="current-page-label" aria-current="page">الإدارة الداخلية</span>
      <div class="admin-user-summary" aria-live="polite">
        <strong id="adminUserName">—</strong>
        <span id="adminUserRole">—</span>
      </div>
      <button id="adminLogout" class="btn btn-ghost btn-sm" type="button" data-icon="lock">تسجيل الخروج</button>
    </div>
  </header>

  <main id="main-content" class="admin-main">
    <div class="container admin-shell">
      <section class="admin-topbar" aria-labelledby="adminTitle">
        <div>
          <div class="kicker">مركز العمليات والحسابات</div>
          <h1 id="adminTitle">لوحة إدارة «وين أوديها»</h1>
          <p>المؤشرات أدناه محسوبة مباشرة من السجلات المحفوظة في هذا المتصفح.</p>
        </div>
        <div class="admin-topbar-actions">
          <button id="adminRefresh" class="btn btn-light btn-sm" type="button" data-icon="refresh">تحديث</button>
          <button id="adminExport" class="btn btn-light btn-sm" type="button">تصدير CSV</button>
          <button id="adminPrint" class="btn btn-light btn-sm" type="button" data-icon="print">طباعة</button>
        </div>
      </section>

      <div id="adminSecurityNotice" class="warning-panel admin-security-notice">
        <strong>تنبيه أمني:</strong> البوابة تعمل داخل مشروع ثابت وبياناتها في localStorage. إخفاء الرابط والصلاحيات في الواجهة لا يمثل حماية إنتاجية.
      </div>

      <nav class="admin-tabs" aria-label="أقسام لوحة الإدارة" role="tablist">
        <button class="admin-tab active" type="button" role="tab" aria-selected="true" data-admin-tab="overview" data-permission="dashboard.view">نظرة عامة</button>
        <button class="admin-tab" type="button" role="tab" aria-selected="false" data-admin-tab="requests" data-permission="requests.view">الطلبات والإحالات</button>
        <button class="admin-tab" type="button" role="tab" aria-selected="false" data-admin-tab="partners" data-permission="partners.view">الشركاء</button>
        <button class="admin-tab" type="button" role="tab" aria-selected="false" data-admin-tab="applications" data-permission="applications.view">طلبات الانضمام</button>
        <button class="admin-tab" type="button" role="tab" aria-selected="false" data-admin-tab="finance" data-permission="finance.view">الحسابات</button>
        <button class="admin-tab" type="button" role="tab" aria-selected="false" data-admin-tab="quality" data-permission="quality.view">الجودة والاعتراضات</button>
        <button class="admin-tab" type="button" role="tab" aria-selected="false" data-admin-tab="users" data-permission="*">المستخدمون</button>
        <button class="admin-tab" type="button" role="tab" aria-selected="false" data-admin-tab="audit" data-permission="audit.view">سجل التدقيق</button>
      </nav>

      <section id="panel-overview" class="admin-panel active" role="tabpanel" data-admin-panel="overview">
        <div id="adminMetrics" class="admin-metric-grid"></div>
        <div class="dashboard-grid two admin-overview-grid">
          <article class="card">
            <div class="admin-card-head"><div><h2>المتابعة التشغيلية</h2><p>أحدث الطلبات التي تحتاج إلى متابعة.</p></div></div>
            <div id="overviewRequests" class="admin-compact-list"></div>
          </article>
          <article class="card">
            <div class="admin-card-head"><div><h2>سلامة البيانات</h2><p>فحص العلاقات بين الجداول الحالية.</p></div></div>
            <div id="integrityResult"></div>
          </article>
        </div>
      </section>

      <section id="panel-requests" class="admin-panel" role="tabpanel" data-admin-panel="requests" hidden>
        <div class="admin-filterbar">
          <label class="form-field"><span>بحث</span><input id="requestSearch" type="search" placeholder="رقم الطلب، الجوال، المدينة أو السيارة"></label>
          <label class="form-field"><span>نوع الخدمة</span><select id="requestServiceFilter"><option value="">جميع الخدمات</option></select></label>
          <label class="form-field"><span>الحالة</span><select id="requestStatusFilter"><option value="">جميع الحالات</option></select></label>
        </div>
        <div class="table-wrap admin-table-wrap">
          <table>
            <thead><tr><th>الطلب</th><th>العميل والسيارة</th><th>الخدمة والموقع</th><th>الحالة</th><th>الإحالات</th><th>آخر تحديث</th><th>الإجراءات</th></tr></thead>
            <tbody id="requestsTableBody"></tbody>
          </table>
        </div>
      </section>

      <section id="panel-partners" class="admin-panel" role="tabpanel" data-admin-panel="partners" hidden>
        <div class="admin-filterbar">
          <label class="form-field"><span>بحث</span><input id="partnerSearch" type="search" placeholder="اسم الشريك، المدينة أو رقم التواصل"></label>
          <label class="form-field"><span>النوع</span><select id="partnerTypeFilter"><option value="">جميع الأنواع</option></select></label>
          <label class="form-field"><span>حالة الشراكة</span><select id="partnerStatusFilter"><option value="">جميع الحالات</option><option value="active">نشط</option><option value="suspended_operations">موقوف تشغيليًا</option><option value="suspended_financial">موقوف ماليًا</option><option value="cancelled">ملغى</option></select></label>
        </div>
        <div class="table-wrap admin-table-wrap"><table><thead><tr><th>الشريك</th><th>النوع والموقع</th><th>الثقة والتقييم</th><th>الشراكة</th><th>السداد</th><th>الرصيد</th><th>الإجراءات</th></tr></thead><tbody id="partnersTableBody"></tbody></table></div>
      </section>

      <section id="panel-applications" class="admin-panel" role="tabpanel" data-admin-panel="applications" hidden>
        <div class="admin-filterbar">
          <label class="form-field"><span>بحث</span><input id="applicationSearch" type="search" placeholder="رقم الطلب، المنشأة أو المدينة"></label>
          <label class="form-field"><span>الحالة</span><select id="applicationStatusFilter"><option value="">جميع الحالات</option><option value="submitted">قيد المراجعة</option><option value="approved">معتمد</option><option value="rejected">مرفوض</option></select></label>
        </div>
        <div class="table-wrap admin-table-wrap"><table><thead><tr><th>رقم الطلب</th><th>المنشأة</th><th>النوع والموقع</th><th>الوثائق</th><th>الحالة</th><th>تاريخ التقديم</th><th>الإجراءات</th></tr></thead><tbody id="applicationsTableBody"></tbody></table></div>
      </section>

      <section id="panel-finance" class="admin-panel" role="tabpanel" data-admin-panel="finance" hidden>
        <div id="financeMetrics" class="admin-metric-grid admin-metric-grid-small"></div>
        <div class="admin-subtabs" role="tablist" aria-label="أقسام الحسابات">
          <button class="admin-subtab active" type="button" data-finance-view="fees">رسوم الوساطة</button>
          <button class="admin-subtab" type="button" data-finance-view="invoices">الفواتير</button>
          <button class="admin-subtab" type="button" data-finance-view="payments">المدفوعات</button>
        </div>
        <div id="financeFees" data-finance-panel="fees"><div class="table-wrap admin-table-wrap"><table><thead><tr><th>الرسم</th><th>الشريك</th><th>الطلب والإحالة</th><th>فئة التكلفة</th><th>المبلغ</th><th>الحالة</th><th>التاريخ</th><th>الإجراءات</th></tr></thead><tbody id="feesTableBody"></tbody></table></div></div>
        <div id="financeInvoices" data-finance-panel="invoices" hidden><div class="table-wrap admin-table-wrap"><table><thead><tr><th>الفاتورة</th><th>الشريك</th><th>الدورة</th><th>المبلغ</th><th>الاستحقاق</th><th>الاعتراض</th><th>الحالة</th><th>الإجراءات</th></tr></thead><tbody id="invoicesTableBody"></tbody></table></div></div>
        <div id="financePayments" data-finance-panel="payments" hidden><div class="table-wrap admin-table-wrap"><table><thead><tr><th>الدفعة</th><th>الشريك</th><th>الفاتورة</th><th>المبلغ</th><th>الطريقة</th><th>الإيصال</th><th>التاريخ</th></tr></thead><tbody id="paymentsTableBody"></tbody></table></div></div>
      </section>

      <section id="panel-quality" class="admin-panel" role="tabpanel" data-admin-panel="quality" hidden>
        <div class="admin-subtabs" role="tablist" aria-label="الجودة والاعتراضات">
          <button class="admin-subtab active" type="button" data-quality-view="objections">الاعتراضات</button>
          <button class="admin-subtab" type="button" data-quality-view="ratings">التقييمات</button>
          <button class="admin-subtab" type="button" data-quality-view="discounts">الخصومات</button>
        </div>
        <div data-quality-panel="objections"><div class="table-wrap admin-table-wrap"><table><thead><tr><th>الاعتراض</th><th>النوع</th><th>الشريك والطلب</th><th>السبب</th><th>الحالة</th><th>التاريخ</th><th>الإجراءات</th></tr></thead><tbody id="objectionsTableBody"></tbody></table></div></div>
        <div data-quality-panel="ratings" hidden><div class="table-wrap admin-table-wrap"><table><thead><tr><th>التقييم</th><th>الشريك</th><th>الطلب</th><th>الدرجة</th><th>عدالة الأسعار</th><th>الحالة</th><th>التاريخ</th><th>الإجراءات</th></tr></thead><tbody id="ratingsTableBody"></tbody></table></div></div>
        <div data-quality-panel="discounts" hidden><div class="table-wrap admin-table-wrap"><table><thead><tr><th>الخصم</th><th>الشريك</th><th>النسبة والنطاق</th><th>المدة</th><th>الحالة</th><th>آخر تحديث</th><th>الإجراءات</th></tr></thead><tbody id="discountsTableBody"></tbody></table></div></div>
      </section>

      <section id="panel-users" class="admin-panel" role="tabpanel" data-admin-panel="users" hidden>
        <div class="admin-panel-actions"><button id="createAdminUser" class="btn btn-primary btn-sm" type="button" data-icon="plus">إضافة مستخدم</button></div>
        <div class="table-wrap admin-table-wrap"><table><thead><tr><th>المستخدم</th><th>اسم الدخول</th><th>الدور</th><th>الحالة</th><th>آخر دخول</th><th>الإجراءات</th></tr></thead><tbody id="usersTableBody"></tbody></table></div>
      </section>

      <section id="panel-audit" class="admin-panel" role="tabpanel" data-admin-panel="audit" hidden>
        <div class="admin-filterbar">
          <label class="form-field"><span>بحث في السجل</span><input id="auditSearch" type="search" placeholder="المستخدم، الإجراء أو رقم السجل"></label>
          <label class="form-field"><span>نوع السجل</span><select id="auditEntityFilter"><option value="">جميع الأنواع</option></select></label>
        </div>
        <div class="table-wrap admin-table-wrap"><table><thead><tr><th>التاريخ</th><th>المستخدم</th><th>الإجراء</th><th>السجل المتأثر</th><th>السبب</th><th>التفاصيل</th></tr></thead><tbody id="auditTableBody"></tbody></table></div>
      </section>
    </div>
  </main>

  <footer class="site-footer unified-site-footer admin-site-footer">
    <div class="container unified-footer-shell">
      <a class="footer-logo-link" href="admin-dashboard.html" aria-label="وين أوديها — لوحة الإدارة"><span class="footer-logo-plate"><img class="footer-logo" src="assets/images/logo.png" width="900" height="283" alt="وين أوديها"></span></a>
      <p class="admin-footer-note">بوابة داخلية — لا تُستخدم كبديل عن Backend آمن في التشغيل الفعلي.</p>
      <span class="unified-footer-copy">© 2026 وين أوديها</span>
    </div>
  </footer>

  <dialog id="adminDetailDialog" class="dialog admin-dialog">
    <div class="dialog-shell">
      <div class="dialog-head"><h2 id="adminDetailTitle">التفاصيل</h2><button class="dialog-close" type="button" data-close-dialog="adminDetailDialog" aria-label="إغلاق">×</button></div>
      <div id="adminDetailBody"></div>
    </div>
  </dialog>

  <dialog id="adminActionDialog" class="dialog admin-dialog">
    <form id="adminActionForm" class="dialog-shell">
      <div class="dialog-head"><h2 id="adminActionTitle">تأكيد الإجراء</h2><button class="dialog-close" type="button" data-close-dialog="adminActionDialog" aria-label="إغلاق">×</button></div>
      <p id="adminActionDescription" class="muted"></p>
      <div id="adminActionExtra"></div>
      <div class="form-field"><label class="required" for="adminActionReason">سبب الإجراء</label><textarea id="adminActionReason" required maxlength="600" placeholder="اكتب سببًا واضحًا يظهر في سجل التدقيق"></textarea></div>
      <div class="button-row mt-16"><button class="btn btn-primary" type="submit">تأكيد</button><button class="btn btn-light" type="button" data-close-dialog="adminActionDialog">إلغاء</button></div>
    </form>
  </dialog>

  <dialog id="adminUserDialog" class="dialog admin-dialog">
    <form id="adminUserForm" class="dialog-shell">
      <div class="dialog-head"><h2 id="adminUserDialogTitle">إضافة مستخدم</h2><button class="dialog-close" type="button" data-close-dialog="adminUserDialog" aria-label="إغلاق">×</button></div>
      <input id="adminUserId" type="hidden">
      <div class="form-grid two">
        <div class="form-field"><label class="required" for="newAdminName">الاسم</label><input id="newAdminName" required maxlength="100"></div>
        <div class="form-field"><label class="required" for="newAdminUsername">اسم المستخدم</label><input id="newAdminUsername" required minlength="4" maxlength="40" pattern="[A-Za-z0-9._-]+" dir="ltr"></div>
        <div class="form-field"><label class="required" for="newAdminRole">الدور</label><select id="newAdminRole" required></select></div>
        <div class="form-field"><label for="newAdminStatus">الحالة</label><select id="newAdminStatus"><option value="active">نشط</option><option value="disabled">معطل</option></select></div>
        <div class="form-field admin-user-password-field"><label class="required" for="newAdminPassword">كلمة مرور مؤقتة</label><input id="newAdminPassword" type="password" minlength="10" autocomplete="new-password" dir="ltr"></div>
      </div>
      <div class="button-row mt-16"><button class="btn btn-primary" type="submit">حفظ المستخدم</button><button class="btn btn-light" type="button" data-close-dialog="adminUserDialog">إلغاء</button></div>
    </form>
  </dialog>

  <script defer src="assets/config.js"></script>
  <script defer src="assets/automotive-data.js"></script>
  <script defer src="assets/storage.js"></script>
  <script defer src="assets/seed.js"></script>
  <script defer src="assets/matching-engine.js"></script>
  <script defer src="assets/lifecycle.js"></script>
  <script defer src="assets/common.js"></script>
  <script defer src="assets/admin-auth.js"></script>
  <script defer src="assets/admin-dashboard.js"></script>
</body>
</html>
```

## `assets/config.js`

```javascript
(() => {
  "use strict";
  window.WA = window.WA || {};

  WA.Config = Object.freeze({
    appName: "وين أوديها",
    dataVersion: 11,
    maxReferralsPerRequest: 3,
    administrativeCloseDays: 5,
    paymentThreshold: 100,
    paymentDueDays: 10,
    objectionWindowDays: 15,
    invoiceIssueDay: 1,
    serviceTypes: Object.freeze({
      problem: "مشكلة في السيارة",
      parts: "محل قطع غيار",
      tow: "سطحة عاجلة",
      maintenance: "صيانة دورية"
    }),
    partnerTypes: Object.freeze({
      workshop: "ورشة إصلاح وتشخيص",
      parts: "محل قطع غيار",
      tow: "مقدم خدمة سطحة",
      maintenance: "مركز صيانة دورية"
    }),
    storageKeys: Object.freeze([
      "wa_customers", "wa_vehicles", "wa_requests", "wa_partners",
      "wa_referrals", "wa_ratings", "wa_objections", "wa_discounts",
      "wa_fees", "wa_invoices", "wa_claims", "wa_payments",
      "wa_join_applications", "wa_consents", "wa_sessions",
      "wa_admin_users", "wa_admin_sessions", "wa_audit_logs", "wa_meta"
    ]),
    costBands: Object.freeze({
      under_50: Object.freeze({ label: "أقل من 50 ريالًا", fee: 0, min: 0, maxExclusive: 50 }),
      from_50_to_199: Object.freeze({ label: "من 50 إلى أقل من 200 ريال", fee: 5, min: 50, maxExclusive: 200 }),
      from_200_to_400: Object.freeze({ label: "من 200 إلى 400 ريال", fee: 10, min: 200, maxInclusive: 400 }),
      over_400: Object.freeze({ label: "أكثر من 400 ريال", fee: 25, minExclusive: 400 })
    }),
    referralStatuses: Object.freeze({
      registered: "مسجلة",
      shown: "ظهرت للعميل",
      whatsapp_opened: "تم فتح واتساب",
      no_contact: "لم يتواصل العميل",
      contacted_not_arrived: "تواصل ولم يصل",
      arrived: "وصل العميل",
      service_received: "تلقى العميل الخدمة",
      arrived_no_service: "وصل ولم يتلق الخدمة",
      service_not_received: "لم يتلق الخدمة",
      not_agreed: "لم يتم التفاهم",
      alternative_requested: "تم طلب بديل",
      cost_pending: "بانتظار فئة التكلفة",
      partner_cost_confirmation: "بانتظار تأكيد الشريك للتكلفة",
      cost_disputed: "اختلاف على فئة التكلفة",
      disputed: "معترض عليها",
      under_review: "تحت المراجعة",
      confirmed: "مؤكدة",
      closed: "مغلقة"
    }),
    requestStatuses: Object.freeze({
      draft: "مسودة",
      matching: "جاري المطابقة",
      no_match: "لا يوجد تطابق حاليًا",
      referred: "تم ترشيح شريك",
      awaiting_result: "بانتظار نتيجة الإحالة",
      service_received: "تم تلقي الخدمة",
      alternative_requested: "تم طلب شريك بديل",
      cost_pending: "بانتظار فئة تكلفة الخدمة",
      rated: "تم التقييم",
      administratively_closed: "مغلق إداريًا",
      finally_closed: "مغلق نهائيًا"
    })
  });
})();
```

## `assets/storage.js`

```javascript
(() => {
  "use strict";
  window.WA = window.WA || {};

  const memory = new Map();
  const arrayKeys = new Set(WA.Config.storageKeys.filter((key) => key !== "wa_meta"));
  const now = () => new Date().toISOString();
  const deepClone = (value) => JSON.parse(JSON.stringify(value));

  const sanitizeText = (value, max = 500) => String(value ?? "")
    .replace(/[<>`]/g, "")
    .replace(/[\u0000-\u001F\u007F]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max);

  const sanitizePhone = (value) => {
    const digits = String(value ?? "").replace(/\D/g, "");
    if (/^05\d{8}$/.test(digits)) return digits;
    if (/^9665\d{8}$/.test(digits)) return `0${digits.slice(3)}`;
    if (/^5\d{8}$/.test(digits)) return `0${digits}`;
    return digits.slice(0, 10);
  };

  const normalizeWhatsapp = (value) => {
    const phone = sanitizePhone(value);
    if (/^05\d{8}$/.test(phone)) return `966${phone.slice(1)}`;
    const digits = String(value ?? "").replace(/\D/g, "");
    return /^9665\d{8}$/.test(digits) ? digits : "";
  };

  const parse = (raw, fallback) => {
    try { return raw == null ? fallback : JSON.parse(raw); }
    catch (_) { return fallback; }
  };

  const rawGet = (key) => {
    try { return localStorage.getItem(key); }
    catch (_) { return memory.has(key) ? memory.get(key) : null; }
  };

  const rawSet = (key, value) => {
    const serialized = JSON.stringify(value);
    try { localStorage.setItem(key, serialized); }
    catch (_) { memory.set(key, serialized); }
    return value;
  };

  const get = (key) => {
    const fallback = arrayKeys.has(key) ? [] : {};
    const value = parse(rawGet(key), fallback);
    if (arrayKeys.has(key)) return Array.isArray(value) ? value : [];
    return value && typeof value === "object" && !Array.isArray(value) ? value : {};
  };

  const set = (key, value) => rawSet(key, value);

  const normalizeRecord = (record) => {
    if (!record || typeof record !== "object" || Array.isArray(record)) return record;
    const copy = {};
    Object.entries(record).forEach(([key, value]) => {
      if (typeof value === "string") copy[key] = sanitizeText(value, key.toLowerCase().includes("url") ? 1200 : 2500);
      else if (Array.isArray(value)) copy[key] = value.map((item) => typeof item === "string" ? sanitizeText(item, 600) : normalizeRecord(item));
      else if (value && typeof value === "object") copy[key] = normalizeRecord(value);
      else copy[key] = value;
    });
    return copy;
  };

  const createId = (prefix) => `${prefix}-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 7).toUpperCase()}`;

  const randomToken = (prefix = "tok") => {
    const bytes = new Uint8Array(16);
    if (window.crypto?.getRandomValues) window.crypto.getRandomValues(bytes);
    else for (let index = 0; index < bytes.length; index += 1) bytes[index] = Math.floor(Math.random() * 256);
    return `${prefix}_${Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("")}`;
  };

  const upsert = (key, record, identity = "id") => {
    if (!arrayKeys.has(key)) throw new Error(`المفتاح ${key} ليس جدولًا`);
    const rows = get(key);
    const clean = normalizeRecord(record);
    const timestamp = now();
    const index = rows.findIndex((row) => row?.[identity] === clean?.[identity]);
    if (index >= 0) rows[index] = { ...rows[index], ...clean, updatedAt: timestamp };
    else rows.push({ ...clean, createdAt: clean.createdAt || timestamp, updatedAt: timestamp });
    set(key, rows);
    return deepClone(index >= 0 ? rows[index] : rows[rows.length - 1]);
  };

  const insertUnique = (key, record, uniqueFields = ["id"]) => {
    const duplicate = get(key).find((row) => uniqueFields.every((field) => row?.[field] === record?.[field]));
    return duplicate ? deepClone(duplicate) : upsert(key, record);
  };

  const remove = (key, predicate) => {
    const rows = get(key);
    const next = rows.filter((row) => !predicate(row));
    set(key, next);
    return rows.length - next.length;
  };

  const findById = (key, id) => get(key).find((row) => row?.id === id) || null;

  const transaction = (callback) => {
    const snapshot = {};
    WA.Config.storageKeys.forEach((key) => { snapshot[key] = rawGet(key); });
    try { return callback(); }
    catch (error) {
      Object.entries(snapshot).forEach(([key, value]) => {
        if (value === null) {
          try { localStorage.removeItem(key); } catch (_) { memory.delete(key); }
        } else {
          try { localStorage.setItem(key, value); } catch (_) { memory.set(key, value); }
        }
      });
      throw error;
    }
  };

  const ensureKeys = () => WA.Config.storageKeys.forEach((key) => {
    if (rawGet(key) === null) set(key, arrayKeys.has(key) ? [] : {});
  });

  const migrateLegacy = () => {
    const meta = get("wa_meta");
    const currentVersion = Number(meta.dataVersion || 0);
    if (currentVersion >= WA.Config.dataVersion) return;

    const requests = get("wa_requests").map((request) => ({
      ...request,
      publicToken: request.publicToken || randomToken("req"),
      humanId: request.humanId || request.id,
      region: request.region || WA.Automotive.getRegionForCity(request.city),
      status: request.status || "referred",
      lastActivityAt: request.lastActivityAt || request.updatedAt || request.createdAt || now()
    }));

    const referrals = get("wa_referrals").map((referral) => ({
      ...referral,
      partnerId: referral.partnerId || referral.workshopId || "",
      order: referral.order || 1,
      status: referral.status || "registered",
      serviceReceivedAt: referral.serviceReceivedAt || (referral.intakeStartedAt ? referral.intakeStartedAt : ""),
      costBand: referral.costBand || "",
      costSource: referral.costSource || "",
      costPartnerConfirmedAt: referral.costPartnerConfirmedAt || ""
    }));

    const partners = get("wa_partners").map((partner) => ({
      ...partner,
      type: partner.type || "workshop",
      region: partner.region || WA.Automotive.getRegionForCity(partner.city),
      coverageCities: partner.coverageCities?.length ? partner.coverageCities : (partner.city ? [partner.city] : []),
      specialtiesPriority: partner.specialtiesPriority || partner.specialties || [],
      makesPriority: partner.makesPriority || partner.servedMakes || [],
      fuelTypes: partner.fuelTypes || ["بنزين"],
      partnershipStatus: partner.partnershipStatus || "active",
      paymentStatus: partner.paymentStatus || "current",
      isDemo: typeof partner.isDemo === "boolean" ? partner.isDemo : true
    }));

    const discounts = get("wa_discounts").map((discount) => ({
      ...discount,
      scope: discount.scope || ((discount.includedServices || []).some((item) => item === "جميع الخدمات") ? "all" : "selected"),
      includedServices: discount.includedServices || [],
      continuousUntilStopped: discount.continuousUntilStopped !== false,
      endsAt: discount.continuousUntilStopped === false ? (discount.endsAt || "") : ""
    }));

    const legacyClaims = get("wa_claims");
    if (!get("wa_invoices").length && legacyClaims.length) {
      set("wa_invoices", legacyClaims.map((claim) => ({
        ...claim,
        number: claim.number || claim.id,
        issueReason: claim.reason || "legacy_migration",
        objectionDeadline: claim.objectionDeadline || "",
        legacyMigrated: true
      })));
    }

    set("wa_requests", requests);
    set("wa_referrals", referrals);
    set("wa_partners", partners);
    set("wa_discounts", discounts);
    set("wa_meta", { ...meta, dataVersion: WA.Config.dataVersion, migratedAt: now(), updatedAt: now() });
  };

  const integrityCheck = () => {
    const issues = [];
    const ids = (key) => new Set(get(key).map((row) => row.id));
    const customers = ids("wa_customers");
    const vehicles = ids("wa_vehicles");
    const requests = ids("wa_requests");
    const partners = ids("wa_partners");
    const referrals = ids("wa_referrals");
    const invoices = ids("wa_invoices");

    get("wa_vehicles").forEach((row) => { if (!customers.has(row.customerId)) issues.push(`المركبة ${row.id} مرتبطة بعميل غير موجود`); });
    get("wa_requests").forEach((row) => {
      if (!customers.has(row.customerId)) issues.push(`الطلب ${row.id} مرتبط بعميل غير موجود`);
      if (!vehicles.has(row.vehicleId)) issues.push(`الطلب ${row.id} مرتبط بمركبة غير موجودة`);
    });
    get("wa_referrals").forEach((row) => {
      if (!requests.has(row.requestId)) issues.push(`الإحالة ${row.id} مرتبطة بطلب غير موجود`);
      if (!partners.has(row.partnerId)) issues.push(`الإحالة ${row.id} مرتبطة بشريك غير موجود`);
    });
    get("wa_ratings").forEach((row) => { if (!referrals.has(row.referralId)) issues.push(`التقييم ${row.id} مرتبط بإحالة غير موجودة`); });
    get("wa_fees").forEach((row) => {
      if (!referrals.has(row.referralId)) issues.push(`الرسم ${row.id} مرتبط بإحالة غير موجودة`);
      if (!partners.has(row.partnerId)) issues.push(`الرسم ${row.id} مرتبط بشريك غير موجود`);
    });
    get("wa_payments").forEach((row) => { if (row.invoiceId && !invoices.has(row.invoiceId)) issues.push(`الدفعة ${row.id} مرتبطة بفاتورة غير موجودة`); });
    const adminUsers = ids("wa_admin_users");
    get("wa_admin_sessions").forEach((row) => { if (!adminUsers.has(row.userId)) issues.push(`جلسة الإدارة ${row.id} مرتبطة بمستخدم غير موجود`); });
    get("wa_audit_logs").forEach((row) => { if (row.userId && !adminUsers.has(row.userId)) issues.push(`سجل التدقيق ${row.id} مرتبط بمستخدم غير موجود`); });
    return issues;
  };

  const init = () => {
    ensureKeys();
    migrateLegacy();
    const meta = get("wa_meta");
    set("wa_meta", { ...meta, dataVersion: WA.Config.dataVersion, initializedAt: meta.initializedAt || now(), updatedAt: now() });
  };

  WA.Storage = { init, get, set, upsert, insertUnique, remove, findById, transaction, createId, randomToken, sanitizeText, sanitizePhone, normalizeWhatsapp, deepClone, now, integrityCheck };
})();
```

## `assets/common.js`

```javascript
(() => {
  "use strict";
  window.WA = window.WA || {};

  const escapeHtml = (value) => String(value ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\"/g, "&quot;").replace(/'/g, "&#039;");
  const qs = (selector, root = document) => root.querySelector(selector);
  const qsa = (selector, root = document) => [...root.querySelectorAll(selector)];
  const formatDate = (value, options = {}) => {
    if (!value) return "—";
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "—";
    return new Intl.DateTimeFormat("ar-SA", { dateStyle: "medium", timeStyle: options.time === false ? undefined : "short" }).format(date);
  };
  const formatMoney = (value) => `${Number(value || 0).toLocaleString("ar-SA")} ر.س`;
  const serviceLabel = (type) => WA.Config.serviceTypes[type] || type;
  const statusLabel = (status, source = "request") => source === "referral" ? (WA.Config.referralStatuses[status] || status) : (WA.Config.requestStatuses[status] || status);

  const pageGuidance = {
    "index.html": "اختر الخدمة التي تناسب احتياجك، وسنظهر لك الحقول المطلوبة فقط.",
    "customer.html": "أكمل الخطوات الظاهرة، وسيُحفظ تقدمك تلقائيًا على هذا الجهاز.",
    "track.html": "تابع حالة طلبك، وتواصل مع الشريك، واطلب بديلًا أو قيّم الخدمة من الصفحة نفسها.",
    "join.html": "اختر نوع نشاطك بدقة لتظهر لك المتطلبات المرتبطة بخدماتك فقط.",
    "join-status.html": "استخدم رقم طلب الانضمام ورقم الجوال للاطلاع على آخر تحديث.",
    "workshop-login.html": "أدخل بيانات الشريك التي زودتك بها المنصة للوصول إلى لوحة الإدارة.",
    "workshop-dashboard.html": "حدّث الإحالات والخدمات والخصومات والفواتير أولًا بأول للحفاظ على دقة الحساب.",
    "payment.html": "راجع تفاصيل الفاتورة وطريقة السداد قبل تأكيد العملية.",
    "receipt.html": "احتفظ بالإيصال أو اطبعه، ويمكنك الرجوع إلى لوحة الشريك في أي وقت.",
    "privacy.html": "تعرف على البيانات التي نستخدمها لتشغيل الطلب وحماية حقوقك.",
    "terms.html": "توضح الشروط دور المنصة ومسؤولية مقدم الخدمة وآلية الرسوم والاعتراضات.",
    "404.html": "استخدم الرئيسية أو متابعة الطلب للوصول إلى الصفحة الصحيحة.",
    "admin-login.html": "بوابة داخلية مخصصة لأعضاء فريق المشروع المصرح لهم فقط.",
    "admin-dashboard.html": "تعرض الأقسام والإجراءات وفق الدور والصلاحيات المسندة إلى المستخدم."
  };

  const iconPaths = {
    home: '<path d="M3.5 10.5 12 3l8.5 7.5"/><path d="M5.5 9.5V21h13V9.5"/><path d="M9.5 21v-6h5v6"/>',
    back: '<path d="m15 18-6-6 6-6"/><path d="M9 12h11"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    car: '<path d="M5 16h14l-1.5-6h-11L5 16Z"/><path d="M3 16h18v3H3z"/><circle cx="7" cy="19" r="1.5"/><circle cx="17" cy="19" r="1.5"/><path d="M7 10 9 6h6l2 4"/>',
    parts: '<path d="m14.7 6.3 3-3a4 4 0 0 1-5.2 5.2l-6.9 6.9a2 2 0 1 0 2.8 2.8l6.9-6.9a4 4 0 0 1 5.2-5.2l-3 3"/>',
    tow: '<path d="M3 6h11v10H3z"/><path d="M14 10h4l3 3v3h-7z"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/><path d="M7 6V3h4v3"/>',
    maintenance: '<path d="M14.7 6.3a4 4 0 0 1-5.2 5.2l-5.8 5.8a2 2 0 1 0 2.8 2.8l5.8-5.8a4 4 0 0 1 5.2-5.2l-2.8 2.8-2.6-2.6 2.6-3Z"/>',
    whatsapp: '<path d="M20 11.5a8 8 0 0 1-11.7 7.1L4 20l1.4-4.1A8 8 0 1 1 20 11.5Z"/><path d="M9 8.5c.4 2.4 2.1 4.1 4.5 4.8l1.2-1.1 1.8.8c-.4 1.5-1.4 2.2-2.8 2-3.5-.6-6.2-3.4-6.7-6.8-.2-1.3.5-2.4 2-2.8l.9 1.8L9 8.5Z"/>',
    copy: '<rect x="8" y="8" width="11" height="11" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/>',
    track: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    partner: '<circle cx="9" cy="8" r="3"/><path d="M3 20v-2a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v2"/><path d="M16 11a3 3 0 0 0 0-6M16 14a5 5 0 0 1 5 5v1"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    shield: '<path d="M12 3 4.5 6v5.5c0 4.5 3 7.5 7.5 9.5 4.5-2 7.5-5 7.5-9.5V6L12 3Z"/><path d="m8.5 12 2.2 2.2 4.8-5"/>',
    refresh: '<path d="M20 7v5h-5"/><path d="M18.5 16a8 8 0 1 1 1.1-8L20 12"/>',
    alert: '<path d="M12 3 2.8 20h18.4L12 3Z"/><path d="M12 9v5M12 17h.01"/>',
    invoice: '<path d="M6 3h9l3 3v15H6z"/><path d="M15 3v4h4M9 12h6M9 16h6M9 8h2"/>',
    payment: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h3"/>',
    print: '<path d="M7 9V3h10v6M7 17v4h10v-4"/><rect x="4" y="9" width="16" height="8" rx="2"/><path d="M16 13h1"/>',
    map: '<path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6Z"/><path d="M9 3v15M15 6v15"/>',
    location: '<path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
    link: '<path d="M10 13a5 5 0 0 0 7.5.5l2-2a5 5 0 0 0-7-7l-1.2 1.2"/><path d="M14 11a5 5 0 0 0-7.5-.5l-2 2a5 5 0 0 0 7 7l1.2-1.2"/>',
    lock: '<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
    phone: '<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
    money: '<rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M7 9H5v2M17 15h2v-2"/>',
    arrow: '<path d="M5 12h14M14 7l5 5-5 5"/>',
    close: '<path d="m6 6 12 12M18 6 6 18"/>',
    save: '<path d="M5 3h12l2 2v16H5z"/><path d="M8 3v6h8V3M8 21v-7h8v7"/>'
  };

  const iconSvg = (name) => `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">${iconPaths[name] || iconPaths.arrow}</svg>`;
  const inferIcon = (element) => {
    const text = element.textContent.trim();
    if (/واتساب/.test(text)) return "whatsapp";
    if (/نسخ/.test(text)) return "copy";
    if (/الرئيسية/.test(text)) return "home";
    if (/السابق|العودة/.test(text)) return "back";
    if (/متابعة|عرض الطلب|عرض الحالة/.test(text)) return "track";
    if (/موقع|الخريطة/.test(text)) return "location";
    if (/طباعة/.test(text)) return "print";
    if (/سداد|دفع/.test(text)) return "payment";
    if (/فاتورة|كشف/.test(text)) return "invoice";
    if (/اعتراض|تنبيه/.test(text)) return "alert";
    if (/بديل|أخرى/.test(text)) return "refresh";
    if (/إلغاء|إغلاق/.test(text)) return "close";
    if (/حفظ/.test(text)) return "save";
    if (/انضم|شريك|دخول/.test(text)) return "partner";
    if (/ابدأ|التالي|إرسال|تفعيل|تسجيل|فتح|ابحث|متابعة/.test(text)) return "arrow";
    return "";
  };

  const decorateIcons = (root = document) => {
    qsa("[data-icon], .btn, .utility-btn, .icon-action, .text-link, .nav-toggle", root).forEach((element) => {
      if (element.dataset.iconDecorated === "true") return;
      const name = element.dataset.icon || inferIcon(element);
      if (!name) return;
      const holder = document.createElement("span");
      holder.className = "ui-icon";
      holder.setAttribute("aria-hidden", "true");
      holder.innerHTML = iconSvg(name);
      element.prepend(holder);
      element.dataset.iconDecorated = "true";
    });
    qsa("[data-service-icon]", root).forEach((element) => {
      if (element.dataset.iconDecorated === "true") return;
      element.innerHTML = iconSvg(element.dataset.serviceIcon);
      element.dataset.iconDecorated = "true";
    });
    qsa(".card-icon[data-icon]", root).forEach((element) => {
      if (element.dataset.cardIconDecorated === "true") return;
      element.innerHTML = iconSvg(element.dataset.icon);
      element.dataset.cardIconDecorated = "true";
    });
  };

  const showToast = (message, type = "info") => {
    let region = qs("#toastRegion");
    if (!region) {
      region = document.createElement("div");
      region.id = "toastRegion";
      region.className = "toast-region";
      region.setAttribute("aria-live", "polite");
      document.body.appendChild(region);
    }
    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    region.appendChild(toast);
    setTimeout(() => toast.remove(), 3600);
  };

  const copyText = async (text) => {
    try { await navigator.clipboard.writeText(text); showToast("تم النسخ", "success"); return true; }
    catch (_) {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      const result = document.execCommand("copy");
      textarea.remove();
      showToast(result ? "تم النسخ" : "تعذر النسخ", result ? "success" : "error");
      return result;
    }
  };

  const whatsappUrl = (phone, message) => {
    const normalized = WA.Storage.normalizeWhatsapp(phone);
    return normalized ? `https://wa.me/${normalized}?text=${encodeURIComponent(message)}` : "";
  };

  const vehicleText = (vehicle) => `${vehicle.makeOther || vehicle.make} ${vehicle.modelOther || vehicle.model}${vehicle.year ? ` ${vehicle.year}` : ""}`.trim();
  const buildWhatsappMessage = ({ request, customer, vehicle }) => {
    const lines = ["السلام عليكم،", `معك ${customer.firstName}، وصلت إليكم عن طريق «وين أوديها» بخصوص الطلب رقم ${request.humanId}.`, "", `السيارة: ${vehicleText(vehicle)}.`];
    if (request.serviceType === "problem") lines.push(`الطلب: فحص مشكلة — ${request.problem}.`);
    if (request.serviceType === "parts") {
      if (vehicle.vin) lines.push(`رقم الهيكل: ${vehicle.vin}.`);
      lines.push(`القطعة المطلوبة: ${request.partName}.`, `النوع المفضل: ${request.partType}.`, "أرغب بالتأكد من التوفر والسعر والمطابقة للسيارة.");
    }
    if (request.serviceType === "tow") {
      lines.push(`موقع السيارة: ${request.preciseLocation}.`, `وصف المكان: ${request.placeDescription}.`, `حالة السيارة: ${request.vehicleMoves}.`);
      if (request.towDestination) lines.push(`الوجهة: ${request.towDestination}.`);
      lines.push("الطلب عاجل، وأرغب بالتنسيق معكم.");
    }
    if (request.serviceType === "maintenance") lines.push(`الخدمة المطلوبة: ${request.maintenanceService}.`, `نوع الوقود: ${vehicle.fuelType || "غير محدد"}.`, request.notes ? `ملاحظة: ${request.notes}.` : "", "أرغب بالتنسيق معكم.");
    if (request.serviceType === "problem") lines.push("", "أرغب بالتنسيق معكم.");
    return lines.filter(Boolean).join("\n");
  };

  const availabilityText = (partner) => partner.availability?.status === "verified"
    ? `تم تحديث قابلية الاستقبال بتاريخ ${formatDate(partner.availability.verifiedAt, { time: false })}. يرجى تأكيد الموعد عبر واتساب.`
    : (partner.availability?.note || "الشريك يستقبل عادةً هذا النوع من الطلبات، ويرجى التأكد من الموعد عبر واتساب.");

  const weekdayNames = ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"];
  const scheduleForToday = (partner) => {
    const item = (partner.schedule || []).find((row) => row.day === weekdayNames[new Date().getDay()]);
    if (!item) return partner.hours || "تأكد عبر واتساب";
    if (!item.open) return "مغلق اليوم";
    if (item.allDay) return "مفتوح 24 ساعة";
    const slots = [item.period1, item.period2].filter(Boolean).map((slot) => `${slot.from}–${slot.to}`);
    return slots.join("، ") || "تأكد عبر واتساب";
  };

  const renderStars = (rating) => {
    const rounded = Math.round(Number(rating || 0));
    return `<span class="stars" aria-label="${escapeHtml(rating)} من 5">${"★".repeat(rounded)}${"☆".repeat(Math.max(0, 5 - rounded))}</span>`;
  };

  const getRequestBundle = (request) => {
    if (!request) return null;
    const customer = WA.Storage.findById("wa_customers", request.customerId);
    const vehicle = WA.Storage.findById("wa_vehicles", request.vehicleId);
    const referrals = WA.Storage.get("wa_referrals").filter((row) => row.requestId === request.id).sort((a, b) => a.order - b.order);
    const activeReferral = referrals.find((row) => row.id === request.activeReferralId) || referrals[referrals.length - 1] || null;
    const partner = activeReferral ? WA.Storage.findById("wa_partners", activeReferral.partnerId) : null;
    const discount = partner ? WA.Matching?.getDiscount(partner.id) : null;
    return { request, customer, vehicle, referrals, activeReferral, partner, discount };
  };

  const renderPartnerCard = ({ partner, referral, discount, matchReason = "", compact = false }) => {
    if (!partner) return "";
    const ratingHtml = Number(partner.ratingCount || 0) > 0
      ? `${renderStars(partner.ratingOverall)}<strong>${escapeHtml(partner.ratingOverall)} / 5</strong><small>بناءً على ${escapeHtml(partner.ratingCount)} تقييمًا موثقًا</small>`
      : "<strong>شريك جديد</strong><small>لا توجد تقييمات كافية بعد</small>";
    const discountServices = discount?.scope === "all" ? "جميع الخدمات" : ((discount?.includedServices || []).join("، ") || "خدمات مختارة");
    const discountHtml = discount ? `<section class="discount-box"><strong>${escapeHtml(discount.title)}: ${escapeHtml(discount.percent)}%</strong><span>${escapeHtml(discountServices)}</span><small>${escapeHtml(discount.conditions || "")}${discount.continuousUntilStopped ? " — مستمر حتى يوقفه الشريك." : ` — حتى ${escapeHtml(discount.endsAt)}`}</small></section>` : "";
    const mapLink = partner.googleMapsUrl ? `<a class="text-link" data-icon="location" href="${escapeHtml(partner.googleMapsUrl)}" target="_blank" rel="noopener noreferrer">فتح الموقع على خرائط Google</a>` : "";
    return `<article class="partner-card ${compact ? "partner-card-compact" : ""}">
      <div class="partner-head"><div><span class="pill">${escapeHtml(WA.Config.partnerTypes[partner.type] || partner.type)}</span><h2>${escapeHtml(partner.name)}</h2><p>${escapeHtml(partner.region || "")} — ${escapeHtml(partner.city)} — ${escapeHtml(partner.address || partner.exactLocation || "")}</p>${mapLink}</div><div class="rating-block">${ratingHtml}</div></div>
      <div class="partner-metrics"><div><span>عدالة الأسعار</span><strong>${escapeHtml(partner.fairnessRating || "—")} / 5</strong><small>${escapeHtml(partner.fairnessCount || 0)} تقييمًا موثقًا</small></div><div><span>الالتزام</span><strong>${escapeHtml(partner.commitment || "—")}</strong><small>مستوى الالتزام المسجل</small></div><div><span>ساعات اليوم</span><strong>${escapeHtml(scheduleForToday(partner))}</strong><small>أكد الموعد عبر واتساب</small></div></div>
      <div class="info-panel"><strong>لماذا رُشح لك؟</strong><p>${escapeHtml(matchReason || referral?.matchReason || "يناسب نوع الخدمة والمدينة المسجلة في طلبك.")}</p></div>
      <div class="info-panel muted"><strong>الاستقبال</strong><p>${escapeHtml(availabilityText(partner))}</p></div>${discountHtml}
    </article>`;
  };

  const injectLayout = () => {
    qsa("[data-unified-header]").forEach((header) => {
      const toggle = qs(".nav-toggle", header);
      const nav = qs(".main-nav", header);
      if (!toggle || !nav) return;

      const closeMenu = () => {
        toggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("open");
      };

      toggle.addEventListener("click", () => {
        const open = toggle.getAttribute("aria-expanded") === "true";
        toggle.setAttribute("aria-expanded", String(!open));
        nav.classList.toggle("open", !open);
        toggle.setAttribute("aria-label", open ? "فتح قائمة التنقل" : "إغلاق قائمة التنقل");
      });

      nav.addEventListener("click", (event) => {
        if (event.target.closest("a")) closeMenu();
      });

      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
          closeMenu();
          toggle.focus();
        }
      });

      document.addEventListener("click", (event) => {
        if (!header.contains(event.target)) closeMenu();
      });
    });
  };

  const initSelect = (select, options, placeholder = "اختر") => { if (select) select.innerHTML = `<option value="">${escapeHtml(placeholder)}</option>${options.map((option) => `<option value="${escapeHtml(option)}">${escapeHtml(option)}</option>`).join("")}`; };
  const setButtonBusy = (button, busy, text = "جاري التنفيذ...") => { if (!button) return; if (busy) { button.dataset.originalText = button.textContent; button.textContent = text; button.disabled = true; button.setAttribute("aria-busy", "true"); } else { button.textContent = button.dataset.originalText || button.textContent; button.disabled = false; button.removeAttribute("aria-busy"); delete button.dataset.iconDecorated; decorateIcons(button.parentElement || document); } };
  const setActiveNav = () => {
    const page = location.pathname.split("/").pop() || "index.html";
    qsa(".main-nav a, .unified-footer-nav a").forEach((link) => {
      const target = (link.getAttribute("href") || "").split("?")[0].split("#")[0];
      if (target === page) link.setAttribute("aria-current", "page");
    });
  };
  const init = () => {
    WA.Storage.init();
    WA.Seed.run();
    WA.Lifecycle.runSweep();
    injectLayout();
    setActiveNav();
    decorateIcons();
    const observer = new MutationObserver((mutations) => mutations.forEach((mutation) => mutation.addedNodes.forEach((node) => { if (node.nodeType === Node.ELEMENT_NODE) decorateIcons(node); })));
    observer.observe(document.body, { childList: true, subtree: true });
    document.documentElement.classList.add("js");
    document.body.classList.add("page-ready");
  };

  WA.UI = { qs, qsa, escapeHtml, formatDate, formatMoney, serviceLabel, statusLabel, showToast, copyText, whatsappUrl, buildWhatsappMessage, availabilityText, renderStars, renderPartnerCard, getRequestBundle, initSelect, setButtonBusy, vehicleText, scheduleForToday, decorateIcons, iconSvg };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true }); else init();
})();
```

## `assets/styles.css`

```css
:root {
  --navy-950: #071426;
  --navy-900: #0b1d33;
  --navy-800: #12304f;
  --blue-600: #1769aa;
  --teal-600: #0a7d72;
  --teal-500: #0f9487;
  --teal-100: #dff6f2;
  --amber-600: #a65c00;
  --amber-100: #fff2d8;
  --red-700: #a1242d;
  --red-100: #fde9eb;
  --green-700: #146c43;
  --green-100: #e4f7ed;
  --slate-900: #172033;
  --slate-700: #405069;
  --slate-600: #59677d;
  --slate-400: #95a0b2;
  --slate-300: #c7cfda;
  --slate-200: #e2e7ee;
  --slate-100: #f1f4f8;
  --white: #fff;
  --surface: #fff;
  --page: #f6f8fb;
  --radius-sm: 10px;
  --radius: 16px;
  --radius-lg: 24px;
  --shadow-sm: 0 8px 24px rgba(7, 20, 38, .07);
  --shadow: 0 18px 50px rgba(7, 20, 38, .11);
  --focus: 0 0 0 3px rgba(23, 105, 170, .28);
  --container: 1180px;
  font-family: Tahoma, Arial, "Segoe UI", sans-serif;
  color-scheme: light;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  background: var(--page);
  color: var(--slate-900);
  font-family: inherit;
  line-height: 1.75;
  text-align: right;
  -webkit-font-smoothing: antialiased;
}
img, svg { max-width: 100%; }
a { color: inherit; text-decoration: none; }
button, input, select, textarea { font: inherit; }
button, a, input, select, textarea, summary { -webkit-tap-highlight-color: transparent; }
button { cursor: pointer; }
[hidden] { display: none !important; }

:focus-visible { outline: none; box-shadow: var(--focus); }
.skip-link {
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 9999;
  transform: translateY(-150%);
  background: var(--white);
  color: var(--navy-900);
  padding: 10px 14px;
  border-radius: 8px;
  font-weight: 800;
}
.skip-link:focus { transform: translateY(0); }

.container { width: min(calc(100% - 32px), var(--container)); margin-inline: auto; }
.section { padding: 56px 0; }
.section.alt { background: var(--white); }
.section-head { max-width: 720px; margin-bottom: 28px; }
.section-head.center { text-align: center; margin-inline: auto; }
.section-head h1, .section-head h2 { margin: 6px 0 8px; line-height: 1.35; }
.section-head p { margin: 0; color: var(--slate-600); }
.kicker, .eyebrow { color: var(--teal-600); font-size: .88rem; font-weight: 800; letter-spacing: .01em; }
.muted { color: var(--slate-600); }
.small { font-size: .88rem; }
.mt-8 { margin-top: 8px; }
.mt-16 { margin-top: 16px; }
.mt-24 { margin-top: 24px; }
.mb-0 { margin-bottom: 0; }
.text-center { text-align: center; }

.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, .96);
  border-bottom: 1px solid var(--slate-200);
  backdrop-filter: blur(10px);
}
.nav-shell { min-height: 72px; display: flex; align-items: center; justify-content: space-between; gap: 16px; }
.brand { display: inline-flex; align-items: center; gap: 10px; min-width: max-content; }
.brand-mark {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border-radius: 13px;
  color: var(--white);
  background: linear-gradient(145deg, var(--teal-500), var(--navy-800));
  font-weight: 900;
  font-size: 1.2rem;
  box-shadow: 0 9px 22px rgba(10, 125, 114, .2);
}
.brand span:last-child { display: grid; line-height: 1.35; }
.brand strong { font-size: 1rem; }
.brand small { color: var(--slate-600); font-size: .72rem; }
.nav-toggle {
  border: 1px solid var(--slate-300);
  border-radius: 10px;
  background: var(--white);
  padding: 8px 12px;
  color: var(--navy-900);
  font-weight: 800;
}
.main-nav {
  position: absolute;
  inset-inline: 16px;
  top: 74px;
  display: none;
  flex-direction: column;
  gap: 4px;
  padding: 12px;
  background: var(--white);
  border: 1px solid var(--slate-200);
  border-radius: 14px;
  box-shadow: var(--shadow);
}
.main-nav.open { display: flex; }
.main-nav a { padding: 10px 12px; border-radius: 9px; color: var(--slate-700); font-weight: 700; }
.main-nav a:hover, .main-nav a[aria-current="page"] { background: var(--teal-100); color: var(--teal-600); }

.hero {
  overflow: hidden;
  padding: 68px 0 54px;
  background:
    radial-gradient(circle at 8% 20%, rgba(15, 148, 135, .17), transparent 28%),
    radial-gradient(circle at 90% 70%, rgba(23, 105, 170, .15), transparent 30%),
    linear-gradient(160deg, #f7fbfc, #edf3f8);
}
.hero-grid { display: grid; gap: 34px; align-items: center; }
.hero h1 { margin: 10px 0 16px; font-size: clamp(2rem, 8vw, 4.3rem); line-height: 1.2; letter-spacing: -.04em; }
.hero h1 span { color: var(--teal-600); }
.hero p { max-width: 720px; color: var(--slate-600); font-size: 1.04rem; }
.hero-actions { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 24px; }
.hero-assurances { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 18px; }
.hero-assurances span { padding: 6px 10px; border-radius: 999px; background: rgba(255,255,255,.78); border: 1px solid var(--slate-200); color: var(--slate-700); font-size: .82rem; font-weight: 700; }
.hero-panel { background: rgba(255,255,255,.9); border: 1px solid rgba(255,255,255,.9); border-radius: var(--radius-lg); padding: 22px; box-shadow: var(--shadow); }
.hero-panel h2 { margin: 0 0 8px; }
.hero-panel .main-path-card { margin-top: 14px; }

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 46px;
  padding: 11px 18px;
  border: 1px solid transparent;
  border-radius: 12px;
  font-weight: 800;
  transition: transform .18s ease, box-shadow .18s ease, background .18s ease;
}
.btn:hover { transform: translateY(-1px); }
.btn:disabled { cursor: not-allowed; opacity: .55; transform: none; }
.btn-primary { background: var(--teal-600); color: var(--white); box-shadow: 0 11px 25px rgba(10,125,114,.22); }
.btn-primary:hover { background: #086d64; }
.btn-dark { background: var(--navy-900); color: var(--white); }
.btn-light { background: var(--white); color: var(--navy-900); border-color: var(--slate-300); }
.btn-danger { background: var(--red-700); color: var(--white); }
.btn-warning { background: var(--amber-600); color: var(--white); }
.btn-ghost { background: transparent; color: var(--navy-900); border-color: var(--slate-300); }
.btn-sm { min-height: 38px; padding: 7px 12px; border-radius: 9px; font-size: .88rem; }
.btn-block { width: 100%; }
.button-row { display: flex; flex-wrap: wrap; gap: 10px; align-items: center; }

.main-path-card, .service-card, .card {
  display: block;
  background: var(--surface);
  border: 1px solid var(--slate-200);
  border-radius: var(--radius);
  padding: 20px;
  box-shadow: var(--shadow-sm);
}
.main-path-card {
  border: 2px solid rgba(10,125,114,.32);
  background: linear-gradient(145deg, var(--white), #f0fbf9);
}
.main-path-card h2, .service-card h3, .card h3 { margin: 6px 0; }
.main-path-card p, .service-card p, .card p { margin: 0; color: var(--slate-600); }
.path-icon { display: grid; place-items: center; width: 46px; height: 46px; border-radius: 14px; background: var(--teal-100); color: var(--teal-600); font-size: 1.35rem; font-weight: 900; }
.other-services { display: grid; gap: 12px; margin-top: 14px; }
.service-card { transition: transform .18s ease, border-color .18s ease; }
.service-card:hover { transform: translateY(-2px); border-color: var(--teal-500); }
.demo-badge, .pill, .status-badge {
  display: inline-flex;
  align-items: center;
  width: fit-content;
  border-radius: 999px;
  padding: 4px 9px;
  font-size: .75rem;
  font-weight: 800;
}
.demo-badge { background: var(--amber-100); color: var(--amber-600); margin-bottom: 10px; }
.pill { background: var(--teal-100); color: var(--teal-600); }
.status-badge { background: var(--slate-100); color: var(--slate-700); }
.status-badge.success { background: var(--green-100); color: var(--green-700); }
.status-badge.warning { background: var(--amber-100); color: var(--amber-600); }
.status-badge.danger { background: var(--red-100); color: var(--red-700); }

.stats-grid, .cards-grid, .portal-grid, .metric-grid { display: grid; gap: 14px; }
.stats-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.stat-card { padding: 18px; background: var(--white); border: 1px solid var(--slate-200); border-radius: var(--radius); }
.stat-card strong { display: block; font-size: 1.5rem; color: var(--navy-900); }
.stat-card span { color: var(--slate-600); font-size: .88rem; }
.portal-grid .card { transition: transform .18s ease; }
.portal-grid .card:hover { transform: translateY(-3px); }

.flow-shell { padding: 28px 0 64px; }
.flow-layout { display: grid; gap: 20px; align-items: start; }
.flow-sidebar { background: var(--navy-900); color: var(--white); border-radius: var(--radius-lg); padding: 20px; }
.flow-sidebar h1 { margin: 0 0 6px; font-size: 1.35rem; }
.flow-sidebar p { margin: 0; color: #c5d1df; font-size: .9rem; }
.progress-wrap { margin-top: 18px; }
.progress-meta { display: flex; justify-content: space-between; gap: 10px; font-size: .8rem; color: #c5d1df; }
.progress-track { height: 8px; background: rgba(255,255,255,.13); border-radius: 99px; overflow: hidden; margin-top: 8px; }
.progress-bar { height: 100%; width: 0; background: linear-gradient(90deg, var(--teal-500), #45c9ba); border-radius: inherit; transition: width .3s ease; }
.flow-content { min-width: 0; }
.flow-screen { background: var(--white); border: 1px solid var(--slate-200); border-radius: var(--radius-lg); padding: 20px; box-shadow: var(--shadow-sm); }
.flow-screen:not(.active) { display: none; }
.flow-screen h2 { margin: 0 0 8px; line-height: 1.4; }
.flow-screen > p:first-of-type { margin-top: 0; color: var(--slate-600); }
.screen-actions { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 10px; margin-top: 24px; padding-top: 18px; border-top: 1px solid var(--slate-200); }
.service-choice-grid { display: grid; gap: 12px; margin-top: 20px; }
.service-choice {
  width: 100%;
  text-align: right;
  border: 1px solid var(--slate-200);
  background: var(--white);
  border-radius: var(--radius);
  padding: 18px;
  color: var(--slate-900);
}
.service-choice.primary { border: 2px solid var(--teal-500); background: #f3fbfa; }
.service-choice.selected { box-shadow: var(--focus); border-color: var(--blue-600); }
.service-choice strong { display: block; font-size: 1.05rem; }
.service-choice span { color: var(--slate-600); font-size: .88rem; }

.form-grid { display: grid; gap: 16px; }
.form-field { display: grid; gap: 7px; min-width: 0; }
.form-field label, .form-field legend { font-weight: 800; color: var(--slate-900); }
.required::after { content: " *"; color: var(--red-700); }
.form-field input, .form-field select, .form-field textarea {
  width: 100%;
  min-height: 47px;
  border: 1px solid var(--slate-300);
  border-radius: 11px;
  padding: 10px 12px;
  background: var(--white);
  color: var(--slate-900);
}
.form-field textarea { min-height: 120px; resize: vertical; }
.form-field input:focus, .form-field select:focus, .form-field textarea:focus { border-color: var(--blue-600); box-shadow: var(--focus); outline: 0; }
.field-hint { color: var(--slate-600); font-size: .82rem; }
.field-error { color: var(--red-700); font-size: .82rem; min-height: 1em; }
fieldset { margin: 0; padding: 0; border: 0; }
.checkbox-line, .radio-line { display: flex; align-items: flex-start; gap: 9px; }
.checkbox-line input, .radio-line input { width: 19px; height: 19px; margin-top: 3px; accent-color: var(--teal-600); }
.checkbox-stack { display: grid; gap: 10px; }
.inline-fields { display: grid; gap: 12px; }
.choice-grid { display: grid; gap: 10px; }
.choice-btn { border: 1px solid var(--slate-300); background: var(--white); color: var(--slate-900); border-radius: 11px; padding: 12px; font-weight: 700; }
.choice-btn.selected { border-color: var(--teal-600); background: var(--teal-100); color: var(--teal-600); }

.loading-shell { display: grid; place-items: center; min-height: 320px; text-align: center; }
.loader-ring { width: 58px; height: 58px; border: 5px solid var(--slate-200); border-top-color: var(--teal-600); border-radius: 50%; animation: spin .9s linear infinite; }
.loader-steps { display: grid; gap: 8px; margin-top: 20px; width: min(100%, 420px); }
.loader-step { display: flex; align-items: center; gap: 9px; text-align: right; padding: 9px 12px; border-radius: 9px; background: var(--slate-100); color: var(--slate-600); }
.loader-step.active { background: var(--teal-100); color: var(--teal-600); }
.loader-step.done::before { content: "✓"; font-weight: 900; color: var(--green-700); }
.skeleton { position: relative; overflow: hidden; background: var(--slate-200); border-radius: 8px; }
.skeleton::after { content: ""; position: absolute; inset: 0; transform: translateX(100%); background: linear-gradient(90deg, transparent, rgba(255,255,255,.55), transparent); animation: shimmer 1.2s infinite; }
.skeleton-line { height: 15px; margin-bottom: 10px; }
.skeleton-line.short { width: 58%; }

.guidance-grid { display: grid; gap: 12px; margin-top: 18px; }
.guidance-item { border: 1px solid var(--slate-200); border-radius: 13px; padding: 16px; background: #fbfcfe; }
.guidance-item span { display: block; color: var(--slate-600); font-size: .82rem; }
.guidance-item strong { display: block; margin-top: 4px; }
.danger-panel { border: 2px solid #d34a57; background: var(--red-100); color: #6e1219; border-radius: var(--radius); padding: 18px; }
.legal-note { margin-top: 16px; border-right: 4px solid var(--blue-600); background: #eef6fd; padding: 13px 15px; border-radius: 9px; color: var(--slate-700); font-size: .88rem; }
.info-panel { margin-top: 13px; border-right: 4px solid var(--teal-500); background: #f2faf9; padding: 13px 15px; border-radius: 9px; }
.info-panel.muted { border-color: var(--slate-400); background: var(--slate-100); }
.info-panel p { margin: 4px 0 0; color: var(--slate-700); }
.warning-panel { border-right: 4px solid var(--amber-600); background: var(--amber-100); padding: 14px; border-radius: 10px; }
.error-panel { border-right: 4px solid var(--red-700); background: var(--red-100); padding: 14px; border-radius: 10px; color: #6e1219; }
.success-panel { border-right: 4px solid var(--green-700); background: var(--green-100); padding: 14px; border-radius: 10px; color: #0d4f30; }

.partner-card { background: var(--white); border: 1px solid var(--slate-200); border-radius: var(--radius-lg); padding: 20px; box-shadow: var(--shadow-sm); }
.partner-head { display: grid; gap: 16px; border-bottom: 1px solid var(--slate-200); padding-bottom: 16px; }
.partner-head h2 { margin: 7px 0 2px; }
.partner-head p { margin: 0; color: var(--slate-600); }
.rating-block { display: grid; gap: 2px; }
.rating-block small { color: var(--slate-600); }
.stars { color: #d98b00; letter-spacing: 2px; white-space: nowrap; }
.partner-metrics { display: grid; gap: 10px; margin-top: 16px; }
.partner-metrics > div { border: 1px solid var(--slate-200); border-radius: 11px; padding: 12px; }
.partner-metrics span, .partner-metrics small { display: block; color: var(--slate-600); font-size: .8rem; }
.partner-metrics strong { display: block; margin: 2px 0; }
.discount-box { display: grid; gap: 5px; margin-top: 14px; border: 1px dashed var(--teal-600); background: var(--teal-100); border-radius: 12px; padding: 14px; }
.discount-box small { color: var(--slate-700); }

.request-header { background: var(--navy-900); color: var(--white); border-radius: var(--radius-lg); padding: 22px; margin-bottom: 18px; }
.request-header h1 { margin: 3px 0; }
.request-header p { margin: 0; color: #c5d1df; }
.request-meta { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 14px; }
.request-meta span { background: rgba(255,255,255,.1); padding: 6px 10px; border-radius: 999px; font-size: .8rem; }
.timeline { display: grid; gap: 0; }
.timeline-item { display: grid; grid-template-columns: 24px 1fr; gap: 10px; position: relative; padding-bottom: 18px; }
.timeline-item:not(:last-child)::before { content: ""; position: absolute; right: 11px; top: 22px; bottom: 0; width: 2px; background: var(--slate-200); }
.timeline-dot { width: 24px; height: 24px; border-radius: 50%; background: var(--teal-100); color: var(--teal-600); display: grid; place-items: center; font-size: .72rem; font-weight: 900; z-index: 1; }
.timeline-body { border: 1px solid var(--slate-200); border-radius: 11px; padding: 12px; background: var(--white); }
.timeline-body strong { display: block; }
.timeline-body small { color: var(--slate-600); }

.tabs { display: flex; gap: 7px; overflow-x: auto; padding-bottom: 7px; margin-bottom: 18px; scrollbar-width: thin; }
.tab-btn { min-width: max-content; border: 1px solid var(--slate-300); background: var(--white); border-radius: 999px; padding: 8px 13px; color: var(--slate-700); font-weight: 800; }
.tab-btn.active { background: var(--navy-900); color: var(--white); border-color: var(--navy-900); }
.tab-panel:not(.active) { display: none; }
.dashboard-grid { display: grid; gap: 18px; }
.table-wrap { overflow-x: auto; border: 1px solid var(--slate-200); border-radius: var(--radius); background: var(--white); }
table { width: 100%; border-collapse: collapse; min-width: 760px; }
th, td { padding: 12px 13px; border-bottom: 1px solid var(--slate-200); text-align: right; vertical-align: top; }
th { background: var(--slate-100); color: var(--slate-700); font-size: .84rem; }
td { font-size: .9rem; }
.table-actions { display: flex; flex-wrap: wrap; gap: 6px; }
.empty-state { text-align: center; padding: 38px 18px; border: 1px dashed var(--slate-300); border-radius: var(--radius); background: var(--white); }
.empty-state h2, .empty-state h3 { margin: 8px 0; }
.empty-state p { color: var(--slate-600); }

.dialog {
  width: min(calc(100% - 28px), 620px);
  border: 0;
  border-radius: var(--radius-lg);
  padding: 0;
  box-shadow: 0 28px 80px rgba(0,0,0,.25);
}
.dialog::backdrop { background: rgba(7,20,38,.65); }
.dialog-shell { padding: 20px; }
.dialog-head { display: flex; justify-content: space-between; gap: 12px; align-items: start; margin-bottom: 14px; }
.dialog-head h2 { margin: 0; }
.dialog-close { width: 38px; height: 38px; border-radius: 50%; border: 1px solid var(--slate-300); background: var(--white); }

.toast-region { position: fixed; bottom: 16px; inset-inline: 16px; z-index: 2000; display: grid; gap: 8px; pointer-events: none; }
.toast { max-width: 520px; margin-inline: auto; padding: 12px 15px; border-radius: 11px; background: var(--navy-900); color: var(--white); box-shadow: var(--shadow); pointer-events: auto; }
.toast-success { background: var(--green-700); }
.toast-error { background: var(--red-700); }

.site-footer { background: var(--navy-950); color: var(--white); padding: 46px 0 18px; }
.footer-grid { display: grid; gap: 24px; }
.footer-grid > div { display: grid; align-content: start; gap: 7px; }
.footer-grid p, .footer-grid a, .footer-grid small { color: #b8c6d8; }
.footer-grid a:hover { color: var(--white); }
.footer-bottom { margin-top: 28px; padding-top: 16px; border-top: 1px solid rgba(255,255,255,.12); display: flex; flex-wrap: wrap; justify-content: space-between; gap: 10px; color: #9fb0c5; font-size: .8rem; }
.footer-brand .brand-mark { width: 38px; height: 38px; }
.noscript-banner { background: var(--red-700); color: var(--white); padding: 10px; text-align: center; font-weight: 800; }

.receipt { max-width: 760px; margin-inline: auto; background: var(--white); border: 1px solid var(--slate-200); border-radius: var(--radius-lg); padding: 24px; box-shadow: var(--shadow-sm); }
.receipt-head { display: flex; justify-content: space-between; gap: 15px; border-bottom: 1px solid var(--slate-200); padding-bottom: 14px; }
.receipt-row { display: flex; justify-content: space-between; gap: 14px; padding: 11px 0; border-bottom: 1px dashed var(--slate-200); }
.receipt-total { font-size: 1.25rem; font-weight: 900; }

@keyframes spin { to { transform: rotate(360deg); } }
@keyframes shimmer { to { transform: translateX(-100%); } }

@media (min-width: 680px) {
  .other-services, .service-choice-grid, .cards-grid, .portal-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .service-choice-grid .service-choice.primary { grid-column: 1 / -1; }
  .form-grid.two, .inline-fields { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .choice-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .guidance-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .partner-head { grid-template-columns: 1fr auto; }
  .partner-metrics { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .stats-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
  .footer-grid { grid-template-columns: 1.6fr 1fr 1fr; }
  .toast-region { right: auto; left: 18px; width: 420px; }
}

@media (min-width: 900px) {
  .nav-toggle { display: none; }
  .main-nav { position: static; display: flex; flex-direction: row; padding: 0; border: 0; box-shadow: none; background: transparent; }
  .hero-grid { grid-template-columns: 1.15fr .85fr; }
  .flow-layout { grid-template-columns: 270px minmax(0, 1fr); }
  .flow-sidebar { position: sticky; top: 92px; }
  .flow-screen { padding: 30px; }
  .dashboard-grid.two { grid-template-columns: 1.25fr .75fr; }
}

@media print {
  .site-header, .site-footer, .btn, .screen-actions, .no-print { display: none !important; }
  body { background: var(--white); }
  .receipt, .card, .partner-card { box-shadow: none; border-color: #aaa; }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { scroll-behavior: auto !important; animation-duration: .01ms !important; animation-iteration-count: 1 !important; transition-duration: .01ms !important; }
}

/* تشغيل المسارات الجديدة ونموذج الشريك */
.error-text { min-height: 1.25em; margin: 5px 0 0; color: var(--red-700); font-size: .82rem; font-weight: 700; }
.urgent-choice { border-color: #d34a57 !important; background: linear-gradient(145deg, #fff, var(--red-100)); }
.urgent-choice .path-icon { background: var(--red-100); color: var(--red-700); }
.urgent-panel { border: 2px solid #d34a57; background: var(--red-100); color: #6e1219; border-radius: var(--radius); padding: 16px; }
.location-capture { display: grid; gap: 10px; padding: 14px; border: 1px dashed var(--teal-600); border-radius: 12px; background: var(--teal-100); }
.location-capture strong, .location-capture small { display: block; }
.location-capture small { color: var(--slate-700); }
.sticky-action-card { position: sticky; bottom: max(10px, env(safe-area-inset-bottom)); z-index: 20; padding: 12px; background: rgba(255,255,255,.94); border: 1px solid var(--slate-200); border-radius: 14px; box-shadow: 0 10px 35px rgba(7,31,58,.15); backdrop-filter: blur(10px); }
.cost-confirmation { display: grid; gap: 10px; padding: 15px; border: 1px solid var(--slate-200); border-radius: 12px; background: var(--slate-100); }
.action-align { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
.vertical { flex-direction: column; align-items: stretch; }
.day-picker { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 8px; }
.day-chip { position: relative; display: flex; align-items: center; justify-content: center; min-height: 48px; padding: 9px 12px; border: 1px solid var(--slate-300); border-radius: 11px; background: var(--white); cursor: pointer; font-weight: 800; }
.day-chip input { position: absolute; opacity: 0; pointer-events: none; }
.day-chip:has(input:checked) { border-color: var(--teal-600); background: var(--teal-100); color: var(--navy-900); box-shadow: inset 0 0 0 1px var(--teal-600); }
.day-chip:focus-within { outline: 3px solid rgba(26,148,137,.25); outline-offset: 2px; }
.priority-selector { display: grid; gap: 14px; }
.selector-list, .selected-priority-list { display: grid; gap: 8px; min-height: 120px; padding: 10px; border: 1px solid var(--slate-300); border-radius: 12px; background: var(--white); }
.selector-item { display: flex; align-items: center; justify-content: space-between; gap: 10px; padding: 10px 12px; border: 1px solid var(--slate-200); border-radius: 10px; background: var(--slate-100); }
.selector-item button { flex: 0 0 auto; }
.selected-priority-list { counter-reset: priority; background: #f7fbfb; }
.selected-priority-list .selector-item { counter-increment: priority; border-color: #b8ddd8; background: var(--white); }
.selected-priority-list .selector-item::before { content: counter(priority); width: 25px; height: 25px; display: grid; place-items: center; border-radius: 50%; background: var(--navy-900); color: var(--white); font-size: .75rem; font-weight: 900; }
.priority-actions { display: flex; gap: 5px; margin-inline-start: auto; }
.checkbox-grid { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 8px; }
.honesty-pledge { padding: 15px; border: 2px solid var(--navy-900); border-radius: 12px; background: #f8fbff; line-height: 1.9; }
.fee-policy-box { display: grid; gap: 7px; padding: 15px; border-radius: 12px; background: var(--navy-900); color: var(--white); }
.fee-policy-box strong { font-size: 1.02rem; }
.fee-policy-box small { color: #c4d1e0; }

@media (min-width: 680px) {
  .day-picker { grid-template-columns: repeat(4, minmax(0,1fr)); }
  .priority-selector { grid-template-columns: 1fr 1fr; }
  .checkbox-grid { grid-template-columns: repeat(3,minmax(0,1fr)); }
}

@media (max-width: 679px) {
  .sticky-action-card .btn, .sticky-action-card a.btn { width: 100%; }
  .selector-item { align-items: flex-start; }
  .priority-actions { margin-inline-start: 0; }
}

/* تحسينات التنقل والترتيب البصري والنماذج المخصصة */
body { animation: page-enter .22s ease both; }
@keyframes page-enter { from { opacity: .01; transform: translateY(4px); } to { opacity: 1; transform: none; } }
.utility-strip { border-bottom: 1px solid var(--slate-200); background: #f8fafc; }
.utility-actions { min-height: 38px; display: flex; align-items: center; justify-content: flex-start; gap: 8px; }
.utility-btn { display: inline-flex; align-items: center; gap: 6px; min-height: 32px; padding: 5px 10px; border: 0; border-radius: 9px; background: transparent; color: var(--navy-800); font-weight: 800; font-size: .82rem; }
.utility-btn:hover { background: var(--teal-100); color: var(--teal-600); }
.page-guidance { display: grid; grid-template-columns: auto 1fr; gap: 12px; align-items: start; margin-bottom: 26px; padding: 15px 17px; border: 1px solid rgba(255,255,255,.14); border-radius: var(--radius); background: rgba(255,255,255,.06); }
.page-guidance strong { color: #d9fff9; }
.page-guidance p { margin: 0; color: #c3d0df; }
.light-kicker { color: #8de1d6; }
.section-head.compact { margin-bottom: 14px; }
.section-head.compact h3 { margin: 0 0 4px; }
.activity-block { padding: 18px; border: 1px solid var(--slate-200); border-radius: var(--radius); background: #fbfcfe; }
.contact-card { display: grid; gap: 16px; padding: 20px; border-radius: var(--radius-lg); background: linear-gradient(145deg, var(--navy-900), var(--navy-800)); color: var(--white); box-shadow: var(--shadow); }
.contact-card h2 { margin: 2px 0 5px; }
.contact-card p { margin: 0; color: #c8d6e5; }
.contact-card .kicker { color: #83e0d4; }
.contact-actions .btn-light { border-color: rgba(255,255,255,.4); background: rgba(255,255,255,.1); color: var(--white); }
.private-link-card { display: grid; gap: 16px; padding: 18px; border: 1px solid var(--slate-200); border-radius: var(--radius); background: var(--white); box-shadow: var(--shadow-sm); }
.private-link-card h2 { margin: 7px 0 2px; font-size: 1.1rem; }
.private-link-card p { margin: 0; color: var(--slate-600); }
.compact-link-row { display: grid; grid-template-columns: minmax(0,1fr) auto auto; gap: 8px; align-items: center; }
.compact-link-row input { min-width: 0; height: 44px; border: 1px solid var(--slate-300); border-radius: 10px; padding: 8px 11px; direction: ltr; text-align: left; background: var(--slate-100); }
.icon-action { display: inline-flex; align-items: center; justify-content: center; gap: 6px; min-height: 44px; padding: 8px 12px; border: 1px solid var(--slate-300); border-radius: 10px; background: var(--white); color: var(--navy-900); font-weight: 800; }
.alternative-action { border-color: #e0a038; background: var(--amber-100); color: #7b4200; }
.daily-schedule-list { display: grid; gap: 12px; }
.day-schedule { padding: 16px; border: 1px solid var(--slate-200); border-radius: var(--radius); background: var(--white); }
.day-schedule-head { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 12px; }
.switch-line { display: inline-flex; align-items: center; gap: 9px; font-weight: 900; }
.switch-line input { width: 21px; height: 21px; accent-color: var(--teal-600); }
.day-periods { margin-top: 14px; padding-top: 14px; border-top: 1px solid var(--slate-200); }
.period-row { display: grid; grid-template-columns: 1fr; gap: 8px; align-items: end; }
.period-row label { display: grid; gap: 5px; color: var(--slate-600); font-size: .84rem; }
.period-row select { width: 100%; }
.second-period-toggle { margin: 12px 0; }
.schedule-summary { padding: 14px; border: 1px solid var(--slate-200); border-radius: 12px; background: var(--slate-100); }
.schedule-summary h3 { margin-top: 0; }
.schedule-summary-row { display: flex; justify-content: space-between; gap: 14px; padding: 8px 0; border-bottom: 1px dashed var(--slate-300); }
.schedule-summary-row:last-child { border-bottom: 0; }

@media (min-width: 680px) {
  .contact-card { grid-template-columns: 1fr auto; align-items: center; }
  .private-link-card { grid-template-columns: minmax(180px,.5fr) minmax(0,1.5fr); align-items: center; }
  .period-row { grid-template-columns: 130px repeat(2,minmax(0,1fr)); }
}
@media (max-width: 679px) {
  .section { padding: 38px 0; }
  .flow-shell { padding-top: 16px; }
  .flow-screen, .card, .partner-card { padding: 16px; }
  .compact-link-row { grid-template-columns: 1fr auto; }
  .compact-link-row input { grid-column: 1 / -1; }
  .alternative-action { grid-column: 1 / -1; }
  .contact-actions .btn { width: 100%; }
  .utility-actions { justify-content: space-between; }
}

/* الهوية النهائية وتجربة النشر */
:root {
  --navy-950: #061321;
  --navy-900: #0a2038;
  --navy-800: #123b5c;
  --teal-600: #087d73;
  --teal-500: #0d9789;
  --teal-100: #e2f7f4;
  --page: #f5f7fa;
  --surface: #ffffff;
  --radius-sm: 11px;
  --radius: 17px;
  --radius-lg: 26px;
  --shadow-sm: 0 8px 24px rgba(6, 27, 48, .065);
  --shadow: 0 22px 60px rgba(6, 27, 48, .12);
  --container: 1160px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Tahoma, Arial, sans-serif;
}

body {
  min-width: 320px;
  background:
    linear-gradient(180deg, rgba(228, 238, 246, .45), transparent 320px),
    var(--page);
  font-size: 16px;
  line-height: 1.72;
}

h1, h2, h3 { color: var(--navy-950); letter-spacing: -.018em; }
p { text-wrap: pretty; }
.container { width: min(calc(100% - 28px), var(--container)); }
.section { padding: clamp(42px, 7vw, 78px) 0; }
.section-head { margin-bottom: clamp(22px, 4vw, 34px); }
.section-head h1, .section-head h2 { font-weight: 900; }
.section-head h2 { font-size: clamp(1.65rem, 4vw, 2.45rem); }
.kicker, .eyebrow { font-size: .82rem; letter-spacing: .025em; }

.ui-icon {
  display: inline-grid;
  place-items: center;
  flex: 0 0 auto;
  width: 1.15em;
  height: 1.15em;
  line-height: 1;
}
.ui-icon svg, [data-service-icon] svg, .card-icon svg {
  width: 100%;
  height: 100%;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.site-header { box-shadow: 0 7px 24px rgba(7, 29, 51, .055); }
.utility-strip { background: #f7fafc; }
.utility-actions { min-height: 36px; }
.utility-btn {
  min-height: 34px;
  border-radius: 999px;
  padding-inline: 11px;
  color: var(--slate-700);
}
.utility-btn .ui-icon { color: var(--teal-600); }
.nav-shell { min-height: 68px; }
.brand-mark { width: 44px; height: 44px; border-radius: 14px; }
.brand strong { font-size: 1.02rem; }
.brand small { font-size: .72rem; }
.nav-toggle { min-height: 42px; display: inline-flex; align-items: center; gap: 7px; }
.main-nav a { min-height: 44px; display: flex; align-items: center; }

.hero {
  padding: clamp(52px, 8vw, 92px) 0 clamp(48px, 7vw, 78px);
  background:
    radial-gradient(circle at 8% 14%, rgba(13,151,137,.18), transparent 30%),
    radial-gradient(circle at 92% 78%, rgba(23,105,170,.14), transparent 32%),
    linear-gradient(155deg, #fbfdfd 0%, #edf4f8 100%);
}
.hero-grid { gap: clamp(30px, 6vw, 68px); }
.hero-copy { position: relative; z-index: 1; }
.hero h1 { max-width: 820px; margin: 12px 0 18px; font-size: clamp(2.25rem, 8vw, 4.65rem); line-height: 1.13; }
.hero h1 span { display: inline-block; margin-top: 4px; }
.hero p { max-width: 680px; font-size: clamp(1rem, 2vw, 1.14rem); line-height: 1.9; }
.hero-actions .btn { min-width: 150px; }
.hero-assurances span { display: inline-flex; align-items: center; gap: 6px; padding: 7px 11px; }
.hero-assurances .ui-icon { color: var(--teal-600); }
.hero-panel { padding: clamp(18px, 4vw, 28px); border-color: rgba(255,255,255,.95); }
.main-path-card { padding: 22px; }
.other-services { gap: 10px; }
.service-card { display: grid; grid-template-columns: auto 1fr; align-items: center; gap: 13px; padding: 15px; }
.service-card h3 { margin-top: 0; }
.service-card .path-icon { width: 44px; height: 44px; }
.urgent-service { border-color: rgba(161,36,45,.22); }
.urgent-service .path-icon { color: var(--red-700); background: var(--red-100); }

.btn {
  min-height: 48px;
  border-radius: 13px;
  padding: 11px 18px;
  font-size: .94rem;
  box-shadow: none;
}
.btn-primary { box-shadow: 0 11px 25px rgba(8,125,115,.20); }
.btn-light { background: rgba(255,255,255,.94); }
.btn:active { transform: translateY(0) scale(.985); }
.btn .ui-icon { font-size: 1.08rem; }
.icon-action { min-height: 46px; }

.card, .partner-card, .flow-screen, .private-link-card, .day-schedule, .activity-block {
  border-color: #dfe6ed;
  box-shadow: var(--shadow-sm);
}
.card, .partner-card { padding: clamp(17px, 3vw, 23px); }
.card:hover { border-color: #c8d8e2; }
.path-icon, .card-icon {
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border-radius: 15px;
  background: var(--teal-100);
  color: var(--teal-600);
}
.path-icon svg, .card-icon svg { width: 25px; height: 25px; }

.journey-grid { display: grid; gap: 14px; }
.journey-card {
  position: relative;
  padding: 22px;
  border: 1px solid var(--slate-200);
  border-radius: var(--radius);
  background: var(--white);
  box-shadow: var(--shadow-sm);
}
.journey-card h3 { margin: 16px 0 7px; }
.journey-card p { margin: 0; color: var(--slate-600); }
.step-number { display: grid; place-items: center; width: 34px; height: 34px; border-radius: 50%; background: var(--navy-900); color: var(--white); font-weight: 900; }
.value-section { background: linear-gradient(150deg, #f5fbfa, #f5f7fa); }
.value-grid { display: grid; gap: 30px; align-items: center; }
.benefit-list { display: grid; gap: 12px; }
.benefit-item { display: grid; grid-template-columns: auto 1fr; gap: 14px; align-items: start; padding: 18px; background: var(--white); border: 1px solid var(--slate-200); border-radius: var(--radius); box-shadow: var(--shadow-sm); }
.benefit-item > .ui-icon { width: 42px; height: 42px; padding: 10px; border-radius: 13px; color: var(--teal-600); background: var(--teal-100); }
.benefit-item h3 { margin: 0 0 5px; }
.benefit-item p { margin: 0; color: var(--slate-600); }
.partner-cta-section { padding-block: 42px; }
.partner-cta { display: grid; gap: 22px; align-items: center; padding: clamp(24px, 5vw, 42px); border-radius: var(--radius-lg); color: var(--white); background: linear-gradient(135deg, var(--navy-950), var(--navy-800)); box-shadow: var(--shadow); }
.partner-cta h2 { margin: 6px 0 9px; color: var(--white); }
.partner-cta p { margin: 0; color: #cad7e4; }
.partner-cta .btn-light { border-color: rgba(255,255,255,.35); background: rgba(255,255,255,.10); color: var(--white); }
.trust-cards .card-icon { margin-bottom: 13px; }
.mobile-action-bar { display: none; }

.flow-shell { padding-top: 22px; }
.flow-sidebar { background: linear-gradient(160deg, var(--navy-950), var(--navy-800)); }
.flow-screen { padding: clamp(18px, 4vw, 30px); }
.flow-screen h2 { font-size: clamp(1.35rem, 4vw, 1.9rem); }
.progress-track { height: 9px; }
.service-choice { min-height: 92px; transition: border-color .18s ease, transform .18s ease, background .18s ease; }
.service-choice:hover { border-color: var(--teal-500); transform: translateY(-1px); }
.form-field input, .form-field select, .form-field textarea { min-height: 50px; border-radius: 12px; background: #fff; }
.form-field textarea { min-height: 126px; }
.field-hint { line-height: 1.6; }
.screen-actions { position: relative; margin-top: 26px; }
.loading-shell { min-height: 350px; }
.loader-step { border: 1px solid var(--slate-200); }
.success-panel, .warning-panel, .danger-panel, .legal-note { border-radius: 14px; }
.contact-card { padding: clamp(20px, 4vw, 28px); }
.private-link-card { background: #fbfcfe; }
.compact-link-row input { background: var(--white); }

.partner-head { gap: 18px; }
.partner-head h2 { margin-bottom: 5px; }
.partner-metrics > div, .guidance-item { border-radius: 13px; }
.discount-box { border-radius: 14px; }
.info-panel { border-radius: 13px; }
.rating-block { min-width: 150px; }

.tabs { scrollbar-width: thin; border-radius: 14px; padding: 6px; background: #eaf0f5; }
.tab-btn { min-height: 42px; border-radius: 10px; white-space: nowrap; }
.tab-btn.active { background: var(--white); color: var(--teal-600); box-shadow: 0 4px 14px rgba(7,29,51,.08); }
.table-wrap { border-radius: 14px; }
.dialog-shell { border-radius: 20px; }
.empty-state { border-radius: var(--radius-lg); }
.empty-state .path-icon { margin-inline: auto; }

.site-footer { margin-top: 24px; }
.page-guidance { grid-template-columns: auto 1fr; background: rgba(255,255,255,.075); }
.guidance-icon { display: grid; place-items: center; width: 38px; height: 38px; padding: 9px; border-radius: 12px; background: rgba(13,151,137,.18); color: #8fe2d8; }
.footer-grid { gap: 28px; }
.footer-grid > div { align-content: start; }
.footer-grid a { width: fit-content; }
.footer-bottom { gap: 10px; }

.noscript-banner { padding: 12px 16px; text-align: center; background: var(--amber-100); color: #734100; font-weight: 800; }
.toast { border-radius: 13px; box-shadow: var(--shadow); }

@media (min-width: 680px) {
  .journey-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .value-grid { grid-template-columns: .9fr 1.1fr; gap: 54px; }
  .partner-cta { grid-template-columns: 1fr auto; }
}

@media (min-width: 900px) {
  .journey-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
  .main-nav { gap: 2px; }
  .main-nav a { padding-inline: 13px; }
}

@media (max-width: 679px) {
  body { padding-bottom: 0; }
  .container { width: min(calc(100% - 22px), var(--container)); }
  .utility-actions { justify-content: flex-start; }
  .utility-btn { flex: 0 0 auto; }
  .nav-shell { min-height: 62px; }
  .brand-mark { width: 40px; height: 40px; }
  .brand small { display: none; }
  .nav-toggle span:not(.ui-icon) { display: none; }
  .nav-toggle { width: 42px; padding: 8px; justify-content: center; }
  .main-nav { inset-inline: 11px; top: 64px; }
  .hero { padding-top: 44px; }
  .hero h1 { font-size: clamp(2.1rem, 11vw, 3.2rem); }
  .hero-actions { display: grid; grid-template-columns: 1fr; }
  .hero-actions .btn { width: 100%; }
  .hero-assurances { gap: 6px; }
  .hero-assurances span { font-size: .76rem; }
  .service-card { padding: 14px; }
  .partner-cta .button-row { display: grid; }
  .partner-cta .btn { width: 100%; }
  .flow-layout { gap: 14px; }
  .flow-sidebar { border-radius: 18px; padding: 17px; }
  .flow-sidebar .legal-note { display: none; }
  .flow-screen { border-radius: 18px; }
  .screen-actions {
    position: sticky;
    bottom: max(0px, env(safe-area-inset-bottom));
    z-index: 12;
    margin-inline: -16px;
    margin-bottom: -16px;
    padding: 12px 16px calc(12px + env(safe-area-inset-bottom));
    background: rgba(255,255,255,.96);
    box-shadow: 0 -10px 24px rgba(7,29,51,.08);
    backdrop-filter: blur(10px);
  }
  .screen-actions .btn { flex: 1 1 130px; }
  .partner-head { display: grid; }
  .rating-block { width: 100%; }
  .partner-metrics { grid-template-columns: 1fr; }
  .contact-card { border-radius: 18px; }
  .private-link-card { border-radius: 16px; }
  .tabs { margin-inline: -2px; overflow-x: auto; flex-wrap: nowrap; }
  .tab-btn { flex: 0 0 auto; }
  .footer-grid { gap: 24px; }
  .footer-bottom { align-items: flex-start; }
  body[data-page="home"] { padding-bottom: calc(76px + env(safe-area-inset-bottom)); }
  .mobile-action-bar {
    position: fixed;
    inset-inline: 0;
    bottom: 0;
    z-index: 90;
    display: block;
    padding: 10px 12px calc(10px + env(safe-area-inset-bottom));
    border-top: 1px solid var(--slate-200);
    background: rgba(255,255,255,.96);
    box-shadow: 0 -12px 30px rgba(7,29,51,.12);
    backdrop-filter: blur(12px);
  }
  .mobile-action-bar .btn { min-height: 52px; }
}

@media (prefers-reduced-motion: no-preference) {
  .flow-screen.active, .tab-panel.active { animation: content-in .22s ease both; }
  @keyframes content-in { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: none; } }
}
.service-choice { display: grid; grid-template-columns: auto minmax(0,1fr); gap: 13px; align-items: center; }
.service-choice-icon { display: grid; place-items: center; width: 44px; height: 44px; border-radius: 14px; color: var(--teal-600); background: var(--teal-100); }
.service-choice-icon svg { width: 24px; height: 24px; fill: none; stroke: currentColor; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }
.service-choice-copy { min-width: 0; }
.urgent-choice .service-choice-icon { color: var(--red-700); background: var(--red-100); }
.auth-section { min-height: 68vh; display: grid; align-items: center; }
.auth-layout { display: grid; gap: 18px; align-items: stretch; }
.auth-card { align-self: stretch; }
.auth-aside { padding: clamp(22px, 5vw, 36px); border-radius: var(--radius-lg); color: var(--white); background: linear-gradient(145deg, var(--navy-950), var(--navy-800)); box-shadow: var(--shadow); }
.auth-aside h2 { color: var(--white); margin: 16px 0 10px; }
.auth-aside .card-icon { color: #91e4da; background: rgba(255,255,255,.1); }
.auth-aside .legal-note { color: #d2deea; background: rgba(255,255,255,.08); border-color: rgba(255,255,255,.12); }
.feature-checklist { display: grid; gap: 10px; margin: 16px 0 22px; padding: 0; list-style: none; }
.feature-checklist li { position: relative; padding-inline-start: 26px; color: #dbe6ef; }
.feature-checklist li::before { content: "✓"; position: absolute; inset-inline-start: 0; top: 0; color: #75d8cc; font-weight: 900; }
.legal-document { max-width: 900px; padding: clamp(22px, 5vw, 44px); border: 1px solid var(--slate-200); border-radius: var(--radius-lg); background: var(--white); box-shadow: var(--shadow-sm); }
.legal-document section { padding: 22px 0; border-top: 1px solid var(--slate-200); }
.legal-document section:first-of-type { border-top: 0; }
.legal-document h2 { margin: 0 0 8px; font-size: 1.25rem; }
.legal-document p { margin: 0; color: var(--slate-700); }
.payment-layout { max-width: 820px; }
.payment-method { min-height: 50px; padding: 12px 14px; border: 1px solid var(--slate-200); border-radius: 12px; background: var(--slate-100); }
@media (min-width: 760px) { .auth-layout { grid-template-columns: minmax(0,1fr) minmax(300px,.78fr); } }
@media (max-width: 679px) {
  .screen-actions {
    position: static;
    margin-inline: 0;
    margin-bottom: 0;
    padding: 18px 0 0;
    background: transparent;
    box-shadow: none;
    backdrop-filter: none;
  }
}

/* الصفحة الرئيسية المختصرة — Zero Scrolling */

body[data-page="home"] {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-height: 100dvh;
  height: 100vh;
  height: 100dvh;
  overflow-x: hidden;
  padding-bottom: 0;
  background:
    radial-gradient(circle at 12% 20%, rgba(15, 148, 135, .13), transparent 32%),
    radial-gradient(circle at 88% 78%, rgba(23, 105, 170, .11), transparent 34%),
    linear-gradient(155deg, #fbfdfd 0%, #edf4f8 100%);
}

body[data-page="home"] > .announcement-ticker,
body[data-page="home"] > [data-site-header],
body[data-page="home"] > .home-footer,
body[data-page="home"] > noscript {
  flex-shrink: 0;
}

body[data-page="home"] > [data-site-header]:empty {
  min-height: clamp(3.35rem, 7vh, 4.05rem);
}

body[data-page="home"] .site-header {
  position: relative;
  top: auto;
  flex-shrink: 0;
  background: rgba(255, 255, 255, .96);
  box-shadow: 0 6px 20px rgba(7, 29, 51, .055);
}

body[data-page="home"] .utility-strip {
  display: none;
}

body[data-page="home"] .nav-shell {
  min-height: clamp(3.35rem, 7vh, 4.05rem);
  gap: clamp(.45rem, 1.4vw, 1rem);
}

body[data-page="home"] .brand {
  gap: clamp(.45rem, 1vw, .7rem);
}

body[data-page="home"] .brand-mark {
  width: clamp(2.35rem, 5.2vh, 2.7rem);
  height: clamp(2.35rem, 5.2vh, 2.7rem);
  border-radius: clamp(.7rem, 1.5vw, .9rem);
  font-size: clamp(1rem, 2.3vh, 1.18rem);
}

body[data-page="home"] .brand strong {
  font-size: clamp(.9rem, 2vh, 1rem);
}

body[data-page="home"] .brand small {
  font-size: clamp(.64rem, 1.45vh, .72rem);
}

body[data-page="home"] .main-nav a {
  min-height: clamp(2.35rem, 5.2vh, 2.75rem);
  padding: clamp(.35rem, .9vh, .55rem) clamp(.55rem, 1.2vw, .85rem);
  font-size: clamp(.78rem, 1.7vh, .9rem);
}

body[data-page="home"] .nav-toggle {
  min-height: 2.55rem;
  min-width: 2.55rem;
}

.announcement-ticker {
  position: relative;
  z-index: 120;
  display: flex;
  align-items: center;
  min-height: clamp(1.85rem, 4vh, 2.25rem);
  overflow: hidden;
  color: var(--white);
  background: linear-gradient(135deg, var(--navy-950), var(--navy-800));
  border-bottom: 1px solid rgba(255, 255, 255, .12);
}

.announcement-ticker::before,
.announcement-ticker::after {
  content: "";
  position: absolute;
  inset-block: 0;
  z-index: 2;
  width: clamp(.8rem, 4vw, 3.5rem);
  pointer-events: none;
}

.announcement-ticker::before {
  inset-inline-start: 0;
  background: linear-gradient(to left, transparent, var(--navy-950));
}

.announcement-ticker::after {
  inset-inline-end: 0;
  background: linear-gradient(to right, transparent, var(--navy-950));
}

.announcement-ticker__track {
  display: flex;
  flex: 0 0 auto;
  width: max-content;
  min-width: max-content;
  direction: rtl;
  will-change: transform;
  animation: home-ticker-rtl 52s linear infinite;
}

.announcement-ticker__group {
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  min-width: max-content;
  white-space: nowrap;
}

.announcement-ticker__group span {
  display: inline-flex;
  align-items: center;
  min-height: clamp(1.85rem, 4vh, 2.25rem);
  padding-inline: clamp(.65rem, 1.4vw, 1.05rem);
  white-space: nowrap;
  font-size: clamp(.68rem, 1.55vh, .79rem);
  font-weight: 800;
  line-height: 1;
}

.announcement-ticker__group span:not(:last-child)::after {
  content: "•";
  margin-inline-start: clamp(1.1rem, 2.5vw, 1.9rem);
  color: #7fe1d5;
}

.announcement-ticker:hover .announcement-ticker__track,
.announcement-ticker:focus-within .announcement-ticker__track {
  animation-play-state: paused;
}

@keyframes home-ticker-rtl {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(50%, 0, 0);
  }
}

.home-main {
  display: flex;
  flex: 1 1 auto;
  min-height: 0;
}

.home-hero {
  position: relative;
  isolation: isolate;
  display: flex;
  flex: 1 1 auto;
  width: 100%;
  min-height: 0;
  overflow: hidden;
  padding-block: clamp(.85rem, 3.2vh, 2.25rem);
}

.home-hero::before,
.home-hero::after {
  content: "";
  position: absolute;
  z-index: -1;
  border-radius: 50%;
  pointer-events: none;
}

.home-hero::before {
  width: min(54vw, 36rem);
  aspect-ratio: 1;
  inset-block-start: -40%;
  inset-inline-end: -18%;
  border: 1px solid rgba(10, 125, 114, .10);
  box-shadow:
    0 0 0 clamp(2rem, 5vw, 4rem) rgba(10, 125, 114, .03),
    0 0 0 clamp(4rem, 10vw, 8rem) rgba(23, 105, 170, .02);
}

.home-hero::after {
  width: clamp(9rem, 24vw, 20rem);
  aspect-ratio: 1;
  inset-block-end: -35%;
  inset-inline-start: -8%;
  background: rgba(15, 148, 135, .055);
  filter: blur(1px);
}

.home-hero__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: clamp(.55rem, 1.75vh, 1.05rem);
  max-width: 58rem;
  min-height: 0;
  text-align: center;
}

.home-hero .eyebrow {
  display: inline-flex;
  align-items: center;
  min-height: clamp(1.75rem, 3.6vh, 2.1rem);
  padding: .24rem clamp(.65rem, 1.4vw, .85rem);
  border: 1px solid rgba(10, 125, 114, .18);
  border-radius: 999px;
  background: rgba(255, 255, 255, .72);
  color: var(--teal-600);
  box-shadow: 0 6px 18px rgba(7, 20, 38, .04);
  font-size: clamp(.68rem, 1.55vh, .82rem);
  font-weight: 900;
  line-height: 1.2;
}

.home-hero h1 {
  max-width: 56rem;
  margin: 0;
  color: var(--navy-950);
  font-size: clamp(2rem, min(7.2vw, 7.6vh), 4.5rem);
  line-height: 1.08;
  letter-spacing: -.04em;
  text-wrap: balance;
}

.home-hero h1 span {
  display: block;
  margin-top: clamp(.2rem, .8vh, .45rem);
  color: var(--teal-600);
}

.home-hero__description {
  max-width: 46rem;
  margin: 0;
  color: var(--slate-700);
  font-size: clamp(.88rem, min(2.7vw, 2.15vh), 1.08rem);
  line-height: 1.65;
  text-wrap: balance;
}

.home-hero__actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: clamp(.35rem, 1vh, .7rem) clamp(.65rem, 1.5vw, 1rem);
}

.home-primary-cta {
  min-width: clamp(11.5rem, 23vw, 14.5rem);
  min-height: clamp(2.9rem, 6.4vh, 3.45rem);
  padding: clamp(.6rem, 1.2vh, .8rem) clamp(1.2rem, 2.8vw, 1.8rem);
  border-radius: clamp(.75rem, 1.4vw, .95rem);
  font-size: clamp(.92rem, 2vh, 1.05rem);
  box-shadow: 0 13px 28px rgba(10, 125, 114, .23);
}

.home-track-link {
  display: inline-flex;
  align-items: center;
  gap: .38rem;
  min-height: clamp(2.45rem, 5.2vh, 2.8rem);
  padding: .35rem .55rem;
  border-radius: .65rem;
  color: var(--slate-700);
  font-size: clamp(.78rem, 1.75vh, .9rem);
  font-weight: 800;
  text-decoration: underline;
  text-decoration-color: transparent;
  text-underline-offset: .28rem;
  transition: color .18s ease, background .18s ease, text-decoration-color .18s ease;
}

.home-track-link:hover {
  color: var(--teal-600);
  background: rgba(255, 255, 255, .62);
  text-decoration-color: currentColor;
}

.home-track-link .ui-icon {
  color: var(--teal-600);
}

.home-trust-points {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: clamp(.35rem, 1vw, .55rem);
}

.home-trust-points span {
  display: inline-flex;
  align-items: center;
  gap: .35rem;
  min-height: clamp(1.85rem, 4vh, 2.2rem);
  padding: .28rem clamp(.5rem, 1.2vw, .7rem);
  color: var(--slate-700);
  background: rgba(255, 255, 255, .75);
  border: 1px solid rgba(199, 207, 218, .78);
  border-radius: 999px;
  font-size: clamp(.67rem, 1.48vh, .79rem);
  font-weight: 800;
  line-height: 1.15;
  box-shadow: 0 6px 18px rgba(7, 20, 38, .035);
}

.home-trust-points .ui-icon {
  color: var(--teal-600);
}

.home-service-pills {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: clamp(.4rem, 1vw, .65rem);
}

.home-service-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: .42rem;
  min-height: clamp(2rem, 4.3vh, 2.45rem);
  padding: .35rem clamp(.7rem, 1.5vw, .95rem);
  border: 1px solid;
  border-radius: 999px;
  background: rgba(255, 255, 255, .82);
  font-size: clamp(.72rem, 1.6vh, .84rem);
  font-weight: 900;
  line-height: 1;
  box-shadow: 0 7px 18px rgba(7, 20, 38, .045);
  transition: transform .18s ease, box-shadow .18s ease, background .18s ease;
}

.home-service-pill:hover {
  transform: translateY(-2px);
  box-shadow: 0 11px 24px rgba(7, 20, 38, .09);
  background: var(--white);
}

.home-service-pill > svg {
  width: clamp(1rem, 2.1vh, 1.2rem);
  height: clamp(1rem, 2.1vh, 1.2rem);
  fill: none;
  stroke: currentColor;
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.home-service-pill--parts {
  color: #87520a;
  border-color: #e5c88f;
}

.home-service-pill--tow {
  color: var(--red-700);
  border-color: #e9bbc0;
}

.home-service-pill--maintenance {
  color: var(--teal-600);
  border-color: #abd9d3;
}

.home-footer {
  flex-shrink: 0;
  color: #d6e1ec;
  background: var(--navy-950);
  border-top: 1px solid rgba(255, 255, 255, .10);
}

.home-footer__inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: clamp(.25rem, .7vh, .45rem) clamp(.55rem, 1.5vw, .95rem);
  min-height: clamp(2.55rem, 5.3vh, 3.2rem);
  padding-block: clamp(.25rem, .65vh, .42rem);
}

.home-footer__copyright {
  color: #aebed0;
  font-size: clamp(.67rem, 1.48vh, .78rem);
  white-space: nowrap;
}

.home-footer__links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: .12rem clamp(.55rem, 1.5vw, .9rem);
}

.home-footer__links a {
  display: inline-flex;
  align-items: center;
  min-height: clamp(1.85rem, 3.8vh, 2.15rem);
  padding: .18rem .28rem;
  border-radius: .4rem;
  color: #c4d2e0;
  font-size: clamp(.66rem, 1.46vh, .78rem);
  font-weight: 700;
}

.home-footer__links a:hover,
.home-footer__links a:focus-visible {
  color: var(--white);
  text-decoration: underline;
  text-underline-offset: .22rem;
}

@media (min-width: 900px) {
  .home-footer__inner {
    justify-content: space-between;
  }

  .announcement-ticker__group span {
    padding-inline: clamp(.85rem, 1.6vw, 1.25rem);
  }
}

@media (max-width: 679px) {
  body[data-page="home"] .brand small {
    display: none;
  }

  body[data-page="home"] .nav-shell {
    min-height: clamp(3.15rem, 6.6vh, 3.65rem);
  }

  body[data-page="home"] .main-nav {
    top: clamp(3.2rem, 6.8vh, 3.75rem);
  }

  .home-hero__content {
    gap: clamp(.46rem, 1.45vh, .8rem);
  }

  .home-hero h1 {
    max-width: 23rem;
    font-size: clamp(1.62rem, min(8.3vw, 6.25vh), 2.45rem);
    line-height: 1.1;
  }

  .home-hero__description {
    max-width: 23rem;
    font-size: clamp(.82rem, min(3.6vw, 1.95vh), .96rem);
    line-height: 1.55;
  }

  .home-hero__actions {
    flex-direction: column;
    width: 100%;
  }

  .home-primary-cta {
    width: min(100%, 21rem);
  }

  .home-trust-points,
  .home-service-pills {
    max-width: 24rem;
  }

  .home-trust-points span,
  .home-service-pill {
    min-height: 2rem;
  }

  .home-footer__inner {
    align-content: center;
    gap: .12rem .45rem;
  }

  .home-footer__links {
    gap: .05rem .5rem;
  }
}

@media (max-height: 700px) {
  .home-hero {
    padding-block: .55rem;
  }

  .home-hero__content {
    gap: .42rem;
  }

  .home-hero .eyebrow {
    min-height: 1.55rem;
    font-size: .67rem;
  }

  .home-hero h1 {
    font-size: clamp(1.75rem, min(7vw, 6.8vh), 3.25rem);
  }

  .home-hero__description {
    font-size: clamp(.78rem, 1.8vh, .9rem);
    line-height: 1.45;
  }

  .home-primary-cta {
    min-height: 2.65rem;
  }

  .home-trust-points span,
  .home-service-pill {
    min-height: 1.75rem;
    padding-block: .2rem;
  }

  .home-footer__inner {
    min-height: 2.7rem;
    padding-block: .28rem;
  }
}

@media (max-height: 620px) {
  .home-hero .eyebrow {
    display: none;
  }

  .home-trust-points span {
    padding-inline: .42rem;
    font-size: .65rem;
  }

  .home-service-pill {
    font-size: .68rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .announcement-ticker {
    overflow-x: auto;
    scrollbar-width: none;
  }

  .announcement-ticker::-webkit-scrollbar {
    display: none;
  }

  .announcement-ticker::before,
  .announcement-ticker::after {
    display: none;
  }

  .announcement-ticker__track {
    animation: none !important;
    transform: none !important;
  }

  .announcement-ticker__group[aria-hidden="true"] {
    display: none;
  }
}

@media (min-width: 900px) {
  body[data-page="home"] .nav-toggle {
    display: none;
  }
}


@media (min-height: 700px) {
  body[data-page="home"] {
    overflow-y: clip;
  }
}

@media (max-height: 699px) {
  body[data-page="home"] {
    height: auto;
    overflow-y: auto;
  }
}

/* توحيد الواجهات المختصرة والمرنة في جميع الصفحات */
body:not([data-page="home"]) {display:flex;flex-direction:column;min-height:100vh;min-height:100dvh;overflow-x:hidden}
body:not([data-page="home"])>[data-site-header],body:not([data-page="home"])>[data-site-footer]{flex-shrink:0}
body:not([data-page="home"])>main{flex:1 1 auto;min-height:0}
.brand-logo{display:block;width:clamp(8.8rem,16vw,11.5rem);height:auto;max-height:3rem;object-fit:contain}
.footer-brand .brand-logo{filter:brightness(0) invert(1);opacity:.96;max-height:2.6rem}
.nav-shell{min-height:clamp(3.6rem,7vh,4.4rem)}
.utility-strip{flex-shrink:0}.utility-actions{min-height:2.15rem}
.flow-shell{padding:clamp(.75rem,2vh,1.4rem) 0 clamp(1.2rem,3vh,2.2rem)}
.flow-layout{gap:clamp(.75rem,2vw,1.25rem)}
.flow-sidebar{padding:clamp(.9rem,2vw,1.25rem);border-radius:clamp(.9rem,2vw,1.35rem)}
.flow-screen{padding:clamp(1rem,2.4vw,1.6rem);border-radius:clamp(.9rem,2vw,1.35rem)}
.flow-screen h2{font-size:clamp(1.2rem,3vw,1.65rem)}
.form-grid{gap:clamp(.75rem,1.5vh,1rem)}
.form-field{gap:.35rem}.form-field input,.form-field select,.form-field textarea{min-height:clamp(2.75rem,5.5vh,3.1rem);padding:.55rem .7rem}
.form-field textarea{min-height:clamp(5.5rem,15vh,8rem)}
.screen-actions{margin-top:clamp(.9rem,2vh,1.25rem);padding-top:clamp(.75rem,1.8vh,1rem)}
.section{padding:clamp(1.25rem,4vh,2.6rem) 0}.section-head{margin-bottom:clamp(.9rem,2vh,1.4rem)}
.card,.partner-card,.activity-block{padding:clamp(.9rem,2vw,1.25rem)}
.auth-section{min-height:auto;align-items:center}.auth-layout{gap:clamp(.8rem,2vw,1.2rem)}
.tabs{position:sticky;top:0;z-index:20;margin-bottom:.8rem;background:#eaf0f5;padding:.35rem;border-radius:.8rem}
.tab-panel{max-height:calc(100dvh - 12rem);overflow:auto;padding-inline:.15rem}
.dashboard-grid{gap:clamp(.75rem,1.8vw,1rem)}
.site-footer{padding:clamp(1.1rem,3vh,1.8rem) 0 .75rem;margin-top:0}.page-guidance{margin-bottom:1rem;padding:.75rem 1rem}.footer-grid{gap:1rem}.footer-bottom{margin-top:1rem;padding-top:.65rem}
.btn{min-height:clamp(2.75rem,5.5vh,3rem);padding:.55rem 1rem}
.empty-state{padding:clamp(1.25rem,4vh,2rem)}
@media(max-width:899px){.brand-logo{width:clamp(7.6rem,34vw,9.5rem)}.main-nav{top:3.8rem}.flow-sidebar{position:static}.tab-panel{max-height:none;overflow:visible}.site-footer .page-guidance{display:none}.footer-grid{grid-template-columns:1fr 1fr}.footer-grid>div:first-child{grid-column:1/-1}}
@media(max-width:679px){.utility-actions{justify-content:space-between}.flow-shell{padding-top:.55rem}.flow-sidebar p,.flow-sidebar .legal-note{display:none}.flow-sidebar h1{font-size:1rem}.progress-wrap{margin-top:.55rem}.screen-actions{position:sticky;bottom:0;z-index:18;margin-inline:-1rem;margin-bottom:-1rem;padding:.65rem 1rem calc(.65rem + env(safe-area-inset-bottom));background:rgba(255,255,255,.97);box-shadow:0 -8px 20px rgba(7,29,51,.08)}.footer-grid{grid-template-columns:1fr}.footer-grid>div:first-child{display:none}.site-footer{padding:.75rem 0}.footer-bottom{justify-content:center;text-align:center}.brand-logo{width:7.8rem}}
@media(max-height:700px) and (min-width:700px){.site-footer{padding:.55rem 0}.site-footer .page-guidance,.site-footer .footer-grid>div:first-child p{display:none}.footer-grid{grid-template-columns:1fr 1fr 1fr}.footer-bottom{margin-top:.45rem;padding-top:.4rem}.section{padding:1rem 0}.auth-section{min-height:0}.flow-shell{padding:.55rem 0}.flow-screen{padding:1rem}.tab-panel{max-height:calc(100dvh - 10.5rem)}}


/* Header and Footer الموحدان — قبول إلزامي لجميع الصفحات */
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-height: 100dvh;
  overflow-x: hidden;
}

body > main {
  flex: 1 0 auto;
  width: 100%;
}

body > .site-header,
body > .site-footer,
body > .announcement-ticker,
body > noscript {
  flex-shrink: 0;
}

.unified-site-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  margin: 0;
  background: rgba(255, 255, 255, .97);
  border-bottom: 1px solid var(--slate-200);
  box-shadow: 0 7px 22px rgba(7, 29, 51, .065);
  backdrop-filter: blur(12px);
}

.unified-header-shell {
  position: relative;
  min-height: clamp(3.65rem, 7vh, 4.4rem);
  display: flex;
  align-items: center;
  gap: clamp(.55rem, 1.5vw, 1.05rem);
}

.unified-brand {
  flex: 0 0 auto;
  min-width: 0;
  padding-block: .28rem;
}

.brand-logo {
  display: block;
  width: clamp(8.3rem, 15vw, 11rem);
  height: auto;
  max-height: clamp(2.5rem, 5.5vh, 3rem);
  object-fit: contain;
  object-position: center;
}

.current-page-label {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  min-height: 1.8rem;
  padding: .22rem .62rem;
  border: 1px solid #cce5e1;
  border-radius: 999px;
  color: var(--teal-600);
  background: var(--teal-100);
  font-size: clamp(.68rem, 1.5vw, .8rem);
  font-weight: 900;
  white-space: nowrap;
}

.unified-main-nav {
  margin-inline-start: auto;
}

.unified-main-nav a[aria-current="page"] {
  color: var(--teal-600);
  background: var(--teal-100);
  box-shadow: inset 0 0 0 1px rgba(8, 125, 115, .12);
}

.unified-site-header .nav-toggle {
  flex: 0 0 auto;
}

.unified-site-footer {
  margin-top: auto;
  padding: clamp(.75rem, 2vh, 1rem) 0;
  color: #d6e1ec;
  background: var(--navy-950);
  border-top: 1px solid rgba(255, 255, 255, .12);
}

.unified-footer-shell {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: clamp(.65rem, 2vw, 1.25rem);
}

.footer-logo-link {
  display: inline-flex;
  align-items: center;
  width: fit-content;
  border-radius: .65rem;
}

.footer-logo-plate {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: .26rem .48rem;
  border-radius: .65rem;
  background: #fff;
  box-shadow: 0 6px 18px rgba(0, 0, 0, .15);
}

.footer-logo {
  display: block;
  width: clamp(7.2rem, 13vw, 9rem);
  height: auto;
  max-height: 2.35rem;
  object-fit: contain;
}

.unified-footer-nav {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: .15rem clamp(.45rem, 1.4vw, .8rem);
}

.unified-footer-nav a {
  display: inline-flex;
  align-items: center;
  min-height: 2rem;
  padding: .2rem .35rem;
  border-radius: .45rem;
  color: #c5d3e1;
  font-size: clamp(.68rem, 1.45vw, .8rem);
  font-weight: 800;
}

.unified-footer-nav a:hover,
.unified-footer-nav a:focus-visible,
.unified-footer-nav a[aria-current="page"] {
  color: #fff;
  background: rgba(255, 255, 255, .1);
  text-decoration: underline;
  text-underline-offset: .22rem;
}

.unified-footer-copy {
  color: #aebed0;
  font-size: clamp(.66rem, 1.35vw, .76rem);
  white-space: nowrap;
}

body[data-page="home"] > .site-header {
  flex-shrink: 0;
}

body[data-page="home"] > .home-footer {
  flex-shrink: 0;
  margin-top: 0;
}

body[data-page="home"] .unified-site-header {
  position: relative;
}

@media (min-width: 900px) {
  .unified-site-header .nav-toggle {
    display: none;
  }

  .unified-site-header .main-nav {
    position: static;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: .12rem;
    margin-inline-start: auto;
    padding: 0;
    border: 0;
    background: transparent;
    box-shadow: none;
  }

  .unified-site-header .main-nav a {
    min-height: 2.45rem;
    padding: .4rem clamp(.48rem, .8vw, .72rem);
    font-size: clamp(.73rem, .95vw, .85rem);
    white-space: nowrap;
  }
}

@media (max-width: 899px) {
  .unified-header-shell {
    min-height: 3.65rem;
  }

  .brand-logo {
    width: clamp(7.5rem, 28vw, 9.2rem);
    max-height: 2.55rem;
  }

  .current-page-label {
    margin-inline-start: auto;
  }

  .unified-site-header .main-nav {
    top: calc(100% + .35rem);
    inset-inline: 0;
    max-height: min(70vh, 28rem);
    overflow-y: auto;
  }

  .unified-site-header .main-nav a {
    min-height: 2.75rem;
  }
}

@media (max-width: 560px) {
  .unified-header-shell {
    gap: .4rem;
  }

  .brand-logo {
    width: clamp(6.8rem, 31vw, 8rem);
  }

  .current-page-label {
    max-width: 7.8rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .unified-site-header .nav-toggle {
    width: 2.65rem;
    min-width: 2.65rem;
    padding: .45rem;
  }

  .unified-site-header .nav-toggle > span:not(.ui-icon) {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
  }

  .unified-footer-shell {
    grid-template-columns: 1fr;
    justify-items: center;
    text-align: center;
    gap: .5rem;
  }

  .footer-logo {
    width: 7.2rem;
  }

  .unified-footer-nav {
    gap: .08rem .38rem;
  }

  .unified-footer-nav a {
    min-height: 1.85rem;
    font-size: .68rem;
  }
}

@media print {
  .unified-site-header,
  .unified-site-footer {
    display: none !important;
  }
}

/* بوابة الإدارة الداخلية */
.admin-page {
  background:
    linear-gradient(180deg, rgba(228, 238, 246, .62), transparent 26rem),
    var(--page);
}

.admin-site-header {
  position: sticky;
  top: 0;
  z-index: 1100;
}

.admin-header-shell {
  min-height: clamp(3.8rem, 7vh, 4.55rem);
}

.admin-user-summary {
  display: grid;
  margin-inline-start: auto;
  text-align: end;
  line-height: 1.35;
}

.admin-user-summary strong {
  color: var(--navy-950);
  font-size: .86rem;
}

.admin-user-summary span {
  color: var(--slate-600);
  font-size: .72rem;
}

.admin-auth-section {
  padding-block: clamp(1.5rem, 5vh, 4rem);
}

.admin-auth-layout {
  max-width: 980px;
  margin-inline: auto;
}

.admin-security-aside {
  min-height: 100%;
}

.admin-main {
  flex: 1 1 auto;
  min-height: 0;
  padding: clamp(.75rem, 2.2vh, 1.35rem) 0 clamp(1.2rem, 3vh, 2rem);
}

.admin-shell {
  display: grid;
  gap: clamp(.75rem, 1.6vh, 1rem);
}

.admin-topbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: clamp(.9rem, 2vw, 1.25rem);
  border: 1px solid var(--slate-200);
  border-radius: var(--radius);
  background: rgba(255, 255, 255, .95);
  box-shadow: var(--shadow-sm);
}

.admin-topbar h1 {
  margin: .2rem 0 .25rem;
  font-size: clamp(1.35rem, 3vw, 2rem);
}

.admin-topbar p {
  margin: 0;
  color: var(--slate-600);
  font-size: .86rem;
}

.admin-topbar-actions,
.admin-panel-actions {
  display: flex;
  flex-wrap: wrap;
  gap: .45rem;
}

.admin-security-notice {
  margin: 0;
  font-size: .82rem;
}

.admin-tabs,
.admin-subtabs {
  display: flex;
  gap: .35rem;
  overflow-x: auto;
  padding: .38rem;
  border: 1px solid var(--slate-200);
  border-radius: .9rem;
  background: #eaf0f5;
  scrollbar-width: thin;
}

.admin-tabs {
  position: sticky;
  top: clamp(3.8rem, 7vh, 4.55rem);
  z-index: 50;
}

.admin-tab,
.admin-subtab {
  flex: 0 0 auto;
  min-height: 2.45rem;
  padding: .45rem .78rem;
  border: 0;
  border-radius: .65rem;
  color: var(--slate-700);
  background: transparent;
  font-weight: 900;
  font-size: .79rem;
  white-space: nowrap;
}

.admin-tab.active,
.admin-subtab.active {
  color: var(--teal-600);
  background: var(--white);
  box-shadow: 0 5px 15px rgba(7, 29, 51, .09);
}

.admin-panel {
  min-height: 0;
}

.admin-panel.active {
  animation: admin-panel-in .18s ease both;
}

@keyframes admin-panel-in {
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: none; }
}

.admin-metric-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: .65rem;
  margin-bottom: .85rem;
}

.admin-metric-card {
  min-width: 0;
  padding: clamp(.85rem, 2vw, 1.1rem);
  border: 1px solid var(--slate-200);
  border-radius: .9rem;
  background: var(--white);
  box-shadow: var(--shadow-sm);
}

.admin-metric-card span,
.admin-metric-card small {
  display: block;
  color: var(--slate-600);
  font-size: .73rem;
}

.admin-metric-card strong {
  display: block;
  margin: .16rem 0;
  color: var(--navy-950);
  font-size: clamp(1.25rem, 3vw, 1.85rem);
  line-height: 1.2;
}

.admin-card-head {
  display: flex;
  justify-content: space-between;
  gap: .8rem;
  margin-bottom: .75rem;
}

.admin-card-head h2 {
  margin: 0 0 .18rem;
  font-size: 1.05rem;
}

.admin-card-head p {
  margin: 0;
  color: var(--slate-600);
  font-size: .78rem;
}

.admin-compact-list {
  display: grid;
  gap: .42rem;
}

.admin-list-row {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: .7rem;
  min-height: 3.25rem;
  padding: .62rem .75rem;
  border: 1px solid var(--slate-200);
  border-radius: .75rem;
  background: #fbfcfe;
  text-align: right;
}

.admin-list-row:hover {
  border-color: #b9d7d3;
  background: #f4fbfa;
}

.admin-list-row span:first-child {
  display: grid;
  min-width: 0;
}

.admin-list-row small,
.admin-table-wrap td small {
  display: block;
  color: var(--slate-600);
  font-size: .7rem;
  line-height: 1.45;
}

.admin-filterbar {
  display: grid;
  grid-template-columns: minmax(220px, 1.4fr) repeat(2, minmax(150px, .65fr));
  gap: .65rem;
  margin-bottom: .7rem;
  padding: .75rem;
  border: 1px solid var(--slate-200);
  border-radius: .85rem;
  background: var(--white);
}

.admin-filterbar .form-field {
  gap: .25rem;
}

.admin-filterbar .form-field > span {
  color: var(--slate-600);
  font-size: .7rem;
  font-weight: 800;
}

.admin-filterbar input,
.admin-filterbar select {
  min-height: 2.6rem;
}

.admin-table-wrap {
  max-height: calc(100dvh - 14.5rem);
  overflow: auto;
  background: var(--white);
}

.admin-table-wrap table {
  min-width: 980px;
}

.admin-table-wrap thead {
  position: sticky;
  top: 0;
  z-index: 4;
}

.admin-table-wrap th,
.admin-table-wrap td {
  padding: .62rem .72rem;
  font-size: .78rem;
}

.admin-table-wrap td strong {
  display: block;
}

.admin-empty {
  padding: 1.1rem;
  box-shadow: none;
}

.admin-empty h3 {
  margin: 0;
  font-size: .9rem;
}

.admin-subtabs {
  width: fit-content;
  max-width: 100%;
  margin-bottom: .7rem;
}

.admin-detail-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.admin-detail-list {
  display: grid;
  gap: .45rem;
  margin: 0;
  padding-inline-start: 1.2rem;
}

.admin-detail-list li {
  padding: .45rem .55rem;
  border: 1px solid var(--slate-200);
  border-radius: .65rem;
  background: var(--slate-100);
}

.admin-json-compare {
  display: grid;
  gap: .7rem;
  margin-top: 1rem;
}

.admin-json-compare section {
  min-width: 0;
}

.admin-json-compare h3 {
  margin: 0 0 .35rem;
  font-size: .9rem;
}

.admin-json-compare pre {
  max-height: 260px;
  overflow: auto;
  margin: 0;
  padding: .75rem;
  border-radius: .7rem;
  color: #e5edf5;
  background: var(--navy-950);
  direction: ltr;
  text-align: left;
  font-size: .7rem;
  white-space: pre-wrap;
  word-break: break-word;
}

.admin-dialog {
  width: min(calc(100% - 1.25rem), 760px);
}

.admin-dialog textarea {
  min-height: 6rem;
}

.admin-footer-note {
  margin: 0;
  color: #c5d3e1;
  text-align: center;
  font-size: .75rem;
}

.admin-site-footer {
  margin-top: auto;
}

.admin-page .status-badge {
  white-space: nowrap;
}

@media (min-width: 720px) {
  .admin-metric-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .admin-metric-grid-small {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .admin-json-compare {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 899px) {
  .admin-user-summary {
    display: none;
  }

  .admin-tabs {
    top: 3.65rem;
  }

  .admin-table-wrap {
    max-height: none;
  }
}

@media (max-width: 679px) {
  .admin-header-shell .current-page-label {
    display: none;
  }

  .admin-header-shell .brand-logo {
    width: 7rem;
  }

  .admin-header-shell .btn {
    min-height: 2.45rem;
    padding-inline: .65rem;
    font-size: .72rem;
  }

  .admin-main {
    padding-top: .5rem;
  }

  .admin-topbar {
    align-items: stretch;
  }

  .admin-topbar-actions {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
  }

  .admin-topbar-actions .btn {
    min-width: 0;
    padding-inline: .45rem;
    font-size: .69rem;
  }

  .admin-security-notice {
    font-size: .72rem;
  }

  .admin-tabs {
    margin-inline: -.15rem;
  }

  .admin-filterbar {
    grid-template-columns: 1fr;
    padding: .6rem;
  }

  .admin-metric-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .admin-metric-card strong {
    font-size: 1.15rem;
  }

  .admin-overview-grid {
    grid-template-columns: 1fr;
  }

  .admin-detail-grid {
    grid-template-columns: 1fr;
  }

  .admin-site-footer .unified-footer-shell {
    grid-template-columns: 1fr;
  }

  .admin-site-footer .footer-logo-link {
    display: none;
  }
}

@media print {
  .admin-site-header,
  .admin-site-footer,
  .admin-tabs,
  .admin-topbar-actions,
  .admin-security-notice,
  .admin-filterbar,
  .table-actions {
    display: none !important;
  }

  .admin-panel:not(.active) {
    display: none !important;
  }

  .admin-table-wrap {
    max-height: none;
    overflow: visible;
    border: 0;
  }
}
```

## `assets/admin-auth.js`

```javascript
(() => {
  "use strict";
  window.WA = window.WA || {};

  const ACTIVE_SESSION_KEY = "wa_admin_active_session";
  const SESSION_MINUTES = 30;

  const roles = Object.freeze({
    system_admin: {
      label: "مدير النظام",
      permissions: ["*"]
    },
    operations_manager: {
      label: "مدير التشغيل",
      permissions: [
        "dashboard.view", "requests.view", "requests.manage", "referrals.view", "referrals.manage",
        "partners.view", "applications.view", "finance.view", "quality.view", "exports.use", "audit.view"
      ]
    },
    partner_manager: {
      label: "مسؤول الشركاء",
      permissions: [
        "dashboard.view", "partners.view", "partners.manage", "applications.view", "applications.manage",
        "discounts.view", "discounts.manage", "referrals.view", "quality.view", "exports.use"
      ]
    },
    customer_service: {
      label: "مسؤول خدمة العملاء",
      permissions: [
        "dashboard.view", "requests.view", "requests.manage", "referrals.view", "referrals.manage",
        "customers.view", "ratings.view", "exports.use"
      ]
    },
    accountant: {
      label: "المحاسب",
      permissions: [
        "dashboard.view", "finance.view", "finance.manage", "partners.view", "referrals.view",
        "objections.view", "exports.use", "audit.view"
      ]
    },
    objection_reviewer: {
      label: "مراجع الاعتراضات",
      permissions: [
        "dashboard.view", "quality.view", "objections.view", "objections.manage", "ratings.view",
        "ratings.manage", "finance.view", "referrals.view", "exports.use", "audit.view"
      ]
    }
  });

  const bootstrapUsers = Object.freeze([
    { id: "ADM-SYS", name: "مدير النظام", username: "sysadmin", role: "system_admin", salt: "wain-system_admin-2026", hash: "bf3eb9fde61c455d99590d441c6082718b52df214046b1e2659ca682661b82be" },
    { id: "ADM-OPS", name: "مدير التشغيل", username: "operations", role: "operations_manager", salt: "wain-operations_manager-2026", hash: "2bbf0c4efa9a4c545b390c10d8f1c0081ffa0457456d37c7cf97d5d7dc0604e1" },
    { id: "ADM-PRT", name: "مسؤول الشركاء", username: "partners", role: "partner_manager", salt: "wain-partner_manager-2026", hash: "5e962a80d21665d884ae9e5217027a812c41417b23b98df729f7d8a0a4b5e497" },
    { id: "ADM-CS", name: "خدمة العملاء", username: "support", role: "customer_service", salt: "wain-customer_service-2026", hash: "665af9db9bc8b8f178ba4babf30ce019b88d8196b804cdfba6070375271d346b" },
    { id: "ADM-FIN", name: "المحاسب", username: "accountant", role: "accountant", salt: "wain-accountant-2026", hash: "2e69ee0b2e68200ebe2cb5f200dfb4d33f16dd6806004aa639c436c5410eb6b8" },
    { id: "ADM-OBJ", name: "مراجع الاعتراضات", username: "reviewer", role: "objection_reviewer", salt: "wain-objection_reviewer-2026", hash: "56677252538a8110de4c56f46f2dd7bd2be9bf81a119a44e48ed56b6933a1b7a" }
  ]);

  const bytesToHex = (buffer) => [...new Uint8Array(buffer)].map((value) => value.toString(16).padStart(2, "0")).join("");
  const fallbackHash = (text) => {
    let h1 = 0xdeadbeef ^ text.length;
    let h2 = 0x41c6ce57 ^ text.length;
    for (let index = 0; index < text.length; index += 1) {
      const code = text.charCodeAt(index);
      h1 = Math.imul(h1 ^ code, 2654435761);
      h2 = Math.imul(h2 ^ code, 1597334677);
    }
    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
    return `${(h2 >>> 0).toString(16).padStart(8, "0")}${(h1 >>> 0).toString(16).padStart(8, "0")}`.repeat(4);
  };
  const hashPassword = async (password, salt) => {
    const text = `${salt}${String(password || "")}`;
    if (window.crypto?.subtle) {
      const buffer = await window.crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
      return bytesToHex(buffer);
    }
    return fallbackHash(text);
  };

  const ensureBootstrapUsers = () => {
    const existing = WA.Storage.get("wa_admin_users");
    bootstrapUsers.forEach((record) => {
      if (existing.some((user) => user.id === record.id || user.username === record.username)) return;
      WA.Storage.upsert("wa_admin_users", {
        id: record.id,
        name: record.name,
        username: record.username,
        role: record.role,
        passwordSalt: record.salt,
        passwordHash: record.hash,
        status: "active",
        mustChangePassword: true,
        failedAttempts: 0,
        lockedUntil: "",
        lastLoginAt: "",
        isBootstrap: true
      });
    });
  };

  const audit = ({ userId = "", action, entityType = "system", entityId = "", before = null, after = null, reason = "", metadata = {} }) => {
    const user = userId ? WA.Storage.findById("wa_admin_users", userId) : null;
    return WA.Storage.upsert("wa_audit_logs", {
      id: WA.Storage.createId("AUD"),
      userId,
      userName: user?.name || "النظام",
      userRole: user?.role || "system",
      action: WA.Storage.sanitizeText(action, 120),
      entityType: WA.Storage.sanitizeText(entityType, 80),
      entityId: WA.Storage.sanitizeText(entityId, 120),
      before: before == null ? null : WA.Storage.deepClone(before),
      after: after == null ? null : WA.Storage.deepClone(after),
      reason: WA.Storage.sanitizeText(reason, 600),
      metadata: WA.Storage.deepClone(metadata),
      at: WA.Storage.now()
    });
  };

  const can = (user, permission) => {
    const allowed = roles[user?.role]?.permissions || [];
    return allowed.includes("*") || allowed.includes(permission);
  };

  const activeToken = () => {
    try { return sessionStorage.getItem(ACTIVE_SESSION_KEY) || ""; }
    catch (_) { return ""; }
  };
  const setActiveToken = (token) => {
    try {
      if (token) sessionStorage.setItem(ACTIVE_SESSION_KEY, token);
      else sessionStorage.removeItem(ACTIVE_SESSION_KEY);
    } catch (_) { /* لا شيء */ }
  };

  const purgeExpiredSessions = () => {
    const now = Date.now();
    WA.Storage.remove("wa_admin_sessions", (session) => !session.expiresAt || new Date(session.expiresAt).getTime() <= now || session.revokedAt);
  };

  const getSessionBundle = () => {
    purgeExpiredSessions();
    const token = activeToken();
    if (!token) return null;
    const session = WA.Storage.get("wa_admin_sessions").find((row) => row.token === token && !row.revokedAt) || null;
    if (!session) return null;
    const user = WA.Storage.findById("wa_admin_users", session.userId);
    if (!user || user.status !== "active") return null;
    const expiresAt = new Date(Date.now() + SESSION_MINUTES * 60_000).toISOString();
    WA.Storage.upsert("wa_admin_sessions", { ...session, lastActivityAt: WA.Storage.now(), expiresAt });
    return { session: { ...session, expiresAt }, user };
  };

  const login = async (username, password) => {
    ensureBootstrapUsers();
    purgeExpiredSessions();
    const normalized = WA.Storage.sanitizeText(username, 80).toLowerCase();
    const user = WA.Storage.get("wa_admin_users").find((row) => String(row.username || "").toLowerCase() === normalized) || null;
    if (!user) {
      audit({ action: "فشل تسجيل دخول", entityType: "admin_user", reason: "اسم مستخدم غير معروف", metadata: { username: normalized } });
      throw new Error("بيانات الدخول غير صحيحة");
    }
    if (user.status !== "active") throw new Error("الحساب غير نشط");
    if (user.lockedUntil && new Date(user.lockedUntil).getTime() > Date.now()) throw new Error("تم إيقاف المحاولات مؤقتًا. حاول لاحقًا");
    const calculated = await hashPassword(password, user.passwordSalt);
    if (calculated !== user.passwordHash) {
      const attempts = Number(user.failedAttempts || 0) + 1;
      const lockedUntil = attempts >= 5 ? new Date(Date.now() + 15 * 60_000).toISOString() : "";
      WA.Storage.upsert("wa_admin_users", { ...user, failedAttempts: attempts >= 5 ? 0 : attempts, lockedUntil });
      audit({ userId: user.id, action: "فشل تسجيل دخول", entityType: "admin_user", entityId: user.id, reason: "كلمة مرور غير صحيحة" });
      throw new Error(lockedUntil ? "تجاوزت المحاولات المسموحة. تم الإيقاف لمدة 15 دقيقة" : "بيانات الدخول غير صحيحة");
    }
    const token = WA.Storage.randomToken("adm");
    const session = WA.Storage.upsert("wa_admin_sessions", {
      id: WA.Storage.createId("ASES"),
      token,
      userId: user.id,
      createdAt: WA.Storage.now(),
      lastActivityAt: WA.Storage.now(),
      expiresAt: new Date(Date.now() + SESSION_MINUTES * 60_000).toISOString(),
      userAgent: navigator.userAgent.slice(0, 250),
      revokedAt: ""
    });
    setActiveToken(token);
    WA.Storage.upsert("wa_admin_users", { ...user, failedAttempts: 0, lockedUntil: "", lastLoginAt: WA.Storage.now() });
    audit({ userId: user.id, action: "تسجيل دخول", entityType: "admin_session", entityId: session.id });
    return { session, user };
  };

  const logout = () => {
    const bundle = getSessionBundle();
    if (bundle) {
      WA.Storage.upsert("wa_admin_sessions", { ...bundle.session, revokedAt: WA.Storage.now() });
      audit({ userId: bundle.user.id, action: "تسجيل خروج", entityType: "admin_session", entityId: bundle.session.id });
    }
    setActiveToken("");
  };

  const requireAuth = (permission = "dashboard.view") => {
    ensureBootstrapUsers();
    const bundle = getSessionBundle();
    if (!bundle) {
      location.replace(`admin-login.html?next=${encodeURIComponent(location.pathname.split("/").pop() || "admin-dashboard.html")}`);
      return null;
    }
    if (!can(bundle.user, permission)) {
      WA.UI?.showToast("ليست لديك صلاحية لهذه الصفحة", "error");
      return null;
    }
    return bundle;
  };

  const createUser = async ({ name, username, role, password }, actor) => {
    if (!can(actor, "*")) throw new Error("غير مصرح بإدارة المستخدمين");
    const cleanUsername = WA.Storage.sanitizeText(username, 80).toLowerCase();
    if (!roles[role]) throw new Error("الدور غير صحيح");
    if (!/^[a-zA-Z0-9._-]{4,40}$/.test(cleanUsername)) throw new Error("اسم المستخدم يجب أن يكون 4 أحرف لاتينية أو أكثر");
    if (String(password || "").length < 10) throw new Error("كلمة المرور يجب ألا تقل عن 10 أحرف");
    if (WA.Storage.get("wa_admin_users").some((row) => row.username === cleanUsername)) throw new Error("اسم المستخدم مستخدم مسبقًا");
    const salt = WA.Storage.randomToken("salt");
    const user = WA.Storage.upsert("wa_admin_users", {
      id: WA.Storage.createId("ADM"),
      name: WA.Storage.sanitizeText(name, 100),
      username: cleanUsername,
      role,
      passwordSalt: salt,
      passwordHash: await hashPassword(password, salt),
      status: "active",
      mustChangePassword: true,
      failedAttempts: 0,
      lockedUntil: "",
      lastLoginAt: "",
      isBootstrap: false
    });
    audit({ userId: actor.id, action: "إنشاء مستخدم إداري", entityType: "admin_user", entityId: user.id, after: { name: user.name, username: user.username, role: user.role, status: user.status } });
    return user;
  };

  const resetPassword = async (userId, password, actor) => {
    if (!can(actor, "*")) throw new Error("غير مصرح بإدارة المستخدمين");
    if (String(password || "").length < 10) throw new Error("كلمة المرور يجب ألا تقل عن 10 أحرف");
    const user = WA.Storage.findById("wa_admin_users", userId);
    if (!user) throw new Error("المستخدم غير موجود");
    const salt = WA.Storage.randomToken("salt");
    const updated = WA.Storage.upsert("wa_admin_users", { ...user, passwordSalt: salt, passwordHash: await hashPassword(password, salt), mustChangePassword: true, failedAttempts: 0, lockedUntil: "" });
    audit({ userId: actor.id, action: "إعادة تعيين كلمة مرور", entityType: "admin_user", entityId: user.id, reason: "إجراء إداري" });
    return updated;
  };

  const updateUser = (userId, patch, actor, reason = "") => {
    if (!can(actor, "*")) throw new Error("غير مصرح بإدارة المستخدمين");
    const user = WA.Storage.findById("wa_admin_users", userId);
    if (!user) throw new Error("المستخدم غير موجود");
    if (patch.role && !roles[patch.role]) throw new Error("الدور غير صحيح");
    const before = { name: user.name, role: user.role, status: user.status };
    const updated = WA.Storage.upsert("wa_admin_users", { ...user, ...patch });
    audit({ userId: actor.id, action: "تعديل مستخدم إداري", entityType: "admin_user", entityId: user.id, before, after: { name: updated.name, role: updated.role, status: updated.status }, reason });
    if (updated.status !== "active") WA.Storage.get("wa_admin_sessions").filter((row) => row.userId === updated.id && !row.revokedAt).forEach((session) => WA.Storage.upsert("wa_admin_sessions", { ...session, revokedAt: WA.Storage.now() }));
    return updated;
  };

  WA.AdminAuth = {
    roles,
    ensureBootstrapUsers,
    hashPassword,
    login,
    logout,
    getSessionBundle,
    requireAuth,
    can,
    audit,
    createUser,
    resetPassword,
    updateUser,
    sessionMinutes: SESSION_MINUTES
  };
})();
```

## `assets/admin-login.js`

```javascript
(() => {
  "use strict";
  const $ = (selector) => document.querySelector(selector);

  const init = () => {
    WA.AdminAuth.ensureBootstrapUsers();
    const existing = WA.AdminAuth.getSessionBundle();
    if (existing) {
      location.replace("admin-dashboard.html");
      return;
    }

    const form = $("#adminLoginForm");
    const submit = $("#adminLoginSubmit");
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      WA.UI.setButtonBusy(submit, true, "جاري التحقق...");
      try {
        await WA.AdminAuth.login($("#adminUsername").value, $("#adminPassword").value);
        WA.UI.showToast("تم تسجيل الدخول", "success");
        const next = new URLSearchParams(location.search).get("next");
        setTimeout(() => location.replace(next && /^admin-[a-z-]+\.html$/.test(next) ? next : "admin-dashboard.html"), 250);
      } catch (error) {
        WA.UI.showToast(error.message || "تعذر تسجيل الدخول", "error");
        $("#adminPassword").value = "";
        $("#adminPassword").focus();
      } finally {
        WA.UI.setButtonBusy(submit, false);
      }
    });
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
})();
```

## `assets/admin-dashboard.js`

```javascript
(() => {
  "use strict";

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const e = (value) => WA.UI.escapeHtml(value == null ? "" : value);
  const money = WA.UI.formatMoney;
  const date = (value) => WA.UI.formatDate(value);
  const state = { bundle: null, activeTab: "overview", action: null, financeView: "fees", qualityView: "objections" };

  const labels = {
    partnership: { active: "نشط", suspended_operations: "موقوف تشغيليًا", suspended_financial: "موقوف ماليًا", cancelled: "ملغى", pending: "بانتظار الاعتماد" },
    payment: { current: "منتظم", awaiting_payment: "بانتظار السداد", overdue: "متأخر", paid: "مسدد" },
    application: { submitted: "قيد المراجعة", approved: "معتمد", rejected: "مرفوض", cancelled: "ملغى" },
    fee: { pending: "غير مفوتر", statemented: "مرحّل", invoiced_due: "مفوتر", disputed: "معلق للاعتراض", paid: "مسدد", exempt: "معفى", cancelled: "ملغى" },
    invoice: { statement_only: "كشف مرحّل", payment_required: "واجب السداد", overdue: "متأخر", paid: "مسدد", under_review: "تحت المراجعة", rolled_forward: "مرحّل", cancelled: "ملغى" },
    objection: { new: "جديد", under_review: "قيد المراجعة", waiting_information: "بانتظار معلومات", accepted: "مقبول", accepted_partial: "مقبول جزئيًا", rejected: "مرفوض", closed: "مغلق" },
    rating: { published: "منشور", under_review: "تحت المراجعة", excluded: "غير محتسب", hidden: "مخفي" },
    discount: { approved: "معتمد", paused: "موقوف", rejected: "مرفوض" }
  };

  const can = (permission) => WA.AdminAuth.can(state.bundle?.user, permission);
  const roleLabel = (role) => WA.AdminAuth.roles[role]?.label || role;
  const badge = (text, kind = "") => `<span class="status-badge ${kind}">${e(text)}</span>`;
  const statusKind = (value) => /active|approved|paid|published|confirmed|service_received/.test(value || "") ? "success" : /overdue|suspended|rejected|cancelled|disputed|under_review|no_match/.test(value || "") ? "danger" : /pending|awaiting|submitted|new|statement/.test(value || "") ? "warning" : "";
  const rowEmpty = (colspan, text) => `<tr><td colspan="${colspan}"><div class="empty-state admin-empty"><h3>${e(text)}</h3></div></td></tr>`;
  const currentUser = () => state.bundle.user;

  const tables = () => ({
    customers: WA.Storage.get("wa_customers"), vehicles: WA.Storage.get("wa_vehicles"), requests: WA.Storage.get("wa_requests"),
    partners: WA.Storage.get("wa_partners"), referrals: WA.Storage.get("wa_referrals"), ratings: WA.Storage.get("wa_ratings"),
    objections: WA.Storage.get("wa_objections"), discounts: WA.Storage.get("wa_discounts"), fees: WA.Storage.get("wa_fees"),
    invoices: WA.Storage.get("wa_invoices"), payments: WA.Storage.get("wa_payments"), applications: WA.Storage.get("wa_join_applications"),
    users: WA.Storage.get("wa_admin_users"), audit: WA.Storage.get("wa_audit_logs")
  });

  const requestBundle = (request, data = tables()) => {
    const customer = data.customers.find((row) => row.id === request.customerId) || null;
    const vehicle = data.vehicles.find((row) => row.id === request.vehicleId) || request.vehicleSnapshot || null;
    const referrals = data.referrals.filter((row) => row.requestId === request.id).sort((a, b) => Number(a.order || 0) - Number(b.order || 0));
    const active = referrals.find((row) => row.id === request.activeReferralId) || referrals[referrals.length - 1] || null;
    const partner = active ? data.partners.find((row) => row.id === active.partnerId) : null;
    return { request, customer, vehicle, referrals, active, partner };
  };

  const audit = (action, entityType, entityId, before, after, reason, metadata = {}) => WA.AdminAuth.audit({ userId: currentUser().id, action, entityType, entityId, before, after, reason, metadata });

  const openDetail = (title, html) => {
    $("#adminDetailTitle").textContent = title;
    $("#adminDetailBody").innerHTML = html;
    WA.UI.decorateIcons($("#adminDetailBody"));
    $("#adminDetailDialog").showModal();
  };

  const closeDialog = (id) => {
    const dialog = document.getElementById(id);
    if (dialog?.open) dialog.close();
  };

  const confirmAction = ({ title, description, extra = "", handler }) => {
    state.action = handler;
    $("#adminActionTitle").textContent = title;
    $("#adminActionDescription").textContent = description;
    $("#adminActionExtra").innerHTML = extra;
    $("#adminActionReason").value = "";
    $("#adminActionDialog").showModal();
    setTimeout(() => $("#adminActionReason").focus(), 50);
  };

  const detailGrid = (items) => `<div class="guidance-grid admin-detail-grid">${items.map(([label, value]) => `<div class="guidance-item"><span>${e(label)}</span><strong>${e(value || "—")}</strong></div>`).join("")}</div>`;

  const renderMetrics = () => {
    const data = tables();
    const openRequests = data.requests.filter((row) => !["rated", "administratively_closed", "finally_closed"].includes(row.status)).length;
    const noMatch = data.requests.filter((row) => row.status === "no_match").length;
    const serviceReceived = data.referrals.filter((row) => row.serviceReceivedAt).length;
    const activePartners = data.partners.filter((row) => row.partnershipStatus === "active").length;
    const openObjections = data.objections.filter((row) => !["accepted", "accepted_partial", "rejected", "closed"].includes(row.status)).length;
    const outstanding = data.fees.filter((row) => !["paid", "exempt", "cancelled"].includes(row.status)).reduce((sum, row) => sum + Number(row.amount || 0), 0);
    const overdue = data.invoices.filter((row) => row.status === "overdue").reduce((sum, row) => sum + Number(row.amount || 0), 0);
    const pendingApps = data.applications.filter((row) => row.status === "submitted").length;
    const items = [
      ["إجمالي الطلبات", data.requests.length, "من جميع السجلات"], ["طلبات مفتوحة", openRequests, "تحتاج متابعة"],
      ["دون شريك مناسب", noMatch, "فجوات تغطية"], ["الخدمات المؤكدة", serviceReceived, "إحالات تلقّت الخدمة"],
      ["الشركاء النشطون", activePartners, "متاحون للمطابقة"], ["طلبات انضمام", pendingApps, "بانتظار المراجعة"],
      ["اعتراضات مفتوحة", openObjections, "تحتاج قرارًا"], ["رصيد غير مسدد", money(outstanding), `متأخر منه ${money(overdue)}`]
    ];
    $("#adminMetrics").innerHTML = items.map(([label, value, hint]) => `<article class="admin-metric-card"><span>${e(label)}</span><strong>${e(value)}</strong><small>${e(hint)}</small></article>`).join("");

    const financeItems = [
      ["رسوم مسجلة", data.fees.length],
      ["إجمالي الرسوم", money(data.fees.reduce((sum, row) => sum + Number(row.amount || 0), 0))],
      ["غير مسدد", money(outstanding)],
      ["مدفوعات", money(data.payments.filter((row) => row.status === "paid").reduce((sum, row) => sum + Number(row.amount || 0), 0))]
    ];
    $("#financeMetrics").innerHTML = financeItems.map(([label, value]) => `<article class="admin-metric-card"><span>${e(label)}</span><strong>${e(value)}</strong></article>`).join("");
  };

  const renderOverview = () => {
    const data = tables();
    const latest = [...data.requests]
      .filter((row) => !["rated", "finally_closed"].includes(row.status))
      .sort((a, b) => new Date(b.lastActivityAt || b.updatedAt || 0) - new Date(a.lastActivityAt || a.updatedAt || 0))
      .slice(0, 7);
    $("#overviewRequests").innerHTML = latest.length ? latest.map((request) => {
      const bundle = requestBundle(request, data);
      return `<button class="admin-list-row" type="button" data-action="request-view" data-id="${e(request.id)}"><span><strong>${e(request.humanId || request.id)}</strong><small>${e(bundle.customer?.firstName || "—")} — ${e(request.city || "—")}</small></span>${badge(WA.UI.statusLabel(request.status), statusKind(request.status))}</button>`;
    }).join("") : '<div class="empty-state admin-empty"><h3>لا توجد طلبات للمتابعة</h3></div>';
    const issues = WA.Storage.integrityCheck();
    $("#integrityResult").innerHTML = issues.length
      ? `<div class="error-panel"><strong>تم العثور على ${issues.length} ملاحظة</strong><ul>${issues.slice(0, 12).map((issue) => `<li>${e(issue)}</li>`).join("")}</ul></div>`
      : '<div class="success-panel"><strong>العلاقات سليمة</strong><p>لم يعثر الفحص الحالي على سجلات مرتبطة بمعرفات مفقودة.</p></div>';
  };

  const renderRequests = () => {
    const data = tables();
    const term = $("#requestSearch").value.trim().toLowerCase();
    const service = $("#requestServiceFilter").value;
    const status = $("#requestStatusFilter").value;
    const rows = [...data.requests].filter((request) => {
      const bundle = requestBundle(request, data);
      const hay = [request.humanId, request.id, request.city, request.region, bundle.customer?.firstName, bundle.customer?.phone, bundle.vehicle?.make, bundle.vehicle?.model].join(" ").toLowerCase();
      return (!term || hay.includes(term)) && (!service || request.serviceType === service) && (!status || request.status === status);
    }).sort((a, b) => new Date(b.updatedAt || b.createdAt || 0) - new Date(a.updatedAt || a.createdAt || 0));
    $("#requestsTableBody").innerHTML = rows.length ? rows.map((request) => {
      const bundle = requestBundle(request, data);
      const actions = [`<button class="btn btn-light btn-sm" type="button" data-action="request-view" data-id="${e(request.id)}">عرض</button>`];
      if (can("requests.manage")) {
        if (["administratively_closed", "finally_closed"].includes(request.status)) actions.push(`<button class="btn btn-light btn-sm" type="button" data-action="request-reopen" data-id="${e(request.id)}">إعادة فتح</button>`);
        else actions.push(`<button class="btn btn-light btn-sm" type="button" data-action="request-close" data-id="${e(request.id)}">إغلاق إداري</button>`);
        if ((bundle.referrals.length < WA.Config.maxReferralsPerRequest) && request.status !== "finally_closed") actions.push(`<button class="btn btn-warning btn-sm" type="button" data-action="request-alternative" data-id="${e(request.id)}">شريك بديل</button>`);
      }
      return `<tr>
        <td><strong>${e(request.humanId || request.id)}</strong><small>${e(request.id)}</small></td>
        <td><strong>${e(bundle.customer?.firstName || "—")}</strong><small dir="ltr">${e(bundle.customer?.phone || "—")}</small><small>${e(WA.UI.vehicleText(bundle.vehicle || {}))}</small></td>
        <td><strong>${e(WA.UI.serviceLabel(request.serviceType))}</strong><small>${e(request.region || "")} — ${e(request.city || "—")}</small></td>
        <td>${badge(WA.UI.statusLabel(request.status), statusKind(request.status))}</td>
        <td><strong>${bundle.referrals.length}</strong><small>${e(bundle.partner?.name || "لا يوجد شريك حالي")}</small></td>
        <td>${e(date(request.lastActivityAt || request.updatedAt || request.createdAt))}</td>
        <td><div class="table-actions">${actions.join("")}</div></td>
      </tr>`;
    }).join("") : rowEmpty(7, "لا توجد طلبات مطابقة للفلاتر");
  };

  const partnerBalance = (partnerId, data) => data.fees.filter((fee) => fee.partnerId === partnerId && !["paid", "exempt", "cancelled"].includes(fee.status)).reduce((sum, fee) => sum + Number(fee.amount || 0), 0);
  const renderPartners = () => {
    const data = tables();
    const term = $("#partnerSearch").value.trim().toLowerCase();
    const type = $("#partnerTypeFilter").value;
    const status = $("#partnerStatusFilter").value;
    const rows = [...data.partners].filter((partner) => {
      const hay = [partner.name, partner.tradeName, partner.city, partner.region, partner.whatsapp].join(" ").toLowerCase();
      return (!term || hay.includes(term)) && (!type || partner.type === type) && (!status || partner.partnershipStatus === status);
    }).sort((a, b) => String(a.name).localeCompare(String(b.name), "ar"));
    $("#partnersTableBody").innerHTML = rows.length ? rows.map((partner) => {
      const actions = [`<button class="btn btn-light btn-sm" type="button" data-action="partner-view" data-id="${e(partner.id)}">عرض</button>`];
      if (can("partners.manage")) {
        if (partner.partnershipStatus === "active") actions.push(`<button class="btn btn-warning btn-sm" type="button" data-action="partner-suspend" data-id="${e(partner.id)}">تعليق</button>`);
        else actions.push(`<button class="btn btn-primary btn-sm" type="button" data-action="partner-activate" data-id="${e(partner.id)}">تفعيل</button>`);
      }
      if (can("finance.manage")) actions.push(`<button class="btn btn-light btn-sm" type="button" data-action="partner-invoice" data-id="${e(partner.id)}">إصدار فاتورة</button>`);
      return `<tr><td><strong>${e(partner.name)}</strong><small dir="ltr">${e(partner.whatsapp || "—")}</small></td><td><strong>${e(WA.Config.partnerTypes[partner.type] || partner.type)}</strong><small>${e(partner.region || "")} — ${e(partner.city || "—")}</small></td><td><strong>${e(partner.trustScore ?? "—")}</strong><small>${e(partner.ratingOverall ?? "—")} / 5 من ${e(partner.ratingCount || 0)}</small></td><td>${badge(labels.partnership[partner.partnershipStatus] || partner.partnershipStatus, statusKind(partner.partnershipStatus))}</td><td>${badge(labels.payment[partner.paymentStatus] || partner.paymentStatus, statusKind(partner.paymentStatus))}</td><td>${e(money(partnerBalance(partner.id, data)))}</td><td><div class="table-actions">${actions.join("")}</div></td></tr>`;
    }).join("") : rowEmpty(7, "لا يوجد شركاء مطابقون للفلاتر");
  };

  const applicationDocumentStatus = (application) => {
    if (application.partnerType === "tow") return application.documents?.operationCardNumber ? "بطاقة تشغيل مسجلة" : "بطاقة التشغيل ناقصة";
    return application.documents?.commercialRegistration ? "سجل تجاري مسجل" : "السجل التجاري ناقص";
  };
  const renderApplications = () => {
    const data = tables();
    const term = $("#applicationSearch").value.trim().toLowerCase();
    const status = $("#applicationStatusFilter").value;
    const rows = [...data.applications].filter((application) => {
      const hay = [application.applicationNumber, application.businessName, application.tradeName, application.city, application.phone].join(" ").toLowerCase();
      return (!term || hay.includes(term)) && (!status || application.status === status);
    }).sort((a, b) => new Date(b.submittedAt || b.createdAt || 0) - new Date(a.submittedAt || a.createdAt || 0));
    $("#applicationsTableBody").innerHTML = rows.length ? rows.map((application) => {
      const actions = [`<button class="btn btn-light btn-sm" type="button" data-action="application-view" data-id="${e(application.id)}">عرض</button>`];
      if (can("applications.manage") && application.status === "submitted") {
        actions.push(`<button class="btn btn-primary btn-sm" type="button" data-action="application-approve" data-id="${e(application.id)}">اعتماد</button>`);
        actions.push(`<button class="btn btn-danger btn-sm" type="button" data-action="application-reject" data-id="${e(application.id)}">رفض</button>`);
      }
      return `<tr><td><strong>${e(application.applicationNumber || application.id)}</strong></td><td><strong>${e(application.tradeName || application.businessName)}</strong><small dir="ltr">${e(application.phone || "—")}</small></td><td><strong>${e(WA.Config.partnerTypes[application.partnerType] || application.partnerType)}</strong><small>${e(application.region || "")} — ${e(application.city || "—")}</small></td><td>${e(applicationDocumentStatus(application))}</td><td>${badge(labels.application[application.status] || application.statusLabel || application.status, statusKind(application.status))}</td><td>${e(date(application.submittedAt || application.createdAt))}</td><td><div class="table-actions">${actions.join("")}</div></td></tr>`;
    }).join("") : rowEmpty(7, "لا توجد طلبات انضمام مطابقة");
  };

  const renderFinance = () => {
    const data = tables();
    $("#feesTableBody").innerHTML = data.fees.length ? [...data.fees].sort((a, b) => new Date(b.earnedAt || b.createdAt || 0) - new Date(a.earnedAt || a.createdAt || 0)).map((fee) => {
      const partner = data.partners.find((row) => row.id === fee.partnerId);
      const referral = data.referrals.find((row) => row.id === fee.referralId);
      const request = referral ? data.requests.find((row) => row.id === referral.requestId) : null;
      const actions = [];
      if (can("finance.manage") && !["paid", "exempt"].includes(fee.status)) actions.push(`<button class="btn btn-warning btn-sm" type="button" data-action="fee-exempt" data-id="${e(fee.id)}">إعفاء</button>`);
      if (can("finance.manage") && fee.status === "exempt") actions.push(`<button class="btn btn-light btn-sm" type="button" data-action="fee-restore" data-id="${e(fee.id)}">إعادة الرسم</button>`);
      return `<tr><td><strong>${e(fee.id)}</strong></td><td>${e(partner?.name || fee.partnerId)}</td><td><strong>${e(request?.humanId || "—")}</strong><small>${e(referral?.id || fee.referralId)}</small></td><td>${e(WA.Lifecycle.bandLabel(fee.costBand))}</td><td><strong>${e(money(fee.amount))}</strong></td><td>${badge(labels.fee[fee.status] || fee.status, statusKind(fee.status))}</td><td>${e(date(fee.earnedAt || fee.createdAt))}</td><td><div class="table-actions">${actions.join("") || "—"}</div></td></tr>`;
    }).join("") : rowEmpty(8, "لا توجد رسوم وساطة مسجلة");

    $("#invoicesTableBody").innerHTML = data.invoices.length ? [...data.invoices].sort((a, b) => new Date(b.issuedAt || b.createdAt || 0) - new Date(a.issuedAt || a.createdAt || 0)).map((invoice) => {
      const partner = data.partners.find((row) => row.id === invoice.partnerId);
      const actions = [`<button class="btn btn-light btn-sm" type="button" data-action="invoice-view" data-id="${e(invoice.id)}">عرض</button>`];
      if (can("finance.manage") && ["payment_required", "overdue"].includes(invoice.status) && Number(invoice.amount || 0) > 0) actions.push(`<button class="btn btn-primary btn-sm" type="button" data-action="invoice-pay" data-id="${e(invoice.id)}">تسجيل سداد</button>`);
      return `<tr><td><strong>${e(invoice.number || invoice.id)}</strong></td><td>${e(partner?.name || invoice.partnerId)}</td><td>${e(invoice.cycle || "—")}</td><td><strong>${e(money(invoice.amount))}</strong></td><td>${e(invoice.dueAt ? date(invoice.dueAt) : "يُرحّل")}</td><td>${e(invoice.objectionDeadline ? date(invoice.objectionDeadline) : "—")}</td><td>${badge(labels.invoice[invoice.status] || invoice.status, statusKind(invoice.status))}</td><td><div class="table-actions">${actions.join("")}</div></td></tr>`;
    }).join("") : rowEmpty(8, "لا توجد فواتير أو كشوف حساب");

    $("#paymentsTableBody").innerHTML = data.payments.length ? [...data.payments].sort((a, b) => new Date(b.paidAt || b.createdAt || 0) - new Date(a.paidAt || a.createdAt || 0)).map((payment) => {
      const partner = data.partners.find((row) => row.id === payment.partnerId);
      const invoice = data.invoices.find((row) => row.id === payment.invoiceId);
      return `<tr><td><strong>${e(payment.id)}</strong></td><td>${e(partner?.name || payment.partnerId)}</td><td>${e(invoice?.number || payment.invoiceId || "—")}</td><td><strong>${e(money(payment.amount))}</strong></td><td>${e(payment.method || "—")}</td><td>${e(payment.receiptNumber || "—")}</td><td>${e(date(payment.paidAt || payment.createdAt))}</td></tr>`;
    }).join("") : rowEmpty(7, "لا توجد مدفوعات مسجلة");
  };

  const renderQuality = () => {
    const data = tables();
    $("#objectionsTableBody").innerHTML = data.objections.length ? [...data.objections].sort((a, b) => new Date(b.submittedAt || b.createdAt || 0) - new Date(a.submittedAt || a.createdAt || 0)).map((objection) => {
      const partner = data.partners.find((row) => row.id === objection.partnerId);
      const request = data.requests.find((row) => row.id === objection.requestId);
      const actions = [`<button class="btn btn-light btn-sm" type="button" data-action="objection-view" data-id="${e(objection.id)}">عرض</button>`];
      if (can("objections.manage") && !["accepted", "accepted_partial", "rejected", "closed"].includes(objection.status)) {
        actions.push(`<button class="btn btn-primary btn-sm" type="button" data-action="objection-accept" data-id="${e(objection.id)}">قبول</button>`);
        actions.push(`<button class="btn btn-warning btn-sm" type="button" data-action="objection-partial" data-id="${e(objection.id)}">قبول جزئي</button>`);
        actions.push(`<button class="btn btn-danger btn-sm" type="button" data-action="objection-reject" data-id="${e(objection.id)}">رفض</button>`);
      }
      return `<tr><td><strong>${e(objection.id)}</strong></td><td>${e(objection.type || "—")}</td><td><strong>${e(partner?.name || objection.partnerId || "—")}</strong><small>${e(request?.humanId || objection.requestId || objection.invoiceId || "—")}</small></td><td>${e(objection.reason || "—")}</td><td>${badge(labels.objection[objection.status] || objection.status, statusKind(objection.status))}</td><td>${e(date(objection.submittedAt || objection.createdAt))}</td><td><div class="table-actions">${actions.join("")}</div></td></tr>`;
    }).join("") : rowEmpty(7, "لا توجد اعتراضات مسجلة");

    $("#ratingsTableBody").innerHTML = data.ratings.length ? [...data.ratings].sort((a, b) => new Date(b.submittedAt || b.createdAt || 0) - new Date(a.submittedAt || a.createdAt || 0)).map((rating) => {
      const partner = data.partners.find((row) => row.id === rating.partnerId);
      const request = data.requests.find((row) => row.id === rating.requestId);
      const actions = [];
      if (can("ratings.manage")) actions.push(`<button class="btn btn-light btn-sm" type="button" data-action="rating-toggle" data-id="${e(rating.id)}">${rating.status === "published" ? "إخفاء" : "إعادة النشر"}</button>`);
      return `<tr><td><strong>${e(rating.id)}</strong></td><td>${e(partner?.name || rating.partnerId)}</td><td>${e(request?.humanId || rating.requestId)}</td><td><strong>${e(rating.overall)} / 5</strong></td><td>${e(rating.fairness)} / 5</td><td>${badge(labels.rating[rating.status] || rating.status, statusKind(rating.status))}</td><td>${e(date(rating.submittedAt || rating.createdAt))}</td><td><div class="table-actions">${actions.join("") || "—"}</div></td></tr>`;
    }).join("") : rowEmpty(8, "لا توجد تقييمات مسجلة");

    $("#discountsTableBody").innerHTML = data.discounts.length ? [...data.discounts].sort((a, b) => new Date(b.updatedAt || b.createdAt || 0) - new Date(a.updatedAt || a.createdAt || 0)).map((discount) => {
      const partner = data.partners.find((row) => row.id === discount.partnerId);
      const actions = [];
      if (can("discounts.manage")) actions.push(`<button class="btn btn-light btn-sm" type="button" data-action="discount-toggle" data-id="${e(discount.id)}">${discount.status === "approved" ? "إيقاف" : "اعتماد"}</button>`);
      return `<tr><td><strong>${e(discount.title || discount.id)}</strong></td><td>${e(partner?.name || discount.partnerId)}</td><td><strong>${e(discount.percent)}%</strong><small>${e(discount.scope === "all" ? "جميع الخدمات" : (discount.includedServices || []).join("، "))}</small></td><td>${e(discount.continuousUntilStopped ? "مستمر حتى الإيقاف" : `حتى ${discount.endsAt || "—"}`)}</td><td>${badge(labels.discount[discount.status] || discount.status, statusKind(discount.status))}</td><td>${e(date(discount.updatedAt || discount.createdAt))}</td><td><div class="table-actions">${actions.join("") || "—"}</div></td></tr>`;
    }).join("") : rowEmpty(7, "لا توجد خصومات مسجلة");
  };

  const renderUsers = () => {
    const users = WA.Storage.get("wa_admin_users");
    $("#usersTableBody").innerHTML = users.length ? users.map((user) => `<tr><td><strong>${e(user.name)}</strong><small>${e(user.id)}</small></td><td dir="ltr">${e(user.username)}</td><td>${e(roleLabel(user.role))}</td><td>${badge(user.status === "active" ? "نشط" : "معطل", user.status === "active" ? "success" : "danger")}</td><td>${e(user.lastLoginAt ? date(user.lastLoginAt) : "لم يسجل الدخول")}</td><td><div class="table-actions"><button class="btn btn-light btn-sm" type="button" data-action="user-edit" data-id="${e(user.id)}">تعديل</button><button class="btn btn-light btn-sm" type="button" data-action="user-reset" data-id="${e(user.id)}">تغيير كلمة المرور</button></div></td></tr>`).join("") : rowEmpty(6, "لا يوجد مستخدمون إداريون");
  };

  const renderAudit = () => {
    const term = $("#auditSearch").value.trim().toLowerCase();
    const entity = $("#auditEntityFilter").value;
    const rows = WA.Storage.get("wa_audit_logs").filter((log) => {
      const hay = [log.userName, log.action, log.entityType, log.entityId, log.reason].join(" ").toLowerCase();
      return (!term || hay.includes(term)) && (!entity || log.entityType === entity);
    }).sort((a, b) => new Date(b.at || b.createdAt || 0) - new Date(a.at || a.createdAt || 0));
    $("#auditTableBody").innerHTML = rows.length ? rows.map((log) => `<tr><td>${e(date(log.at || log.createdAt))}</td><td><strong>${e(log.userName || "النظام")}</strong><small>${e(roleLabel(log.userRole))}</small></td><td>${e(log.action)}</td><td><strong>${e(log.entityType)}</strong><small>${e(log.entityId || "—")}</small></td><td>${e(log.reason || "—")}</td><td><button class="btn btn-light btn-sm" type="button" data-action="audit-view" data-id="${e(log.id)}">عرض</button></td></tr>`).join("") : rowEmpty(6, "لا توجد سجلات تدقيق مطابقة");
  };

  const renderAll = () => {
    WA.Lifecycle.runSweep();
    renderMetrics();
    renderOverview();
    renderRequests();
    renderPartners();
    renderApplications();
    renderFinance();
    renderQuality();
    if (can("*")) renderUsers();
    if (can("audit.view")) renderAudit();
    WA.UI.decorateIcons(document);
  };

  const showRequest = (id) => {
    const data = tables();
    const request = data.requests.find((row) => row.id === id);
    if (!request) return;
    const bundle = requestBundle(request, data);
    const referrals = bundle.referrals.map((referral) => {
      const partner = data.partners.find((row) => row.id === referral.partnerId);
      return `<li><strong>${e(referral.id)}</strong> — ${e(partner?.name || referral.partnerId)} — ${e(WA.UI.statusLabel(referral.status, "referral"))} — ${e(date(referral.createdAt))}</li>`;
    }).join("") || "<li>لا توجد إحالات.</li>";
    openDetail(`الطلب ${request.humanId || request.id}`, `${detailGrid([
      ["العميل", `${bundle.customer?.firstName || "—"} — ${bundle.customer?.phone || "—"}`], ["السيارة", WA.UI.vehicleText(bundle.vehicle || {})],
      ["الخدمة", WA.UI.serviceLabel(request.serviceType)], ["الموقع", `${request.region || ""} — ${request.city || "—"}`],
      ["الحالة", WA.UI.statusLabel(request.status)], ["المشكلة/الاحتياج", request.problem || request.partName || request.maintenanceService || request.placeDescription || "—"],
      ["التخصص", request.ai?.specialty || "—"], ["الاستعجال", request.ai?.urgency || (request.serviceType === "tow" ? "عاجلة" : "—")]
    ])}<h3 class="mt-16">الإحالات</h3><ul class="admin-detail-list">${referrals}</ul>`);
  };

  const showPartner = (id) => {
    const data = tables();
    const partner = data.partners.find((row) => row.id === id);
    if (!partner) return;
    const referrals = data.referrals.filter((row) => row.partnerId === id).length;
    const ratings = data.ratings.filter((row) => row.partnerId === id && row.status === "published");
    openDetail(partner.name, detailGrid([
      ["النوع", WA.Config.partnerTypes[partner.type] || partner.type], ["الموقع", `${partner.region || ""} — ${partner.city || "—"} — ${partner.address || ""}`],
      ["واتساب", partner.whatsapp || "—"], ["حالة الشراكة", labels.partnership[partner.partnershipStatus] || partner.partnershipStatus],
      ["حالة السداد", labels.payment[partner.paymentStatus] || partner.paymentStatus], ["مؤشر الثقة", partner.trustScore ?? "—"],
      ["الإحالات", referrals], ["التقييمات المنشورة", ratings.length], ["التغطية", (partner.coverageCities || []).join("، ")],
      ["التخصصات", (partner.specialtiesPriority || partner.specialties || []).join("، ")], ["العلامات", (partner.makesPriority || partner.servedMakes || []).join("، ")]
    ]));
  };

  const showApplication = (id) => {
    const app = WA.Storage.findById("wa_join_applications", id);
    if (!app) return;
    openDetail(`طلب الانضمام ${app.applicationNumber || app.id}`, `${detailGrid([
      ["المنشأة", app.tradeName || app.businessName], ["النوع", WA.Config.partnerTypes[app.partnerType] || app.partnerType],
      ["الموقع", `${app.region || ""} — ${app.city || "—"} — ${app.address || ""}`], ["واتساب", app.phone],
      ["السجل التجاري", app.documents?.commercialRegistration || "غير مطلوب/غير مسجل"], ["بطاقة التشغيل", app.documents?.operationCardNumber || "غير مطلوبة/غير مسجلة"],
      ["مدن التغطية", (app.coverageCities || []).join("، ")], ["الحالة", labels.application[app.status] || app.statusLabel || app.status]
    ])}<h3 class="mt-16">وصف النشاط</h3><p>${e(app.description || "—")}</p>`);
  };

  const showInvoice = (id) => {
    const data = tables();
    const invoice = data.invoices.find((row) => row.id === id);
    if (!invoice) return;
    const partner = data.partners.find((row) => row.id === invoice.partnerId);
    const feeRows = (invoice.feeIds || []).map((feeId) => data.fees.find((row) => row.id === feeId)).filter(Boolean);
    openDetail(`الفاتورة ${invoice.number || invoice.id}`, `${detailGrid([
      ["الشريك", partner?.name || invoice.partnerId], ["الدورة", invoice.cycle || "—"], ["الإجمالي", money(invoice.amount)],
      ["الحالة", labels.invoice[invoice.status] || invoice.status], ["تاريخ الإصدار", date(invoice.issuedAt || invoice.createdAt)],
      ["تاريخ الاستحقاق", invoice.dueAt ? date(invoice.dueAt) : "يُرحّل"], ["نهاية الاعتراض", invoice.objectionDeadline ? date(invoice.objectionDeadline) : "—"]
    ])}<h3 class="mt-16">العمليات (${feeRows.length})</h3><ul class="admin-detail-list">${feeRows.map((fee) => `<li>${e(fee.id)} — ${e(WA.Lifecycle.bandLabel(fee.costBand))} — ${e(money(fee.amount))}</li>`).join("") || "<li>لا توجد عمليات.</li>"}</ul>`);
  };

  const showObjection = (id) => {
    const objection = WA.Storage.findById("wa_objections", id);
    if (!objection) return;
    openDetail(`الاعتراض ${objection.id}`, `${detailGrid([
      ["النوع", objection.type], ["الحالة", labels.objection[objection.status] || objection.status], ["الشريك", objection.partnerId],
      ["الطلب", objection.requestId || "—"], ["الإحالة", objection.referralId || "—"], ["الفاتورة", objection.invoiceId || "—"],
      ["السبب", objection.reason], ["القرار", objection.decision || "لم يصدر قرار"]
    ])}<h3 class="mt-16">التوضيح</h3><p>${e(objection.details || "—")}</p>`);
  };

  const showAudit = (id) => {
    const log = WA.Storage.findById("wa_audit_logs", id);
    if (!log) return;
    openDetail(`سجل التدقيق ${log.id}`, `${detailGrid([
      ["المستخدم", `${log.userName || "النظام"} — ${roleLabel(log.userRole)}`], ["الإجراء", log.action], ["نوع السجل", log.entityType],
      ["رقم السجل", log.entityId || "—"], ["التاريخ", date(log.at || log.createdAt)], ["السبب", log.reason || "—"]
    ])}<div class="admin-json-compare"><section><h3>القيمة السابقة</h3><pre>${e(JSON.stringify(log.before, null, 2) || "—")}</pre></section><section><h3>القيمة الجديدة</h3><pre>${e(JSON.stringify(log.after, null, 2) || "—")}</pre></section></div>`);
  };

  const alternativeRequest = (request, reason) => {
    const before = WA.Storage.deepClone(request);
    const excluded = WA.Lifecycle.requestAlternative(request.id, reason);
    const current = WA.Storage.findById("wa_requests", request.id);
    const matched = WA.Matching.match({ request: current, excludedPartnerIds: excluded });
    if (!matched.partner) {
      const updated = WA.Storage.upsert("wa_requests", { ...current, status: "no_match", noMatchReason: matched.reason });
      audit("طلب شريك بديل — دون تطابق", "request", request.id, before, updated, reason);
      WA.UI.showToast("لم يوجد شريك بديل مطابق حاليًا", "info");
      return;
    }
    const referral = WA.Lifecycle.createReferral(request.id, matched.partner.id, matched.reason);
    const updated = WA.Storage.findById("wa_requests", request.id);
    audit("إنشاء إحالة بديلة", "request", request.id, before, updated, reason, { referralId: referral.id, partnerId: matched.partner.id });
    WA.UI.showToast("تم إنشاء إحالة بديلة", "success");
  };

  const applicationToPartner = (application) => {
    const existing = WA.Storage.get("wa_partners").find((row) => row.applicationId === application.id);
    if (existing) return existing;
    const type = application.partnerType;
    const services = type === "maintenance" ? (application.maintenanceServices || [])
      : type === "parts" ? ["الاستفسار عن قطع الغيار", ...(application.partTypes || []).map((item) => `قطع ${item}`)]
        : type === "tow" ? ["طلبات عاجلة", "نقل وسحب المركبات"]
          : (application.specialtiesPriority || []);
    return WA.Storage.upsert("wa_partners", {
      id: WA.Storage.createId("PARTNER"), applicationId: application.id, type,
      name: application.tradeName || application.businessName, tradeName: application.tradeName || application.businessName,
      description: application.description || "", region: application.region, city: application.city, address: application.address,
      googleMapsUrl: application.googleMapsUrl, whatsapp: application.phone, secondaryPhone: application.secondaryPhone || "",
      commercialRegistration: application.documents?.commercialRegistration || "", operationCardNumber: application.documents?.operationCardNumber || "",
      operationCardExpiry: application.documents?.operationCardExpiry || "", towVehiclePlate: application.documents?.towVehiclePlate || "",
      schedule: application.schedule || [], specialties: application.specialtiesPriority || [], specialtiesPriority: application.specialtiesPriority || [],
      services, servedMakes: application.makesPriority || [], makesPriority: application.makesPriority || [], fuelTypes: application.fuelTypes || [],
      coverageCities: application.coverageCities || [application.city], towVehicleTypes: application.towVehicleTypes ? [application.towVehicleTypes] : [],
      partTypes: application.partTypes || [], availability: { status: "typical", note: "الشريك يستقبل عادةً هذا النوع من الطلبات، ويرجى التأكد من الموعد عبر واتساب." },
      ratingOverall: 0, ratingCount: 0, fairnessRating: 0, fairnessCount: 0, commitment: "جديد", responseScore: 0, trustScore: 50,
      partnershipStatus: "active", paymentStatus: "current", acceptsUrgent: type === "tow", isDemo: false
    });
  };

  const resolveObjection = (objection, decision, reason) => {
    const before = WA.Storage.deepClone(objection);
    const status = decision === "accepted" ? "accepted" : decision === "partial" ? "accepted_partial" : "rejected";
    const updated = WA.Storage.upsert("wa_objections", { ...objection, status, decision: reason, decidedBy: currentUser().id, decidedAt: WA.Storage.now(), closedAt: WA.Storage.now() });
    const referral = objection.referralId ? WA.Storage.findById("wa_referrals", objection.referralId) : null;
    const fee = referral ? WA.Storage.get("wa_fees").find((row) => row.referralId === referral.id) : null;
    const rating = objection.ratingId ? WA.Storage.findById("wa_ratings", objection.ratingId) : null;
    const invoice = objection.invoiceId ? WA.Storage.findById("wa_invoices", objection.invoiceId) : null;
    if (decision === "accepted") {
      if (fee && fee.status !== "paid") WA.Storage.upsert("wa_fees", { ...fee, status: "exempt", exemptedAt: WA.Storage.now(), exemptionReason: reason });
      if (rating) WA.Storage.upsert("wa_ratings", { ...rating, status: "excluded", moderationReason: reason });
      if (invoice) WA.Storage.upsert("wa_invoices", { ...invoice, status: "cancelled", cancelledAt: WA.Storage.now(), cancellationReason: reason });
    } else if (decision === "rejected") {
      if (fee && fee.status === "disputed") WA.Storage.upsert("wa_fees", { ...fee, status: fee.invoiceIds?.length ? "invoiced_due" : "pending" });
      if (rating && rating.status === "under_review") WA.Storage.upsert("wa_ratings", { ...rating, status: "published" });
      if (invoice && invoice.status === "under_review") WA.Storage.upsert("wa_invoices", { ...invoice, status: Number(invoice.amount || 0) >= WA.Config.paymentThreshold ? "payment_required" : "statement_only" });
    }
    if (referral) WA.Storage.upsert("wa_referrals", { ...referral, objectionStatus: status, status: decision === "accepted" ? "closed" : referral.status === "disputed" ? "confirmed" : referral.status });
    audit(`قرار اعتراض: ${labels.objection[status]}`, "objection", objection.id, before, updated, reason);
  };

  const handleAction = (button) => {
    const action = button.dataset.action;
    const id = button.dataset.id;
    if (!action) return;
    if (action === "request-view") return showRequest(id);
    if (action === "partner-view") return showPartner(id);
    if (action === "application-view") return showApplication(id);
    if (action === "invoice-view") return showInvoice(id);
    if (action === "objection-view") return showObjection(id);
    if (action === "audit-view") return showAudit(id);

    if (action.startsWith("request-")) {
      const request = WA.Storage.findById("wa_requests", id);
      if (!request) return;
      if (action === "request-close") confirmAction({ title: "إغلاق الطلب إداريًا", description: `سيتم إغلاق ${request.humanId || request.id} مع بقاء السجلات.`, handler: (reason) => { const before = WA.Storage.deepClone(request); const updated = WA.Storage.upsert("wa_requests", { ...request, status: "administratively_closed", administrativeClosedAt: WA.Storage.now(), lastActivityAt: WA.Storage.now() }); audit("إغلاق طلب إداريًا", "request", id, before, updated, reason); } });
      if (action === "request-reopen") confirmAction({ title: "إعادة فتح الطلب", description: `سيعود ${request.humanId || request.id} إلى المتابعة التشغيلية.`, handler: (reason) => { const before = WA.Storage.deepClone(request); const updated = WA.Storage.upsert("wa_requests", { ...request, status: request.activeReferralId ? "awaiting_result" : "matching", administrativeClosedAt: "", lastActivityAt: WA.Storage.now() }); audit("إعادة فتح طلب", "request", id, before, updated, reason); } });
      if (action === "request-alternative") confirmAction({ title: "إنشاء شريك بديل", description: "سيتم استبعاد الشركاء السابقين وتطبيق محرك المطابقة الحالي.", handler: (reason) => alternativeRequest(request, reason) });
      return;
    }

    if (action.startsWith("partner-")) {
      const partner = WA.Storage.findById("wa_partners", id);
      if (!partner) return;
      if (action === "partner-suspend") confirmAction({ title: "تعليق الشريك", description: "لن يظهر الشريك في الإحالات الجديدة حتى إعادة تفعيله.", extra: '<div class="form-field"><label for="adminPartnerSuspensionType">نوع التعليق</label><select id="adminPartnerSuspensionType"><option value="suspended_operations">تشغيلي</option><option value="suspended_financial">مالي</option></select></div>', handler: (reason) => { const before = WA.Storage.deepClone(partner); const status = $("#adminPartnerSuspensionType").value; const updated = WA.Storage.upsert("wa_partners", { ...partner, partnershipStatus: status, paymentStatus: status === "suspended_financial" ? "overdue" : partner.paymentStatus, suspensionReason: reason, suspendedAt: WA.Storage.now() }); audit("تعليق شريك", "partner", id, before, updated, reason); } });
      if (action === "partner-activate") confirmAction({ title: "إعادة تفعيل الشريك", description: "سيصبح الشريك مؤهلًا للمطابقة وفق بقية الشروط.", handler: (reason) => { const before = WA.Storage.deepClone(partner); const updated = WA.Storage.upsert("wa_partners", { ...partner, partnershipStatus: "active", paymentStatus: partner.paymentStatus === "overdue" ? "current" : partner.paymentStatus, suspensionReason: "", reactivatedAt: WA.Storage.now() }); audit("إعادة تفعيل شريك", "partner", id, before, updated, reason); } });
      if (action === "partner-invoice") confirmAction({ title: "إصدار فاتورة/كشف", description: "سيستخدم النظام الرسوم غير المسددة وغير المتنازع عليها للشريك.", extra: '<div class="form-field"><label for="adminInvoiceReason">سبب الإصدار</label><select id="adminInvoiceReason"><option value="threshold">بلوغ حد السداد</option><option value="monthly">كشف شهري</option></select></div>', handler: (reason) => { const invoice = WA.Lifecycle.issueInvoice(id, $("#adminInvoiceReason").value); if (!invoice) throw new Error("لا توجد رسوم قابلة للإصدار"); audit("إصدار فاتورة", "invoice", invoice.id, null, invoice, reason); } });
      return;
    }

    if (action.startsWith("application-")) {
      const application = WA.Storage.findById("wa_join_applications", id);
      if (!application) return;
      if (action === "application-approve") confirmAction({ title: "اعتماد طلب الانضمام", description: "سيُنشأ سجل شريك نشط مرتبط بطلب الانضمام.", handler: (reason) => { const before = WA.Storage.deepClone(application); const partner = applicationToPartner(application); const updated = WA.Storage.upsert("wa_join_applications", { ...application, status: "approved", statusLabel: "تم الاعتماد", partnerId: partner.id, approvedAt: WA.Storage.now(), reviewedBy: currentUser().id, reviewReason: reason }); if (application.discount) WA.Storage.upsert("wa_discounts", { id: WA.Storage.createId("DISC"), partnerId: partner.id, title: "خصم عملاء وين أوديها", percent: application.discount.percent, scope: application.discount.scope, includedServices: application.discount.scope === "all" ? ["جميع الخدمات"] : [application.discount.services], conditions: application.discount.conditions || "", exclusions: "", startsAt: application.discount.startsAt, endsAt: application.discount.endsAt, continuousUntilStopped: application.discount.continuousUntilStopped, status: "approved", approvedAt: WA.Storage.now(), isDemo: false }); audit("اعتماد طلب انضمام", "join_application", id, before, updated, reason, { partnerId: partner.id }); } });
      if (action === "application-reject") confirmAction({ title: "رفض طلب الانضمام", description: "سيظهر سبب الرفض في سجل الطلب ولن يُنشأ شريك.", handler: (reason) => { const before = WA.Storage.deepClone(application); const updated = WA.Storage.upsert("wa_join_applications", { ...application, status: "rejected", statusLabel: "مرفوض", rejectedAt: WA.Storage.now(), reviewedBy: currentUser().id, reviewReason: reason }); audit("رفض طلب انضمام", "join_application", id, before, updated, reason); } });
      return;
    }

    if (action.startsWith("fee-")) {
      const fee = WA.Storage.findById("wa_fees", id);
      if (!fee) return;
      if (action === "fee-exempt") confirmAction({ title: "إعفاء رسم الوساطة", description: `${fee.id} بقيمة ${money(fee.amount)}.`, handler: (reason) => { const before = WA.Storage.deepClone(fee); const updated = WA.Storage.upsert("wa_fees", { ...fee, status: "exempt", exemptedAt: WA.Storage.now(), exemptionReason: reason }); audit("إعفاء رسم", "fee", id, before, updated, reason); } });
      if (action === "fee-restore") confirmAction({ title: "إعادة تفعيل الرسم", description: "سيعود الرسم إلى الرصيد غير المسدد.", handler: (reason) => { const before = WA.Storage.deepClone(fee); const updated = WA.Storage.upsert("wa_fees", { ...fee, status: fee.invoiceIds?.length ? "invoiced_due" : "pending", exemptedAt: "", exemptionReason: "" }); audit("إعادة رسم معفى", "fee", id, before, updated, reason); } });
      return;
    }

    if (action === "invoice-pay") {
      const invoice = WA.Storage.findById("wa_invoices", id);
      if (!invoice) return;
      confirmAction({ title: "تسجيل سداد الفاتورة", description: `${invoice.number || invoice.id} بقيمة ${money(invoice.amount)}.`, extra: '<div class="form-field"><label for="adminPaymentMethod">طريقة السداد</label><select id="adminPaymentMethod"><option value="bank_transfer">تحويل بنكي</option><option value="cash">نقدي</option><option value="other">أخرى</option></select></div>', handler: (reason) => { const payment = WA.Lifecycle.registerPayment(id, $("#adminPaymentMethod").value); audit("تسجيل سداد", "payment", payment.id, null, payment, reason, { invoiceId: id }); } });
      return;
    }

    if (action.startsWith("objection-")) {
      const objection = WA.Storage.findById("wa_objections", id);
      if (!objection) return;
      const decision = action === "objection-accept" ? "accepted" : action === "objection-partial" ? "partial" : "rejected";
      confirmAction({ title: `قرار الاعتراض: ${decision === "accepted" ? "قبول" : decision === "partial" ? "قبول جزئي" : "رفض"}`, description: "سيتم حفظ القرار وأثره في سجل التدقيق.", handler: (reason) => resolveObjection(objection, decision, reason) });
      return;
    }

    if (action === "rating-toggle") {
      const rating = WA.Storage.findById("wa_ratings", id);
      if (!rating) return;
      const next = rating.status === "published" ? "hidden" : "published";
      confirmAction({ title: next === "hidden" ? "إخفاء التقييم" : "إعادة نشر التقييم", description: "لا يمكن للشريك تنفيذ هذا الإجراء بنفسه.", handler: (reason) => { const before = WA.Storage.deepClone(rating); const updated = WA.Storage.upsert("wa_ratings", { ...rating, status: next, moderationReason: reason, moderatedAt: WA.Storage.now(), moderatedBy: currentUser().id }); audit(next === "hidden" ? "إخفاء تقييم" : "إعادة نشر تقييم", "rating", id, before, updated, reason); } });
      return;
    }

    if (action === "discount-toggle") {
      const discount = WA.Storage.findById("wa_discounts", id);
      if (!discount) return;
      const next = discount.status === "approved" ? "paused" : "approved";
      confirmAction({ title: next === "paused" ? "إيقاف الخصم" : "اعتماد الخصم", description: "سيؤثر الإجراء على عرض الخصم للعملاء.", handler: (reason) => { const before = WA.Storage.deepClone(discount); const updated = WA.Storage.upsert("wa_discounts", { ...discount, status: next, statusChangedAt: WA.Storage.now(), statusReason: reason }); audit(next === "paused" ? "إيقاف خصم" : "اعتماد خصم", "discount", id, before, updated, reason); } });
      return;
    }

    if (action === "user-edit") return openUserDialog(id);
    if (action === "user-reset") return openPasswordReset(id);
  };

  const openUserDialog = (id = "") => {
    const user = id ? WA.Storage.findById("wa_admin_users", id) : null;
    $("#adminUserDialogTitle").textContent = user ? "تعديل المستخدم" : "إضافة مستخدم";
    $("#adminUserId").value = user?.id || "";
    $("#newAdminName").value = user?.name || "";
    $("#newAdminUsername").value = user?.username || "";
    $("#newAdminUsername").disabled = Boolean(user);
    $("#newAdminRole").value = user?.role || "customer_service";
    $("#newAdminStatus").value = user?.status || "active";
    $("#newAdminPassword").value = "";
    $("#newAdminPassword").required = !user;
    $(".admin-user-password-field").hidden = Boolean(user);
    $("#adminUserDialog").showModal();
  };

  const openPasswordReset = (id) => {
    const user = WA.Storage.findById("wa_admin_users", id);
    if (!user) return;
    confirmAction({ title: "تغيير كلمة مرور المستخدم", description: `${user.name} — ${user.username}`, extra: '<div class="form-field"><label class="required" for="adminResetPassword">كلمة المرور المؤقتة الجديدة</label><input id="adminResetPassword" type="password" minlength="10" required autocomplete="new-password" dir="ltr"></div>', handler: async (reason) => { const password = $("#adminResetPassword").value; await WA.AdminAuth.resetPassword(user.id, password, currentUser()); audit("توثيق سبب إعادة كلمة المرور", "admin_user", user.id, null, null, reason); } });
  };

  const activateTab = (tab) => {
    const allowedButton = $(`[data-admin-tab="${tab}"]:not([hidden])`);
    if (!allowedButton) return;
    state.activeTab = tab;
    $$("[data-admin-tab]").forEach((button) => { const active = button.dataset.adminTab === tab; button.classList.toggle("active", active); button.setAttribute("aria-selected", String(active)); });
    $$("[data-admin-panel]").forEach((panel) => { const active = panel.dataset.adminPanel === tab; panel.classList.toggle("active", active); panel.hidden = !active; });
  };

  const configurePermissions = () => {
    $$('[data-permission]').forEach((element) => { if (!can(element.dataset.permission)) element.hidden = true; });
    const first = $("[data-admin-tab]:not([hidden])");
    if (first) activateTab(first.dataset.adminTab);
  };

  const initFilters = () => {
    Object.entries(WA.Config.serviceTypes).forEach(([value, label]) => $("#requestServiceFilter").add(new Option(label, value)));
    Object.entries(WA.Config.requestStatuses).forEach(([value, label]) => $("#requestStatusFilter").add(new Option(label, value)));
    Object.entries(WA.Config.partnerTypes).forEach(([value, label]) => $("#partnerTypeFilter").add(new Option(label, value)));
    Object.entries(WA.AdminAuth.roles).forEach(([value, role]) => $("#newAdminRole").add(new Option(role.label, value)));
    const entities = [...new Set(WA.Storage.get("wa_audit_logs").map((row) => row.entityType).filter(Boolean))];
    entities.sort().forEach((value) => $("#auditEntityFilter").add(new Option(value, value)));
  };

  const exportCsv = () => {
    if (!can("exports.use")) return WA.UI.showToast("ليست لديك صلاحية التصدير", "error");
    const map = { requests: ["wa_requests", "requests"], partners: ["wa_partners", "partners"], applications: ["wa_join_applications", "applications"], finance: [state.financeView === "fees" ? "wa_fees" : state.financeView === "invoices" ? "wa_invoices" : "wa_payments", state.financeView], quality: [state.qualityView === "objections" ? "wa_objections" : state.qualityView === "ratings" ? "wa_ratings" : "wa_discounts", state.qualityView], users: ["wa_admin_users", "admin-users"], audit: ["wa_audit_logs", "audit"] };
    const selected = map[state.activeTab] || ["wa_requests", "overview-requests"];
    const rows = WA.Storage.get(selected[0]);
    if (!rows.length) return WA.UI.showToast("لا توجد بيانات للتصدير", "info");
    const keys = [...new Set(rows.flatMap((row) => Object.keys(row)))];
    const quote = (value) => `"${String(typeof value === "object" && value !== null ? JSON.stringify(value) : value ?? "").replace(/"/g, '""')}"`;
    const csv = `\uFEFF${keys.map(quote).join(",")}\n${rows.map((row) => keys.map((key) => quote(row[key])).join(",")).join("\n")}`;
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
    const link = document.createElement("a");
    link.href = url; link.download = `wain-${selected[1]}-${new Date().toISOString().slice(0, 10)}.csv`; link.click();
    URL.revokeObjectURL(url);
    audit("تصدير CSV", selected[0], "", null, null, `تصدير قسم ${state.activeTab}`);
  };

  const bindEvents = () => {
    $("#adminLogout").addEventListener("click", () => { WA.AdminAuth.logout(); location.replace("admin-login.html"); });
    $("#adminRefresh").addEventListener("click", () => { renderAll(); WA.UI.showToast("تم تحديث البيانات", "success"); });
    $("#adminExport").addEventListener("click", exportCsv);
    $("#adminPrint").addEventListener("click", () => window.print());
    $$("[data-admin-tab]").forEach((button) => button.addEventListener("click", () => activateTab(button.dataset.adminTab)));
    $$("[data-finance-view]").forEach((button) => button.addEventListener("click", () => { state.financeView = button.dataset.financeView; $$("[data-finance-view]").forEach((item) => item.classList.toggle("active", item === button)); $$("[data-finance-panel]").forEach((panel) => { panel.hidden = panel.dataset.financePanel !== state.financeView; }); }));
    $$("[data-quality-view]").forEach((button) => button.addEventListener("click", () => { state.qualityView = button.dataset.qualityView; $$("[data-quality-view]").forEach((item) => item.classList.toggle("active", item === button)); $$("[data-quality-panel]").forEach((panel) => { panel.hidden = panel.dataset.qualityPanel !== state.qualityView; }); }));
    ["#requestSearch", "#requestServiceFilter", "#requestStatusFilter"].forEach((selector) => $(selector).addEventListener("input", renderRequests));
    ["#partnerSearch", "#partnerTypeFilter", "#partnerStatusFilter"].forEach((selector) => $(selector).addEventListener("input", renderPartners));
    ["#applicationSearch", "#applicationStatusFilter"].forEach((selector) => $(selector).addEventListener("input", renderApplications));
    ["#auditSearch", "#auditEntityFilter"].forEach((selector) => $(selector).addEventListener("input", renderAudit));
    document.addEventListener("click", (event) => {
      const action = event.target.closest("[data-action]");
      if (action) handleAction(action);
      const close = event.target.closest("[data-close-dialog]");
      if (close) closeDialog(close.dataset.closeDialog);
    });
    $("#adminActionForm").addEventListener("submit", async (event) => {
      event.preventDefault();
      const reason = $("#adminActionReason").value.trim();
      if (!reason) return;
      try {
        if (typeof state.action === "function") await state.action(reason);
        closeDialog("adminActionDialog");
        renderAll();
        WA.UI.showToast("تم تنفيذ الإجراء وتسجيله", "success");
      } catch (error) { WA.UI.showToast(error.message || "تعذر تنفيذ الإجراء", "error"); }
    });
    $("#createAdminUser").addEventListener("click", () => openUserDialog());
    $("#adminUserForm").addEventListener("submit", async (event) => {
      event.preventDefault();
      const id = $("#adminUserId").value;
      try {
        if (id) {
          WA.AdminAuth.updateUser(id, { name: $("#newAdminName").value, role: $("#newAdminRole").value, status: $("#newAdminStatus").value }, currentUser(), "تحديث بيانات وصلاحية المستخدم");
        } else {
          await WA.AdminAuth.createUser({ name: $("#newAdminName").value, username: $("#newAdminUsername").value, role: $("#newAdminRole").value, password: $("#newAdminPassword").value }, currentUser());
        }
        closeDialog("adminUserDialog"); renderAll(); WA.UI.showToast("تم حفظ المستخدم", "success");
      } catch (error) { WA.UI.showToast(error.message || "تعذر حفظ المستخدم", "error"); }
    });
  };

  const init = () => {
    state.bundle = WA.AdminAuth.requireAuth("dashboard.view");
    if (!state.bundle) return;
    $("#adminUserName").textContent = state.bundle.user.name;
    $("#adminUserRole").textContent = roleLabel(state.bundle.user.role);
    configurePermissions();
    initFilters();
    bindEvents();
    renderAll();
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
})();
```

## `tests/admin-qa.js`

```javascript
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
```

## `README.md`

```markdown
# وين أوديها — بوابة الإدارة الداخلية

تتضمن هذه الحزمة الموقع العام وبوابة الشريك، إضافة إلى بوابة داخلية لإدارة عمليات المنصة وحساباتها.

## التشغيل محليًا

من داخل مجلد المشروع:

```bash
python -m http.server 8000
```

ثم افتح:

```text
http://localhost:8000/index.html
```

بوابة الإدارة الداخلية:

```text
http://localhost:8000/admin-login.html
```

لا يوجد أي رابط إلى بوابة الإدارة داخل Header أو Footer أو الصفحات العامة.

## حسابات التحقق الداخلية

كلمة المرور المؤقتة لجميع الحسابات الأولية:

```text
WainOps@2026!
```

| اسم المستخدم | الدور |
|---|---|
| `sysadmin` | مدير النظام |
| `operations` | مدير التشغيل |
| `partners` | مسؤول الشركاء |
| `support` | مسؤول خدمة العملاء |
| `accountant` | المحاسب |
| `reviewer` | مراجع الاعتراضات |

هذه الحسابات مخصصة للعرض والاختبار داخل النسخة الثابتة فقط. لا تنشرها في بيئة فعلية، ولا تعتمد على هذا النموذج للمصادقة الإنتاجية.

## ملفات بوابة الإدارة

- `admin-login.html`
- `admin-dashboard.html`
- `assets/admin-auth.js`
- `assets/admin-login.js`
- `assets/admin-dashboard.js`

## جداول localStorage الجديدة

- `wa_admin_users`
- `wa_admin_sessions`
- `wa_audit_logs`

تم رفع إصدار البيانات إلى 11، مع الحفاظ على الجداول والبيانات الحالية وترحيلها دون حذف.

## الأقسام

- نظرة عامة ومؤشرات تشغيلية محسوبة من السجلات.
- الطلبات والإحالات والبدائل والإغلاق.
- الشركاء والتفعيل والتعليق.
- طلبات الانضمام والاعتماد والرفض.
- الرسوم والفواتير والمدفوعات والمتأخرات.
- التقييمات والخصومات والاعتراضات.
- مستخدمو الإدارة والصلاحيات.
- سجل التدقيق والتصدير والطباعة.

## اختبارات QA

```bash
node tests/qa-unit.js
node tests/admin-qa.js
python tests/static_audit.py
```

## تنبيه أمني مهم

هذه الحزمة مشروع ثابت يعمل في المتصفح. `localStorage` وإخفاء الرابط والتحقق في JavaScript ليست حماية إنتاجية. قبل التشغيل الفعلي يجب نقل المصادقة والصلاحيات والبيانات إلى Backend وقاعدة بيانات مركزية، وفرض الصلاحيات على API، واستخدام جلسات آمنة وMFA وسجلات تدقيق غير قابلة للتعديل.

## التوثيق

- `ADMIN_AUDIT_REPORT.md`
- `ADMIN_PERMISSION_MATRIX.md`
- `ADMIN_DATA_MODEL.md`
- `ADMIN_IMPLEMENTATION_PLAN.md`
- `ADMIN_QA_REPORT.md`
- `ADMIN_FULL_SOURCE.md`
```

## `PROJECT_MODEL.md`

```markdown
# النموذج التشغيلي الكامل لمنصة «وين أوديها»

## 1. تعريف المنصة

**«وين أوديها»** منصة ويب ذكية تساعد صاحب السيارة على وصف المشكلة التي تواجهه، وفهمها مبدئيًا، ومعرفة التخصص المناسب، ثم الوصول إلى مقدم خدمة شريك مناسب من خلال إحالة واضحة وموثقة.

المسار الرئيسي والأبرز في المنصة هو:

# «عندي مشكلة في السيارة»

ويظهر تحته قسم مستقل وأقل بروزًا بعنوان:

# «خدمات أخرى»

ويشمل الخدمات التالية:

* أبحث عن محل قطع غيار.
* أحتاج سطحة.
* أبحث عن صيانة دورية.

لا تظهر الخدمات الأربع بالدرجة نفسها من الأهمية؛ لأن جوهر المنصة الأساسي هو مساعدة صاحب السيارة الذي لديه مشكلة ولا يعرف التخصص أو الورشة المناسبة.

تعمل المنصة من خلال موقع ويب عربي مهيأ للجوال، دون الحاجة إلى تحميل تطبيق أو إنشاء حساب تقليدي للعميل.

---

## 2. مجانية الخدمة للعميل

تقدم خدمات منصة «وين أوديها» للعميل مجانًا.

لا يدفع العميل رسومًا إلى المنصة مقابل:

* إنشاء الطلب.
* تحليل وصف المشكلة.
* الحصول على التوجيه الفني المبدئي.
* ترشيح مقدم الخدمة.
* التواصل مع الشريك.
* طلب شريك آخر.
* متابعة الطلب.
* تقديم التقييم.

يتفق العميل مباشرة مع مقدم الخدمة على قيمة الفحص أو الإصلاح أو الصيانة أو النقل أو قطع الغيار.

تعتمد إيرادات منصة «وين أوديها» على:

> **رسوم الوساطة المستحقة على الشركاء وفق العمليات والخدمات المؤكدة وسياسة الرسوم المعتمدة.**

---

## 3. جوهر الخدمة

يكون جوهر المسار الرئيسي:

> **قل لنا وش مشكلة سيارتك → نفهمها مبدئيًا → نحدد المشكلة المتوقعة والتخصص ودرجة الاستعجال → نرشح لك ورشة واحدة مناسبة → وإذا ما اتفقت معها، ارجع لنفس طلبك ونجيب لك ورشة ثانية.**

أما الخدمات الأخرى فتكون كالتالي:

### قطع الغيار

> **اختر سيارتك ومدينتك واكتب القطعة المطلوبة → نرشح لك محل قطع غيار مناسبًا → تواصل معه وتأكد من توفر القطعة وسعرها ومطابقتها لسيارتك.**

### السطحة

> **حدد موقع السيارة ووصف المكان والوجهة → نرشح لك مقدم خدمة سطحة مناسبًا بصورة عاجلة → تواصل معه مباشرة.**

### الصيانة الدورية

> **اختر خدمة الصيانة وسيارتك ومدينتك → نرشح لك مركز صيانة مناسبًا → تواصل معه مباشرة.**

---

## 4. طبيعة دور «وين أوديها»

تتولى المنصة:

* فهم احتياج العميل.
* تقديم توجيه فني مبدئي في مسار مشكلة السيارة.
* تحديد المشكلة المتوقعة مبدئيًا.
* تحديد التخصص المناسب.
* تحديد درجة الاستعجال.
* اكتشاف مؤشرات الخطر.
* اختيار شريك مناسب من قاعدة بيانات الشركاء وفق قواعد واضحة.
* تسجيل الإحالة قبل إظهار بيانات الشريك.
* تمكين العميل من التواصل مع الشريك عبر واتساب.
* إنشاء رابط خاص للطلب.
* متابعة نتيجة الإحالة.
* جمع تقييمات موثقة.
* احتساب رسوم الوساطة بعد تأكيد تلقي الخدمة.
* إدارة الاعتراضات والتسويات المالية.
* متابعة أداء الشركاء وجودة الخدمة.

لا تنفذ «وين أوديها»:

* الفحص الفعلي للسيارة.
* التشخيص النهائي.
* الإصلاح.
* بيع قطع الغيار.
* نقل السيارة.
* تنفيذ الصيانة الدورية.
* تحصيل قيمة الخدمة من العميل نيابة عن الشريك في النسخة الأولى.

مقدم الخدمة الفعلي هو المسؤول عن:

* الفحص والتشخيص النهائي.
* تنفيذ الإصلاح أو الخدمة.
* مطابقة قطع الغيار.
* جودة العمل.
* الأسعار التي يقدمها للعميل.
* الاتفاق المالي مع العميل.
* الضمانات والالتزامات المتعلقة بالخدمة.

---

# القسم الأول: المبادئ التشغيلية

## 5. المسار الرئيسي والخدمات الأخرى

تظهر الصفحة الرئيسية وفق الترتيب التالي:

### المسار الرئيسي

# عندي مشكلة في السيارة

مع وصف:

> اشرح لنا المشكلة بطريقتك، ونساعدك على فهمها مبدئيًا والوصول إلى الورشة المناسبة.

ويظهر زر:

> **ابدأ طلبك**

ثم يظهر قسم مستقل:

# خدمات أخرى

ويحتوي على:

* أبحث عن محل قطع غيار.
* أحتاج سطحة.
* أبحث عن صيانة دورية.

---

## 6. توحيد أسماء الخدمات

تستخدم الأسماء التالية بصورة موحدة في الموقع والنموذج وقواعد البيانات والرسائل:

1. **عندي مشكلة في السيارة.**
2. **أبحث عن محل قطع غيار.**
3. **أحتاج سطحة.**
4. **أبحث عن صيانة دورية.**

ولا تستخدم أسماء مختلفة للخدمة نفسها داخل الصفحات أو الرسائل أو بوابات الإدارة.

أما مقدم الخدمة فيسمى بحسب نوعه:

* ورشة إصلاح وتشخيص.
* محل قطع غيار.
* مقدم خدمة سطحة.
* مركز صيانة دورية.

ويستخدم مصطلح:

> **الشريك**

عند الإشارة إلى جميع أنواع مقدمي الخدمات بصورة عامة.

---

## 7. شريك واحد مناسب في كل مرة

لا تعرض المنصة قائمة طويلة من الورش أو مقدمي الخدمات.

يظهر للعميل:

> **شريك واحد فقط هو الأنسب لطلبه في تلك اللحظة.**

وينطبق ذلك على:

* ورشة الإصلاح والتشخيص.
* محل قطع الغيار.
* مقدم خدمة السطحة.
* مركز الصيانة الدورية.

إذا لم يتم التفاهم مع الشريك الأول، يستطيع العميل العودة إلى الطلب نفسه وطلب شريك آخر.

لا يظهر أكثر من شريك واحد في الوقت نفسه.

---

## 8. تسجيل الإحالة قبل إظهار البيانات

قبل ظهور:

* اسم الشريك.
* رقم التواصل.
* رابط الموقع.
* زر واتساب.
* الرسالة الجاهزة.

يقوم النظام بـ:

1. إنشاء رقم الطلب.
2. اختيار الشريك المناسب.
3. إنشاء رقم إحالة مستقل.
4. تسجيل الإحالة.
5. إنشاء رابط الطلب الخاص.
6. إظهار بيانات الشريك بعد نجاح التسجيل.

---

## 9. عدم عرض أسعار متوقعة

لا تقدم المنصة في النسخة الأولى:

* سعرًا متوقعًا للإصلاح.
* سعرًا متوقعًا لقطع الغيار.
* تقديرًا لسعر السطحة.
* نطاقًا متوقعًا لتكلفة الصيانة.
* مقارنة آلية بين أسعار الشركاء.
* تقديرًا ماليًا صادرًا عن الذكاء الاصطناعي.

تعرف تكلفة الخدمة الفعلية بعد تعامل العميل مع الشريك، وتستخدم في:

* تقييم التجربة.
* تصنيف العملية ماليًا.
* احتساب رسوم الوساطة.
* إصدار كشف حساب الشريك.

---

# القسم الثاني: دخول العميل وبياناته

## 10. دخول العميل إلى المنصة

يمكن الوصول إلى «وين أوديها» من خلال:

* رابط مباشر.
* رسالة واتساب.
* إعلان رقمي.
* رمز QR.
* منصات التواصل الاجتماعي.
* رابط يرسله مستخدم آخر.

لا يحتاج العميل إلى:

* تحميل تطبيق.
* إنشاء حساب معقد.
* إنشاء كلمة مرور.

---

## 11. بيانات العميل الأساسية

يطلب النظام:

### الاسم الأول

مثال:

> عبدالسلام

ويستخدم في:

* رسالة واتساب الجاهزة.
* صفحة الطلب.
* رسائل المتابعة.

### رقم الجوال

يستخدم في:

* ربط العميل بطلباته.
* استعادة الطلب.
* متابعة الطلب.
* التحقق من هوية العميل عند الحاجة.
* إرسال الإشعارات مستقبلًا بعد ربط واتساب.

---

## 12. بيانات السيارة

يختار العميل البيانات بالترتيب التالي:

### الشركة المصنعة

مثل:

* تويوتا.
* نيسان.
* هيونداي.
* كيا.
* فورد.
* شيفروليه.
* لكزس.
* مرسيدس.
* بي إم دبليو.
* جي إم سي.
* مازدا.
* هوندا.
* شركة أخرى.

إذا اختار:

> **شركة أخرى**

يظهر له حقل لكتابة اسم الشركة.

### موديل السيارة

بعد اختيار الشركة المصنعة، تظهر موديلات هذه الشركة فقط.

مثال تويوتا:

* كامري.
* كورولا.
* يارس.
* أفالون.
* راف فور.
* لاندكروزر.
* برادو.
* هايلكس.
* فورتشنر.
* أخرى.

إذا اختار:

> **أخرى**

يظهر حقل نصي لكتابة اسم الموديل.

لا تعرض موديلات جميع الشركات في قائمة واحدة طويلة.

### سنة الصنع

يختار العميل سنة الصنع من قائمة واضحة.

### ممشى السيارة

يطلب في مسار مشكلة السيارة والصيانة الدورية:

* أقل من 50 ألف كم.
* من 50 إلى 100 ألف كم.
* من 100 إلى 150 ألف كم.
* من 150 إلى 200 ألف كم.
* أكثر من 200 ألف كم.

---

## 13. المنطقة والمدينة والموقع

يختار العميل بالترتيب:

### المنطقة

مثل:

* منطقة القصيم.
* منطقة الرياض.
* منطقة مكة المكرمة.
* منطقة المدينة المنورة.
* المنطقة الشرقية.
* بقية المناطق وفق نطاق تشغيل المنصة.

### المدينة

بعد اختيار المنطقة، تظهر المدن التابعة لها فقط.

### تحديد الموقع تلقائيًا

يظهر خيار:

> **تحديد موقعي تلقائيًا**

ويستخدم بعد موافقة العميل على مشاركة الموقع.

### الموقع الدقيق

يكون اختياريًا في المسارات العادية، ويستخدم عند الحاجة إلى:

* تحديد الشريك الأقرب.
* تحسين المطابقة.
* حساب المسافة التقريبية.
* تحديد نقطة الوصول.

ويكون الموقع الدقيق إلزاميًا في خدمة السطحة.

---

# القسم الثالث: المسار الرئيسي «عندي مشكلة في السيارة»

## 14. وصف المشكلة

تظهر شاشة:

# وش المشكلة في سيارتك؟

مع التوضيح:

> اشرح المشكلة بطريقتك، ولا تحتاج إلى معرفة المصطلحات الفنية.

في النسخة الأولى يكون وصف المشكلة نصيًا فقط.

مثال:

> السيارة ترج إذا وقفت عند الإشارة وتظهر لمبة المكينة.

---

## 15. دور الذكاء الاصطناعي

يستقبل الذكاء الاصطناعي:

* الشركة المصنعة.
* الموديل.
* سنة الصنع.
* الممشى.
* وصف المشكلة.
* إجابات الأسئلة.
* المدينة عند الحاجة.

ويقوم بـ:

* فهم وصف العميل.
* تصنيف الاحتياج.
* تحديد المشكلة المتوقعة مبدئيًا.
* تحديد التخصص المناسب.
* تحديد درجة الاستعجال.
* اكتشاف مؤشرات الخطر.
* تحديد ما يجب على العميل فعله.
* تلخيص الطلب للورشة.

الذكاء الاصطناعي:

> **يحلل الاحتياج ويقدم التوجيه الفني المبدئي، لكنه لا يختار الورشة وحده.**

يتم اختيار الورشة من قاعدة بيانات الشركاء من خلال محرك مطابقة يعتمد على قواعد واضحة.

---

## 16. الأسئلة التوضيحية

يطرح النظام:

# أربعة أسئلة توضيحية

تكون الأسئلة مرتبطة بوصف المشكلة، ولا تكون ثابتة لجميع العملاء.

وتكون الإجابات غالبًا:

* نعم.
* لا.
* غير متأكد.

مثال:

1. هل تظهر لمبة تحذير في الطبلون؟
2. هل تحدث المشكلة أثناء الوقوف فقط؟
3. هل لاحظت ارتفاعًا في حرارة المحرك؟
4. هل بدأت المشكلة بصورة مفاجئة؟

تهدف الأسئلة إلى:

* تحديد المشكلة المتوقعة مبدئيًا.
* تحديد التخصص المناسب.
* تحديد درجة الاستعجال.
* اكتشاف مؤشرات الخطر.

---

## 17. التوجيه الفني المبدئي

بعد تحليل البيانات والإجابات، تظهر النتيجة في أربعة عناصر:

### المشكلة المتوقعة مبدئيًا

> قد تكون المشكلة مرتبطة بنظام الإشعال أو دخول الهواء إلى المحرك، ولا يمكن تأكيد السبب إلا بعد الفحص الفعلي.

### التخصص المناسب

> كهرباء وميكانيكا محرك.

### درجة الاستعجال

> متوسطة.

### ما يجب فعله الآن

> التوجه إلى ورشة متخصصة لإجراء الفحص قبل استبدال أي قطعة.

يستخدم النظام صياغات احتمالية، مثل:

* قد تكون المشكلة مرتبطة بـ...
* يحتمل وجود خلل في...
* الأعراض قد تشير مبدئيًا إلى...
* لا يمكن تأكيد السبب إلا بعد الفحص.

ولا يوصي بتغيير قطعة قبل الفحص الفعلي.

---

## 18. عدم كفاية المعلومات

إذا لم تتوفر معلومات كافية، يظهر:

> **لا تتوفر معلومات كافية لتحديد المشكلة المتوقعة بدقة، لكن التخصص الأنسب لبدء الفحص هو: [اسم التخصص].**

ولا يخترع النظام مشكلة أو سببًا غير مدعوم ببيانات العميل.

---

## 19. التنبيه الفني

يظهر دائمًا:

> **هذا توقع وتوجيه فني مبدئي مبني على المعلومات التي أدخلتها، ويهدف إلى مساعدتك في فهم الاحتمال الأقرب والوصول إلى التخصص المناسب. لا يمثل تشخيصًا نهائيًا، وقد تختلف النتيجة بعد فحص السيارة فعليًا.**

ثم يظهر زر:

# وين أوديها؟

---

## 20. الأعراض الخطرة

يراقب النظام مؤشرات مثل:

* فقدان أو ضعف الفرامل.
* خلل واضح في التوجيه.
* ارتفاع شديد في حرارة المحرك.
* رائحة وقود أو تسرب وقود.
* دخان كثيف.
* توقف السيارة في موقع خطر.
* أي مؤشر يجعل استمرار القيادة غير آمن.

عند اكتشافها يظهر:

### درجة الاستعجال

> عاجلة

أو:

> خطرة

ويظهر توجيه مثل:

> **قد يكون استمرار القيادة غير آمن. أوقف السيارة في موقع آمن إن أمكن، ولا تستمر في القيادة، واستخدم خدمة سطحة أو تواصل مع الجهة المناسبة للحالة.**

لا تقدم المنصة طمأنة غير مبررة.

---

# القسم الرابع: خدمات أخرى

## 21. قسم خدمات أخرى

يظهر قسم مستقل بعنوان:

# خدمات أخرى

ويشمل:

* أبحث عن محل قطع غيار.
* أحتاج سطحة.
* أبحث عن صيانة دورية.

---

## 22. خدمة قطع الغيار

يطلب النظام:

* الشركة المصنعة.
* موديل السيارة.
* سنة الصنع.
* المنطقة.
* المدينة.
* رقم الهيكل.
* اسم القطعة.
* نوع القطعة: وكالة أو تجارية.

### رقم الهيكل

يظهر حقل:

# رقم الهيكل — يفضل كتابته

مع توضيح:

> يساعد رقم الهيكل محل قطع الغيار على التحقق بصورة أدق من مطابقة القطعة للسيارة.

لا يكون رقم الهيكل إلزاميًا، لكنه موصى به.

### اسم القطعة

يظهر حقل:

# اكتب اسم القطعة المطلوبة بدقة

مثل:

* كمبروسر مكيف.
* مساعد أمامي يمين.
* قاعدة مكينة أمامية.

### نوع القطعة

يختار العميل:

* وكالة.
* تجارية.
* لا يهم.
* غير متأكد.

لا تبيع المنصة القطعة، ولا تضمن توفرها أو سعرها أو مطابقتها.

---

## 23. ترشيح محل قطع الغيار

يختار النظام محلًا مناسبًا وفق:

* الشركة المصنعة.
* الموديل.
* سنة الصنع.
* المنطقة والمدينة.
* اسم القطعة.
* نوع القطعة المفضل.
* العلامات التي يخدمها المحل.
* تقييم المحل.
* التزامه.
* حالة الشراكة.

ويظهر التنبيه:

> **توفر القطعة وسعرها ومطابقتها للسيارة يتم التأكد منها مباشرة مع محل قطع الغيار، ويفضل تزويده برقم الهيكل.**

---

## 24. خدمة السطحة

تظهر خدمة السطحة ضمن الخدمات الأخرى، وتكون مصنفة:

# عاجلة

يطلب النظام إلزاميًا:

* الاسم الأول.
* رقم الجوال.
* نوع السيارة.
* المنطقة.
* المدينة.
* الموقع التلقائي الدقيق للسيارة.
* وصف مكان السيارة.
* موقع الوجهة إن وجد.
* هل السيارة تتحرك أم لا؟
* وصف مختصر للحالة.

### الموقع التلقائي

يجب على العميل مشاركة موقع السيارة أو تحديد نقطة دقيقة على الخريطة.

### وصف المكان

مثل:

> طريق الملك عبدالعزيز، بجوار محطة الوقود، السيارة على الجهة اليمنى.

لا يكتفى باسم المدينة في طلبات السطحة.

---

## 25. ترشيح مقدم خدمة السطحة

تتم المطابقة وفق:

* الموقع الدقيق.
* المنطقة والمدينة.
* نطاق التغطية.
* نوع السيارة.
* قدرة السطحة على نقل المركبة.
* إمكانية استقبال الطلب العاجل.
* سرعة الاستجابة.
* التقييمات الموثقة.
* الالتزام.
* حالة الشراكة.

ويتم اختيار مقدم خدمة سطحة واحد فقط.

---

## 26. خدمة الصيانة الدورية

يختار العميل خدمة مثل:

* تغيير الزيت والفلاتر.
* تغيير البطارية.
* الإطارات.
* فحص الفرامل.
* خدمة التكييف.
* فحص السوائل.
* فحص دوري عام.
* خدمة أخرى.

ويطلب النظام:

* الشركة المصنعة.
* الموديل.
* سنة الصنع.
* الممشى.
* نوع الوقود.
* المنطقة.
* المدينة.
* الموقع الدقيق اختياريًا.
* الخدمة المطلوبة.
* ملاحظة اختيارية.

---

# القسم الخامس: اختيار الشريك والإحالة

## 27. محرك المطابقة

يختار النظام الشريك بناءً على:

* نوع الشريك.
* التخصص الرئيسي.
* التخصصات الفرعية.
* الخدمات التي يقدمها.
* الشركات المصنعة التي يخدمها.
* نوع الوقود.
* المنطقة والمدينة.
* نطاق التغطية.
* إمكانية استقبال الطلب.
* سرعة الاستجابة.
* التقييم وعدد المقيمين.
* عدالة الأسعار.
* مؤشر الثقة.
* حالة السداد.
* حالة الشراكة.
* عدم سبق ترشيحه لنفس الطلب.

---

## 28. حالة التوفر

إذا لم تكن معلومة التوفر محدثة، لا تعرض المنصة:

> متاح الآن

بل تعرض:

> **الشريك يستقبل عادةً هذا النوع من الطلبات، ويرجى التأكد من الموعد عبر واتساب.**

---

## 29. عدم توفر شريك مناسب

إذا لم يجد محرك المطابقة شريكًا مناسبًا، لا يعرض النظام بيانات شريك غير ملائم لمجرد إكمال الرحلة.

تظهر للعميل رسالة:

> **لم نجد حاليًا شريكًا مناسبًا لطلبك في الموقع المحدد.**

وتتاح له الخيارات التالية:

* تعديل المنطقة.
* تعديل المدينة.
* تحديد موقع مختلف.
* توسيع نطاق البحث.
* إعادة المحاولة لاحقًا.
* العودة إلى الصفحة الرئيسية.

ويحتفظ النظام ببيانات الطلب حتى لا يضطر العميل إلى إعادة إدخالها.

يمكن كذلك تسجيل الطلب داخليًا بوصفه:

> **طلب دون شريك مناسب**

لاستخدامه في:

* تحديد المدن التي تحتاج إلى شركاء.
* معرفة التخصصات غير المغطاة.
* توسيع شبكة الشركاء مستقبلًا.

---

## 30. إنشاء الطلب والإحالة

قبل عرض بيانات الشريك:

1. ينشئ النظام رقم الطلب.
2. ينشئ رقم الإحالة.
3. يربط الشريك بالطلب.
4. يسجل وقت الترشيح.
5. ينشئ رابط الطلب الخاص.
6. تظهر بيانات الشريك.

إذا لم يوجد شريك مناسب، ينشأ الطلب دون إنشاء إحالة حتى يتم العثور على شريك.

---

# القسم السادس: متابعة الطلب والتواصل

## 31. طريقتا متابعة الطلب

يستطيع العميل العودة إلى طلبه بإحدى طريقتين:

### الطريقة الأولى: الرابط الخاص بالطلب

يظهر رابط مباشر بعد إنشاء الطلب، ويتيح فتح الطلب دون كلمة مرور.

### الطريقة الثانية: رقم الطلب ورقم الجوال

توجد صفحة باسم:

# متابعة طلبك

يدخل فيها العميل:

* رقم الطلب.
* رقم الجوال المستخدم عند إنشاء الطلب.

ثم يستطيع فتح الطلب ومتابعته.

يمكن استخدام رمز تحقق لمرة واحدة عند الحاجة الأمنية.

---

## 32. رابط طلبك الخاص

بعد إنشاء الطلب يظهر أسفل تفاصيل الطلب:

# رابط طلبك الخاص

مع التوضيح:

> احتفظ بهذا الرابط للعودة إلى طلبك ومتابعته دون إعادة الخطوات.

ويستطيع العميل:

* نسخ الرابط.
* مشاركته يدويًا.
* إرساله لنفسه أو حفظه.
* العودة إليه من الجهاز نفسه أو جهاز آخر.

في النسخة الأولى يمكن الاعتماد على:

> **نسخ الرابط أو مشاركته يدويًا.**

ومستقبلًا، بعد ربط المنصة بخدمة واتساب الرسمية، يمكن:

> **إرسال رابط الطلب تلقائيًا إلى رقم العميل عبر واتساب.**

---

## 33. وظائف رابط الطلب

يتيح الرابط:

* عرض حالة الطلب.
* عرض الشريك المرشح.
* التواصل عبر واتساب.
* نسخ الرسالة.
* طلب شريك آخر.
* تأكيد الوصول.
* متابعة نتيجة الخدمة.
* إدخال فئة تكلفة الخدمة.
* تقييم التجربة.
* الاطلاع على الإحالات السابقة.
* معرفة حالة الاعتراضات المرتبطة بالطلب عند الحاجة.

---

## 34. التواصل عبر واتساب

يظهر في نهاية صفحة الشريك زر واضح:

# التواصل مع الشريك عبر واتساب

عند الضغط عليه:

* يفتح واتساب على رقم الشريك.
* تظهر الرسالة جاهزة.
* يستطيع العميل إرسالها مباشرة.

ويظهر كذلك خيار:

# نسخ الرسالة

ليستطيع العميل نسخ النص وإرساله بنفسه.

### مثال

> السلام عليكم،
> معك عبدالسلام، وصلت إليكم عن طريق «وين أوديها» بخصوص الطلب رقم **WA-10425**.
>
> السيارة: تويوتا كامري 2020.
> الطلب: فحص مشكلة رجفة أثناء الوقوف.
>
> أرغب بالتنسيق معكم.

---

## 35. طلب شريك آخر

يمكن للعميل العودة إلى الطلب والضغط على:

* أريد ورشة أخرى.
* أريد محل قطع غيار آخر.
* أريد سطحة أخرى.
* أريد مركز صيانة آخر.

يسجل السبب اختياريًا:

* لم يتم الرد.
* لم نتفق على الموعد.
* لم يتم التفاهم على السعر.
* الخدمة أو القطعة غير متوفرة.
* الموقع غير مناسب.
* لم أرغب في الاستمرار.
* سبب آخر.

يحتفظ النظام بالطلب نفسه ويستبعد الشريك السابق.

الحد الأقصى المبدئي:

> **ثلاثة شركاء لكل طلب.**

ولا يظهر أكثر من شريك واحد في الوقت نفسه.

---

# القسم السابع: المتابعة والتقييم

## 36. متابعة نتيجة الإحالة

يسأل النظام العميل:

> هل تواصلت مع الشريك؟

ثم:

> هل تلقيت الخدمة؟

الخيارات:

* نعم، تلقيت الخدمة.
* وصلت ولم أتلق الخدمة.
* لم أصل.
* لم أتواصل.
* طلبت شريكًا آخر.

يمكن للشريك كذلك تحديث حالة الإحالة من بوابته.

---

## 37. تكلفة الخدمة

بعد تأكيد تلقي الخدمة، يظهر للعميل سؤال:

# كم كانت تكلفة خدمتك؟

ويختار من أربع فئات:

1. أقل من 50 ريالًا.
2. من 50 ريالًا إلى أقل من 200 ريال.
3. من 200 إلى 400 ريال.
4. أكثر من 400 ريال.

لا تستخدم هذه المعلومة لإظهار تقديرات سعرية للعملاء.

تستخدم من أجل:

* احتساب رسوم الوساطة.
* تسجيل بيانات العملية.
* إدارة الفوترة.
* مراجعة الاختلافات.

---

## 38. إذا لم يدخل العميل التكلفة

إذا أكد العميل تلقي الخدمة ولم يحدد فئة التكلفة:

* يظهر الطلب في بوابة الشريك.
* يطلب من الشريك إدخال فئة التكلفة.
* يطلب منه تأكيد صحة البيانات.
* تحسب الرسوم تلقائيًا بعد التأكيد.

يحق للشريك طلب تعديل الفئة التي أدخلها العميل، مع:

* تسجيل سبب التعديل.
* حفظ الفئة السابقة.
* حفظ الفئة الجديدة.
* إحالة الاختلاف للمراجعة عند الحاجة.

---

## 39. عناصر التقييم

يشمل التقييم:

* التقييم العام.
* جودة التعامل.
* الالتزام.
* وضوح التعامل.
* جودة الخدمة.
* عدالة الأسعار.
* هل تنصح بالشريك؟
* فئة تكلفة الخدمة.
* تعليق اختياري.

---

## 40. إظهار عدد المقيمين

لا يعرض تقييم دون عدد المقيمين الموثقين.

مثال:

> **التقييم العام: 4.8 من 5 — بناءً على 26 تقييمًا موثقًا.**

> **عدالة الأسعار: 4.6 من 5 — بناءً على 22 تقييمًا موثقًا.**

إذا لم توجد بيانات كافية:

> **شريك جديد في المنصة — لا توجد تقييمات كافية بعد.**

---

## 41. إغلاق الطلب

إذا لم يقدم العميل تحديثًا أو تقييمًا، يغلق الطلب إداريًا بعد خمسة أيام من آخر متابعة.

الإغلاق لا يعني:

* حذف الطلب.
* حذف الإحالات.
* إلغاء رسم ثبت استحقاقه.
* حذف التقييمات أو الاعتراضات.
* منع الإدارة من مراجعة الطلب.

---

# القسم الثامن: الخصومات

## 42. طبيعة الخصم

الخصم المقدم لعملاء «وين أوديها»:

* اختياري حسب كل شريك.
* لا يشترط على جميع الشركاء.
* لا يعرض إلا بعد اعتماده.
* لا يعد جزءًا إلزاميًا من الخدمة.
* يجب أن تكون شروطه واضحة وغير مضللة.

---

## 43. بيانات الخصم

إذا اختار الشريك تقديم خصم، يحدد:

* نسبة الخصم.
* الخدمات المشمولة.
* هل يشمل جميع الخدمات أو بعضها.
* الشروط.
* الاستثناءات.
* تاريخ بدء الخصم.
* مدة الخصم.
* تاريخ انتهائه إن وجد.

---

## 44. مدة الخصم

يستطيع الشريك الاختيار بين:

* خصم مستمر حتى إيقافه من بوابة الشريك.
* خصم لمدة محددة.
* خصم ينتهي في تاريخ معين.

ويكون خيار:

> **يستمر الخصم حتى أوقفه بنفسي من بوابة الشريك**

متاحًا.

---

## 45. الخدمات المشمولة

يختار الشريك:

* جميع الخدمات.
* بعض الخدمات.

إذا اختار بعض الخدمات، يظهر حقل لكتابة الخدمات المشمولة.

مثال:

> الخصم على أجور اليد في خدمات الميكانيكا والكهرباء فقط.

أو:

> الخصم على تغيير الزيت والفلاتر.

---

## 46. الشروط والاستثناءات

يكون إدخال الشروط والاستثناءات اختياريًا.

يمكن أن تشمل:

* الخدمات غير المشمولة.
* الحد الأدنى لقيمة الخدمة.
* عدم الجمع مع عرض آخر.
* مدة العرض.
* الفروع المشمولة.

لا يظهر الخصم للعميل إلا بصيغته المعتمدة.

ويلتزم الشريك بالخصم المعلن طوال مدة تفعيله.

---

# القسم التاسع: بوابة الشريك

## 47. تعريف بوابة الشريك

تكون لكل شريك بوابة خاصة وآمنة داخل المنصة.

تستخدم البوابة لإدارة:

* بيانات الشريك.
* التخصصات والخدمات.
* المدن ومناطق التغطية.
* أيام وساعات العمل.
* الإحالات.
* حالات الطلبات.
* نتائج الخدمات.
* تكلفة الخدمات.
* التقييمات.
* الاعتراضات.
* الخصومات.
* الفواتير.
* الرصيد المالي.
* المدفوعات.
* إشعارات المنصة.
* حالة الشراكة.

---

## 48. تسجيل دخول الشريك

يدخل الشريك من خلال:

* اسم مستخدم أو رقم جوال أو بريد إلكتروني معتمد.
* كلمة مرور آمنة.
* رمز تحقق إضافي عند الحاجة.

تكون لكل منشأة حسابات وصلاحيات محددة، مثل:

* مالك الحساب.
* مدير المنشأة.
* موظف استقبال.
* موظف مالي.
* مستخدم للقراءة فقط.

---

## 49. إدارة الإحالات

تعرض كل إحالة:

* رقم الطلب.
* رقم الإحالة.
* الاسم الأول للعميل عند الحاجة.
* بيانات السيارة.
* نوع الخدمة.
* وصف مختصر للطلب.
* تاريخ ووقت الإحالة.
* حالة التواصل.
* حالة الوصول.
* حالة تنفيذ الخدمة.
* فئة التكلفة.
* الرسم المستحق.
* حالة الاعتراض.

يمكن للشريك تحديث الحالة إلى:

* لم يتواصل العميل.
* تواصل ولم يصل.
* وصل العميل.
* بدأ الفحص أو الاستقبال.
* تم تقديم الخدمة.
* لم تتم الخدمة.
* الطلب غير معروف.
* حالة أخرى.

---

## 50. الاعتراض على تلقي الخدمة

إذا أكد العميل تلقي الخدمة، يحق للشريك الاعتراض واختيار سبب مثل:

* العميل لم يصل.
* العميل تواصل فقط.
* لم تقدم له خدمة.
* الخدمة قدمها شريك آخر.
* الطلب غير معروف.
* العملية مكررة.
* سبب آخر.

لا يلغي الاعتراض الرسم تلقائيًا، بل يحول العملية إلى:

> **تحت المراجعة.**

---

## 51. الاعتراض على التقييم

يحق للشريك الاعتراض إذا كان التقييم:

* لا يخصه.
* صادرًا عن شخص لم يتعامل معه.
* متعلقًا بخدمة لم يقدمها.
* يحتوي على معلومات غير صحيحة بوضوح.
* يتضمن إساءة أو بيانات شخصية.
* مخالفًا لسياسة التقييم.
* ناتجًا عن طلب منفعة غير مستحقة.

لا يستطيع الشريك حذف التقييم أو تعديله بنفسه.

---

## 52. إدارة الخصومات

يستطيع الشريك من بوابته:

* إنشاء خصم.
* تحديد النسبة.
* تحديد الخدمات المشمولة.
* تحديد المدة.
* إضافة الشروط.
* تعديل الخصم.
* إيقاف الخصم.
* الاطلاع على تاريخ التعديلات.

لا يظهر أي تعديل للعميل إلا بعد حفظه واعتماده وفق سياسة المنصة.

---

## 53. إدارة الفواتير والمدفوعات

تتيح البوابة للشريك:

* عرض الفواتير.
* عرض العمليات المدرجة.
* عرض رسوم كل إحالة.
* معرفة الرصيد الحالي.
* معرفة تاريخ الاستحقاق.
* تقديم اعتراض مالي.
* رفع إثبات السداد عند الحاجة.
* تنفيذ الدفع الإلكتروني مستقبلًا.
* تحميل أو طباعة كشف الحساب.

---

# القسم العاشر: تسجيل الشريك

## 54. نوع الشريك والبيانات الأساسية

يبدأ النموذج باختيار نوع الشريك:

* ورشة إصلاح وتشخيص.
* مركز صيانة دورية.
* محل قطع غيار.
* مقدم خدمة سطحة.

ثم يطلب:

* اسم المنشأة أو مقدم الخدمة.
* الاسم التجاري.
* وصف مختصر للنشاط.
* المنطقة.
* المدينة.
* العنوان.
* رابط الموقع على خرائط Google.
* رقم واتساب.
* رقم تواصل إضافي اختياري.

---

## 55. الوثائق النظامية

### الورش ومراكز الصيانة ومحلات قطع الغيار

يكون رقم السجل التجاري إلزاميًا.

ويطلب:

* رقم السجل التجاري.
* اسم المنشأة حسب السجل.
* تاريخ انتهاء السجل عند الحاجة.
* وسيلة التحقق أو المرفق المطلوب.

### مقدمو خدمات السطحات

يطلب إلزاميًا:

* رقم السجل التجاري عندما يكون النشاط مسجلًا كمنشأة.
* رقم بطاقة التشغيل.
* تاريخ انتهاء بطاقة التشغيل.
* بيانات المركبة المستخدمة عند الحاجة.

تكون بطاقة التشغيل إلزامية في خدمة السطحة.

---

## 56. أيام وساعات العمل

تظهر أيام الأسبوع كخيارات قابلة للنقر:

* الأحد.
* الاثنين.
* الثلاثاء.
* الأربعاء.
* الخميس.
* الجمعة.
* السبت.

ويستطيع الشريك تحديد:

* يوم عمل.
* يوم إغلاق.
* ساعات مختلفة لكل يوم.

### الفترة الأولى

* وقت البداية.
* وقت النهاية.

### الفترة الثانية

* وقت البداية.
* وقت النهاية.

تكون الفترة الثانية اختيارية.

ويمكن اختيار:

* مفتوح 24 ساعة.
* فترة واحدة.
* فترتان.
* مغلق.

---

## 57. مناطق ومدن التغطية

بعد اختيار المنطقة تظهر المدن التابعة لها.

### مقدمو خدمات السطحات

يكون اختيار مدن التغطية إلزاميًا.

### بقية الشركاء

تكون المدينة الأساسية إلزامية، ومدن التغطية الإضافية اختيارية.

---

## 58. التخصص الرئيسي

تظهر التخصصات في قائمتين:

### القائمة المتاحة

تحتوي على جميع التخصصات.

### القائمة المختارة

تحتوي على تخصصات الشريك.

عند اختيار تخصص ينتقل إلى القائمة المختارة.

يطلب من الشريك ترتيب التخصصات حسب الأولوية.

أول تخصص يختاره يعتمد كتخصص رئيسي، مع رسالة تأكيد:

> **سيتم اعتماد هذا التخصص كتخصصك الرئيسي، ويمكنك ترتيب بقية التخصصات بعده.**

---

## 59. الشركات المصنعة التي يخدمها

تستخدم آلية القائمتين نفسها:

* الشركات المتاحة.
* الشركات المختارة.

عند اختيار شركة تنتقل إلى قائمة الشركات التي يخدمها الشريك.

يرتبها الشريك حسب الأولوية.

يتوفر خيار:

* جميع الشركات.
* أخرى.

---

## 60. نوع الوقود

يحدد الشريك أنواع السيارات التي يخدمها:

* بنزين — الخيار الأساسي.
* ديزل.
* كهربائية.
* جميع الأنواع.
* غير محدد.

---

# القسم الحادي عشر: رسوم الوساطة

## 61. مبدأ الرسوم

لا يدفع العميل رسومًا إلى منصة «وين أوديها».

تدفع رسوم الوساطة من الشريك بعد تأكيد تلقي العميل للخدمة.

ولا تستحق الرسوم لمجرد:

* إظهار بيانات الشريك.
* فتح واتساب.
* إرسال الرسالة.
* التواصل دون تلقي خدمة.

---

## 62. شرائح رسوم الوساطة

### تكلفة الخدمة أقل من 50 ريالًا

> لا توجد رسوم وساطة.

### تكلفة الخدمة من 50 ريالًا إلى أقل من 200 ريال

> رسوم الوساطة: 5 ريالات.

### تكلفة الخدمة من 200 إلى 400 ريال

> رسوم الوساطة: 10 ريالات.

### تكلفة الخدمة أكثر من 400 ريال

> رسوم الوساطة: 25 ريالًا.

يحسب النظام الرسم تلقائيًا وفق فئة تكلفة الخدمة المؤكدة.

---

## 63. تأكيد التكلفة

يمكن تسجيل التكلفة من خلال:

* العميل بعد تأكيد تلقي الخدمة.
* الشريك إذا لم يسجلها العميل.

إذا أدخل العميل الفئة، يستطيع الشريك:

* تأكيدها.
* طلب تعديلها مع ذكر السبب.
* الاعتراض على أن الخدمة تمت.

لا يسمح بالتعديل الصامت دون سجل واضح.

---

## 64. الفوترة الشهرية

في اليوم الأول من كل شهر ميلادي يصدر للشريك كشف حساب يشمل عمليات الدورة السابقة.

يتضمن:

* رقم الطلب.
* رقم الإحالة.
* تاريخ الخدمة.
* فئة تكلفة الخدمة.
* رسم الوساطة.
* حالة العملية.
* إجمالي الرسوم.
* الرصيد السابق.
* الرصيد الإجمالي.

---

## 65. حد السداد

يصبح السداد إلزاميًا عندما يصل الرصيد إلى:

# 100 ريال أو أكثر

إذا كان الرصيد أقل من 100 ريال:

* يظهر في كشف الحساب.
* يرحل إلى الشهر التالي.
* يستطيع الشريك سداده مبكرًا.
* يصبح واجب السداد عند بلوغه 100 ريال.

---

## 66. الاعتراض المالي

يحق للشريك الاعتراض على العمليات خلال:

# 15 يومًا

من تاريخ إصدار كشف الحساب أو الفاتورة.

يمكن أن يكون الاعتراض بسبب:

* أن الخدمة لم تقدم.
* أن فئة التكلفة غير صحيحة.
* أن الطلب لا يخص الشريك.
* أن العملية مكررة.
* سبب آخر.

---

## 67. عدم السداد

إذا استحق السداد ولم يسدد الشريك بعد انتهاء المهلة:

1. يرسل له تذكير.
2. تعلق إحالاته الجديدة.
3. يتوقف ظهوره للعملاء مؤقتًا.
4. تبقى بوابته متاحة لمراجعة الفواتير والسداد والاعتراض.
5. يعاد تفعيله بعد تسوية الرصيد.

---

# القسم الثاني عشر: بوابة الإدارة الداخلية

## 68. تعريف بوابة الإدارة

تكون للمنصة بوابة إدارة داخلية لا تظهر للعملاء أو الشركاء.

تستخدم من قبل فريق مشروع «وين أوديها» لإدارة جميع العمليات التشغيلية والمالية والإدارية.

---

## 69. حسابات فريق المشروع

يكون لكل عضو في فريق المشروع حساب مستقل.

تحدد صلاحياته وفق دوره، مثل:

* مدير النظام.
* مدير العمليات.
* موظف خدمة العملاء.
* مسؤول الشركاء.
* مسؤول التقييمات والاعتراضات.
* مسؤول مالي.
* مسؤول المحتوى.
* مسؤول تقني.
* مستخدم للقراءة والتقارير فقط.

لا يستخدم أعضاء الفريق حسابًا مشتركًا واحدًا.

---

## 70. صلاحيات الإدارة

تسمح بوابة الإدارة بحسب الصلاحية بـ:

* إنشاء حسابات الفريق.
* تعديل الصلاحيات.
* تعطيل الحسابات.
* متابعة عمليات الدخول.
* إدارة العملاء.
* إدارة الطلبات.
* إدارة الإحالات.
* إدارة الشركاء.
* مراجعة طلبات الانضمام.
* اعتماد الوثائق.
* إدارة التخصصات والخدمات.
* إدارة الشركات والموديلات.
* إدارة المناطق والمدن.
* مراجعة التقييمات.
* معالجة الاعتراضات.
* إدارة الخصومات.
* متابعة الرسوم.
* إصدار الفواتير.
* تسجيل المدفوعات.
* تعليق وإعادة تفعيل الشركاء.
* متابعة الطلبات التي لم يوجد لها شريك.
* الاطلاع على التقارير التشغيلية.

---

## 71. متابعة الطلبات والإحالات

تتيح بوابة الإدارة:

* البحث برقم الطلب.
* البحث برقم الجوال.
* معرفة مسار الخدمة.
* عرض بيانات السيارة.
* عرض التوجيه الفني المبدئي.
* عرض الشركاء الذين تم ترشيحهم.
* معرفة نتائج الإحالات.
* متابعة الطلبات المفتوحة.
* متابعة الطلبات المغلقة.
* إعادة فتح الطلب عند الحاجة.
* التعامل مع طلبات عدم توفر شريك.

---

## 72. إدارة الشركاء

تتيح بوابة الإدارة:

* مراجعة طلب الانضمام.
* التحقق من السجل التجاري.
* التحقق من بطاقة تشغيل السطحة.
* اعتماد الشريك.
* رفض الطلب مع توضيح السبب.
* تحديث حالة الشراكة.
* مراجعة المدن والتخصصات.
* مراجعة الخصومات.
* مراجعة مؤشر الثقة.
* تعليق الشريك.
* إعادة تفعيله.
* إلغاء الشراكة.

---

## 73. إدارة الرسوم والفواتير

تشمل:

* احتساب رسوم كل عملية.
* مراجعة فئة التكلفة.
* إصدار الفواتير الشهرية.
* متابعة حد 100 ريال.
* تسجيل الدفعات.
* متابعة الأرصدة.
* مراجعة الاعتراضات المالية.
* إلغاء أو تعديل الرسم بقرار موثق.
* متابعة المتأخرين عن السداد.
* تعليق الشركاء آليًا أو يدويًا.

---

## 74. إدارة التقييمات والاعتراضات

تتيح بوابة الإدارة:

* عرض التقييمات الجديدة.
* مراجعة التعليقات المخالفة.
* إخفاء تعليق مؤقتًا.
* تثبيت التقييم.
* إلغاؤه عند ثبوت عدم صحته.
* مراجعة اعتراضات الخدمة.
* طلب معلومات من العميل أو الشريك.
* تسجيل القرار.
* توثيق أثر القرار على الرسم والتقييم.
* متابعة تكرار الاعتراضات والاختلافات.

---

## 75. متابعة العمليات التشغيلية

تتيح البوابة متابعة مؤشرات مثل:

* عدد الطلبات.
* عدد الإحالات.
* عدد الطلبات دون شريك.
* عدد العملاء الذين طلبوا بديلًا.
* عدد الخدمات المؤكدة.
* عدد التقييمات.
* عدد الاعتراضات.
* إجمالي رسوم الوساطة.
* الفواتير غير المسددة.
* الشركاء الموقوفون.
* سرعة استجابة الشركاء.
* أكثر التخصصات والمدن طلبًا.

---

# القسم الثالث عشر: متطلبات التشغيل الفعلي

## 76. قاعدة بيانات مركزية

يجب تشغيل المنصة على قاعدة بيانات مركزية تحفظ:

* العملاء.
* السيارات.
* الطلبات.
* الإحالات.
* الشركاء.
* التقييمات.
* الاعتراضات.
* الخصومات.
* الرسوم.
* الفواتير.
* المدفوعات.
* الحسابات والصلاحيات.
* سجلات الأنشطة والتعديلات.

لا يعتمد التشغيل الفعلي على ملفات ثابتة أو بيانات محفوظة داخل المتصفح فقط.

---

## 77. نظام تسجيل الدخول

يحتاج النظام إلى:

* تسجيل دخول آمن للشركاء.
* تسجيل دخول آمن لفريق الإدارة.
* استعادة كلمة المرور.
* التحقق من رقم الجوال أو البريد عند الحاجة.
* تسجيل خروج من الأجهزة.
* حماية من محاولات الدخول المتكررة.

لا يحتاج العميل إلى حساب تقليدي، ويستخدم:

* رابط الطلب الخاص.

أو:

* رقم الطلب ورقم الجوال.

---

## 78. نظام الصلاحيات

يجب تطبيق صلاحيات واضحة تمنع المستخدم من الوصول إلى بيانات أو وظائف غير مسموح بها.

تشمل الصلاحيات:

* صلاحيات العميل على طلبه فقط.
* صلاحيات الشريك على إحالاته وبياناته فقط.
* صلاحيات موظفي الإدارة وفق الدور.
* صلاحيات المسؤول المالي.
* صلاحيات مراجعة الاعتراضات.
* صلاحيات إدارة الحسابات.
* صلاحيات المدير العام للنظام.

---

## 79. ربط واتساب

في النسخة الأولية يمكن الاعتماد على:

* فتح محادثة واتساب من خلال رابط.
* رسالة جاهزة.
* نسخ الرسالة.
* نسخ أو مشاركة رابط الطلب يدويًا.

وعند الانتقال إلى التشغيل الآلي يمكن ربط المنصة بخدمة واتساب الرسمية من أجل:

* إرسال رابط الطلب تلقائيًا.
* إرسال رسائل المتابعة.
* إرسال طلب التقييم.
* إرسال إشعارات الشريك.
* إرسال الفواتير والتذكيرات.
* استقبال ردود منظمة عند الحاجة.

يجب عدم بناء التشغيل الفعلي على حلول واتساب غير رسمية أو غير موثوقة.

---

## 80. الفواتير والمدفوعات

يحتاج التشغيل الفعلي إلى:

* إنشاء فواتير أو كشوف حساب منظمة.
* ترقيم الفواتير.
* تحديد دورة الفاتورة.
* تسجيل تاريخ الإصدار والاستحقاق.
* تسجيل حالة السداد.
* تسجيل طريقة الدفع.
* الاحتفاظ بإثبات الدفع.
* ربط إلكتروني بوسيلة دفع مستقبلًا.
* إصدار إيصال أو تأكيد سداد.
* معالجة المبالغ المعدلة بعد الاعتراضات.

---

## 81. الحماية والأمن

تشمل متطلبات الحماية:

* استخدام اتصال مشفر.
* حماية كلمات المرور.
* عدم وضع مفاتيح الذكاء الاصطناعي داخل واجهة الموقع العامة.
* حماية روابط الطلبات من التخمين.
* تحديد مدة وصلاحية الجلسات.
* تسجيل محاولات الدخول.
* حماية النماذج من الاستخدام الآلي والهجمات.
* تقليل ظهور البيانات الشخصية.
* تشفير البيانات الحساسة عند الحاجة.
* تحديث الأنظمة والمكتبات المستخدمة.
* مراجعة الصلاحيات دوريًا.

---

## 82. النسخ الاحتياطي والاستعادة

يجب تطبيق:

* نسخ احتياطي دوري لقاعدة البيانات.
* الاحتفاظ بأكثر من نسخة.
* فصل النسخ الاحتياطية عن النظام الأساسي.
* اختبار استعادة البيانات.
* تسجيل تاريخ آخر نسخة احتياطية.
* خطة لاستعادة التشغيل عند حدوث عطل.
* حماية النسخ الاحتياطية من الوصول غير المصرح.

---

## 83. السجلات والتدقيق

يجب الاحتفاظ بسجل للعمليات المهمة، مثل:

* تسجيل الدخول.
* تعديل بيانات الشريك.
* تغيير فئة التكلفة.
* تعديل الخصم.
* اعتماد التقييم.
* نتيجة الاعتراض.
* تعديل الرسوم.
* تسجيل السداد.
* تعليق الشريك.
* تغيير الصلاحيات.

يظهر في السجل:

* من نفذ الإجراء.
* وقت الإجراء.
* القيمة السابقة.
* القيمة الجديدة.
* سبب التعديل عند الحاجة.

---

# القسم الرابع عشر: الثقة والالتزام

## 84. نظام الثقة

تعتمد المنصة على:

> **تأكيد العميل + تأكيد الشريك + الأمانة + مراقبة الأنماط**

لا يعتبر اختلاف واحد دليلًا على التحايل.

أما الاختلافات المتكررة فتؤثر في مؤشر الثقة.

---

## 85. الحد من التسرب والتحايل

تستخدم المنصة:

* رقم طلب واضح.
* رابط طلب خاص.
* إحالات موثقة.
* تأكيد الطرفين.
* ترتيب الشريك حسب الالتزام.
* زيادة إحالات الشريك الملتزم.
* تقليل إحالات الشريك غير الملتزم.
* تعليق الشريك عند تكرار الاختلافات أو عدم السداد.
* إظهار التقييمات والخصومات للشركاء الملتزمين.
* تسوية مالية واضحة وبسيطة.
* عدم بناء نظام تقني معقد لمنع جميع حالات التحايل في النسخة الأولى.

---

# القسم الخامس عشر: التعهد واتفاقية الشراكة

## 86. الموافقات المطلوبة من الشريك

قبل إرسال طلب الانضمام يوافق الشريك على:

* صحة البيانات والوثائق.
* شروط الشراكة.
* آلية الإحالات.
* شرائح رسوم الوساطة.
* إصدار كشف الحساب في اليوم الأول من كل شهر.
* السداد عند بلوغ الرصيد 100 ريال.
* مهلة الاعتراض البالغة 15 يومًا.
* سياسة التقييمات.
* سياسة الاعتراضات.
* الالتزام بالخصم المعلن.
* حماية بيانات العملاء.
* عدم استخدام بيانات العملاء للتسويق دون موافقتهم.

---

## 87. التعهد بالأمانة

يظهر في نهاية طلب الانضمام مربع موافقة إلزامي بالنص التالي:

> **أتعهد أمام الله تعالى ثم أمام منصة «وين أوديها» بأن جميع البيانات التي قدمتها صحيحة، وأن أتعامل مع إحالات العملاء ورسوم الوساطة بأمانة وصدق، وألا أخفي أي خدمة تمت عن طريق المنصة، وأن ألتزم بالخصومات المعلنة، وبحقوق العملاء، وبالشروط والسياسات المعتمدة، وأتحمل مسؤولية أي بيانات أو تأكيدات غير صحيحة أقدمها.**

ولا يمكن تقديم طلب الانضمام قبل الموافقة على التعهد.

---

## 88. اتفاقية الشراكة

يجب أن تحدد الاتفاقية:

1. تعريف الإحالة.
2. متى تعتبر الخدمة منفذة.
3. طريقة تأكيد العميل والشريك.
4. شرائح رسوم الوساطة.
5. الحالات المعفاة من الرسوم.
6. آلية تحديد فئة تكلفة الخدمة.
7. إصدار كشف الحساب في اليوم الأول من الشهر.
8. حد السداد البالغ 100 ريال.
9. مهلة الاعتراض البالغة 15 يومًا.
10. آثار عدم السداد.
11. الالتزام بالخصومات.
12. مدة الخصومات وشروطها.
13. مسؤولية الشريك عن الخدمة.
14. حدود مسؤولية «وين أوديها».
15. حماية بيانات العميل.
16. منع التسويق دون موافقة.
17. سياسة التقييمات.
18. سياسة الاعتراضات.
19. حالات تعليق أو إلغاء الشراكة.
20. سرية المعلومات.
21. تسوية النزاعات والاختصاص.

---

# القسم السادس عشر: الخصوصية والرسائل

## 89. البيانات التي تجمعها المنصة

تشمل عند الحاجة:

* الاسم الأول.
* رقم الجوال.
* بيانات السيارة.
* رقم الهيكل في قطع الغيار.
* المنطقة والمدينة.
* الموقع الدقيق.
* وصف المشكلة.
* إجابات الأسئلة.
* بيانات الطلب والإحالات.
* تكلفة الخدمة ضمن الفئات.
* التقييمات.
* تأكيدات العميل والشريك.

لا تجمع بيانات أكثر من الحاجة التشغيلية.

---

## 90. الرسائل التشغيلية والتسويقية

يتم التفريق بين:

### الرسائل التشغيلية

* رابط الطلب.
* متابعة الطلب.
* تأكيد الوصول.
* طلب التقييم.
* حالة الاعتراض.
* إشعارات الفاتورة للشريك.

### الرسائل التسويقية

* العروض.
* الحملات.
* الرسائل الترويجية.

لا ترسل رسائل تسويقية دون الموافقة المطلوبة.

---

# القسم السابع عشر: قواعد البيانات

## 91. جدول العملاء

* رقم العميل.
* الاسم الأول.
* رقم الجوال.
* الموافقات.
* تاريخ الإنشاء.

## 92. جدول السيارات

* رقم العميل.
* الشركة المصنعة.
* الموديل.
* سنة الصنع.
* الممشى.
* نوع الوقود.
* رقم الهيكل عند إدخاله.

## 93. جدول الطلبات

* رقم الطلب.
* نوع الخدمة.
* العميل.
* السيارة.
* المنطقة.
* المدينة.
* الموقع.
* وصف المشكلة.
* الأسئلة الأربعة والإجابات.
* المشكلة المتوقعة مبدئيًا.
* التخصص.
* درجة الاستعجال.
* الخطوة المقترحة.
* رابط الطلب.
* حالة الطلب.
* تاريخ آخر تحديث.
* تاريخ الإغلاق.

## 94. جدول الشركاء

* نوع الشريك.
* الاسم.
* الوصف.
* المنطقة.
* المدينة.
* العنوان.
* رابط خرائط Google.
* رقم واتساب.
* السجل التجاري.
* بطاقة التشغيل للسطحات.
* أيام العمل.
* الفترة الأولى.
* الفترة الثانية.
* التخصصات مرتبة.
* الشركات المصنعة مرتبة.
* أنواع الوقود.
* مدن التغطية.
* الخصم.
* حالة الشراكة.
* مؤشر الثقة.

## 95. جدول الإحالات

* رقم الإحالة.
* رقم الطلب.
* الشريك.
* تاريخ الإحالة.
* حالة التواصل.
* حالة تلقي الخدمة.
* تكلفة الخدمة.
* مصدر إدخال التكلفة.
* حالة تأكيد الشريك.
* رسم الوساطة.
* حالة الاعتراض.

## 96. جدول التقييمات

* رقم الطلب.
* رقم الإحالة.
* التقييم العام.
* جودة التعامل.
* الالتزام.
* وضوح التعامل.
* جودة الخدمة.
* عدالة الأسعار.
* التوصية.
* فئة تكلفة الخدمة.
* التعليق.
* حالة التقييم.

## 97. جدول الفواتير

* رقم الفاتورة.
* الشريك.
* دورة الفاتورة.
* تاريخ الإصدار.
* العمليات.
* إجمالي الرسوم.
* الرصيد السابق.
* الرصيد الإجمالي.
* تاريخ الاستحقاق.
* حالة السداد.
* نهاية مهلة الاعتراض.

## 98. جدول المستخدمين والصلاحيات

* رقم المستخدم.
* الاسم.
* نوع المستخدم.
* الجهة أو الشريك المرتبط.
* اسم الدخول.
* وسيلة التحقق.
* الدور.
* الصلاحيات.
* حالة الحساب.
* آخر دخول.
* تاريخ الإنشاء.

## 99. جدول سجل العمليات

* المستخدم.
* نوع العملية.
* رقم السجل المتأثر.
* القيمة السابقة.
* القيمة الجديدة.
* التاريخ والوقت.
* سبب التعديل.
* عنوان الجهاز أو بيانات الجلسة عند الحاجة.

---

# القسم الثامن عشر: رحلة العميل النهائية

## 100. مسار مشكلة السيارة

**يدخل العميل المنصة**
↓
**يختار «عندي مشكلة في السيارة»**
↓
**يدخل الاسم والجوال**
↓
**يختار الشركة والموديل والسنة والممشى**
↓
**يختار المنطقة ثم المدينة**
↓
**يكتب المشكلة**
↓
**يجيب عن أربعة أسئلة**
↓
**تظهر المشكلة المتوقعة مبدئيًا**
↓
**يظهر التخصص ودرجة الاستعجال والخطوة المطلوبة**
↓
**يضغط «وين أوديها؟»**
↓
**يختار النظام ورشة واحدة مناسبة**
↓
**ينشئ الطلب ويسجل الإحالة**
↓
**يظهر رابط الطلب ويمكن نسخه أو مشاركته**
↓
**تظهر الورشة وتقييماتها وخصمها إن وجد**
↓
**يظهر زر واتساب وخيار نسخ الرسالة**
↓
**يتواصل العميل مع الورشة**
↓
**يؤكد تلقي الخدمة**
↓
**يحدد تكلفة الخدمة من أربع فئات**
↓
**يقيّم التجربة**
↓
**تحتسب رسوم الوساطة على الشريك**

---

## 101. مسار قطع الغيار

**يختار العميل «أبحث عن محل قطع غيار»**
↓
**يدخل بيانات السيارة والمنطقة والمدينة**
↓
**يكتب رقم الهيكل ويفضل إدخاله**
↓
**يكتب اسم القطعة بدقة**
↓
**يختار وكالة أو تجارية**
↓
**يختار النظام محلًا واحدًا مناسبًا**
↓
**ينشئ الطلب ويسجل الإحالة**
↓
**يظهر رابط الطلب**
↓
**يتواصل العميل مع المحل عبر واتساب**
↓
**يتأكد مباشرة من التوفر والسعر والمطابقة**

---

## 102. مسار السطحة

**يختار العميل «أحتاج سطحة»**
↓
**يحدد المنطقة والمدينة**
↓
**يشارك الموقع التلقائي إلزاميًا**
↓
**يكتب وصف المكان**
↓
**يحدد الوجهة وحالة السيارة**
↓
**يصنف الطلب عاجلًا**
↓
**يختار النظام مقدم خدمة سطحة واحدًا**
↓
**يسجل الإحالة**
↓
**يتواصل العميل عبر واتساب**

---

## 103. مسار الصيانة الدورية

**يختار العميل «أبحث عن صيانة دورية»**
↓
**يحدد السيارة والممشى ونوع الوقود**
↓
**يختار المنطقة والمدينة**
↓
**يحدد الخدمة**
↓
**يختار النظام مركزًا واحدًا مناسبًا**
↓
**يسجل الإحالة**
↓
**يظهر الخصم والتقييمات**
↓
**يتواصل العميل عبر واتساب**

---

# القسم التاسع عشر: النسخة الأولى MVP

## 104. مكونات النسخة الأولى

تشمل:

1. موقع ويب مهيأ للجوال.
2. المسار الرئيسي «عندي مشكلة في السيارة».
3. قسم منفصل «خدمات أخرى».
4. خدمة «أبحث عن محل قطع غيار».
5. خدمة «أحتاج سطحة».
6. خدمة «أبحث عن صيانة دورية».
7. توضيح أن الخدمة مجانية للعميل.
8. الشركة والموديل المرتبط بها.
9. المنطقة ثم المدينة.
10. تحديد الموقع تلقائيًا.
11. أربعة أسئلة لتحديد المشكلة.
12. توجيه فني مبدئي.
13. مسار الأعراض الخطرة.
14. رقم الهيكل واسم القطعة ونوعها.
15. الموقع الإلزامي ووصف المكان للسطحة.
16. محرك المطابقة.
17. شريك واحد مناسب في كل مرة.
18. تسجيل الإحالة.
19. رابط خاص للطلب.
20. متابعة الطلب بالرابط.
21. متابعة الطلب برقم الطلب ورقم الجوال.
22. نسخ رابط الطلب ومشاركته يدويًا.
23. زر واتساب ونسخ الرسالة.
24. العودة إلى الطلب.
25. طلب شريك آخر.
26. التعامل مع عدم توفر شريك.
27. بوابة خاصة بالشريك.
28. بوابة إدارة داخلية.
29. أيام وساعات العمل وفترتان.
30. التخصصات المرتبة.
31. الشركات المصنعة المرتبة.
32. أنواع الوقود.
33. السجل التجاري.
34. بطاقة تشغيل السطحات.
35. الخصومات الاختيارية والمنظمة.
36. التقييم وتكلفة الخدمة.
37. شرائح رسوم الوساطة.
38. الفاتورة الشهرية.
39. حد السداد 100 ريال.
40. اعتراض خلال 15 يومًا.
41. التعهد بالأمانة.
42. سياسة الخصوصية.
43. الاعتراض على الخدمة والتقييم.
44. قاعدة بيانات مركزية.
45. نظام تسجيل دخول وصلاحيات.
46. الحماية والنسخ الاحتياطي.
47. تجهيز الربط الرسمي مع واتساب.
48. إدارة الفواتير والمدفوعات.

---

# 105. الصياغة التعريفية النهائية

> **«وين أوديها» منصة ويب ذكية ومجانية للعميل، تساعد صاحب السيارة على فهم مشكلته مبدئيًا، ومعرفة التخصص ودرجة الاستعجال والخطوة المناسبة، ثم ترشحه إلى شريك واحد مناسب في كل مرة. كما تدله على محلات قطع الغيار ومقدمي خدمات السطحات ومراكز الصيانة الدورية. وتعتمد إيرادات المنصة على رسوم الوساطة المستحقة على الشركاء بعد الخدمات المؤكدة.**

# 106. العبارة التسويقية الرئيسية

> **عندك مشكلة في السيارة؟ قل لنا وش فيها… ونقول لك وين توديها.**

# 107. جوهر التجربة

> **صف مشكلتك → جاوب عن أربعة أسئلة → اعرف التوقع المبدئي والتخصص → خذ ترشيحًا واحدًا مناسبًا → تواصل عبر واتساب → تابع طلبك بالرابط أو برقم الطلب والجوال → وارجع له متى احتجت.**
```

## `ADMIN_AUDIT_REPORT.md`

```markdown
# تقرير تدقيق بوابة الإدارة الداخلية — وين أوديها

## نطاق الفحص

تم فحص:

- 12 صفحة HTML عامة وشريكية.
- 16 ملف JavaScript موجودًا قبل إضافة البوابة.
- ملف CSS المشترك.
- نموذج البيانات في `localStorage`.
- النموذج التشغيلي المرفق.
- الصفحة الرئيسية المنشورة على GitHub Pages.

## مصادر البيانات الحالية

| المجال | مفتاح localStorage | العلاقات الأساسية |
|---|---|---|
| العملاء | `wa_customers` | يرتبط بالمركبات والطلبات عبر `customerId` |
| المركبات | `wa_vehicles` | يرتبط بالعميل والطلب عبر `vehicleId` |
| الطلبات | `wa_requests` | يرتبط بالعميل والمركبة والإحالات |
| الشركاء | `wa_partners` | يرتبط بالإحالات والخصومات والرسوم والفواتير والمدفوعات |
| الإحالات | `wa_referrals` | يرتبط بالطلب والشريك والتقييم والرسم والاعتراض |
| طلبات الانضمام | `wa_join_applications` | يتحول إلى شريك عند الاعتماد |
| التقييمات | `wa_ratings` | يرتبط بالطلب والإحالة والشريك |
| الاعتراضات | `wa_objections` | يرتبط بالإحالة أو التقييم أو الفاتورة |
| الخصومات | `wa_discounts` | يرتبط بالشريك |
| الرسوم | `wa_fees` | يرتبط بالإحالة والشريك والفاتورة |
| الفواتير | `wa_invoices` | يرتبط بالشريك والرسوم والمدفوعات |
| المدفوعات | `wa_payments` | يرتبط بالفاتورة والشريك |
| الموافقات | `wa_consents` | يرتبط بالعميل أو الطلب بحسب السجل |
| الجلسات الحالية | `wa_sessions` | مسودات العميل ودخول الشريك |

## الفجوات قبل التنفيذ

1. لا توجد صفحة دخول مستقلة لأعضاء فريق المشروع.
2. لا توجد أدوار وصلاحيات تشغيلية داخلية.
3. لا توجد شاشة موحدة تعرض الطلبات والإحالات والشركاء والحسابات.
4. لا يوجد سجل تدقيق إداري للقيم السابقة والجديدة.
5. لا توجد أدوات تصدير وطباعة داخلية.
6. لا يوجد فصل بين صلاحيات التشغيل والشركاء وخدمة العملاء والمحاسبة والاعتراضات.
7. الإخفاء وحده لا يوفر حماية فعلية على الاستضافة الثابتة.

## ما تم تنفيذه

- صفحة `admin-login.html` غير مرتبطة بأي Header أو Footer عام.
- صفحة `admin-dashboard.html` بأقسام تظهر حسب الدور.
- ثلاثة جداول جديدة:
  - `wa_admin_users`
  - `wa_admin_sessions`
  - `wa_audit_logs`
- ستة أدوار مستقلة.
- مؤشرات محسوبة مباشرة من السجلات الحالية.
- إدارة الطلبات والإحالات والبدائل والإغلاق وإعادة الفتح.
- اعتماد ورفض طلبات الانضمام وإنشاء الشريك دون تكرار.
- تفعيل وتعليق الشركاء.
- متابعة الرسوم والفواتير والمدفوعات والمتأخرات.
- مراجعة التقييمات والخصومات والاعتراضات.
- تصدير CSV وطباعة القسم الظاهر.
- تأكيد مع سبب إلزامي قبل الإجراءات الحساسة.
- سجل تدقيق يحفظ المستخدم والإجراء والقيم السابقة والجديدة والوقت والسبب.

## القيود الأمنية الصريحة

هذه البوابة تنفذ أفضل نموذج ممكن داخل مشروع HTML وCSS وJavaScript ثابت، لكنها ليست حماية إنتاجية. يستطيع مستخدم يملك وصولًا إلى المتصفح أو أدوات المطور تعديل `localStorage` أو قراءة الشيفرة. قبل التشغيل الفعلي يلزم:

- Backend مركزي.
- قاعدة بيانات مركزية.
- مصادقة آمنة على الخادم.
- RBAC مطبق على API لا على الواجهة فقط.
- كلمات مرور مجزأة بخوارزمية مخصصة مثل Argon2id أو bcrypt.
- MFA للحسابات الحساسة.
- جلسات HttpOnly وSecure وSameSite.
- سجلات تدقيق غير قابلة للتعديل من المستخدم.
- حماية من المحاولات المتكررة وCSRF وXSS ومراقبة الدخول.
- نسخ احتياطي واستعادة واختبارات دورية للصلاحيات.
```

## `ADMIN_PERMISSION_MATRIX.md`

```markdown
# مصفوفة صلاحيات بوابة الإدارة

| القسم أو الإجراء | مدير النظام | مدير التشغيل | مسؤول الشركاء | خدمة العملاء | المحاسب | مراجع الاعتراضات |
|---|:---:|:---:|:---:|:---:|:---:|:---:|
| نظرة عامة | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| عرض الطلبات والإحالات | ✓ | ✓ | ✓ عرض | ✓ | ✓ عرض | ✓ عرض |
| إغلاق وإعادة فتح الطلب | ✓ | ✓ | — | ✓ | — | — |
| إنشاء شريك بديل | ✓ | ✓ | — | ✓ | — | — |
| عرض الشركاء | ✓ | ✓ | ✓ | — | ✓ عرض | — |
| تفعيل وتعليق الشريك | ✓ | — | ✓ | — | — | — |
| عرض طلبات الانضمام | ✓ | ✓ | ✓ | — | — | — |
| اعتماد أو رفض الانضمام | ✓ | — | ✓ | — | — | — |
| عرض الرسوم والفواتير والمدفوعات | ✓ | ✓ عرض | — | — | ✓ | ✓ عرض |
| إصدار فاتورة وتسجيل سداد | ✓ | — | — | — | ✓ | — |
| إعفاء رسم أو إعادته | ✓ | — | — | — | ✓ | — |
| عرض التقييمات والخصومات | ✓ | ✓ عرض | ✓ | ✓ تقييمات | — | ✓ |
| تعديل حالة الخصم | ✓ | — | ✓ | — | — | — |
| إخفاء أو إعادة نشر تقييم | ✓ | — | — | — | — | ✓ |
| اتخاذ قرار اعتراض | ✓ | — | — | — | — | ✓ |
| التصدير والطباعة | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| عرض سجل التدقيق | ✓ | ✓ | — | — | ✓ | ✓ |
| إدارة مستخدمي الإدارة | ✓ | — | — | — | — | — |

> ملاحظة: الصلاحيات في هذه النسخة تنفذ داخل الواجهة المحلية. في التشغيل الفعلي يجب فرضها على الخادم لكل طلب API.
```

## `ADMIN_DATA_MODEL.md`

```markdown
# مخطط بيانات بوابة الإدارة

## الجداول الجديدة

### `wa_admin_users`

- `id`
- `name`
- `username`
- `role`
- `passwordSalt`
- `passwordHash`
- `status`
- `mustChangePassword`
- `failedAttempts`
- `lockedUntil`
- `lastLoginAt`
- `createdAt`
- `updatedAt`

### `wa_admin_sessions`

- `id`
- `token`
- `userId` → `wa_admin_users.id`
- `createdAt`
- `lastActivityAt`
- `expiresAt`
- `userAgent`
- `revokedAt`

### `wa_audit_logs`

- `id`
- `userId` → `wa_admin_users.id`
- `userName`
- `userRole`
- `action`
- `entityType`
- `entityId`
- `before`
- `after`
- `reason`
- `metadata`
- `at`
- `createdAt`
- `updatedAt`

## العلاقات المستخدمة في الإدارة

```text
wa_customers 1 ─── * wa_vehicles
wa_customers 1 ─── * wa_requests
wa_vehicles  1 ─── * wa_requests
wa_requests  1 ─── * wa_referrals
wa_partners  1 ─── * wa_referrals
wa_referrals 1 ─── 0..1 wa_ratings
wa_referrals 1 ─── 0..1 wa_fees
wa_referrals 1 ─── * wa_objections
wa_partners  1 ─── * wa_discounts
wa_partners  1 ─── * wa_invoices
wa_invoices  1 ─── * wa_payments
wa_admin_users 1 ─── * wa_admin_sessions
wa_admin_users 1 ─── * wa_audit_logs
```

## سلامة العلاقات

تم توسيع `WA.Storage.integrityCheck()` للتحقق من:

- أن كل جلسة إدارة مرتبطة بمستخدم موجود.
- أن كل سجل تدقيق يحتوي على مستخدم موجود عندما يكون الإجراء بشريًا.
- استمرار الفحوص السابقة للعملاء والمركبات والطلبات والإحالات والرسوم والفواتير والمدفوعات.
```

## `ADMIN_IMPLEMENTATION_PLAN.md`

```markdown
# خطة تنفيذ بوابة الإدارة

## المرحلة 1 — التدقيق

- حصر الصفحات والملفات ومفاتيح التخزين.
- قراءة مخطط الطلبات والإحالات والشركاء والحسابات.
- مراجعة الموقع المنشور والتأكد من عدم وجود رابط إدارة عام.

## المرحلة 2 — البيانات والمصادقة

- رفع إصدار البيانات إلى 11.
- إضافة جداول مستخدمي الإدارة والجلسات وسجل التدقيق.
- إضافة مصادقة محلية بكلمات مرور مجزأة وجلسة قصيرة.
- إضافة قفل مؤقت بعد المحاولات الفاشلة.

## المرحلة 3 — الأدوار والصلاحيات

- تعريف ستة أدوار.
- إخفاء الأقسام غير المصرح بها.
- منع تنفيذ الإجراءات برمجيًا إذا لم يملك الدور الصلاحية.

## المرحلة 4 — لوحة التشغيل

- مؤشرات حقيقية من السجلات.
- الطلبات والإحالات والبدائل.
- الشركاء وطلبات الانضمام.
- التقييمات والخصومات والاعتراضات.

## المرحلة 5 — الحسابات

- الرسوم وفئات التكلفة.
- الفواتير والكشوف.
- المدفوعات والمتأخرات.
- الإعفاءات والقرارات المالية الموثقة.

## المرحلة 6 — التدقيق والتصدير

- سجل قبل/بعد لكل تغيير حساس.
- بحث وفلاتر.
- CSV وطباعة.

## المرحلة 7 — QA والتسليم

- فحص HTML والروابط والأصول.
- فحص JavaScript.
- اختبارات الصلاحيات والجلسات والتدقيق.
- اختبار عدم ظهور رابط الإدارة في الصفحات العامة.
- توثيق متطلبات Backend قبل الإطلاق.
```

## `ADMIN_QA_REPORT.md`

```markdown
# تقرير QA — بوابة الإدارة الداخلية

## الاختبارات المنفذة

| الاختبار | النتيجة |
|---|---|
| فحص صياغة جميع ملفات JavaScript | ناجح |
| الاختبارات التشغيلية السابقة `qa-unit.js` | `ALL_UNIT_QA_PASSED` |
| اختبارات الإدارة `admin-qa.js` | `ALL_ADMIN_QA_PASSED` |
| فحص HTML والروابط والنماذج | 14 صفحة، دون ملاحظات |
| عدد الروابط المفحوصة | 253 |
| عدد عناصر التحكم المفحوصة | 110 |
| عدم وجود روابط الإدارة في الصفحات العامة | ناجح |
| وجود صفحة دخول ولوحة إدارة مستقلة | ناجح |
| صلاحيات الأدوار الستة | ناجح |
| تسجيل الدخول والخروج والجلسة | ناجح |
| تسجيل إجراءات الدخول في سجل التدقيق | ناجح |
| سلامة علاقات مستخدمي وجلسات الإدارة | ناجح |
| تقديم صفحات الإدارة والأصول عبر HTTP | 200 لكل الملفات المختبرة |
| اختبار Chromium المرئي | تعذر بسياسة بيئة التنفيذ |

## حالات تم التحقق منها

1. مدير النظام يملك جميع الأقسام والإجراءات.
2. خدمة العملاء تدير الطلبات ولا تدير الحسابات.
3. المحاسب يدير الحسابات ولا يغير الطلبات.
4. رابط الإدارة لا يظهر في Header أو Footer العام.
5. الجلسة تنتهي عند تسجيل الخروج.
6. كل إجراء حساس يتطلب سببًا.
7. كل تعديل حساس يكتب سجل قبل/بعد.
8. البديل يستخدم محرك المطابقة الحالي ويستبعد السابق.
9. اعتماد طلب الانضمام يمنع إنشاء شريك مكرر.
10. الاعتراض المقبول أو المرفوض يطبق أثرًا موثقًا على الرسم أو التقييم أو الفاتورة.

## قيد الاختبار المرئي

يتضمن المشروع اختبار المتصفح السابق، لكن بيئة التنفيذ منعت Chromium من الوصول إلى عناوين HTTP المحلية و`file://`. لم يُدّع تنفيذ اختبار بصري آلي كامل. تم التعويض بفحص DOM ثابت واختبارات منطقية وHTTP.
```
