
class Buch{
    ExemplareAnzahl
    Titel
    Autor
    DatumVeröffentlichung
    Verlag
    Seitenzahl

    constructor(ExemplareAnzahl, Titel, Autor, DatumVeröffentlichung, Verlag, Seitenzahl) {
        this.ExemplareAnzahl = ExemplareAnzahl
        this.Titel = Titel
        this.Autor = Autor
        this.DatumVeröffentlichung = DatumVeröffentlichung
        this.Verlag = Verlag
        this.Seitenzahl = Seitenzahl
    }

    verfügbar(){
        if(this.ExemplareAnzahl===0){
            document.getElementById("Ausgabe").innerHTML = "Von diesem Buch ist leider kein Exemplar mehr da :(."
        }
        else{
            document.getElementById("Ausgabe").innerHTML = "Von diesem Buch sind noch "+this.ExemplareAnzahl+" Exemplare da."
        }
    }

    verkauft(){
        this.ExemplareAnzahl-=1
    }
}

let lager = []

function init(){
    let Buch1 = new Buch (1,"Unterm Rad", )
}