
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
    let Buch1 = new Buch (1,"Unterm Rad", "Hesse, Hermann ", "17.01.2001", "Suhrkamp", 176)
    lager.push(Buch1)
    let Buch2 = new Buch (1, "Gravitation", "Thorne, Kip S.", "24.10.2017", "Princeton Univers. Press", 1328)
    lager.push(Buch2)
    let Buch3 = new Buch (1, "Die physikalischen Prinzipien der Quantentheorie", "Heisenberg, Werner", "1.10.2008", "S. Hirzel Verlag GmbH", 137)
    lager.push(Buch3)
    let Buch4 = new Buch (1, "Über die spezielle und allgemeine Relativitätstheorie", "Einstein, Albert", "14.09.2012", "Springer", 124)
    lager.push(Buch4)
    lager.sort(this.Autor)
}
init()

console.log(lager.length)
console.log(lager)
function ausDemSortiment(buchtitel){
        for(let i = lager.length; i === 0; i--) {
            lager.pop()
            console.log(lager)
        }
}
console.log(lager)
