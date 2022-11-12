var Conta = /** @class */ (function () {
    function Conta(numero, saldoInicial) {
        this._numero = numero;
        this._saldo = saldoInicial;
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
var conta1;
conta1 = new Conta('1', 50);
conta1.sacar(51);
