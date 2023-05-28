var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Lavoratore = /** @class */ (function () {
    function Lavoratore(_codRedd, _tasseInps, _tasseIrpef, _redditoAnnuoLordo) {
        this.codRedd = _codRedd;
        this.tasseInps = _tasseInps;
        this.tasseIrpef = _tasseIrpef;
        this.redditoAnnuoLordo = _redditoAnnuoLordo;
    }
    Lavoratore.prototype.getUtileTasse = function () {
        return (this.redditoAnnuoLordo * this.codRedd) / 100;
    };
    Lavoratore.prototype.getTasseInps = function () {
        return (this.getUtileTasse() * this.tasseInps) / 100;
    };
    Lavoratore.prototype.getTasseIrpef = function () {
        return (this.getUtileTasse() * this.tasseIrpef) / 100;
    };
    Lavoratore.prototype.getRedditoAnnuoNetto = function () {
        return this.redditoAnnuoLordo - (this.getTasseInps() + this.getTasseIrpef());
    };
    return Lavoratore;
}());
var Professionista = /** @class */ (function (_super) {
    __extends(Professionista, _super);
    function Professionista(_redditoAnnuoLordo) {
        return _super.call(this, _redditoAnnuoLordo, 78, 25.72, 5) || this;
    }
    return Professionista;
}(Lavoratore));
var Artigiano = /** @class */ (function (_super) {
    __extends(Artigiano, _super);
    function Artigiano(_redditoAnnuoLordo) {
        return _super.call(this, _redditoAnnuoLordo, 67, 35, 15) || this;
    }
    return Artigiano;
}(Lavoratore));
var Commerciante = /** @class */ (function (_super) {
    __extends(Commerciante, _super);
    function Commerciante(_redditoAnnuoLordo) {
        return _super.call(this, _redditoAnnuoLordo, 40, 35, 15) || this;
    }
    return Commerciante;
}(Lavoratore));
var newProfessionista = new Professionista(30000);
console.log('Professionista');
console.log("Utile tasse: \u20AC".concat(newProfessionista.getUtileTasse()));
console.log("Tasse Inps: \u20AC".concat(newProfessionista.getTasseInps()));
console.log("Tasse Irpef: \u20AC".concat(newProfessionista.getTasseIrpef()));
console.log("Reddito Annuo Netto: \u20AC".concat(newProfessionista.getRedditoAnnuoNetto()));
var newArtigiano = new Artigiano(50000);
console.log('Artigiano');
console.log("Utile tasse: \u20AC".concat(newArtigiano.getUtileTasse()));
console.log("Tasse Inps: \u20AC".concat(newArtigiano.getTasseInps()));
console.log("Tasse Irpef: \u20AC".concat(newArtigiano.getTasseIrpef()));
console.log("Reddito Annuo Netto: \u20AC".concat(newArtigiano.getRedditoAnnuoNetto()));
var newCommerciante = new Commerciante(80000);
console.log('Commerciante');
console.log("Utile tasse: \u20AC".concat(newCommerciante.getUtileTasse()));
console.log("Tasse Inps: \u20AC".concat(newCommerciante.getTasseInps()));
console.log("Tasse Irpef: \u20AC".concat(newCommerciante.getTasseIrpef()));
console.log("Reddito Annuo Netto: \u20AC".concat(newCommerciante.getRedditoAnnuoNetto()));
