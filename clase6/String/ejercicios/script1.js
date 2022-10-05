/*Solicita una cadena al usuario e indica 
la cantidad de veces que aparece la a en las palabras impares*/
palabrasSeparadas(prompt('Escribe una frase no muy corta, please'));

function palabrasSeparadas (input) {
    var palabras = input.split(" ")
    letraAenImpares (palabras);
}
function letraAenImpares (lista) {
    var contador=0;
    /*lista.foreach((element,j) => {
        if(j%2 == 0) {
            for(k of element){ 
                if(k == "a" || j=="A") {contador++}
              }
           }
        })*/
    
    for(let j=0;j<lista.length;j++){ 
       if(j%2 == 0) {
        for(k of lista[j]){ 
            if(k == "a" || j=="A") {contador++}
          }
       }
     }
    return alert(`Tus palabras impares tienen ${contador} aes...`);
}

