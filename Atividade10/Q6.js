var Conta = /** @class */ (function () {
    function Conta(numero, saldoInicial) {
        this._numero = numero;
        this._saldo = saldoInicial;
        if (this._saldo < 0) {
            throw Error('Saldo não pode ser negativo');
        }
    }
    Object.defineProperty(Conta.prototype, "saldo", {
        get: function () {
            return this._saldo;
        },
        enumerable: false,
        configurable: true
    });
    Conta.prototype.sacar = function (valor) {
        if (this._saldo < valor) {
            throw Error('Saldo insuficiente');
        }
        this._saldo = this._saldo - valor;
    };
    return Conta;
}());
var c;
c = new Conta('1', -50);
console.log(c.saldo);
