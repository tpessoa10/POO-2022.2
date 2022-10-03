var Saudacao = /** @class */ (function () {
    function Saudacao(texto, destinatario) {
        this.destinatario = destinatario;
        this.texto = texto;
    }
    Saudacao.prototype.obterSaudacao = function () {
        return this.texto + this.destinatario;
    };
    return Saudacao;
}());
var s1 = new Saudacao('Bom dia,', 'João');
console.log(s1.obterSaudacao());
