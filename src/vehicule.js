export default class Vehicule{

        constructor(n_vehcl, nR_vehcl,v_vehcl){
            this.nomVehicule = n_vehcl;
            this.nbrRoue = nR_vehcl;
            this.vitesse = v_vehcl
        }
        detect(){
            let s = this.nbrRoue;
            if(s == 2){
                return "moto";
            }else if(s==4){
                return "voiture";
            }
        }
        boost(){
            this.vitesse = this.vitesse + 50;
            return this.vitesse;
        }
        plusRapide(input){
            return `Le véhicule ${input.vitesse > this.vitesse ? input.nomVehicule : this.nomVehicule} est le plus rapide !`
        }
}
