enab_port = document.getElementById("switch1");
var port_cond = parseInt(localStorage.getItem("port_cond"));
enab_port.checked = port_cond;
apply = document.getElementById("Apply");
const t1 = document.getElementById("num1");
const t2 = document.getElementById("num5");
t1.value = localStorage.getItem("port_duration");
t2.value = localStorage.getItem("port_tdc");

const t1_minValue = parseFloat(t1.min);
const t1_maxValue = parseFloat(t1.max);

const t2_minValue = parseFloat(t2.min);
const t2_maxValue = parseFloat(t2.max);

enab_port.addEventListener('change', function() {
    if(this.checked){
        port_cond = 1;
    }
    else {
        port_cond = 0;
    }
});

apply.addEventListener('click', function() {
    var port_duration = parseFloat(t1.value);
    var port_tdc = parseFloat(t2.value);

    if (isNaN(port_duration) || port_duration < t1_minValue || port_duration > t1_maxValue) {
        alert("Invalid number value or out of range : Port duration")
        return
    }
    if (isNaN(port_tdc) || port_tdc < t2_minValue || port_tdc > t2_maxValue) {
        alert("Invalid number value or out of range : Port TDC")
        return
    }
    localStorage.setItem("port_duration", port_duration);
    localStorage.setItem("port_tdc", port_tdc);
    localStorage.setItem("port_cond", port_cond);
});