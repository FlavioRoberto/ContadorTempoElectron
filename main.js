//importando o submodulo app do electron utiliza-se as {} para indicar que estamos pegando apenas o submodulo app do electron
//importando o modulo responsavel por criar as janelas
//importando o modulo responsavel por escutar os eventos do render
const { app, BrowserWindow, ipcMain } = require('electron');

//file:// -> file protocol
let _diretorio = {
    app: `file://${__dirname}/app/`,
    view: `file://${__dirname}/app/view/`
};

var rotasView = {
    principal: _diretorio.view + `principal/index.html`,
    sobre: _diretorio.view + `sobre/sobre.html`
};

var telasAbertas = [];


//#region eventos app

//quando a aplicação for inicializada faça açgo
app.on('ready', start);

//quando todas janelas fecharem
app.on('window-all-closed', exit);

//#endregion

//#region eventos ipcMain
ipcMain.on("abrir-tela-sobre", abrirTelaSobre);
//#endregion

//#region metodos

//função para inicialização do sistema
function start() {
    console.log('Aplicação iniciada...');

    //metodo responsavel por construir janelas
    let configPrincipal = {
        id: 'principal',
        width: 600,
        heigth: 300
    };
    _constroiJanela(configPrincipal, rotasView.principal);

};

//fecha a aplicação
function exit() {
    console.log('Aplicação encerrada...');
    app.quit();
};

function abrirTelaSobre() {
    let configSobre = {
        id: 'sobre',
        width: 300,
        heigth: 100
    };
    return _constroiJanela(configSobre, rotasView.sobre);
}
//#endregion

//#region metodosInternos
function _constroiJanela(config, url) {
    if (_TelaEstaAberta(config.id))
        return;

    var browserJanela = new BrowserWindow(config);
    //criando janela 
    let janela = browserJanela;
    //carregando html para a janela
    janela.loadURL(url);
    //adiciona o identificador da tela no array
    telasAbertas.push(config.id);
    //escuta o evento de closed da janela
    //adicionando evento na janela
    janela.on('closed', () => {
        _removeIdjanelaTelasAbertas(config.id);
    });
}

//percorre o array com o id das telas e verifica se ela esta aberta
function _TelaEstaAberta(id) {

    if (telasAbertas != null) {
        for (i = 0; i < telasAbertas.length; i++) {
            if (telasAbertas[i].trim() == id.trim())
                return true;
        }
        return false;
    }
    return false;



}

function _removeIdjanelaTelasAbertas(id) {
    //remove o item do array
    telasAbertas =  telasAbertas.filter(idTela => idTela.trim() !== id.trim())
}

//#endregion