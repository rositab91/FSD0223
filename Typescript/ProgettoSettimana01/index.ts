interface Smartphone {
    credito: number;
    numeroChiamate: number;

    ricarica(importo: number): void;
    chiamata(durata: number): void;
    numero404(): number;
    azzeraChiamate(): void;
}

class Phone implements Smartphone {
    public credito: number;
    public numeroChiamate: number;

    constructor(credito: number, numeroChiamate: number) {
        this.credito = credito;
        this.numeroChiamate = numeroChiamate;
    }

    public ricarica(importo: number): void {
        this.credito += importo;
    }

    public chiamata(durata: number): void {
        let costoChiamata: number = durata * 0.2;

        if (this.credito >= costoChiamata) {
            this.credito -= costoChiamata;
            this.numeroChiamate++;
        } else {
            console.log('Non hai abbastanza credito per effettuare la chiamata');
        }
    }

    public numero404(): number {
        return Math.round(this.credito * 100) / 100;
    }

    public getNumeroChiamate(): number {
        return this.numeroChiamate;
    }

    public azzeraChiamate(): void {
        this.numeroChiamate = 0;
    }
}

function printData(utente: Phone): void {
    console.log(`Credito residuo: ${utente.numero404()}`);
    console.log(`Numero chiamate: ${utente.getNumeroChiamate()}`);
    utente.azzeraChiamate();
    console.log(`Chiamate azzerate: ${utente.numeroChiamate}`);
}

let utenteAlpha = new Phone(10, 0)
console.log('utente alpha');
utenteAlpha.ricarica(20);
utenteAlpha.chiamata(5);
utenteAlpha.ricarica(5);
utenteAlpha.chiamata(10);
printData(utenteAlpha);

let utenteBeta = new Phone(15, 0);
console.log('Utente beta');
utenteBeta.ricarica(5);
utenteBeta.chiamata(10);
utenteBeta.ricarica(10);
utenteBeta.chiamata(2);
printData(utenteBeta);


let utenteGamma = new Phone(20, 0);
console.log('Utente gamma');
utenteGamma.ricarica(10);
utenteGamma.chiamata(2);
utenteGamma.ricarica(10);
utenteGamma.chiamata(2);
printData(utenteGamma);

