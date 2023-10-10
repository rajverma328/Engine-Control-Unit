enab_diesel = document.getElementById("switch1");
var diesel_cond = parseInt(localStorage.getItem("diesel_cond"));
enab_diesel.checked = diesel_cond;
apply = document.getElementById("Apply");

const t1 = document.getElementById("num1");
const t2 = document.getElementById("num2");
const t3 = document.getElementById("num3");
const t4 = document.getElementById("num4");
const t5 = document.getElementById("num5");

t1.value = localStorage.getItem("diesel_hv_duration");
t2.value = localStorage.getItem("diesel_lv_duration");
t3.value = localStorage.getItem("diesel_peak");
t4.value = localStorage.getItem("diesel_steady");
t5.value = localStorage.getItem("diesel_tdc");

const t1_minValue = parseFloat(t1.min);
const t1_maxValue = parseFloat(t1.max);

const t2_minValue = parseFloat(t2.min);
const t2_maxValue = parseFloat(t2.max);

const t3_minValue = parseFloat(t3.min);
const t3_maxValue = parseFloat(t3.max);

const t4_minValue = parseFloat(t4.min);
const t4_maxValue = parseFloat(t4.max);

const t5_minValue = parseFloat(t5.min);
const t5_maxValue = parseFloat(t5.max);

enab_diesel.addEventListener('change', function() {
    if(this.checked){
        diesel_cond = 1;
    }
    else {
        diesel_cond = 0;
    }
});

apply.addEventListener('click', function() {
    var diesel_hv_duration = parseFloat(t1.value);
    var diesel_lv_duration = parseFloat(t2.value);
    var diesel_peak = parseFloat(t3.value);
    var diesel_steady = parseFloat(t4.value);
    var diesel_tdc = parseFloat(t5.value);

    if (isNaN(diesel_hv_duration) || diesel_hv_duration < t1_minValue || diesel_hv_duration > t1_maxValue) {
        alert("Invalid number value or out of range : Diesel HV duration")
        return
    }
    if (isNaN(diesel_lv_duration) || diesel_lv_duration < t2_minValue || diesel_lv_duration > t2_maxValue) {
        alert("Invalid number value or out of range : Diesel LV duration")
        return
    }
    if (isNaN(diesel_peak) || diesel_peak < t3_minValue || diesel_peak > t3_maxValue) {
        alert("Invalid number value or out of range : Peak Current")
        return
    }
    if (isNaN(diesel_steady) || diesel_steady < t4_minValue || diesel_steady > t4_maxValue) {
        alert("Invalid number value or out of range : Steady current")
        return
    }
    if (isNaN(diesel_tdc) || diesel_tdc < t5_minValue || diesel_tdc > t5_maxValue) {
        alert("Invalid number value or out of range : TDC")
        return
    }
    localStorage.setItem("diesel_cond", diesel_cond);
    localStorage.setItem("diesel_hv_duration", diesel_hv_duration);
    localStorage.setItem("diesel_lv_duration", diesel_lv_duration);
    localStorage.setItem("diesel_peak", diesel_peak);
    localStorage.setItem("diesel_steady", diesel_steady);
    localStorage.setItem("diesel_tdc", diesel_tdc);
    console.log("tested")
});

