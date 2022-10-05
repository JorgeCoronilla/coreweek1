//Recoge los datos con el boton, despues crea al objeto.
function pasaDatos() {
    var dime1User = parseInt(document.getElementById('dim1').value);
    var dime2User = parseInt(document.getElementById('dim2').value);
    if (dime1User == "" || dime2User == "") {
        creaObjeto(4, 10);
    } else { creaObjeto(dime1User, dime2User); }
}


// crea el objeto con los datos introducidos.
function creaObjeto(dim1, dim2) {
    const piramide1 = new PiramideDoble(dim1, dim2);
    console.log(piramide1);
    alert(piramide1.crearPiramide());
}

// crea la clase PirámideDoble: primero el constructor, después el get (para recibir los datos)
// Esto dice cómo son los objetos.

class PiramideDoble {
    constructor(dimension1, dimension2) {
        this.dimension1 = dimension1;
        this.dimension2 = dimension2;
    }


    /* Se pueden crear más cosas oara el objeto 
    
    creo el get (Aunque al final no se usa para nada en este ejercicio. 
Sirve para que devuelva los atributos de cualquier objeto)
por ejemplo, si tengo un objeto creado que se llama piramide1 se hace así:
alert(piramide1.objetoDimensiones);
Y debe devolver :"Dimension1: " + this.dimension1 + "\nDimension2" + this.dimension2 + "\n";
*/

    get objetoDimensiones() {
        return "Dimension1: " + this.dimension1 + "\nDimension2" + this.dimension2 + "\n";
    }


    /*Esto tampoco se usa en este programa. Es como lo anterior pero para modificar los atributus.
    Si pongo 
    var nuevasdimensiones =  [6,12];
    piramida1.objetodimensiones(nuevasdimensiones)

    las cambia a 6 y 12.
    */

    set objetoDimensiones(dimensiones) {
        this.dimension1 = dimensiones[0];
        this.dimension2 = dimensiones[1];
    }

    //Crea la pirámide
    //Dentro de un objeto podemos configurar acciones.
    //Se ejecutan como las funciones --> crearPiramide ();

    crearPiramide() {
        let lineSpace = "";
        let lineStar = "";
        let lineComplete = "Dimension1: " + this.dimension1 + "\nDimension2" + this.dimension2 + "\n";
        let stars;
        let spaces;
        for (let i = this.dimension1; i <= this.dimension2; i += 2) {
            stars = i;
            spaces = (this.dimension2 - stars) / 2;
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
        for (let i = this.dimension2 - 2; i >= this.dimension1; i -= 2) {
            stars = i;
            spaces = (this.dimension2 - stars) / 2; 
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



