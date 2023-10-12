diesel = document.getElementById("switch1");
port = document.getElementById("switch2");
rail = document.getElementById("switch3");
apply = document.getElementById("Apply");

var diesel_cond = parseInt(localStorage.getItem("diesel_cond"));
var port_cond = parseInt(localStorage.getItem("port_cond"));
var rail_cond = parseInt(localStorage.getItem("rail_cond"));

diesel.checked = diesel_cond;
port.checked = port_cond;
rail.checked = rail_cond;

diesel.addEventListener('change', function() {
    if (this.checked) {
        diesel_cond = 1;
    } else {
        diesel_cond = 0;
    }
});

port.addEventListener('change', function() {
    if (this.checked) {
        port_cond = 1;
    } else {
        port_cond = 0;
    }
});

rail.addEventListener('change', function() {
    if (this.checked) {
        rail_cond = 1;
    } else {
        rail_cond = 0;
    }
});

apply.addEventListener('click', function() {
    localStorage.setItem("diesel_cond", diesel_cond);
    localStorage.setItem("port_cond", port_cond);
    localStorage.setItem("rail_cond", rail_cond);
});
// console.log("hello")


// console.log(localStorage.getItem("diesel_cond"))