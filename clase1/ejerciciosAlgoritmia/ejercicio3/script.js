//Arrays

var arrayVacio = [];
var arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var arrayNumerosPares = [0, 2, 4, 6, 8];
var arraryBidimensional = [[0, 1, 2], ['a', 'b', 'c']];


//Funciones
function suma(n1, n2) {
    return n1+n2;
}

function potenciacion(a, b) {
    return Math.pow(a, b);
}

function separarPalabras(fraseUsuario) {
    let palabra = "", letraOK = false, respuesta = [];
    for (let i = 0; i < fraseUsuario.length; i++) {
        letraOK = fraseUsuario.charAt(i) != " ";
        if (fraseUsuario.charAt(i) != " ") {
          palabra = palabra + fraseUsuario.charAt(i)
       } else {
          respuesta.push(palabra);
          palabra="";
       }
    }
   respuesta.push(palabra);
          palabra="";
   respuesta;
}

function repetirString(frase, n) {
    var fraseLarga = "";
    for (let i=0; i<n; i++) {
        fraseLarga = fraseLarga + " " + frase;
    }
    return frase
}

function es_primo(num){
    var i=2;
    while(num%i != 0){
        i++;
    }
    return i==num;
}

// Mezclando Arrays con Funciones

function ordenarArray (numeros) {
    var aux;
    
    for (let i=0;i<=numeros.length;i++){
        for (let j=0; j<numeros.length;j++) {
            if (numero[j] > numeros[j+1]) {
                aux = numeros[j+1];
                numeros[j+1] = numeros[j];
                numeros[j] = aux;
            }
        }
    }
    return numeros
    // return numeros.sort();
}


function obtenerPares (numeros) {
    let numerosPares=[];
    for (let i=0; i<numeros.length;i++) {
        if (numeros[i]%2 == 0) {
            numerosPares.push(numeros[i]);
        }
    }
    return numerosPares
}

function pintarArray (lista) {
    listaString="[";
    for (let i=0; i<lista.length;i++) {
        listaString=listaString+lista[i]+", ";
    }
}


function arrayMapi (lista, suma) {
    listaCambiada = []
    for (let i=0; i<lista.length;i++) {
        listaCambiada.push(suma2(lista));
    }
}

function suma2 (n) {
    return n+2;
}
 //NI IDEA
var lista = [1,2,3,1,2,3,1,2,3,4,5,6];
function eliminarDuplicados (lista) {
    var listaLimpia=[];
    for (var i = 0; i <= lista.length; i++) {
        for (var j = 0; j < (lista.length - i); j++) {
            if (lista[j] !== lista[j+1]) {
                listaLimpia = lista.slice(j, j+1);
            }
        }
    }
    return listaLimpia;
}
// ITERACIONES PROYECTO
//ARRAYS
var arrayNumerosNeg=[0, -1, -2, -3, -4, -5, -6, -7, -8, -9];
var holaMundo = ["Hola", "Mundo"];
var loGuardoTodo = ["hola", "que", 23, 42.33, "tal"];
var arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']];

//Funciones
function multiplicacion (num1, num2) {
    return num1 * num2;
}

function division (num1, num2) {
    return num1 / num2;
}

function esPar (num) {
    return num%2 == 0;
}

var arrayFunciones = [ suma(n1,n2), resta(n1, n2), multiplicacion (n1, n2)];

// Mezclando arrays y funciones

function ordenarArray2 (numeros) {
    var aux;
    
    for (let i=numeros.length;i=0;i--){
        for (let  j=numeros.length;j=0;j--) {
            if (numero[j] > numeros[j+1]) {
                aux = numeros[j-1];
                numeros[j-1] = numeros[j];
                numeros[j] = aux;
            }
        }
    }
    return numeros
}


function obtenerImpares (numeros) {
    var impares = [];
    for (let i = 0; i<numeros.length; i++) {
        if (numeros[i]%2 != 0) {impares.push(numeros[i]);}
    }
    return impares;
}

function sumarArray (numeros) {
    let suma=0;
    for (let i=0; i<numeros.length; i++) {
        suma= suma + numeros[i];
    }
    return suma;
}

function multiplicarArray (numeros) {
    let multiplicacion=0;
    for (let i=0; i<numeros.length; i++) {
        multiplicacion= multiplicacion * numeros[i];
    }
    return multiplicacion;
}

