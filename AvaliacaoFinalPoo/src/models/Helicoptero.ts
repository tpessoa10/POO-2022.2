import { Peca } from "./Peca";

export class Helicoptero extends Peca{
    constructor(id:string, private _modelo:string,
         _ptsVida:number = 50,
         _ptsAtaque:number = 70,){
        super(id,_ptsVida,_ptsAtaque)
    }

    get modelo():string{
        return this._modelo
    }
}