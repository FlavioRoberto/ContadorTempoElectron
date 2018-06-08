//importando o IPC responsável pela comunicação entre o processo principal e o de render
const { ipcRenderer } = require('electron'); //ipcRender comunicação do processo de render
const moment = require('moment');

let linkSobre = document.querySelector("#link-sobre");
let linkBtnContador = document.querySelector("#link-contador");
let linkTemporizador = document.getElementById("temporizador");

//#region eventos

linkSobre.addEventListener('click', function () {
    //envia um envento para o processo principal
    ipcRenderer.send("abrir-tela-sobre");
});

linkBtnContador.addEventListener('click', function () {
    iniciarContagemDeTempo();
});

//#endregion


//#region metodos

function iniciarContagemDeTempo() {
    var segundos = convertStringParaSegundos(linkTemporizador.textContent);
    setInterval(function () {
        segundos++;
        linkTemporizador.textContent = convertSegundosParahora(segundos);
    }, 1000)
}


function convertSegundosParahora(segundos) {
    if (segundos == null)
        return;
    return moment().startOf('day').seconds(segundos).format("HH:mm:ss");
}

function convertStringParaSegundos(string) {
    if (string == "")
        return;
    return moment.duration(string).asSeconds();
}

//#endregion metodos