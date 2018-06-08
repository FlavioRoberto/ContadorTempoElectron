const moment = require('moment');

module.exports = {

    convertSegundosParahora(segundos) {
        if (segundos == null)
            return;
        return moment().startOf('day').seconds(segundos).format("HH:mm:ss");
    },

    convertStringParaSegundos(string) {
        if (string == "")
            return;
        return moment.duration(string).asSeconds();
    },

    iniciarContagemDeTempo(tempo, objetoDOM) {
        var segundos = tempo.convertStringParaSegundos(objetoDOM.textContent);
        setInterval(function () {
            segundos++;
            objetoDOM.textContent = tempo.convertSegundosParahora(segundos);
        }, 1000)
    }
}