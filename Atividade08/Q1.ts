class Calculadora{
    constructor(private operando1:number, private operando2: number){}

    public soma():number{
        return this.operando1 + this.operando2
    }

    public subtracao():number{
        return this.operando1 - this.operando2
    }
}

let calc1 = new Calculadora(4,2);
calc1.operando1 = 10

//Retorna erro 'Property 'operando1' is private and only accessible within class 'Calculadora'.'