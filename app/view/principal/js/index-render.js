//importando o IPC responsável pela comunicação entre o processo principal e o de render
const {ipcRenderer} = require('electron'); //ipcRender comunicação do processo de render

let linkSobre = document.querySelector("#link-sobre");

//#region eventos

linkSobre.addEventListener('click',function(){
    //envia um envento para o processo principal
    ipcRenderer.send("abrir-tela-sobre");
});

//#endregion