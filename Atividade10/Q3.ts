class Conta {
    private _numero: String;
    private _saldo: number;
    constructor(numero: String, saldoInicial: number) {
        this._numero = numero;
        this._saldo = saldoInicial;
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

let conta1:Conta
conta1 = new Conta('1',50)
conta1.sacar(51)

/*Apresenta:
Error: Saldo insuficiente */