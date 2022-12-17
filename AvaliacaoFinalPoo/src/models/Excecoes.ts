export class PecaJaExiste extends Error{
    constructor(message:string){
        super(message)
    }
}

export class PecaNaoExiste extends Error{
    constructor(message:string){
        super(message)
    }
}

export class VidaMenorQueZero extends Error{
    constructor(message:string){
        super(message)
    }
}