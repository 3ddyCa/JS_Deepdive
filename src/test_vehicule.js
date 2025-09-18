import Vehicule from "./vehicule.js"

const voiture = new Vehicule("Mercedes CLK",4,250);
const moto = new Vehicule("Honda CBR",2,280);


console.log(voiture.detect());
console.log(moto.detect());
console.log(voiture.boost());
console.log(voiture.boost());

console.log(moto.boost());
console.log(moto.plusRapide(voiture));
