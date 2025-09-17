class puce {
    constructor(a,b,c,d,e){
        this.model
        this.cadence
        this.consomation
        this.coeurs
        this.ports = 
    }
}


class robot{
    constructor(p, b, c, g, j){
        this.puce = p;
        this.bras = b;
        this.chassis = c;
        this.generateur = g;
        this.jambes = j;
    }
}




const robot = {
    puce : {
        model : "AMD-G00Z",
        cadence : "5080Hz",
        consomation : "10V",
        coeurs : "40",
        ports : {
            principal : 66,
            auxiliaire : [55,44,33,22,11],
            panic : 0
        }
    },
    chassis : "Sank-H20",
    generateur : "YamahaK18",
    moteur : "D-677",
    micromoteurs : "RotorZ-Y50",
    checkup : function(message){
        console.log(message + "Les composants du robot sont tels que suit :");
        console.log(" ");
        let index = Object.keys(robot);
        for(let i = 0; i < index.length-1 ;i++){
            console.log(index[i]);
            console.log(this[index[i]]);
        }
        console.log("Fin du check-up composants");
    }
}

robot.checkup("\n");
Object.defineProperty(robot , "coating", {
    value : "Titanium",
    writable : true
})