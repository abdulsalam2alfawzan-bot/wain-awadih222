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
