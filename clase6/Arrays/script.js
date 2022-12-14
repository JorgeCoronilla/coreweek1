let frutas = ["Manzana", "Banana"];
    let frutasObject = new Array("Fresa", "Piña");
    let frutasObject2 = new Array(["Fresa", "Piña"]);


    /*
    [["Fresa", "Piña"]]
a[0][0]
a[0][1].charAt(2)
a[0][1][2]
*/
    console.log(frutas);
    console.log(frutasObject);
    console.log(frutasObject2);
    console.log(frutas.length);//2
    console.log(frutasObject.length); //2
    console.log(frutasObject2.length); //1
console.log(frutasObject2[0].length); //2

    console.log(frutas[0]);//Manzana
    console.log(typeof(frutas));//object
    console.log(typeof(frutas[0]));//string
    console.log(typeof(frutasObject));//object
    console.log(typeof(frutasObject[0]));//string
    console.log(typeof(frutasObject2));//object
    console.log(typeof(frutasObject2[0]));//object
    console.log(typeof(frutasObject[0][1]));//string

    // Metodos de Array
//Map
let productos = ["patatas", "pescado", "naranjas", "manzana"];
let resultado = productos.map(function (producto){return producto + " modificado!"});
console.log(resultado);

//Equivalente
//let resultado2 = productos.map((alimento) =>{return alimento + " modificado2!"});
let resultado2 = productos.map(alimento =>alimento + " modificado2!");

console.log(resultado2);

// Usando MAP
let arr = [1, 2, 3, 4, 5, 6, 7];
let multiplyBy2 = n => n * 2;

let arr2 = arr.map(multiplyBy2);
console.log(arr2); // [2, 4, 6, 8, 10, 12, 14]


// Antes de MAP
let arr3 = [1, 2, 3, 4, 5, 6, 7];
let arr4 = [];
let multiplyBy2_2 = n => n * 2;

for (let i = 0; i < arr.length; i++) {
    arr4.push(multiplyBy2_2(arr3[i]));
}
console.log(arr4); // [2, 4, 6, 8, 10, 12, 14]

//Filter
function validar(elemento) {
    return elemento >= 10;
}
let filtrados = [false, 22, 4, 2, null, "Bye", 31].filter(validar);
console.log(filtrados);

//Equivalente 
let filtrados2 = [false, 22, 4, 2, null, "Bye", 31].filter((elemento) => {return elemento<10});//[false, 4, 2, null] - false y null equivalen a 0
console.log(filtrados2);

//Reduce - devuelve un çunico valor
 // Antes de REDUCE
 let lista = [2,-1,1,3,5,8];
 let acumulacion = 0;

 for (let i = 0; i < lista.length; i++) {
     acumulacion += lista[i];
 }
 console.log(acumulacion); // 18

 // Usando REDUCE
 let lista2 = [2,-1,1,3,5,8];
 let acumulado2 = lista2.reduce(function(anterior, actual){
 return anterior + actual;
 });
 console.log(acumulado2); // 18


 //Arrays con for each

 //let frutas = ["Manzana", "Banana", "Fresa", "Piña"];

 //let frutasObject = new Array(["Cereza", "Papaya"], ["Pera", "Sandía"]);

 //forEach
 frutas.forEach(element => {
     console.log(element);
 });

 //for tradicional equivalente
 for (let i = 0; i < frutas.length; i++) {
     console.log(frutas[i]);    
 }

 //forEach
 frutasObject.forEach(element => {
     console.log(element);
 });

 //for tradicional equivalente
 for (let i = 0; i < frutasObject.length; i++) {
     console.log(frutasObject[i]);    
 }

 //forEach
 frutasObject.forEach(element => {
     element.forEach(element2 => {
         console.log(element2);
     });
 });

   //for tradicional equivalente
   for (let i = 0; i < frutasObject.length; i++) {
    for (let j = 0; j < frutasObject[i].length; j++) {
        console.log(frutasObject[i][j]);
    }
} 

//forEach  --- devuelve lo que haya
frutasObject.forEach(element => {
    element.forEach(element2 => {
    for(l of element2){ // el for each para Strings -- devuelve caracteres
        console.log(l);
    }
    console.log("Fin Fruta");
    });
});

//for tradicional equivalente
for (let i = 0; i < frutasObject.length; i++) {
    for (let j = 0; j < frutasObject[i].length; j++) {
        for (let k = 0; k < frutasObject[i][j].length; k++) {
            console.log(frutasObject[i][j][k]);
        }
        console.log("Fin Fruta");
    }
}