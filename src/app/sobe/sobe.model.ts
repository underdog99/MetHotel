export class Sobe{
    naziv: string;
    tip: string;
    sprat: number;
    opis: string;
    cena: number;

    constructor(naziv: string, tip: string, sprat: number, opis: string, cena: number){
        this.naziv = naziv;
        this.tip = tip;
        this.sprat = sprat;
        this.opis = opis;
        this.cena = cena;
    }
}