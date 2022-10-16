class Hora{
    constructor(private _hora:number, private _minutos:number, private _segundos:number){
        this._hora = _hora
        this._minutos = _minutos
        this._segundos = _segundos
    }

    public lerHora(Hora:number){
        this._hora = Hora
    }

    public lerMinuto(Minuto:number){
        this._minutos = Minuto
    }

    public LerSegundo(Segundo:number){
        this._segundos = Segundo
    }

    public RetornaHora(){
        return this._hora + ':'+ this._minutos + ':' + this._segundos
    }
}

let hora1 = new Hora(09,15,45)
console.log(hora1.RetornaHora())

let hora2 = new Hora(09,15,45)
hora2.lerHora(10)
hora2.lerMinuto(0o2)
hora2.LerSegundo(57)
console.log(hora2.RetornaHora())