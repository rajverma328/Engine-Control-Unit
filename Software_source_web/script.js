const body = document.querySelector('body'),
    sidebar = body.querySelector('nav'),
    toggle = body.querySelector(".toggle"),
    navLinks = document.querySelectorAll('.nav-link'),
    box = document.getElementById("container");

var pointer = document.getElementById("pH");
var outele = document.getElementById("output");

let dashboard = document.getElementById("def");

dashboard.style.backgroundColor = 'rgb(217, 217, 217)';
dashboard.style.borderRadius = '40px';
    
toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})

navLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        navLinks.forEach(function(link) {
            link.style.backgroundColor = '#FFF' ;
        });
        link.style.backgroundColor = 'rgb(217, 217, 217)';
        link.style.borderRadius = '40px';
        var str = link.querySelector(".innerlink").innerHTML;
        box.src = str;
    });
});

const fileContent = document.getElementById('fileContent');
const dropdown = document.getElementById('comPortDropdown'); // Assuming you have a dropdown element

window.addEventListener('DOMContentLoaded', () => {
    fetch('output.txt')
        .then(response => response.text())
        .then(content => {
            const lines = content.split('\n');
            const itemsArray = lines.filter(line => line.trim() !== '');
            fileContent.textContent = itemsArray.join('\n');
            itemsArray.forEach(item => {
                const option = document.createElement('option');
                option.textContent = item;
                dropdown.appendChild(option);
                // console.log(item)
            });
        })
        .catch(error => {
            fileContent.textContent = 'Error reading the file: ' + error.message;
        });
});

const comPortDropdown = document.getElementById('comPortDropdown');
var selectedValue = "";
comPortDropdown.addEventListener('change', function () {
    selectedValue = comPortDropdown.value;
    console.log('Selected COM Port:', selectedValue);
});
console.log(selectedValue)

RPM = 0;

outele.textContent = RPM;
var angle = (RPM/3000)*260 - 130;
var str = 'rotate(' + angle + 'deg)';
pointer.style.transform = str;

const { exec } = require('child_process');
const fs = require('fs');
const pythonScriptPath = 'COM.py';
const outputFilePath = 'output.txt';
const childProcess = exec(`python3 ${pythonScriptPath} > ${outputFilePath}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Python script error: ${stderr}`);
    return;
  }
  console.log(`Python script output has been written to ${outputFilePath}`);
});
childProcess.on('exit', (code) => {
  console.log(`Python script exited with code ${code}`);
});