(() => {
  "use strict";
  const $ = WA.UI.qs;
  const $$ = WA.UI.qsa;
  let step = 1;
  let selectedSpecialties = [];
  let selectedMakes = [];
  const selectedValues = (select) => [...select.selectedOptions].map((option) => option.value);
  const checkedValues = (selector) => $$(selector).filter((input) => input.checked).map((input) => input.value);
  const progress = {1:[20,"البيانات الأساسية"],2:[40,"أيام وساعات العمل"],3:[60,"التغطية والأولويات"],4:[80,"الخصم"],5:[100,"الموافقات"]};

  const showStep = (next) => {
    step = next;
    $$('[data-join-step]').forEach((section)=>section.classList.toggle("active",Number(section.dataset.joinStep)===step));
    $("#joinSuccess").classList.remove("active");
    const [percent,label]=progress[step];$("#joinProgressBar").style.width=`${percent}%`;$("#joinProgressPercent").textContent=`${percent}%`;$("#joinProgressLabel").textContent=label;$(".progress-track").setAttribute("aria-valuenow",String(percent));$(`[data-join-step="${step}"]`)?.focus();
  };

  const renderPriority = (availableId, selectedId, source, selected, setter) => {
    const available=$(availableId);const ordered=$(selectedId);
    available.innerHTML=source.filter((item)=>!selected.includes(item)).map((item)=>`<button class="selector-item" type="button" data-add="${WA.UI.escapeHtml(item)}">${WA.UI.escapeHtml(item)} <span>+</span></button>`).join("")||'<p class="muted">تم اختيار جميع العناصر المتاحة.</p>';
    ordered.innerHTML=selected.map((item,index)=>`<li><span><strong>${index+1}</strong>${WA.UI.escapeHtml(item)}${index===0?'<small>التخصص/العلامة الرئيسية</small>':""}</span><span class="priority-actions"><button type="button" data-up="${index}" aria-label="رفع الأولوية">↑</button><button type="button" data-down="${index}" aria-label="خفض الأولوية">↓</button><button type="button" data-remove="${index}" aria-label="إزالة">×</button></span></li>`).join("")||'<li class="muted">لم تختر شيئًا بعد.</li>';
    $$('[data-add]',available).forEach((button)=>button.addEventListener("click",()=>{setter([...selected,button.dataset.add]);}));
    $$('[data-remove]',ordered).forEach((button)=>button.addEventListener("click",()=>{const next=[...selected];next.splice(Number(button.dataset.remove),1);setter(next);}));
    $$('[data-up]',ordered).forEach((button)=>button.addEventListener("click",()=>{const i=Number(button.dataset.up);if(i<1)return;const next=[...selected];[next[i-1],next[i]]=[next[i],next[i-1]];setter(next);}));
    $$('[data-down]',ordered).forEach((button)=>button.addEventListener("click",()=>{const i=Number(button.dataset.down);if(i>=selected.length-1)return;const next=[...selected];[next[i+1],next[i]]=[next[i],next[i+1]];setter(next);}));
  };
  const setSpecialties = (next) => {selectedSpecialties=next;renderPriority("#availableSpecialties","#selectedSpecialties",WA.Automotive.specialties,selectedSpecialties,setSpecialties);};
  const setMakes = (next) => {selectedMakes=next;renderPriority("#availableMakes","#selectedMakes",["جميع الشركات",...WA.Automotive.makes.filter((item)=>item!=="أخرى"),"أخرى"],selectedMakes,setMakes);};

  const updateCities = () => {const region=$("#joinRegion").value;const city=$("#joinCity");if(!region){city.disabled=true;city.innerHTML='<option value="">اختر المنطقة أولًا</option>';return;}city.disabled=false;WA.UI.initSelect(city,WA.Automotive.getCities(region),"اختر المدينة");updateCoverage();};
  const updateCoverage = () => {const region=$("#joinRegion").value;const basic=$("#joinCity").value;const current=selectedValues($("#coverageCities"));const cities=WA.Automotive.getCities(region);$("#coverageCities").innerHTML=cities.map((city)=>`<option value="${WA.UI.escapeHtml(city)}" ${(current.includes(city)||city===basic)?"selected":""}>${WA.UI.escapeHtml(city)}</option>`).join("");};

  const updateAdaptive = () => {
    const type=$("#partnerType").value;
    $("#towDocuments").hidden=type!=="tow";["operationCardNumber","operationCardExpiry","towVehiclePlate"].forEach((id)=>$("#"+id).required=type==="tow");
    $("#towAdaptive").hidden=type!=="tow";$("#towVehicleTypes").required=type==="tow";
    $("#maintenanceAdaptive").hidden=type!=="maintenance";$("#maintenanceServicesJoin").required=type==="maintenance";
    $("#partsAdaptive").hidden=type!=="parts";
    if(type==="tow"&&!selectedSpecialties.length)setSpecialties(["نقل وسحب المركبات"]);
    if(type==="parts"&&!selectedSpecialties.length)setSpecialties(["قطع غيار سيارات"]);
    if(type==="maintenance"&&!selectedSpecialties.length)setSpecialties(["صيانة دورية وخدمات سريعة"]);
  };

  const schedule = () => {
    const days=checkedValues('#workingDays input[type="checkbox"]');const open24=$("#open24Hours").checked;
    return days.map((day)=>({day,open:true,allDay:open24,period1:open24?null:{from:$("#period1From").value,to:$("#period1To").value},period2:open24||!$("#period2From").value||!$("#period2To").value?null:{from:$("#period2From").value,to:$("#period2To").value}}));
  };

  const validateStep = (number) => {
    if(number===1){const ids=["partnerType","businessName","tradeName","activityDescription","joinRegion","joinCity","address","googleMapsUrl","joinWhatsapp","commercialRegistration","registeredName"];let valid=ids.every((id)=>Boolean($("#"+id).value.trim()));const phone=/^05\d{8}$/.test(WA.Storage.sanitizePhone($("#joinWhatsapp").value));try{new URL($("#googleMapsUrl").value);}catch(_){valid=false;}if($("#partnerType").value==="tow")valid=valid&&["operationCardNumber","operationCardExpiry","towVehiclePlate"].every((id)=>Boolean($("#"+id).value.trim()));if(!valid||!phone)WA.UI.showToast("أكمل البيانات الأساسية والوثائق وتحقق من واتساب ورابط الخرائط","error");return valid&&phone;}
    if(number===2){const days=checkedValues('#workingDays input[type="checkbox"]');let valid=days.length>0;if(!$("#open24Hours").checked)valid=valid&&Boolean($("#period1From").value)&&Boolean($("#period1To").value);if(Boolean($("#period2From").value)!==Boolean($("#period2To").value))valid=false;if(!valid)WA.UI.showToast("اختر أيام العمل وأكمل الفترة الأولى، أو اختر 24 ساعة","error");return valid;}
    if(number===3){const type=$("#partnerType").value;let valid=selectedValues($("#coverageCities")).length>0&&selectedSpecialties.length>0&&selectedMakes.length>0&&checkedValues('#fuelTypesJoin input[type="checkbox"]').length>0;if(type==="tow")valid=valid&&Boolean($("#towVehicleTypes").value.trim());if(type==="maintenance")valid=valid&&selectedValues($("#maintenanceServicesJoin")).length>0;if(type==="parts")valid=valid&&checkedValues('input[name="partTypesJoin"]').length>0;if(!valid)WA.UI.showToast("أكمل التغطية والتخصصات والعلامات والوقود ومتطلبات نوع الشريك","error");return valid;}
    if(number===4&&$("#offersDiscount").checked){const valid=Boolean($("#joinDiscountPercent").value)&&Boolean($("#joinDiscountServices").value.trim())&&Boolean($("#joinDiscountStart").value);if(!valid)WA.UI.showToast("أكمل نسبة الخصم والخدمات وتاريخ البداية","error");return valid;}
    return true;
  };

  const review = () => {const type=$("#partnerType").value;const items=[["نوع الشريك",WA.Config.partnerTypes[type]],["الاسم التجاري",$("#tradeName").value],["الموقع",`${$("#joinRegion").value} — ${$("#joinCity").value}`],["أيام العمل",checkedValues('#workingDays input[type="checkbox"]').join("، ")],["التخصص الرئيسي",selectedSpecialties[0]],["أولوية العلامات",selectedMakes.join(" ← ")],["التغطية",selectedValues($("#coverageCities")).join("، ")],["الخصم",$("#offersDiscount").checked?`${$("#joinDiscountPercent").value}% مستمر حتى الإيقاف`:"لا يوجد"]];$("#joinReview").innerHTML=items.map(([label,value])=>`<div class="guidance-item"><span>${WA.UI.escapeHtml(label)}</span><strong>${WA.UI.escapeHtml(value||"—")}</strong></div>`).join("");};

  const submit = (event) => {
    event.preventDefault();const form=$("#joinForm");if(!form.checkValidity()){form.reportValidity();return;}if(!["agreementAccepted","feesAccepted","ratingsAccepted","privacyTrustAccepted","honestyPledge"].every((id)=>$("#"+id).checked)){WA.UI.showToast("يلزم قبول جميع الموافقات والتعهد بالأمانة","error");return;}
    const phone=WA.Storage.sanitizePhone($("#joinWhatsapp").value);const name=WA.Storage.sanitizeText($("#businessName").value,100);const duplicate=WA.Storage.get("wa_join_applications").find((row)=>row.phone===phone&&row.businessName===name&&!["rejected","cancelled"].includes(row.status));if(duplicate){WA.UI.showToast(`يوجد طلب سابق برقم ${duplicate.applicationNumber}`,"info");showSuccess(duplicate);return;}
    const type=$("#partnerType").value;const application=WA.Storage.upsert("wa_join_applications",{
      id:WA.Storage.createId("APP"),applicationNumber:`JOIN-${Math.floor(10000+Math.random()*90000)}`,publicToken:WA.Storage.randomToken("join"),partnerType:type,businessName:name,tradeName:WA.Storage.sanitizeText($("#tradeName").value,100),description:WA.Storage.sanitizeText($("#activityDescription").value,500),region:$("#joinRegion").value,city:$("#joinCity").value,address:WA.Storage.sanitizeText($("#address").value,250),googleMapsUrl:$("#googleMapsUrl").value,phone,secondaryPhone:WA.Storage.sanitizePhone($("#secondaryPhone").value),
      documents:{commercialRegistration:WA.Storage.sanitizeText($("#commercialRegistration").value,40),registeredName:WA.Storage.sanitizeText($("#registeredName").value,120),commercialExpiry:$("#commercialExpiry").value,operationCardNumber:WA.Storage.sanitizeText($("#operationCardNumber").value,50),operationCardExpiry:$("#operationCardExpiry").value,towVehiclePlate:WA.Storage.sanitizeText($("#towVehiclePlate").value,30)},
      schedule:schedule(),coverageCities:selectedValues($("#coverageCities")),specialtiesPriority:selectedSpecialties,makesPriority:selectedMakes,fuelTypes:checkedValues('#fuelTypesJoin input[type="checkbox"]'),towVehicleTypes:WA.Storage.sanitizeText($("#towVehicleTypes").value,250),maintenanceServices:selectedValues($("#maintenanceServicesJoin")),partTypes:checkedValues('input[name="partTypesJoin"]'),
      discount:$("#offersDiscount").checked?{percent:Number($("#joinDiscountPercent").value),services:WA.Storage.sanitizeText($("#joinDiscountServices").value,220),conditions:WA.Storage.sanitizeText($("#joinDiscountConditions").value,700),startsAt:$("#joinDiscountStart").value,continuousUntilStopped:$("#continuousDiscount").checked}:null,
      agreements:{partnership:true,feeBands:true,monthlyInvoice:true,paymentThreshold100:true,objectionWindow15Days:true,ratingsAndObjections:true,privacyAndTrust:true,honestyPledge:true},status:"submitted",statusLabel:"تم الاستلام — قيد المراجعة التجريبية",isDemo:true,submittedAt:WA.Storage.now()
    });showSuccess(application);
  };
  const showSuccess = (application) => {$("#joinApplicationNumber").textContent=application.applicationNumber;$("#joinStatusLink").href=`join-status.html?token=${encodeURIComponent(application.publicToken)}`;$$('[data-join-step]').forEach((section)=>section.classList.remove("active"));$("#joinSuccess").classList.add("active");$("#joinSuccess").focus();};

  const init = () => {
    WA.UI.initSelect($("#joinRegion"),WA.Automotive.regionNames,"اختر المنطقة");WA.Automotive.maintenanceServices.forEach((service)=>$("#maintenanceServicesJoin").add(new Option(service,service)));WA.Automotive.timeOptions().forEach((time)=>["period1From","period1To","period2From","period2To"].forEach((id)=>$("#"+id).add(new Option(time,time))));$("#period1From").value="08:00";$("#period1To").value="12:00";$("#period2From").value="16:00";$("#period2To").value="22:00";
    $("#workingDays").innerHTML=WA.Automotive.weekdays.map((day)=>`<label class="day-chip"><input type="checkbox" value="${WA.UI.escapeHtml(day)}" ${day!=="الجمعة"?"checked":""}><span>${WA.UI.escapeHtml(day)}</span></label>`).join("");
    $("#fuelTypesJoin").innerHTML=WA.Automotive.fuels.map((fuel,index)=>`<label class="checkbox-line"><input type="checkbox" value="${WA.UI.escapeHtml(fuel)}" ${index===0?"checked":""}><span>${WA.UI.escapeHtml(fuel)}</span></label>`).join("");
    setSpecialties([]);setMakes([]);
    $("#joinRegion").addEventListener("change",updateCities);$("#joinCity").addEventListener("change",updateCoverage);$("#partnerType").addEventListener("change",updateAdaptive);
    $("#selectAllDays").addEventListener("click",()=>$$('#workingDays input[type="checkbox"]').forEach((input)=>input.checked=true));$("#clearDays").addEventListener("click",()=>$$('#workingDays input[type="checkbox"]').forEach((input)=>input.checked=false));$("#open24Hours").addEventListener("change",()=>$("#periodFields").hidden=$("#open24Hours").checked);
    $("#offersDiscount").addEventListener("change",()=>{const enabled=$("#offersDiscount").checked;$("#discountJoinFields").hidden=!enabled;["joinDiscountPercent","joinDiscountServices","joinDiscountStart"].forEach((id)=>$("#"+id).required=enabled);});
    $$('[data-join-next]').forEach((button)=>button.addEventListener("click",()=>{if(!validateStep(step))return;const next=Number(button.dataset.joinNext);if(next===5)review();showStep(next);}));$$('[data-join-back]').forEach((button)=>button.addEventListener("click",()=>showStep(Number(button.dataset.joinBack))));$("#joinForm").addEventListener("submit",submit);
  };
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init,{once:true});else init();
})();
