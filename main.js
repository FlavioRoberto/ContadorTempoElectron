//importando o submodulo app do electron utiliza-se as {} para indicar que estamos pegando apenas o submodulo app do electron
//importando o modulo responsavel por criar as janelas
const { app, BrowserWindow } = require('electron');

//file:// -> file protocol
let _diretorio = {
    app : `file://${__dirname}/app/`,
    view:`file://${__dirname}/app/view/`
}; 

var rotasView = {
    principal: _diretorio.view + `principal/index.html`
}


//#region eventos

//quando a aplicação for inicializada faça açgo
app.on('ready',start);

//quando todas janelas fecharem
app.on('window-all-closed',exit);

//#endregion

//#region metodos

//função para inicialização do sistema
function start() {
   console.log('Aplicação iniciada...');
   //criando janela principal
   let janelaPrincipal = new BrowserWindow({
       width: 600, //largura
       heigth: 400 //altura
    });

    //carregando html para a janela __dirname => diretório local
    janelaPrincipal.loadURL(rotasView.principal);
};

//fecha a aplicação
function exit(){
    console.log('Aplicação encerrada...');
    app.quit();
};
//#endregion