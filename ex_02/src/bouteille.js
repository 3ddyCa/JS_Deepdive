class Bouteille {
    constructor(nommage, marquage, contenancage, typage){
        this.nom = nommage;
        this.marque = marquage;
        this.contenance = contenancage;
        this.type = typage;
    }
}

const eau = new Bouteille("Eau", "Cristalline", 750, "plastique");
const lait = new Bouteille("lait d'amande", "Bjorg", 1000, "carton");



