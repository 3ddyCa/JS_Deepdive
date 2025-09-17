const Prod_R = document.querySelector("#F_resultat");
const Prod_N = document.querySelector("#name");
const Prod_Q = document.querySelector("#quant");
const Prod_P = document.querySelector("#prix");
const Butt_Sub = document.querySelector("button[type=submit]")

const calc = new Object({
    result : 0,
    temp : 0,
    P_name: null,
    P_quant: null,
    P_price: null,
    display : function(a,b,c){
        this.P_name = a.value;
        this.P_quant = b.value;
        this.P_price = c.value;
        this.verify();
        this.calculate();
        this.result = Math.round(this.result*100)/100;
        Prod_P.textContent = `Le produit : ${this.P_name} coûte : ${this.result} €TTC`;
        console.log("check f4");
    },
    verify : function(){
        if(this.P_name !== null||this.P_quant !== null || this.P_price !== null ){     
            let Input_B = this.P_quant;
            let Input_C = this.P_price; 
            if( !isNaN(Input_B) || !isNaN(Input_C)){
                Input_B = parseInt(Input_B);
                Input_C = parseInt(Input_C); 
                console.log(`check f3 ${Input_B} ${Input_C}`);
                this.P_quant = Input_B;
                this.P_price = Input_C;
                return 0;
            }else{
                    setTimeout(alert("verify : Veuillez compléter les champs avec des nombres."),20);
                    return Prod_R.innerText = "Erreur, pas un nombre";
            }
        }else{
        setTimeout(alert("Verify :Veuillez compléter les champs."),20);
        return Prod_R.innerText = "Erreur , champs vides";
        }
    },
    calculate : function(){
                this.result = this.P_quant*this.P_price;
        console.log("check f1");
        if(!isNaN(this.result)){
            return this.result;
        }else{
            setTimeout(alert(" calculate : Veuillez compléter les champs avec des nombres.",20));
            return Prod_R.innerText = "Erreur";
        }
    }
});

Butt_Sub.addEventListener("clic",calc.display(Prod_N,Prod_Q,Prod_P));


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

Butt_Sub.addEventListener("clic",calc.display(Prod_N,Prod_Q,Prod_P));