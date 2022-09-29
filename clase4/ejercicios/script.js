

//Recoge los datos con el boton "crea objeto"
function pasaDatos() {
    var dime1User = document.getElementById('dim1').value
    var dime2User = document.getElementById('dim2').value
    if (dime1User == "" || dime2User == "" ) {
        creaObjeto(4, 10);
    } else {creaObjeto(dime1User, dime2User);}
    piramide1.crearPiramide();
}


// crea el objeto con los datos introducidos y el predeterminado (4,10)
function creaObjeto(dim1,dim2) {
  
    const piramide1 = new PiramideDoble(dim1, dim2);
    console.log(piramide1);
    //return alert(piramide1.crearPiramide());
}


class PiramideDoble {
    constructor(dimension1, dimension2) {
        this.dimension1 = dimension1;
        this.dimension2 = dimension2;
    }

    get objetoDimensiones() {
        return "Dimension1: " + this.dimension1 + "\nDimension2" + this.dimension2;
    }

    // set objetoDimensiones(dimensiones) {
    //     this.dimension1 = dimensiones[0]; //Lo he hecho como el ejemplo de Davinia, pero se pueden poner dos separadas...
    //     this.dimension2 = dimensiones[1];
    // }

    crearPiramide() {
        let lineSpace = "";
        let lineStar = "";
        let lineComplete = "Dimensión 1:" + this.dimension1 + "\n Dimensión 2: " + this.dimension2 + "\n";
        let stars;
        let spaces;// este el de arriba Gerardo: Te lo explico después... es un lío...
        for (let i = this.dimension1; i <= this.dimension2; i += 2) {
            console.log("entra")
            console.log(this.dimension1) // 4
            console.log(this.dimension2) // 10

            stars = i;
            spaces = (this.dimension2 - stars) / 2;
            for (let j = 0; j < spaces; j++) { // me añade espacios de una línea
                lineSpace = lineSpace + " "; //En cada iteración del bucle suma un espacio. Antes de las estrellas, no entre.EL número es diferente
            }
            for (let k = 0; k < stars; k++) { //añade estrellas de una línea
                lineStar = lineStar + "*";
            }
            lineComplete = lineComplete + lineSpace + lineStar + "\n"; // espacios+estrellas \n salta de línea
            lineStar = ""; //Reinicio para la siguiente línea
            lineSpace = "";//Reinicio para la siguiente línea
        } //Este es el triángilo de abajo. 
        for (let i = this.dimension2 - 2; i >= this.dimension1; i -= 2) {
            stars = i;
            spaces = (this.dimension2 - stars) / 2; //Perfect
            for (let j = 0; j < spaces; j++) {
                lineSpace = lineSpace + " ";
            }
            for (let k = 0; k < stars; k++) {
                lineStar = lineStar + "*";
            }
            lineComplete = lineComplete + lineSpace + lineStar + "\n";
            lineStar = "";
            lineSpace = "";
        }
        return lineComplete;
    }
};


//form.addEventListener("submit", creaObjeto(dim1, dim2));

/*
const form = document.getElementById('data');
var dime1User = form.elements['dim1'].value;
var dime2User = form.elements['dim2'].value;
*/