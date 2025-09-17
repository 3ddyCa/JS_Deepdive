const Prod_R = document.querySelector("#F_resultat");
const Prod_N = document.querySelector("input[name=F_name]");
const Prod_Q = document.querySelector("input[name=F_Quant]");
const Prod_P = document.querySelector("input[name=F_Prix]");
const Butt_Sub = document.querySelector("button[type=submit]")




function sumProducts(list) {
    let result = parseInt(list[0])*parseInt(list[1]);
    console.log('check f1');
    if(result != NaN){
        return result;
    }else{
        setTimeout(alert("Veuillez compléter les champs avec des nombres."));
        return Prod_R.innerText = "Erreur"
    }
}


function calcTTC(input){
    let Calcul = parseInt(sumProducts(input));
    let TVA = parseInt(Calcul/100*20);
    let result = parseInt(TVA+Calcul);
    console.log('check f2');
    return result;
}

function VerifyInput(b,c){
    let AllInput = [];
    if(b == undefined || c == undefined || b == NaN || c == NaN){
        setTimeout(alert("Veuillez compléter les champs avec des nombres."));
        return Prod_R.innerText = "Erreur"
    }
    AllInput.push(b);
    AllInput.push(c); 
    console.log(`check f3 ${b} ${c}`);
    return AllInput;
}

function showResult(a,b,c){
    let AllInput = VerifyInput(b,c);
    let result = calcTTC(AllInput);
    Prod_P.innerText = `Le produit : ${a} coûte : ${result} €TTC`;
    console.log('check f4');
}

Butt_Sub.addEventListener("click",showResult(Prod_N,Prod_Q,Prod_P));