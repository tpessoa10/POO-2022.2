var Hora = /** @class */ (function () {
    function Hora(_hora, _minutos, _segundos) {
        this._hora = _hora;
        this._minutos = _minutos;
        this._segundos = _segundos;
        this._hora = _hora;
        this._minutos = _minutos;
        this._segundos = _segundos;
    }
    Hora.prototype.lerHora = function (Hora) {
        this._hora = Hora;
    };
    Hora.prototype.lerMinuto = function (Minuto) {
        this._minutos = Minuto;
    };
    Hora.prototype.LerSegundo = function (Segundo) {
        this._segundos = Segundo;
    };
    Hora.prototype.RetornaHora = function () {
        return this._hora + ':' + this._minutos + ':' + this._segundos;
    };
    return Hora;
}());
var hora1 = new Hora(09, 15, 45);
console.log(hora1.RetornaHora());
var hora2 = new Hora(09, 15, 45);
hora2.lerHora(10);
hora2.lerMinuto(2);
hora2.LerSegundo(57);
console.log(hora2.RetornaHora());
