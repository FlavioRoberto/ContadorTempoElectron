//importando o IPC responsável pela comunicação entre o processo principal e o de render
const { ipcRenderer } = require('electron'); //ipcRender comunicação do processo de render
const tempo  = require('../../meus-modulos/tempo');

let linkSobre = document.querySelector("#link-sobre");
let linkBtnContador = document.querySelector("#link-contador");
let linkTemporizador = document.getElementById("temporizador");

//#region eventos

linkSobre.addEventListener('click', function () {
    //envia um envento para o processo principal
    ipcRenderer.send("abrir-tela-sobre");
});

linkBtnContador.addEventListener('click', function () {
    tempo.iniciarContagemDeTempo(tempo, linkTemporizador);
});

//#endregion


//#region metodos


//#endregion metodos