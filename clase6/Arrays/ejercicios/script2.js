var filas = prompt("numero de filas");
var columnas = prompt("numero de columnas");

var arrayDoble = new Array(filas);
for(let i=0;i<filas;i++){
    arrayDoble[i] = new Array(columnas);
}
filas=0;
let n=0;
arrayDoble.forEach(element => {
    for (let j=0;j<columnas;j++){
        ((filas == 0 && j == 0) || (filas == 0 && j == 1)) ? arrayDoble[filas][j] = 1 :  arrayDoble[filas][j] = (n-1 +n-2);
        n++
        }
        filas++;
    });

console.log(arrayDoble);
