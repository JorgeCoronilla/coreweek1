/* Solicita una cadena al usuario y devuélvela invertida 
Ej: "Hola, ¿qué tal estás?" -> estás? tal ¿qué Hola,*/

inviertePalabras(prompt("Dame la frase"));
function inviertePalabras (texto){
    palabras = texto.split(" ");
    invertido=[];
    palabras.forEach((element,i) => {
        invertido[palabras.length-i]=element;
    });
    return document.querySelector('p').innerText = invertido;
}