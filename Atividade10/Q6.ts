class Conta {
    private _numero: String;
    private _saldo: number;
    constructor(numero: String, saldoInicial: number) {
        this._numero = numero;
        this._saldo = saldoInicial;
        if(this._saldo < 0){
            throw Error('Saldo não pode ser negativo')
        }
    }
    get saldo() {
        return this._saldo;
    }
    sacar(valor: number): void {
        if(this._saldo < valor){
            throw Error('Saldo insuficiente')
        }
        this._saldo = this._saldo - valor
    }
}

let c:Conta
c = new Conta('1',-50)
console.log(c.saldo)

/*É lançada a exceção 'Error: Saldo não pode ser negativo*/