class Employe{
    constructor(_n,_pn,_a,_sm,_nm,_c){
        this.nom = _n;
        this.prenom = _pn;
        this.age = _a;
        this.salaireMens = _sm;
        this.spanMois = _nm;
        this.charges = _c;
    }
    salaireY(){
        return this.salaireMens*this.spanMois;
    }
    depenseTotale(){
        let salaire = this.salaireY();
        return salaire+(salaire*this.charges);
    }
}
//
class PME{
    constructor(_n,_s,_r,_pn,_a){
        this.nom = _n;
        this.salaries = _s;
        this.revenus = _r;
        this.fraisFixes = _pn;
        this.fraisAchat = _a;
    }
    bilan(){
        let cout = 0;
        for(let i = 0 ; i < this.salaries.length; i++){
            cout+=this.salaries[i].depenseTotale();
        }
        let frais = this.fraisFixes + this.fraisAchat;
        console.log(`${this.nom} - : Frais annuels : ${frais}`)
        console.log(`${this.nom} - : Coût Total équipe : ${cout}`)
        console.log(`${this.nom} - : VENTES : ${this.revenus}`)
        console.log(`${this.nom} - : BILAN : ${this.revenus - (cout+frais)}`)
    }
}

const listeEmpl = [
  new Employe("Bernard", "Dubois", 34, 2000, 12, 0.9),
  new Employe("Louise", "Vatus", 28, 3000, 12, 0.9),
  new Employe("René", "Briche", 47, 4000, 12, 0.9),
];

const pme1 = new PME("Mega Buisness Unlimited", listeEmpl, 300000, 20000,50000);

pme1.bilan();
