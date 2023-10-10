enab_rail = document.getElementById("switch1");
var rail_cond = parseInt(localStorage.getItem("rail_cond"));
enab_rail.checked = rail_cond;
apply = document.getElementById("Apply");
const t1 = document.getElementById("num1");
t1.value = localStorage.getItem("control_voltage");

const t1_minValue = parseFloat(t1.min);
const t1_maxValue = parseFloat(t1.max);

enab_rail.addEventListener('change', function() {
    if(this.checked){
        rail_cond = 1;
    }
    else {
        rail_cond = 0;
    }
});

apply.addEventListener('click', function() {
    var control_voltage = parseFloat(t1.value);
    if (isNaN(control_voltage) || control_voltage < t1_minValue || control_voltage > t1_maxValue) {
        alert("Invalid number value or out of range : Port duration")
        return
    }
    localStorage.setItem("control_voltage", control_voltage);
    localStorage.setItem("rail_cond", rail_cond);
});