class Conta {
    numero: String;
    saldo: number;
    constructor(numero:String, saldo:number){
        this.numero = numero
        this.saldo = saldo
    }
    sacar(valor: number){
        if(valor > this.saldo){
            return false
        }else{
            this.saldo = this.saldo - valor
        }
    }
    depositar(valor: number): void {
    this.saldo = this.saldo + valor;
    }
    consultarSaldo(): number {
    return this.saldo;
    }

    transferir(contaDestino: Conta, valor: number){
        if(valor > this.saldo){
            return false
        }else{
            this.sacar(valor);
            contaDestino.depositar(valor);
        }
    }
}

let c1:Conta = new Conta('1',100)
let c2:Conta = new Conta('2',150)
c1.transferir(c2,100)
console.log(c1.consultarSaldo())
console.log(c2.consultarSaldo())