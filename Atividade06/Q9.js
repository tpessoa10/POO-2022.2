var Jogador = /** @class */ (function () {
    function Jogador(forca, nivel, pontosAtuais) {
        this.forca = forca;
        this.nivel = nivel;
        this.pontosAtuais = pontosAtuais;
    }
    Jogador.prototype.calcularAtaque = function () {
        var danoAtaque;
        danoAtaque = this.forca * this.nivel;
        return danoAtaque;
    };
    Jogador.prototype.atacar = function (jogadorAtacado) {
        if (jogadorAtacado.estaVivo() == false) {
            return false;
        }
        else {
            jogadorAtacado.pontosAtuais = jogadorAtacado.pontosAtuais - this.calcularAtaque();
        }
    };
    Jogador.prototype.estaVivo = function () {
        if (this.pontosAtuais > 0) {
            return true;
        }
        else {
            return false;
        }
    };
    Jogador.prototype.toString = function () {
        return 'Força: ' + this.forca + ' Nivel: ' + this.nivel + ' Pontos: ' + this.pontosAtuais;
    };
    return Jogador;
}());
var j1 = new Jogador(20, 10, 1000);
var j2 = new Jogador(15, 10, 1500);
j1.atacar(j2);
j2.atacar(j1);
console.log(j1.toString());
console.log(j2.toString());
