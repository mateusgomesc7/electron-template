// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

const { contextBridge, ipcRenderer } = require('electron')

document.addEventListener('DOMContentLoaded', function () {

    let myButton = document.getElementById('myButton');
    myButton.addEventListener('click', function () {
        let txtval = 'TESTANDO'

        // ipcRenderer.send('saveText', txtval);
        ipcRenderer.send('readText');
    });
});

contextBridge.exposeInMainWorld('electron', {
    readText: (arg) => ipcRenderer.send('readText', arg),
    onReadTextResponse: (callback) => ipcRenderer.on('readTextResponse', (event, data) => callback(data)),
  });