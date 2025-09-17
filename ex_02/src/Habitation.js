class Habitation{
    constructor(_nom, _larg, _long, _etag){
        this.nom = _nom;
        this.longueur = _larg;
        this.largeur = _long;
        this.Nb_etage = _etag
    }
    superficie() {
        let result = this.largeur * this.longueur * this.Nb_etage;
        console.log(`L'habitation nommée ${this.nom}, possèdant ${this.Nb_etage} étage${this.Nb_etage>1?"s":""}, a une superficie totale de ${result}`)
        return result;
    }
}

const hutte = new Habitation("Hutte",30,45,1);
const iglou = new Habitation("Iglou",20,20,2);
const building = new Habitation("building",50,60,7);
const maisonette = new Habitation("Maisonette",100,70,2);

console.log(hutte.superficie(),iglou.superficie(),building.superficie(),maisonette.superficie())

