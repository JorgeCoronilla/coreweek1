 // Anonima
 let Rectangulo = class {
    constructor(alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
    }
    };

    console.log(Rectangulo.name);
    // output: "Rectangulo"

    // Nombrada
    let Rectangulo2 = class Rectangulo2 {
    constructor(alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
    }
    };
    console.log(Rectangulo.name);
    // output: "Rectangulo2"

var rentangulo3 = new Rectangulo2 // NO se puede el uno??
