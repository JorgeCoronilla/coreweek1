function estructura(texto1, texto2, nodo1, nodo2) {
    var dt = document.createElement(nodo1);
    var dd = document.createElement(nodo2);
    var padre = document.createElement("dl");
    dt.appendChild(document.createTextNode(texto1));
    padre.appendChild(dt);
    dd.appendChild(document.createTextNode(texto2));
    padre.appendChild(dd);
    document.body.appendChild(padre);
}

var concepto1 = "Red Telefónica Conmutada (RTC)";
var definicion1 = "La línea telefónica de toda la vida. Para acceder a Internet es necesario un módem.";
var concepto2 = "Red Digital de Servicios Integrados (RDSI)";
var definicion2 = "Una línea telefónica especial. Para acceder a Internet es necesario un módem RDSI.";
var concepto3 = "Línea de Abonado Digital Asimétrica (ADSL)";
var definicion3 = "Se basa en la conversión de una línea RTC en una línea de alta velocidad. Para acceder a Internet es necesario un módem ADSL.";
var concepto4 = "Fibra Óptica";
var definicion4 = "Una línea de fibra óptica. Normalmente la fibra óptica no llega hasta el usuario final, por lo que el término más apropiado es Fibra híbrida coaxial.";


estructura (concepto1, definicion1, "dt", "dd");
estructura (concepto2, definicion2, "dt", "dd");
estructura (concepto3, definicion3, "dt", "dd");
estructura (concepto4, definicion4, "dt", "dd");


//Version ARRAY + BUCLE
/*
var conceptos = ["Red Telefónica Conmutada (RTC)", "Red Digital de Servicios Integrados (RDSI)", "Línea de Abonado Digital Asimétrica (ADSL)", "Fibra Óptica"];
var definiciones = ["La línea telefónica de toda la vida. Para acceder a Internet es necesario un módem.", "Una línea telefónica especial. Para acceder a Internet es necesario un módem RDSI.", "Se basa en la conversión de una línea RTC en una línea de alta velocidad. Para acceder a Internet es necesario un módem ADSL.", "Una línea de fibra óptica. Normalmente la fibra óptica no llega hasta el usuario final, por lo que el término más apropiado es Fibra híbrida coaxial."];

for (let i = 0; i<4; i++){
    estructura (conceptos[i], definiciones[i], "dt", "dd");
}*/
