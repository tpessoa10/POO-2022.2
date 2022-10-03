class Jogador{
    forca: number;
    nivel: number;
    pontosAtuais: number;

    constructor(forca: number, nivel: number, pontosAtuais: number){
        this.forca = forca
        this.nivel = nivel
        this.pontosAtuais = pontosAtuais
    }

    calcularAtaque():number{
        let danoAtaque:number
        danoAtaque = this.forca * this.nivel
        return danoAtaque
    }

    atacar(jogadorAtacado:Jogador){
        if(jogadorAtacado.estaVivo() == false){
            return false
        }else{
        jogadorAtacado.pontosAtuais = jogadorAtacado.pontosAtuais - this.calcularAtaque()
        }
    }

    estaVivo():boolean{
        if(this.pontosAtuais > 0){
            return true
        }else{
            return false
        }
    }

    toString():string{
        return 'Força: ' + this.forca + ' Nivel: ' + this.nivel + ' Pontos: ' + this.pontosAtuais

    }
}

let j1:Jogador = new Jogador(20,10,1000)
let j2:Jogador = new Jogador(15,10,1500)
j1.atacar(j2)
j2.atacar(j1)
console.log(j1.toString())
console.log(j2.toString())