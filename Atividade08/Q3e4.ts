class Conta {
    constructor(private numero:String, private saldo:number){}
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
    
    get consultarSaldo(): number {
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

let c1:Conta = new Conta('1',1000)
c1.consultarSaldo

class Banco {
    private contas:Conta[] = []

    public inserir(c: Conta): void {
        this.contas.push(c);
        }
    
    public consultar(numero: String): Conta {
        let contaProcurada!: Conta;
        for (let c of this.contas) {
        if (c.numero == numero) {
        contaProcurada = c;
        break;
        }
    }
        return contaProcurada;
    }

    private consultarIndice(numero: String): number {
        let indice: number = -1;
        for (let i: number = 0; i < this.contas.length; i++) {
        if (this.contas[i].numero == numero) {
        indice = i;
        break;
        }
        }
        return indice;
        }
    
    public alterar(c: Conta): void {
        let indice =
                    this.consultarIndice(c.numero);
            
        if (indice != -1) {
        this.contas[indice] = c;
        }
        }

    public excluir(numero: String): void {
        let indice: number = this.consultarIndice(numero);
        if (indice != -1) {
        for (let i: number = indice; i < this.contas.length; i++) {
        this.contas[i] = this.contas[i + 1];
        }
        this.contas.pop();
        }
    }
    public depositar(numero: String, valor: number) {
        let conta: Conta = this.consultar(numero);
        if (conta != null) {
            conta.depositar(valor);
        }
    }
}

// O atributo 'numero' da classe Conta não pode ser acessado por ser um atributo privado