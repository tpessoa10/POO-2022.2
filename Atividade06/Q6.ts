class Triangulo{
    ladoA: number
    ladoB: number
    ladoC: number

    constructor(ladoA: number, ladoB: number, ladoC:number){
        this.ladoA = ladoA
        this.ladoB = ladoB
        this.ladoC = ladoC
    }

    ehTriangulo(){
        if(this.ladoA + this.ladoB >= this.ladoC && this.ladoA + this.ladoC >= this.ladoB && this.ladoB + this.ladoC >= this.ladoA){
            return true
        }
    }

    ehEquilatero(){
        if(this.ehTriangulo()){
            if(this.ladoA == this.ladoB && this.ladoB == this.ladoC && this.ladoA == this.ladoC){
                return true
            }
        } else{
            return false
        }
    }

    ehIsoceles(){
        if(this.ehTriangulo()){
            if(this.ladoA == this.ladoB || this.ladoB == this.ladoC || this.ladoA == this.ladoC){
                return true
            } 
        }else{
                return false
            }
        }
    

    ehEscaleno(){
        if(this.ehTriangulo()){
            if(this.ladoA != this.ladoB && this.ladoB != this.ladoC && this.ladoA != this.ladoC){
                return true
            }
        } else{
            return false
        }
    }
}

let t1:Triangulo = new Triangulo(6,6,12)
console.log(t1.ehEquilatero())
console.log(t1.ehEscaleno())
console.log(t1.ehIsoceles())