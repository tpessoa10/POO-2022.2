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
    Conta.prototype.transferir = function (valor, c) {
        if (this._saldo < valor) {
            throw Error('Saldo insuficiente');
        }
        this._saldo = this._saldo - valor;
        c._saldo = c._saldo + valor;
    };
    return Conta;
}());
var c1 = new Conta('1', 0);
var c2 = new Conta('2', 100);
c1.transferir(100, c2);
