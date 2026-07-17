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
