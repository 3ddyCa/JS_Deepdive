
class Puce {
    constructor(a,b,c,d,e){
        this.model = a;
        this.cadence = b;
        this.consomation = c;
        this.coeurs = d;
        this.ports = e;
    }
}

const portsA = ["44","192","168","88","21","254","180","18"];
const puceA = new Puce("AMD-G00Z","5080Hz","10W","40",portsA);

class Appendice {
    constructor(a,b,c,d,e,f,g,h){
        this.model = a;
        this.Moteur = b;
        this.consomation = c;
        this.micromoteurs = d;
        this.precision = e;
        this.portee = f;
        this.resistance = g;
        this.poids = h;
    }
}

const brasA = new Appendice("CroV_IX","D-677","600W","RotorZ-Y50","18mm","1800mm","60N","11980g");

class Generateur {
    constructor(a,b,c,d,e,f,g,h){
        this.model = a;
        this.cadence = b;
        this.consomation = c;
        this.dimensions = d;
        this.carburant = e;
        this.prises = f;
        this.resistance = g;
        this.poids = h;
    }
}

const geneA = new Generateur("YamahaK18","8000tr/min","600J/min","800mm3","Thorium","8","150N","28500g");

class Locomotion {
    constructor(a,b,c,d,e,f,){
        this.model = a;
        this.acceleration = b;
        this.dimensions = c;
        this.type = c;
        this.efficacité = d;
        this.resistance = e;
        this.poids = f;
    }
}

const locomA = new Locomotion("44_MWM","1.8","600mm3","jambe","0.7","80N","14020g");



class Robot {
    constructor(a, b, c, d, e){
        this.puce = a;
        this.manipulation = b;
        this.chassis = c;
        this.generateur = d;
        this.locomotion = e;
    }
    compacteur(input, nb,  destination){
        if(!isNaN(destination)){
            let pick = Object.keys(this);
            destination = pick[destination];
        }   
        for(let i = 0 ; i < nb;i++){
            destination.push(input);
        }
        
    }
    checkup() {
        console.log("Les composants du robot sont tels que suit :");
        console.log(" ");
        let index = Object.keys(this);
        for(let i = 0; i < index.length-1 ;i++){
            console.log(index[i]);
            console.log(this[index[i]]);
        }
        console.log("Fin du check-up composants");
    }

}

const botZord = new Robot(puceA, brasA, "Faraday-X7X", geneA, locomA );

console.log(checkup());






// const robot = {
//     puce : {
//         model : "AMD-G00Z",
//         cadence : "5080Hz",
//         consomation : "10V",
//         coeurs : "40",
//         ports : {
//             principal : 66,
//             auxiliaire : [55,44,33,22,11],
//             panic : 0
//         }
//     },
//     chassis : "Sank-H20",
//     generateur : "YamahaK18",
//     moteur : "D-677",
//     micromoteurs : "RotorZ-Y50",
//     checkup : function(message){
//         console.log(message + "Les composants du robot sont tels que suit :");
//         console.log(" ");
//         let index = Object.keys(robot);
//         for(let i = 0; i < index.length-1 ;i++){
//             console.log(index[i]);
//             console.log(this[index[i]]);
//         }
//         console.log("Fin du check-up composants");
//     }
// }

// robot.checkup("\n");
// Object.defineProperty(robot , "coating", {
//     value : "Titanium",
//     writable : true
// })