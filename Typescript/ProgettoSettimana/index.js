var Phone = /** @class */ (function () {
    function Phone(credito, numeroChiamate) {
        this.credito = credito;
        this.numeroChiamate = numeroChiamate;
    }
    Phone.prototype.ricarica = function (importo) {
        this.credito += importo;
    };
    Phone.prototype.chiamata = function (durata) {
        var costoChiamata = durata * 0.2;
        if (this.credito >= costoChiamata) {
            this.credito -= costoChiamata;
            this.numeroChiamate++;
        }
        else {
            console.log('Non hai abbastanza credito per effettuare la chiamata');
        }
    };
    Phone.prototype.numero404 = function () {
        return Math.round(this.credito * 100) / 100;
    };
    Phone.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    Phone.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return Phone;
}());
function printData(utente) {
    console.log("Credito residuo: ".concat(utente.numero404()));
    console.log("Numero chiamate: ".concat(utente.getNumeroChiamate()));
    utente.azzeraChiamate();
    console.log("Chiamate azzerate: ".concat(utente.numeroChiamate));
}
var utenteAlpha = new Phone(10, 0);
console.log('utente alpha');
utenteAlpha.ricarica(20);
utenteAlpha.chiamata(5);
utenteAlpha.ricarica(5);
utenteAlpha.chiamata(10);
printData(utenteAlpha);
var utenteBeta = new Phone(15, 0);
console.log('Utente beta');
utenteBeta.ricarica(5);
utenteBeta.chiamata(10);
utenteBeta.ricarica(10);
utenteBeta.chiamata(2);
printData(utenteBeta);
var utenteGamma = new Phone(20, 0);
console.log('Utente gamma');
utenteGamma.ricarica(10);
utenteGamma.chiamata(2);
utenteGamma.ricarica(10);
utenteGamma.chiamata(2);
printData(utenteGamma);
