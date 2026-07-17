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
