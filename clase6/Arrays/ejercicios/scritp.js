/*
Crea un array de dos dimensiones (matriz) que contenga números 
y cadenas solicitados al usuario, muestra por pantalla 
los elementos cadena que se encuentren en posiciones fila par 
y columna impar*/

var arrayDoble = new Array(5);
for(let i=0;i<5;i++){
    arrayDoble[i] = new Array(4);
}

/*arrayDoble.forEach(element => {
    arrayDoble[i] = new Array(4);
    i++
   }); */

var elemento, l=0;
arrayDoble.forEach(element => {
    for (let j=0;j<4;j++){
        elemento = prompt("Inserta el valor " + l+" "+j);
        arrayDoble[l][j]=elemento;
        elemento = "";
        if (l%2 == 0 && j%2 != 0) {console.log(arrayDoble[l][j]);
        }
    }
    l++;
});




   