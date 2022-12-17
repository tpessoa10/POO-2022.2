export abstract class Peca{
    constructor(private _id:string,
        private _ptsVida:number,
        private _ptsAtaque:number){
            this._id = _id
        }

    get id():string{
        return this._id
    }

    get ptsVida():number{
        return this._ptsVida
    }

    get ptsAtaque():number{
        return this._ptsAtaque
    }
}