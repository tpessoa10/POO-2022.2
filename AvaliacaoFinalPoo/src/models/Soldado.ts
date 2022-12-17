import { Peca } from "./Peca";

export class Soldado extends Peca{
    constructor(id:string, private _patente:string,
        _ptsVida:number=10,
        _ptsAtaque:number=20){
        super(id,_ptsVida,_ptsAtaque)
    }

    get patente():string{
        return this._patente
    }
}