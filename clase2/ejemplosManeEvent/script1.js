// función que sirve para ocultar y mostrar
// función que sirve para ocultar y mostrar
function call (enlace) {
   
    var idElemento= enlace.id;
    
    if (enlace.innerText == "Ocultar contenidos") {
        enlace.innerText = "Mostrar contenidos";
        //enlace.previousElementSibling.style.visibility = "hidden";
        document.getElementById("contenidos_" + idElemento.charAt(7)).style.visibility = "hidden";

     } else {
        enlace.innerText = "Ocultar contenidos";
        //enlace.previousElementSibling.style.visibility = "visible";
        document.getElementById("contenidos_" + idElemento.charAt(7)).style.visibility = "visible";

     }


}

window.onload = () => {
    var numEnlaces = document.getElementsByTagName("a").length;
    for(let i=1; i <=numEnlaces; i++) {
        document.getElementById("enlace_" + i).setAttribute("onclick", "call(this)");
    }
}