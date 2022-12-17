import { Peca } from "./Peca";

export class Tanque extends Peca{
    constructor(id:string, private _modelo:string,
        _ptsVida:number=200,
        _ptsAtaque:number=100){
        super(id,_ptsVida,_ptsAtaque)
    }

    get modelo():string{
        return this._modelo
    }
}