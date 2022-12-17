import { Peca } from "./Peca";
import {PecaJaExiste, PecaNaoExiste, VidaMenorQueZero} from "./Excecoes"

export class Esquadrao{
    private _ptsVidaTot!:number
    private _ptsAtaqueTot!:number
    constructor(private _id:string, private _nome:string, private _esquadrao:Peca[]){}

    public atacar(esquadrao:Esquadrao):void{
        esquadrao._ptsVidaTot = esquadrao._ptsVidaTot - this._ptsAtaqueTot
        if(esquadrao._ptsVidaTot < 1){
            throw new VidaMenorQueZero("Pontos de vida menor que 0 o esquadrão foi derrotado")
        }
    }

    public ptsTotais(){
        let ptsTF:number = 0
        let ptsTV:number = 0
        let ptsTA:number = 0
        for(let c of this._esquadrao){
            ptsTA = ptsTA + c.ptsAtaque
            ptsTV = ptsTV + c.ptsVida
        }
        this._ptsAtaqueTot = ptsTA
        this._ptsVidaTot = ptsTV
    }

    public adicionarPeca(peca:Peca){
        for(let c of this._esquadrao){
            if(c.id == peca.id){
                throw new PecaJaExiste("Esta peça já existe")
            }
        }
        this._esquadrao.push(peca)
        
    }

    public busca(ident:string){
        let pecaProcurada = this._esquadrao.filter((peca, index) => peca.id === ident)[0]
        if(!pecaProcurada){
            throw new PecaNaoExiste("Essa peça não existe")
        }
        return pecaProcurada;
    }

    get id():string{
        return this._id
    }

    get nome():string{
        return this._nome
    }

    get PtsForcaTot():number{
        return this._ptsAtaqueTot
    }

    get PtsVidaTot(){
        return this._nome +' Pontos de vida = ' + this._ptsVidaTot
    }

    get PtsAtaqueTot(){
        return this._nome +' Pontos de ataque = ' + this._ptsAtaqueTot
    }
}

