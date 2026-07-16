(() => {
  "use strict";
  window.WA = window.WA || {};

  const escapeHtml = (value) => String(value ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
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
    return lines.filter((line) => line !== "").join("\n");
  };

  const buildRequestLinkMessage = ({ request, customer, absoluteUrl }) => [
    `مرحبًا ${customer.firstName}،`,
    `تم إنشاء طلبك في «وين أوديها» برقم ${request.humanId}.`,
    "احتفظ بالرابط التالي للمتابعة دون كلمة مرور:",
    absoluteUrl,
    "يمكنك منه التواصل مع الشريك، طلب بديل، تأكيد تلقي الخدمة، وإكمال التقييم."
  ].join("\n");

  const availabilityText = (partner) => partner.availability?.status === "verified"
    ? `تم تحديث قابلية الاستقبال بتاريخ ${formatDate(partner.availability.verifiedAt, { time: false })}. يرجى تأكيد الموعد عبر واتساب.`
    : (partner.availability?.note || "الشريك يستقبل عادةً هذا النوع من الطلبات، ويرجى التأكد من الموعد عبر واتساب.");

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
    const discountHtml = discount ? `<section class="discount-box"><strong>${escapeHtml(discount.title)}: ${escapeHtml(discount.percent)}%</strong><span>${escapeHtml((discount.includedServices || []).join("، "))}</span><small>${escapeHtml(discount.conditions)} ${discount.continuousUntilStopped ? "مستمر حتى يوقفه الشريك." : `حتى ${escapeHtml(discount.endsAt)}`}</small></section>` : "";
    const mapLink = partner.googleMapsUrl ? `<a class="text-link" href="${escapeHtml(partner.googleMapsUrl)}" target="_blank" rel="noopener noreferrer">فتح الموقع على خرائط Google</a>` : "";
    return `<article class="partner-card ${compact ? "partner-card-compact" : ""}">
      ${partner.isDemo ? '<div class="demo-badge">بيانات Seed تجريبية — ليست منشأة حقيقية</div>' : ""}
      <div class="partner-head"><div><span class="pill">${escapeHtml(WA.Config.partnerTypes[partner.type] || partner.type)}</span><h2>${escapeHtml(partner.name)}</h2><p>${escapeHtml(partner.region || "")} — ${escapeHtml(partner.city)} — ${escapeHtml(partner.address || partner.exactLocation || "")}</p>${mapLink}</div><div class="rating-block">${ratingHtml}</div></div>
      <div class="partner-metrics"><div><span>عدالة الأسعار</span><strong>${escapeHtml(partner.fairnessRating || "—")} / 5</strong><small>${escapeHtml(partner.fairnessCount || 0)} تقييمًا موثقًا</small></div><div><span>الالتزام</span><strong>${escapeHtml(partner.commitment || "—")}</strong><small>مؤشر تشغيلي تجريبي</small></div><div><span>ساعات العمل</span><strong>${escapeHtml(partner.hours || "تأكد عبر واتساب")}</strong><small>قد تختلف ساعات اليوم</small></div></div>
      <div class="info-panel"><strong>سبب الترشيح</strong><p>${escapeHtml(matchReason || referral?.matchReason || "مطابق لنوع الخدمة والمدينة.")}</p></div>
      <div class="info-panel muted"><strong>التوفر</strong><p>${escapeHtml(availabilityText(partner))}</p></div>${discountHtml}
    </article>`;
  };

  const injectLayout = () => {
    qsa("[data-site-header]").forEach((slot) => {
      slot.innerHTML = `<header class="site-header"><a class="skip-link" href="#main-content">تجاوز إلى المحتوى</a><div class="container nav-shell"><a class="brand" href="index.html" aria-label="الصفحة الرئيسية"><span class="brand-mark">و</span><span><strong>وين أوديها؟</strong><small>توجيه وإحالة ذكية</small></span></a><button class="nav-toggle" type="button" aria-expanded="false" aria-controls="mainNav">القائمة</button><nav id="mainNav" class="main-nav" aria-label="التنقل الرئيسي"><a href="customer.html?fresh=1">ابدأ طلبك</a><a href="track.html">متابعة الطلب</a><a href="join.html">انضم كشريك</a><a href="workshop-login.html">بوابة الشريك</a></nav></div></header>`;
      const toggle = qs(".nav-toggle", slot);
      const nav = qs(".main-nav", slot);
      toggle?.addEventListener("click", () => { const open = toggle.getAttribute("aria-expanded") === "true"; toggle.setAttribute("aria-expanded", String(!open)); nav.classList.toggle("open", !open); });
    });
    qsa("[data-site-footer]").forEach((slot) => {
      slot.innerHTML = `<footer class="site-footer"><div class="container footer-grid"><div><a class="brand footer-brand" href="index.html"><span class="brand-mark">و</span><span><strong>وين أوديها؟</strong><small>نسخة MVP تجريبية</small></span></a><p>منصة توجيه وإحالة، وليست جهة فحص أو إصلاح. بيانات Seed تجريبية.</p></div><div><strong>روابط مهمة</strong><a href="privacy.html">سياسة الخصوصية</a><a href="terms.html">الشروط وحدود المسؤولية</a><a href="track.html">متابعة الطلب</a></div><div><strong>للشركاء</strong><a href="join.html">طلب انضمام</a><a href="join-status.html">حالة الطلب</a><a href="workshop-login.html">تسجيل الدخول</a></div></div><div class="container footer-bottom"><span>© 2026 وين أوديها — نموذج تشغيلي تجريبي</span><span>HTML + CSS + JavaScript + localStorage</span></div></footer>`;
    });
  };

  const initSelect = (select, options, placeholder = "اختر") => { if (select) select.innerHTML = `<option value="">${escapeHtml(placeholder)}</option>${options.map((option) => `<option value="${escapeHtml(option)}">${escapeHtml(option)}</option>`).join("")}`; };
  const setButtonBusy = (button, busy, text = "جاري التنفيذ...") => {
    if (!button) return;
    if (busy) { button.dataset.originalText = button.textContent; button.textContent = text; button.disabled = true; button.setAttribute("aria-busy", "true"); }
    else { button.textContent = button.dataset.originalText || button.textContent; button.disabled = false; button.removeAttribute("aria-busy"); }
  };
  const setActiveNav = () => { const page = location.pathname.split("/").pop() || "index.html"; qsa(".main-nav a").forEach((link) => { if (link.getAttribute("href").split("?")[0] === page) link.setAttribute("aria-current", "page"); }); };

  const init = () => {
    WA.Storage.init();
    WA.Seed.run();
    WA.Lifecycle.runSweep();
    injectLayout();
    setActiveNav();
    document.documentElement.classList.add("js");
  };

  WA.UI = { qs, qsa, escapeHtml, formatDate, formatMoney, serviceLabel, statusLabel, showToast, copyText, whatsappUrl, buildWhatsappMessage, buildRequestLinkMessage, availabilityText, renderStars, renderPartnerCard, getRequestBundle, initSelect, setButtonBusy, vehicleText };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true }); else init();
})();
