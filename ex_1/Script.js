const prod_R = document.querySelector("#F_resultat");
const prod_N = document.querySelector("#name");
const prod_Q = document.querySelector("#quant");
const prod_P = document.querySelector("#prix");
const btt_Sub = document.querySelector("#result")
console.log(prod_R,prod_N,prod_Q,prod_P,btt_Sub)
let input;
const string = typeof "hello world";
const number = typeof 123;

class Produit{
    constructor(nom, quantite,prixHT){
    this.nom = nom;
    this.quantite = quantite;
    this.prixHT = prixHT;
    }
    resultat(){
        return (this.quantite * (this.prixHT+(this.prixHT/100*20))).toFixed(2);
    }

}

function verif(a,typ){

        console.log("step")
        let n = parseInt(a)
        let s = a;
        if( a != null){
            if(typeof n === "number" && typ == string){
                return  a;
            }else if(typeof s === "string" && typ == number){
                return  n;
            }else{
                console.log("Erreur2");
                return rod_R.innerText = `Erreur les champs ont été remplis avec les mauvais type de valeurs`;
            }
        }else{
            console.log("Erreur0");
            return prod_R.innerText = `Erreur tous les champs doivent être remplis`;
        }
}

btt_Sub.addEventListener("click", function(unEvent){
    unEvent.preventDefault()
    input = new Produit(verif(prod_N.value, string),verif(prod_Q.value, number),verif(prod_P.value, number));
    prod_R.innerText = `Le cout pour ${input.quantite} ${input.nom} à ${input.prixHT} € HT l'unité  est : \n ${input.resultat()} € TTC`
});

// const calc = new Object({
//     result : 0,
//     temp : 0,
//     P_name: null,
//     P_quant: null,
//     P_price: null,
//     display : function(a,b,c){
//         this.P_name = a.value;
//         this.P_quant = b.value;
//         this.P_price = c.value;
//         this.verify();
//         this.calculate();
//         this.result = Math.round(this.result*100)/100;
//         Prod_P.textContent = `Le produit : ${this.P_name} coûte : ${this.result} €TTC`;
//         console.log("check f4");
//     },
//     verify : function(){
//         if(this.P_name !== null||this.P_quant !== null || this.P_price !== null ){
//             let Input_B = this.P_quant;
//             let Input_C = this.P_price;
//             if( !isNaN(Input_B) || !isNaN(Input_C)){
//                 Input_B = parseInt(Input_B);
//                 Input_C = parseInt(Input_C);
//                 console.log(`check f3 ${Input_B} ${Input_C}`);
//                 this.P_quant = Input_B;
//                 this.P_price = Input_C;
//                 return 0;
//             }else{
//                     setTimeout(alert("verify : Veuillez compléter les champs avec des nombres."),20);
//                     return Prod_R.innerText = "Erreur, pas un nombre";
//             }
//         }else{
//         setTimeout(alert("Verify :Veuillez compléter les champs."),20);
//         return Prod_R.innerText = "Erreur , champs vides";
//         }
//     },
//     calculate : function(){
//                 this.result = this.P_quant*this.P_price;
//         console.log("check f1");
//         if(!isNaN(this.result)){
//             return this.result;
//         }else{
//             setTimeout(alert(" calculate : Veuillez compléter les champs avec des nombres.",20));
//             return Prod_R.innerText = "Erreur";
//         }
//     }
// });

// Butt_Sub.addEventListener("clic",calc.display(Prod_N,Prod_Q,Prod_P));


// function sumProducts(list) {
//     let calcul = parseInt(list[0])*parseInt(list[1]);
//     console.log("check f1");
//     if(!isNaN(calcul)){
//     }else{
//         setTimeout(alert("Veuillez compléter les champs avec des nombres.",20));
//         return Prod_R.innerText = "Erreur";
//     }
//     let TVA = parseFloat(calcul/100*20);
//     let result = parseFloat(TVA+calcul);
//     console.log("check f2");
//     return result;
// }


// function calcTTC(input){
//     let Calcul = parseInt(sumProducts(input));
//     let TVA = parseFloat(Calcul/100*20);
//     let result = parseFloat(TVA+Calcul);
//     console.log("check f2");
//     return result;
// }

// function VerifyInput(a,b,c){
//     let AllInput = [];
//     if(a !== null||b !== null || c !== null ){     
//         let Input_B = parseInt(b.value);
//         let Input_C = parseInt(c.value); 
//         if( !isNaN(Input_B) || !isNaN(Input_C)){
//             AllInput.push(Input_B);
//             AllInput.push(Input_C); 
//             console.log(`check f3 ${Input_B} ${Input_C}`);
//              return AllInput;
//         }else{
//                 setTimeout(alert("Veuillez compléter les champs avec des nombres."),20);
//                 return Prod_R.innerText = "Erreur, pas un nombre";
//         }
//     }else{
//     setTimeout(alert("Veuillez compléter les champs."),20);
//     return Prod_R.innerText = "Erreur , champs vides";
//     }
// }

// function showResult(a,b,c){
//     // Butt_Sub.preventDefault();
//     let Input_A = a.value;
//     let AllInput = [];
//     AllInput = VerifyInput(a,b,c);
//     let result = calcTTC(AllInput);
//     result = Math.round(result*100)/100;
//     Prod_P.textContent = `Le produit : ${Input_A} coûte : ${result} €TTC`;
//     console.log("check f4");
// }

// Butt_Sub.addEventListener("clic",calc.display(Prod_N,Prod_Q,Prod_P));
