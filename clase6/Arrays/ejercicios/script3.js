//Solicita al usuario un array de máximo 10 números reales y calcula su media.
var numero = prompt("Cuántos números quieres calcular (max. 10"), elemento = 0;
while (!(numero > 0 && numero <= 10)) {
    numero = prompt("Ese numero no es correcto. \nCuántos números quieres calcular (max. 10");
}

function mediaElementos(numero) {
    var listaNumeros = [];
    for (let i = 0; i < numero; i++) {
        elemento = parseInt(prompt("Número " + (i + 1)));
        listaNumeros.push(elemento);
    }
    let suma = listaNumeros.reduce((a, b) => a + b);
    let media = suma / listaNumeros.length;
    return alert("la media es " + media);
}




