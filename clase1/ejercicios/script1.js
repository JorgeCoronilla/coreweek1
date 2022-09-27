var enlaces = document.getElementsByTagName("a");
alert("Número de enlaces -> " + enlaces.length);

var penultEnlace = enlaces[enlaces.length-2];
alert ("El penúltimo enlace es" + penultEnlace.innerText);

/*var enlacesAPRueba = document.querySelectorAll('[href="http://prueba/"]');
alert("Número de enlaces con http://prueba -> " + enlacesAPRueba.length);*/

var parrafos = document.getElementsByTagName("p");
var enlacesTercerP = parrafos[2].getElementsByTagName("a");
alert ("Número de enlaces en el tercer párrafo " + enlacesTercerP.length);
/*
var enlaces = document.getElementsByTagName("a");
penultimoE = enlaces[enlaces.length - 2].href; 

var ultimoenlace = document.getElementsByTagName("a")[document.getElementsByTagName("a").length - 2].href;
alert("El ultimo enlace es "+ ultimoenlace);
*/
//Numero de enlaces que enlazan a http://prueba
var number_of_links_to = 0;
for(let i=0; i<enlaces.length; i++){
    if (enlaces[i].href == "http://prueba/"){
        number_of_links_to++;
    }
}
alert("Numero de enlaces que enlazan a http://prueba/: "+ number_of_links_to);