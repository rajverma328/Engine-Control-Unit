const { app, BrowserWindow, screen } = require('electron');
const path = require('path'); // Node.js path module

let mainWindow;

app.on('ready', () => {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  const mainWindow = new BrowserWindow({
    width,
    height,
    resizable: false,   // Disable window resizing   
    icon: path.join(__dirname, 'icon.png') // Replace with the actual path to your icon file.
  });

  // Maximize the window when it's created
  mainWindow.maximize();
  mainWindow.loadFile('index.html');
  mainWindow.on('closed', () => {
  // Dereference the window object
  mainWindow = null;
});
})

const { exec } = require('child_process');
const fs = require('fs');
const pythonScriptPath = 'COM.py';
const outputFilePath = 'output.txt';
const childProcess = exec(`python ${pythonScriptPath} > ${outputFilePath}`, (error, stdout, stderr) => {
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
