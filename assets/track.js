(() => {
  "use strict";

  let currentRequest = null;

  const ratingDimensions = [
    ["overall", "التقييم العام"],
    ["treatment", "جودة التعامل"],
    ["commitment", "الالتزام"],
    ["clarity", "وضوح التعامل"],
    ["quality", "جودة الخدمة"],
    ["fairness", "عدالة الأسعار"]
  ];

  const normalizePhone = (value) => value.replace(/\D/g, "").slice(0, 10);

  const currentReferral = () => currentRequest?.referrals?.[currentRequest.currentReferral || 0] || null;

  const renderRatingFields = () => {
    const mount = document.querySelector("#ratingFields");
    mount.innerHTML = ratingDimensions.map(([name, label]) => `
      <div class="rating-field">
        <label>${label}</label>
        <div class="stars-input" aria-label="${label}">
          ${[5,4,3,2,1].map((value) => `
            <input type="radio" id="${name}-${value}" name="${name}" value="${value}">
            <label for="${name}-${value}" title="${value} من 5">★</label>`).join("")}
        </div>
      </div>`).join("");
  };

  const renderTimeline = () => {
    const current = currentReferral();
    const status = current?.status || currentRequest.status;
    const stages = [
      ["تم إنشاء الطلب", true],
      ["تم تسجيل الإحالة", true],
      ["تم إظهار الورشة", true],
      ["تواصل العميل", ["تواصل العميل", "تم تحديد موعد", "وصل العميل", "تمت الخدمة"].includes(status)],
      ["وصل العميل", ["وصل العميل", "تمت الخدمة"].includes(status)],
      ["تمت الخدمة", status === "تمت الخدمة"]
    ];
    const activeIndex = Math.max(0, stages.reduce((last, item, index) => item[1] ? index : last, 0));
    document.querySelector("#requestTimeline").innerHTML = stages.map(([title, done], index) => `
      <div class="timeline-item ${done ? "done" : ""} ${index === activeIndex && status !== "تمت الخدمة" ? "current" : ""}">
        <span class="timeline-dot"></span>
        <h4>${WA.escapeHTML(title)}</h4>
        <p>${done ? "مكتملة أو مؤكدة" : "بانتظار التحديث"}</p>
      </div>`).join("");
  };

  const renderCurrentReferral = () => {
    const referral = currentReferral();
    if (!referral) return;
    const workshop = referral.workshop;
    document.querySelector("#currentReferralCard").innerHTML = `
      <div class="request-strip"><span>رقم الإحالة</span><strong>${WA.escapeHTML(referral.referralId)}</strong></div>
      <div class="info-list">
        <div class="info-row"><div class="info-label">الورشة</div><div class="info-value">${WA.escapeHTML(workshop.name)}</div></div>
        <div class="info-row"><div class="info-label">التخصص</div><div class="info-value">${WA.escapeHTML(workshop.specialty)}</div></div>
        <div class="info-row"><div class="info-label">الحالة</div><div class="info-value"><span class="badge ${WA.statusBadgeClass(referral.status)}">${WA.escapeHTML(referral.status)}</span></div></div>
        <div class="info-row"><div class="info-label">التقييم العام</div><div class="info-value"><span class="stars">★</span> ${workshop.rating} من 5</div></div>
        <div class="info-row"><div class="info-label">عدالة الأسعار</div><div class="info-value"><span class="stars">★</span> ${workshop.fairness} من 5</div></div>
      </div>
      <button class="btn btn-success btn-block mt-16" id="trackWhatsapp" type="button">التواصل عبر واتساب — محاكاة</button>`;
    document.querySelector("#trackWhatsapp").addEventListener("click", () => WA.toast("تمت محاكاة فتح واتساب. لا توجد رسالة حقيقية."));
  };

  const renderRequest = () => {
    document.querySelector("#requestView").classList.remove("hidden");
    document.querySelector("#trackRequestTitle").textContent = `الطلب ${currentRequest.id}`;
    document.querySelector("#trackRequestMeta").textContent = `أُنشئ في ${WA.formatDate(currentRequest.createdAt)} — باسم ${currentRequest.customer.name}`;
    document.querySelector("#trackRequestStatus").className = `badge ${WA.statusBadgeClass(currentRequest.status)}`;
    document.querySelector("#trackRequestStatus").textContent = currentRequest.status;
    document.querySelector("#trackType").textContent = currentRequest.type === "maintenance" ? "صيانة دورية" : "مشكلة تواجهك";
    document.querySelector("#trackVehicle").textContent = `${currentRequest.vehicle.make} ${currentRequest.vehicle.model} ${currentRequest.vehicle.year}`;
    document.querySelector("#trackCity").textContent = currentRequest.city;
    document.querySelector("#trackReferralCount").textContent = currentRequest.referrals.length;
    renderTimeline();
    renderCurrentReferral();
    const shouldShowRating = currentRequest.customerConfirmation === "تمت الخدمة" || currentReferral()?.status === "تمت الخدمة";
    document.querySelector("#ratingSection").classList.toggle("hidden", !shouldShowRating);
    if (currentRequest.rated) {
      document.querySelector("#ratingForm").classList.add("hidden");
      document.querySelector("#ratingSuccess").classList.remove("hidden");
      document.querySelector("#ratingSuccess").textContent = "سبق إرسال تقييم موثق لهذا الطلب. شكرًا لك.";
    } else {
      document.querySelector("#ratingForm").classList.remove("hidden");
      document.querySelector("#ratingSuccess").classList.add("hidden");
    }
    window.scrollTo({ top: document.querySelector("#requestView").offsetTop - 80, behavior: "smooth" });
  };

  const findRequest = (id, phone) => {
    const requests = WA.storage.get("wa_requests", []);
    return requests.find((request) => request.id.toUpperCase() === id.toUpperCase() && request.customer.phone === phone) || null;
  };

  const search = () => {
    const id = document.querySelector("#trackId").value.trim();
    const phone = normalizePhone(document.querySelector("#trackPhone").value);
    document.querySelector('[data-field="trackId"]').classList.toggle("invalid", !id);
    document.querySelector('[data-field="trackPhone"]').classList.toggle("invalid", !/^05\d{8}$/.test(phone));
    if (!id || !/^05\d{8}$/.test(phone)) return;
    currentRequest = findRequest(id, phone);
    if (!currentRequest) {
      document.querySelector("#requestView").classList.add("hidden");
      WA.toast("لم نجد طلبًا مطابقًا لرقم الطلب والجوال.");
      return;
    }
    renderRequest();
  };

  const updateConfirmation = (value) => {
    if (!currentRequest) return;
    currentRequest.customerConfirmation = value;
    const referral = currentReferral();
    if (value === "وصلت إلى الورشة") referral.status = "وصل العميل";
    if (value === "تمت الخدمة") referral.status = "تمت الخدمة";
    if (value === "لم أتواصل معها") referral.status = "لم يتم التواصل";
    if (value === "تواصلت ولم أصل" && referral.status === "تم ترشيحها للعميل") referral.status = "تواصل العميل";
    currentRequest.status = value === "تمت الخدمة" ? "تمت الخدمة" : value;

    const requests = WA.storage.get("wa_requests", []);
    const index = requests.findIndex((item) => item.id === currentRequest.id);
    if (index >= 0) requests[index] = currentRequest;
    WA.storage.set("wa_requests", requests);

    const referrals = WA.storage.get("wa_referrals", []);
    const stored = referrals.find((item) => item.referralId === referral.referralId);
    if (stored) {
      stored.status = referral.status;
      stored.updatedAt = new Date().toISOString();
      WA.storage.set("wa_referrals", referrals);
    }

    document.querySelector("#confirmationNotice").classList.remove("hidden");
    document.querySelector("#confirmationNotice").textContent = `تم تسجيل تأكيدك: ${value}.`;
    renderRequest();
  };

  const submitRating = (event) => {
    event.preventDefault();
    if (!currentRequest || currentRequest.rated) return;
    const data = {};
    let valid = true;
    ratingDimensions.forEach(([name]) => {
      const selected = document.querySelector(`input[name="${name}"]:checked`);
      if (!selected) valid = false;
      else data[name] = Number(selected.value);
    });
    const recommend = document.querySelector("#recommendWorkshop").value;
    if (!recommend) valid = false;
    if (!valid) {
      WA.toast("أكمل جميع عناصر التقييم واختر هل تنصح بالورشة.");
      return;
    }
    const referral = currentReferral();
    const ratings = WA.storage.get("wa_ratings", []);
    ratings.unshift({
      requestId: currentRequest.id,
      referralId: referral.referralId,
      customer: currentRequest.customer.name,
      ...data,
      recommend,
      comment: document.querySelector("#ratingComment").value.trim(),
      createdAt: new Date().toISOString()
    });
    WA.storage.set("wa_ratings", ratings);
    currentRequest.rated = true;
    currentRequest.status = "تم التقييم";
    const requests = WA.storage.get("wa_requests", []);
    const index = requests.findIndex((item) => item.id === currentRequest.id);
    if (index >= 0) requests[index] = currentRequest;
    WA.storage.set("wa_requests", requests);
    renderRequest();
    WA.toast("تم حفظ التقييم الموثق بنجاح.");
  };

  const init = () => {
    renderRatingFields();
    const queryId = WA.getQuery("id");
    const queryPhone = WA.getQuery("phone");
    if (queryId) document.querySelector("#trackId").value = queryId;
    if (queryPhone) document.querySelector("#trackPhone").value = queryPhone;
    if (queryId && queryPhone) setTimeout(search, 80);

    document.querySelector("#trackPhone").addEventListener("input", (event) => {
      event.target.value = normalizePhone(event.target.value);
    });
    document.querySelector("#searchRequest").addEventListener("click", search);
    document.querySelector("#loadDemoRequest").addEventListener("click", () => {
      document.querySelector("#trackId").value = "WA-10425";
      document.querySelector("#trackPhone").value = "0500000001";
      search();
    });
    document.querySelectorAll(".confirmation-btn").forEach((button) => {
      button.addEventListener("click", () => updateConfirmation(button.dataset.confirmation));
    });
    document.querySelector("#ratingForm").addEventListener("submit", submitRating);
  };

  document.addEventListener("DOMContentLoaded", init);
})();
