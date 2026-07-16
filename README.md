# وين أوديها — MVP تشغيلي عربي

مشروع ويب عربي **Mobile-First / RTL** مبني بـHTML وCSS وJavaScript فقط. يحاكي نموذج التشغيل الكامل للعميل والشريك عبر قاعدة JSON مترابطة داخل `localStorage`.

> جميع الشركاء والعناوين والأرقام والتقييمات والوثائق في بيانات Seed تجريبية وليست لمنشآت حقيقية.

## المسارات المنفذة

1. **عندي مشكلة في السيارة:** وصف عامي، أربعة أسئلة ديناميكية، توقع فني احتمالي، تخصص، استعجال، خطوة تالية، ومسار خطر.
2. **قطع الغيار:** رقم الهيكل الموصى به، اسم القطعة الدقيق، وكالة/تجارية، المنطقة والمدينة.
3. **السطحة العاجلة:** الموقع التلقائي الإلزامي، وصف المكان، الوجهة، وحالة حركة السيارة.
4. **الصيانة الدورية:** الخدمة، الممشى، نوع الوقود، المنطقة والمدينة.

تُنشأ الإحالة قبل إظهار الشريك، ولا يظهر إلا شريك واحد في كل مرة. يمكن طلب بديلين إضافيين داخل الطلب نفسه.

## التشغيل محليًا

من داخل مجلد المشروع:

```bash
python -m http.server 8080
```

ثم افتح:

```text
http://localhost:8080/
```

يمكن فتح `index.html` مباشرة، لكن الخادم المحلي أدق لاختبار الروابط وسياسات الأمان.

## دخول الشريك التجريبي

```text
رمز الشريك: WA-DEMO
الرمز السري: 1234
```

المصادقة محاكاة Frontend وليست صالحة للإنتاج.

## هيكل المشروع

```text
.
├── index.html
├── customer.html
├── track.html
├── workshop-login.html
├── workshop-dashboard.html
├── join.html
├── join-status.html
├── payment.html
├── receipt.html
├── privacy.html
├── terms.html
├── 404.html
├── assets/
│   ├── config.js
│   ├── automotive-data.js
│   ├── storage.js
│   ├── seed.js
│   ├── ai-engine.js
│   ├── matching-engine.js
│   ├── lifecycle.js
│   ├── common.js
│   ├── customer.js
│   ├── track.js
│   ├── workshop-login.js
│   ├── dashboard.js
│   ├── join.js
│   ├── join-status.js
│   ├── payment.js
│   ├── receipt.js
│   ├── styles.css
│   └── icons/favicon.svg
├── tests/
│   ├── qa-unit.js
│   └── static_audit.py
├── PROJECT_MODEL.md
├── REQUIREMENTS_MATRIX.md
├── AUDIT_REPORT.md
├── TEST_REPORT.md
├── QA_SCENARIOS.md
├── SEED_DATA.md
├── RELEASE_CHECKLIST.md
├── SOURCE_CODE.md
├── _headers
├── netlify.toml
└── .nojekyll
```

## نموذج البيانات

الجداول النشطة:

```text
wa_customers
wa_vehicles
wa_requests
wa_partners
wa_referrals
wa_ratings
wa_objections
wa_discounts
wa_fees
wa_invoices
wa_payments
wa_join_applications
wa_consents
wa_sessions
wa_meta
```

يظل `wa_claims` مفتاحًا قديمًا للترحيل فقط، ولا يستخدمه التشغيل الجديد لإنشاء مطالبات.

تشمل طبقة التخزين:

- إصدار بيانات وترحيل آمن.
- تحديث Seed التجريبي فقط دون لمس شركاء غير تجريبيين.
- معرفات مرجعية وفحص سلامة العلاقات.
- منع تكرار العميل والمركبة والإحالة والرسم والتقييم والدفع.
- تعقيم النصوص قبل التخزين والعرض.
- تواريخ الإنشاء والتحديث والإغلاق.
- `publicToken` عشوائي لا يتضمن رقم الجوال.

## رسوم الوساطة

لا تُعرض أي أسعار تقديرية للعميل. بعد تأكيد تلقي الخدمة تسجل فئة التكلفة فقط:

| فئة تكلفة الخدمة | رسم الوساطة |
|---|---:|
| أقل من 50 ريالًا | 0 ريال |
| 50 إلى أقل من 200 | 5 ريالات |
| 200 إلى 400 | 10 ريالات |
| أكثر من 400 | 25 ريالًا |

- تصدر الفاتورة في اليوم الأول من الشهر.
- يرحل الرصيد إذا كان أقل من 100 ريال.
- يصبح السداد إلزاميًا عند 100 ريال أو أكثر.
- مهلة الاعتراض على الفاتورة 15 يومًا.
- اختلاف العميل والشريك على فئة التكلفة يعلق الرسم للمراجعة.

## WhatsApp

النسخة الثابتة تستخدم روابط `wa.me` برسائل جاهزة، مع زر نسخ الرسالة. إرسال الرابط أو الرسالة تلقائيًا دون نقرة يحتاج Backend وWhatsApp Business API؛ لا تدّعي هذه النسخة القيام بذلك.

## تشغيل الاختبارات

```bash
node tests/qa-unit.js
python tests/static_audit.py
for file in assets/*.js tests/*.js; do node --check "$file"; done
```

## إعادة ضبط البيانات التجريبية

من أدوات المطور في المتصفح:

```javascript
localStorage.clear();
location.reload();
```

## الاستضافة

### GitHub Pages

ارفع محتويات المجلد إلى جذر المستودع، ثم فعّل Pages من الفرع الرئيسي. ملف `.nojekyll` موجود.

### Netlify

ارفع المجلد مباشرة أو اربطه بمستودع GitHub. إعدادات `netlify.toml` و`_headers` موجودة.

## حدود نسخة العرض

`localStorage` خاص بالجهاز والمتصفح ولا يزامن البيانات بين العميل والشريك فعليًا. قبل الإطلاق التجاري يلزم Backend وقاعدة بيانات مركزية، OTP، مصادقة وصلاحيات، WhatsApp Business API، سجل تدقيق، نسخ احتياطي، مراجعة أمنية وقانونية، وشركاء حقيقيون موثقون.
