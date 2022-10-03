class Saudacao{
    texto: string
    destinatario: string

    constructor(texto:string, destinatario:string){
        this.destinatario = destinatario
        this.texto = texto
    }

    obterSaudacao():string{
        return this.texto + this.destinatario
    }
}

let s1:Saudacao = new Saudacao('Bom dia,','João')
console.log(s1.obterSaudacao())