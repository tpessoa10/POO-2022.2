class Equipamento{
    ligado:boolean
    constructor(ligado:boolean){
        this.ligado = ligado
    }

    liga():void{
        if(this.ligado == true){
            throw Error('Já esta ligado')
        }
        this.ligado = true
    }

    desliga():void{
        if(this.ligado == false){
            throw Error('Já esta desligado')
        }
        this.ligado = false
    }

    inverte():void{
        if(this.ligado == true){
            this.ligado = false
        } else if(this.ligado == false){
            this.ligado = true
        }
    }

    estaLigado():boolean{
        return this.ligado
    }
}

let equip1:Equipamento = new Equipamento(true)
console.log(equip1.estaLigado())
equip1.desliga()
console.log(equip1.estaLigado())
equip1.inverte()
console.log(equip1.estaLigado())
equip1.desliga()
console.log(equip1.estaLigado())
equip1.desliga()
