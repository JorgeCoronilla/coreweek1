var cargador = ['pium', 'pium', 'pium', 'pium', 'pium', 'pium', 'pium'];
function chauchat (cargador) {
    
    var probabilidad80=Math.random()*9;
    if (probabilidad80 == 0 || probabilidad80 == 1) {
        console.log("Illo, me he quedao pillá!");
    } else {
        for (let i=0; i<cargador.length;i++){
            if (i%3==0) {console.log("\n");}
            console.log(cargador[i]);
        }
    }
   
}