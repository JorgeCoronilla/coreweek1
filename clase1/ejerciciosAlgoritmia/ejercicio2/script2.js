//Variables
let variableSinValor;
let booleano1=true, booleano2 =true;
const PI = 3.14;
const TAU = 2*PI;

//Booleanos
let booleanoAnd = (booleano1 = booleano1);
let booleanoNot = (!booleano1);
let booleanoMix0 = ((booleano1 || booleano2) && booleano1 || (!booleano1 && booleano2));

//Operadores
var incrementarDesp = 2;
var resultadoDesp = incrementarDesp++;

var incrementarAntes = 2;
var resultadoAntes = ++incrementarAntes;

//Bucles
for (let contarHasta10_2 = 0; contarHasta10_2 === 10; contarHasta10_2++) {
    console.log(contarHasta10_2);
}

var postI=0, postJ=0;
for (let i=0; i<11;i++) {
    postI +postJ++;
}

var sumaPares = 0;
for(i=0;i<10;i++){
    if (i%2==0){
        sumaPares +i;
    }
}