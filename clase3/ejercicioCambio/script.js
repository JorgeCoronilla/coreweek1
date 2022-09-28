function inicializarEfectivo(c500, c200, c100, c50, c20, c10, c5, c2, c1, c05, c02, c01, c005, c002, c001) {

    return [c500, c200, c100, c50, c20, c10, c5, c2, c1, c05, c02, c01, c005, c002, c001, 0];
}

function calcularTotal(efectivo, billetesMonedas) {
    //var total = 0;
    //efectivo.push(0); //le añadimos el 0 a la ultima casilla del array de efectivo en vez de declarar otra variable
    efectivo[efectivo.length - 1] = 0
    for (let i = 0; i < efectivo.length - 1; i++) {
        //total = total + efectivo[i] * billetesMonedas[i];         // varias formas de hacer lo mismo
        //total += efectivo[i] * billetesMonedas[i];
        efectivo[efectivo.length - 1] += efectivo[i] * billetesMonedas[i];
    }

    //[efectivo.length - 1] esto representa la ultima casilla del array, simplemente la seleccionamos
    efectivo[efectivo.length - 1] = Math.round((efectivo[efectivo.length - 1] + Number.EPSILON) * 100) / 100; //para redondear a dos decimales
    //efectivo.push(total);

    return efectivo;
}
function actualizarCaja(caja, pago) {
    for (let i = 0; i < caja.length; i++) {
        if (pago[i] > 0) {
            caja[i] += pago[i]
        }


    }
    return caja
}
caja = inicializarEfectivo(4, 3, 2, 11, 24, 8, 12, 50, 74, 0, 0, 1, 2, 3, 1);
//var caja = inicializarEfectivo(1, 0, 0, 1, 4, 8, 2, 5, 4, 0, 0, 1, 2, 3, 1);
const billetesMonedas = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
caja = calcularTotal(caja, billetesMonedas);

alert(caja);

var precio = 550;
var pago = inicializarEfectivo(2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
pago = calcularTotal(pago, billetesMonedas);
//alert(pago);
if (pago[pago.length - 1] - precio == 0) {
    alert('sin cambio');
    caja = actualizarCaja(caja, pago)
    alert(caja)
} else {
    alert(pago[pago.length - 1] - precio);
    var devolver = pago[pago.length - 1] - precio
    if (devolver > caja[caja.length - 1]) {
        alert("No tenemos cambio")
    } else {
        var devolucion = inicializarEfectivo(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
        for (let i = 0; i < devolucion.length; i++) {
            if (caja[i] * billetesMonedas[i] >= devolver) {
                devolucion[i] = parseInt(devolver / (caja[i] * billetesMonedas[i]));
                caja[i] -= devolucion[i];
                devolver -= devolucion[i] * billetesMonedas[i];
                alert("Su cambio " + devolucion[i] + "billetes/monedas de " + billetesMonedas[i]);
            } 
        }
        

        if (devolver > 0) {
            alert = ("No tengo cambio suficiente\nMe falta " + devolver + "\nEjem... aceptamos propinas.");
        }

        /*
        if (caja[0] * billetesMonedas[0] >= devolver) {
            devolucion[0] = devolver / (caja[0] * billetesMonedas[0]);
            caja[0] -= devolucion[0];
            devolver -= devolucion[0]* billetesMonedas[0];
        }*/
    }

}

/*
if (caja[i]*billetesMonedas[i]>=devolver){
                devolucion[i]=devolver/caja[i];
                devolver =- devolver/caja[i]*devolucion[i];
        }*/








/*
    - Billetes de 500€: 0
    - Billetes de 200€: 0
    - Billetes de 100€: 0
    - Billetes de 50€: 1 
    - Billetes de 20€: 4
    - Billetes de 10€: 8
    - Billetes de 5€: 2
    - Monedas de 2€: 5
    - Monedas de 1€: 4
    - Monedas de 0.50€: 0
    - Monedas de 0.20€: 0
    - Monedas de 0.10€: 1
    - Monedas de 0.05€: 2
    - Monedas de 0.02€: 3
    - Monedas de 0.01€: 1
*/