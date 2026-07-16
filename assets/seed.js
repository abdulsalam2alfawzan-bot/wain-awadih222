(() => {
  "use strict";
  window.WA = window.WA || {};

  const seedVersion = 9;
  const qassimCities = ["بريدة", "عنيزة", "الرس", "البكيرية", "المذنب"];
  const makes = ["تويوتا", "نيسان", "هيونداي", "كيا", "فورد", "شيفروليه", "لكزس", "جي إم سي", "مازدا", "هوندا"];
  const schedules = WA.Automotive.weekdays.map((day) => ({
    day,
    open: !["الجمعة"].includes(day),
    allDay: false,
    period1: { from: "08:00", to: "12:00" },
    period2: { from: "16:00", to: "22:00" }
  }));

  const definitions = {
    workshop: {
      names: ["مركز الفحص التجريبي", "ورشة المسار التجريبية", "مركز تشخيص المركبات التجريبي"],
      specialties: ["فحص وتشخيص عام", "ميكانيكا وكهرباء محرك", "فحص فرامل", "تكييف وكهرباء سيارات", "عفشة وتعليق وتوجيه", "كهرباء سيارات", "فحص ناقل حركة"],
      services: ["فحص وتشخيص عام", "فحص المحرك", "فحص الفرامل", "فحص التكييف", "فحص الكهرباء", "فحص العفشة", "فحص ناقل الحركة"]
    },
    parts: {
      names: ["محل قطع المركبة التجريبي", "مركز قطع السيارات التجريبي", "مستودع القطع التجريبي"],
      specialties: ["قطع غيار سيارات"],
      services: ["قطع وكالة", "قطع تجارية", "الاستفسار عن قطع الغيار"]
    },
    tow: {
      names: ["سطحة المساندة التجريبية", "نقل المركبات التجريبي", "سطحة الطريق التجريبية"],
      specialties: ["نقل وسحب المركبات"],
      services: ["نقل سيارات سيدان", "نقل مركبات دفع رباعي", "نقل مركبات متعطلة", "طلبات عاجلة"]
    },
    maintenance: {
      names: ["مركز الخدمة السريعة التجريبي", "عناية السيارة التجريبية", "مركز الصيانة الدورية التجريبي"],
      specialties: ["صيانة دورية وخدمات سريعة"],
      services: [...WA.Automotive.maintenanceServices]
    }
  };

  const buildPartner = (type, city, cityIndex, typeIndex, variantIndex = 0) => {
    const def = definitions[type];
    const id = variantIndex === 0 ? `DEMO-${type.toUpperCase()}-${cityIndex + 1}` : `DEMO-${type.toUpperCase()}-${cityIndex + 1}-${variantIndex + 1}`;
    const partnerMakes = type === "tow" ? ["جميع الشركات"] : [...makes.slice(typeIndex), ...makes.slice(0, typeIndex)];
    return {
      id,
      type,
      name: `${def.names[(cityIndex + typeIndex + variantIndex) % def.names.length]} — ${city}${variantIndex ? ` ${variantIndex + 1}` : ""}`,
      tradeName: `منشأة ${id}`,
      description: `شريك Seed تجريبي لا يمثل منشأة حقيقية، أُنشئ لاختبار مسار ${WA.Config.partnerTypes[type]}.`,
      region: "منطقة القصيم",
      city,
      address: `عنوان تجريبي داخل ${city}`,
      exactLocation: `موقع تجريبي — ${city}`,
      googleMapsUrl: `https://maps.google.com/?q=${encodeURIComponent(city)}`,
      whatsapp: `0500${String(typeIndex * 100 + cityIndex * 10 + variantIndex).padStart(6, "0")}`.slice(0, 10),
      secondaryPhone: "",
      commercialRegistration: type === "tow" ? `DEMO-CR-TOW-${cityIndex + 1}` : `DEMO-CR-${type.toUpperCase()}-${cityIndex + 1}`,
      operationCardNumber: type === "tow" ? `DEMO-OP-${cityIndex + 1}` : "",
      operationCardExpiry: type === "tow" ? "2027-12-31" : "",
      schedule: schedules,
      hours: "الأحد–الخميس والسبت: 8:00–12:00 و4:00–10:00",
      specialties: def.specialties,
      specialtiesPriority: def.specialties,
      services: def.services,
      servedMakes: partnerMakes,
      makesPriority: partnerMakes,
      fuelTypes: type === "parts" || type === "tow" ? ["غير محدد"] : ["بنزين", "ديزل", "هجين"],
      coverageCities: type === "tow" ? [city, qassimCities[(cityIndex + 1) % qassimCities.length]] : [city],
      towVehicleTypes: type === "tow" ? ["سيدان", "دفع رباعي", "بيك أب"] : [],
      partTypes: type === "parts" ? ["وكالة", "تجارية"] : [],
      availability: { status: "typical", note: "الشريك يستقبل عادةً هذا النوع من الطلبات، ويرجى التأكد من الموعد عبر واتساب." },
      ratingOverall: Number((4.1 + ((cityIndex + typeIndex + variantIndex) % 7) / 10).toFixed(1)),
      ratingCount: 12 + cityIndex * 3 + typeIndex + variantIndex * 2,
      fairnessRating: Number((4.0 + ((cityIndex + typeIndex + variantIndex + 2) % 7) / 10).toFixed(1)),
      fairnessCount: 9 + cityIndex * 2 + typeIndex + variantIndex,
      commitment: ["مرتفع", "جيد جدًا", "جيد"][cityIndex % 3],
      responseScore: 80 + ((cityIndex + typeIndex) % 15),
      trustScore: 82 + ((cityIndex * 2 + typeIndex) % 14),
      partnershipStatus: "active",
      paymentStatus: "current",
      acceptsUrgent: type === "tow",
      demoNotice: "هذه بيانات Seed تجريبية وليست لشريك حقيقي.",
      isDemo: true,
      seedVersion
    };
  };

  const buildPartners = () => {
    const types = Object.keys(definitions);
    return qassimCities.flatMap((city, cityIndex) => types.flatMap((type, typeIndex) =>
      [0, 1, 2].map((variantIndex) => buildPartner(type, city, cityIndex, typeIndex, variantIndex))));
  };

  const run = () => {
    const meta = WA.Storage.get("wa_meta");
    const builtPartners = buildPartners();
    const builtIds = new Set(builtPartners.map((partner) => partner.id));
    const existing = WA.Storage.get("wa_partners");
    // نحذف فقط سجلات Seed التجريبية القديمة التي لم تعد جزءًا من الحزمة، ولا نمس أي شريك حقيقي.
    WA.Storage.set("wa_partners", existing.filter((row) => !row.isDemo || builtIds.has(row.id)));
    builtPartners.forEach((partner) => {
      const previous = WA.Storage.findById("wa_partners", partner.id);
      if (!previous || previous.isDemo) WA.Storage.upsert("wa_partners", { ...previous, ...partner, createdAt: previous?.createdAt || WA.Storage.now() });
    });

    const discounts = WA.Storage.get("wa_discounts");
    ["DEMO-WORKSHOP-1", "DEMO-PARTS-1", "DEMO-MAINTENANCE-1"].forEach((partnerId, index) => {
      const id = `DEMO-DISCOUNT-${index + 1}`;
      if (!discounts.some((row) => row.id === id)) {
        WA.Storage.upsert("wa_discounts", {
          id,
          partnerId,
          title: "خصم عملاء وين أوديها",
          percent: [10, 7, 12][index],
          includedServices: index === 1 ? ["قطع مختارة وفق تأكيد المحل"] : ["أجور اليد للخدمات المحددة"],
          conditions: "يسري بعد إظهار رقم الطلب، ولا يجمع مع عرض آخر إلا بموافقة الشريك.",
          exclusions: "القطع والمواد غير مشمولة إلا إذا نص العرض على ذلك.",
          startsAt: "2026-07-01",
          endsAt: "",
          continuousUntilStopped: true,
          status: "approved",
          approvedAt: WA.Storage.now(),
          history: [{ action: "created", at: WA.Storage.now(), note: "خصم Seed تجريبي مستمر حتى الإيقاف" }],
          isDemo: true
        });
      }
    });

    const sessions = WA.Storage.get("wa_sessions");
    if (!sessions.some((row) => row.type === "demo_credentials" && row.partnerCode === "WA-DEMO")) {
      sessions.push({ id: "DEMO-CREDENTIALS", type: "demo_credentials", partnerId: "DEMO-WORKSHOP-1", partnerCode: "WA-DEMO", pin: "1234", isDemo: true, createdAt: WA.Storage.now(), updatedAt: WA.Storage.now() });
      WA.Storage.set("wa_sessions", sessions);
    }

    WA.Storage.set("wa_meta", { ...meta, seedVersion, seedAppliedAt: meta.seedAppliedAt || WA.Storage.now(), seedNotice: "جميع بيانات الشركاء Seed تجريبية وليست لشركاء حقيقيين.", updatedAt: WA.Storage.now() });
  };

  WA.Seed = { run, buildPartners };
})();
