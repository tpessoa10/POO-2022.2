class Conta {
    private _numero: String;
    protected _saldo: number;
    constructor(numero: String, saldoInicial: number) {
        this._numero = numero;
        this._saldo = saldoInicial;
    }
    get saldo() {
        return this._saldo;
    }
    transferir(valor: number, c:Conta): void {
        if(this._saldo < valor){
            throw Error('Saldo insuficiente')
        }
        this._saldo = this._saldo - valor
        c._saldo = c._saldo + valor
    }
}

let c1:Conta = new Conta('1',0)
let c2:Conta = new Conta('2',100)
c1.transferir(100,c2)

/* É lançada a exceção retornando 'Error:Saldo insuficiente'