var Triangulo = /** @class */ (function () {
    function Triangulo(ladoA, ladoB, ladoC) {
        this.ladoA = ladoA;
        this.ladoB = ladoB;
        this.ladoC = ladoC;
    }
    Triangulo.prototype.ehTriangulo = function () {
        if (this.ladoA + this.ladoB >= this.ladoC && this.ladoA + this.ladoC >= this.ladoB && this.ladoB + this.ladoC >= this.ladoA) {
            return true;
        }
    };
    Triangulo.prototype.ehEquilatero = function () {
        if (this.ehTriangulo()) {
            if (this.ladoA == this.ladoB && this.ladoB == this.ladoC && this.ladoA == this.ladoC) {
                return true;
            }
        }
        else {
            return false;
        }
    };
    Triangulo.prototype.ehIsoceles = function () {
        if (this.ehTriangulo()) {
            if (this.ladoA == this.ladoB || this.ladoB == this.ladoC || this.ladoA == this.ladoC) {
                return true;
            }
        }
        else {
            return false;
        }
    };
    Triangulo.prototype.ehEscaleno = function () {
        if (this.ehTriangulo()) {
            if (this.ladoA != this.ladoB && this.ladoB != this.ladoC && this.ladoA != this.ladoC) {
                return true;
            }
        }
        else {
            return false;
        }
    };
    return Triangulo;
}());
var t1 = new Triangulo(6, 6, 12);
console.log(t1.ehEquilatero());
console.log(t1.ehEscaleno());
console.log(t1.ehIsoceles());
