var Conta = /** @class */ (function () {
    function Conta(numero, saldo) {
        this.numero = numero;
        this.saldo = saldo;
    }
    Conta.prototype.sacar = function (valor) {
        if (valor > this.saldo) {
            return false;
        }
        else {
            this.saldo = this.saldo - valor;
        }
    };
    Conta.prototype.depositar = function (valor) {
        this.saldo = this.saldo + valor;
    };
    Conta.prototype.consultarSaldo = function () {
        return this.saldo;
    };
    Conta.prototype.transferir = function (contaDestino, valor) {
        if (valor > this.saldo) {
            return false;
        }
        else {
            this.sacar(valor);
            contaDestino.depositar(valor);
        }
    };
    return Conta;
}());
var c1 = new Conta('1', 100);
var c2 = new Conta('2', 150);
c1.transferir(c2, 100);
console.log(c1.consultarSaldo());
console.log(c2.consultarSaldo());
