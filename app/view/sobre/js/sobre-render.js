//shell utilizado pra fazer chamadas de outros softwares
const {ipcRenderer,shell} = require('electron');
//importando modulo process pra recuperar informações do sistema
const process = require('process');

var btnFecharTelaSobre = document.querySelector('#fechar-tela-sobre');
var linkGit = document.querySelector('#link-github');
var linkEletron = document.querySelector('#link-eletron');
var linkMaterialize = document.querySelector("#link-materialize");
var spanEletron = document.querySelector('#electron-versao');
var spanMaterialize = document.querySelector('#materialize-versao');

//ao carregar a janela
window.onload = init();

//funcao de inicializacao
function init(){
    spanEletron.textContent = process.versions.electron;
    spanMaterialize.textContent =  '0.100.2';
}

//#region eventos
btnFecharTelaSobre.addEventListener('click',function(){
    console.log('fechando tela sobre...');
    ipcRenderer.send('fechar-tela-sobre');
});

linkMaterialize.addEventListener('click',function(){
    shell.openExternal('http://materializecss.com/');
});

linkGit.addEventListener('click',function(){
    shell.openExternal("https://github.com/FlavioRoberto");
});
linkEletron.addEventListener('click',function(){
    shell.openExternal("https://electronjs.org/");
});
//#endregion eventos
