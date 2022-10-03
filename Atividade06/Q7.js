var Equipamento = /** @class */ (function () {
    function Equipamento(ligado) {
        this.ligado = ligado;
    }
    Equipamento.prototype.liga = function () {
        if (this.ligado == true) {
            throw Error('Já esta ligado');
        }
        this.ligado = true;
    };
    Equipamento.prototype.desliga = function () {
        if (this.ligado == false) {
            throw Error('Já esta desligado');
        }
        this.ligado = false;
    };
    Equipamento.prototype.inverte = function () {
        if (this.ligado == true) {
            this.ligado = false;
        }
        else if (this.ligado == false) {
            this.ligado = true;
        }
    };
    Equipamento.prototype.estaLigado = function () {
        return this.ligado;
    };
    return Equipamento;
}());
var equip1 = new Equipamento(true);
console.log(equip1.estaLigado());
equip1.desliga();
console.log(equip1.estaLigado());
equip1.inverte();
console.log(equip1.estaLigado());
equip1.desliga();
console.log(equip1.estaLigado());
equip1.desliga();
