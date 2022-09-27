/*A partir del siguiente código de ejemplo, crea la lista desde JS (usando herramientas de DOM) con un HTML vacío, 
sólo debe incluir la etiqueta script correspondiente y lo que consideres necesario para que se cree la lista, 
en ningún caso etiquetas ni contenidos de la lista de definición.
        <dl>
            <dt>Red Telefónica Conmutada (RTC)</dt>
            <dd>La línea telefónica de toda la vida. Para acceder a Internet es necesario un módem.</dd>

            <dt>Red Digital de Servicios Integrados (RDSI)</dt>
            <dd>Una línea telefónica especial. Para acceder a Internet es necesario un módem RDSI.</dd>

            <dt>Línea de Abonado Digital Asimétrica (ADSL)</dt>
            <dd>Se basa en la conversión de una línea RTC en una línea de alta velocidad. Para acceder a Internet es
                necesario un módem ADSL.</dd>

            <dt>Fibra Óptica</dt>
            <dd>Una línea de fibra óptica. Normalmente la fibra óptica no llega hasta el usuario final, por lo que el
                término más apropiado es Fibra híbrida coaxial.</dd>
        </dl>
Modifica el ejercicio anterior de manera que el usuario pueda insertar definiciones o borrarlas, según decida en la lista y desde JS.*/
/*
var padre = document.createElement("dl");
var hijo1 = document.createElement("dt");
var contentHijo1 = document.createTextNode("termino");
var hijo2 = document.createElement("dl");
var contentHijo2 = document.createTextNode("definicion");

hijo1.appendChild (contentHijo1);
padre.appendChild (hijo1);
hijo2.appendChild (contentHijo2);
padre.appendChild (hijo2);
document.body.appendChild(padre);

*/

/*
var padre = document.createElement("dl");
var hijo1 = document.createElement("dt"); 
var hijo2 = document.createElement("dd"); 
var contentHijo1;
var contentHijo2;
var termino = ["Red Telefónica Conmutada (RTC)", "Red Digital de Servicios Integrados (RDSI)", "Línea de Abonado Digital Asimétrica (ADSL)", "Fibra Óptica" ];
var definicion = ["La línea telefónica de toda la vida. Para acceder a Internet es necesario un módem.", "Una línea telefónica especial. Para acceder a Internet es necesario un módem RDSI.", "Se basa en la conversión de una línea RTC en una línea de alta velocidad. Para acceder a Internet es necesario un módem ADSL.", "Una línea de fibra óptica. Normalmente la fibra óptica no llega hasta el usuario final, por lo que el término más apropiado es Fibra híbrida coaxial."];
for (let i=0;i<4;i++){
    contentHijo1 = document.createTextNode(termino[i]);
    contentHijo2 = document.createTextNode(definicion[i]);
    hijo1.appendChild (contentHijo1);
    padre.appendChild (hijo1);
    hijo2.appendChild (contentHijo2);
    padre.appendChild (hijo2);
    document.body.appendChild(padre);
}
*/

var padre = document.createElement("dl");
var hijo1 = document.createElement("dt");
var contentHijo1 = document.createTextNode("Red Telefónica Conmutada (RTC)");
var hijo2 = document.createElement("dl");
var contentHijo2 = document.createTextNode("La línea telefónica de toda la vida. Para acceder a Internet es necesario un módem.");

hijo1.appendChild (contentHijo1);
padre.appendChild (hijo1);
hijo2.appendChild (contentHijo2);
padre.appendChild (hijo2);
document.body.appendChild(padre);

contentHijo1 = document.createTextNode("Red Digital de Servicios Integrados (RDSI)");
contentHijo2 = document.createTextNode("Una línea telefónica especial. Para acceder a Internet es necesario un módem RDSI.");
hijo1.appendChild (contentHijo1);
padre.appendChild (hijo1);
hijo2.appendChild (contentHijo2);
padre.appendChild (hijo2);
document.body.appendChild(padre);

contentHijo1 = document.createTextNode("Línea de Abonado Digital Asimétrica (ADSL)");
contentHijo2 = document.createTextNode("Se basa en la conversión de una línea RTC en una línea de alta velocidad. Para acceder a Internet es necesario un módem ADSL.");
hijo1.appendChild (contentHijo1);
padre.appendChild (hijo1);
hijo2.appendChild (contentHijo2);
padre.appendChild (hijo2);
document.body.appendChild(padre);

contentHijo1 = document.createTextNode("Fibra Óptica");
contentHijo2 = document.createTextNode("Una línea de fibra óptica. Normalmente la fibra óptica no llega hasta el usuario final, por lo que el término más apropiado es Fibra híbrida coaxial.");
hijo1.appendChild (contentHijo1);
padre.appendChild (hijo1);
hijo2.appendChild (contentHijo2);
padre.appendChild (hijo2);
document.body.appendChild(padre);

