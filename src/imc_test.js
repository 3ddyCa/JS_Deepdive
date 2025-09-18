import Imc from "./imc.js"

let list = [
    new Imc("Sebastien Chabal", 135,1.7),
    new Imc("Escaladeuse", 45,1.68),
    new Imc("JOJO", 300,2),
    new Imc("Gontrand", 90, 1.75),
    new Imc("Colonel Clock", 200, 1.75),
    new Imc("Josiane de la Vega", 99, 1.55),
];


// let p_sc = new Imc("Sebastien Chabal", 135,1.7);
// let p_es = new Imc("Escaladeuse", 45,1.68);
// let p_jo = new Imc("JOJO", 300,2);
// let p_go = new Imc("Gontrand", 90, 1.75);
// let p_co = new Imc("Colonel Clock", 200, 1.75);
// let p_ve = new Imc("Josiane de la Vega", 99, 1.55);
// let list = [p_sc,p_es,p_jo,p_go,p_co,p_ve];

// let list = [];
//
// list.push(new Imc("Sebastien Chabal", 135,1.7);
// list.push(new Imc("Escaladeuse", 45,1.68);
// list.push(new Imc("JOJO", 300,2.0);
// list.push(new Imc("Gontrand", 90, 1.75);
// list.push(new Imc("Colonel Clock", 200, 1.75);
// list.push(new Imc("Josiane de la Vega", 99, 1.55);

function imCalc(poids,taille){
    return poids/(taille*taille);
}

function pullItem(liste){
  for  (let i = 0 ; i < liste.length ; i++){
    let attributes = [
          liste[i].nom,
          parseInt(liste[i].poids),
          parseFloat(liste[i].taille)
    ];
    display(attributes);
    }

}

function display(list){
    let calcul = imCalc(list[1],list[2]);
    console.log( `L'utilisateur ${list[0]} mesurant ${list[2]}m et pesant ${list[1]}kg a un indice de masse corporel de ${calcul} .`);
        // for(let i = 0 ; i< 4 ; i++){
        //     liste.push()
        // }
    }
console.log(list);
console.log(pullItem(list));
