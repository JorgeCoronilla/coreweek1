var valorScreen = "";
var precio = 0;
var pago = inicializarEfectivo(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
const billetesMonedas = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
var caja = inicializarEfectivo(1, 5, 0, 1, 4, 8, 2, 5, 4, 0, 0, 1, 2, 3, 1);

function key(valor) {
    if (valor == 'Admin'){
        document.getElementsByClassName("comenzar")[0].style = "visibility: hidden;";
        document.getElementsByClassName("comenzar")[1].style = "visibility: hidden;";
        document.getElementById("adminPanel").style = "visibility: visible;";
    } else if (valor == 'Admin2'){
        alert("WEEEE");
        document.getElementsByClassName("comenzar")[0].style = "visibility: hidden;";
        document.getElementsByClassName("comenzar")[1].style = "visibility: hidden;";
        document.getElementById("setCaja").style = "visibility: visible;";

        if (checkUser(document.getElementById('user').value, document.getElementById('password').value)) {
            document.getElementById("setCaja").style = "visibility: visible;";
            document.getElementsByClassName("comenzar")[0].style = "visibility: hidden;";
            document.getElementsByClassName("comenzar")[1].style = "visibility: hidden;";
        } else {document.querySelector("p").innerText = "Usuario o password no válido";}
           
    } else if (valor == 'Start') {
        valorScreen = "";
        document.querySelector("h4").innerText = "Introduzca el importe a pagar y pulse ->";
        document.getElementById("teclaNumericas").style = "visibility: visible;";
        document.getElementsByClassName("comenzar")[0].style = "visibility: hidden;";
        document.getElementsByClassName("comenzar")[1].style = "visibility: hidden;";
        document.querySelector("p").innerText = "";
    } else if (valor == 'I') {
        precio = parseFloat(valorScreen);
        document.querySelector("h4").innerText = "El importe introducido es " + valorScreen + "\n Ahora introduzca las monedas y/o billetes";
        document.getElementById("teclasMonedas").style = "visibility: visible;"
        document.getElementById("teclaNumericas").style = "visibility: hidden;"
    }
    else {
        valorScreen += valor;
        document.querySelector("p").innerText = valorScreen;
    }
}

function checkUser(user, password){
    
    return (user==='Jorge' && password==="batman17")
}

function setCaja () {

}

function inputPago(moneda) {


    var screen500 = document.getElementsByTagName('h5')[0].innerHTML;
    var screen200 = document.getElementsByTagName('h5')[1].innerHTML;
    var screen100 = document.getElementsByTagName('h5')[2].innerHTML;
    var screen50 = document.getElementsByTagName('h5')[3].innerHTML;
    var screen20 = document.getElementsByTagName('h5')[4].innerHTML;
    var screen10 = document.getElementsByTagName('h5')[5].innerHTML;
    var screen5 = document.getElementsByTagName('h5')[6].innerHTML;
    var screen2 = document.getElementsByTagName('h5')[7].innerHTML;
    var screen1 = document.getElementsByTagName('h5')[8].innerHTML;
    var screen050 = document.getElementsByTagName('h5')[9].innerHTML;
    var screen020 = document.getElementsByTagName('h5')[10].innerHTML;
    var screen010 = document.getElementsByTagName('h5')[11].innerHTML;
    var screen005 = document.getElementsByTagName('h5')[12].innerHTML;
    var screen002 = document.getElementsByTagName('h5')[13].innerHTML;
    var screen001 = document.getElementsByTagName('h5')[14].innerHTML;
    switch (moneda) {
        case 500:
            pago[0] += 1;
            screen500 += "<span> I</span>";
            document.getElementsByTagName("h5")[0].innerHTML = screen500;
            break;
        case 200:
            pago[1] += 1;
            screen200 += "<span> I</span>";
            document.getElementsByTagName("h5")[1].innerHTML = screen200;
            break;
        case 100:
            pago[2] += 1;
            screen100 += "<span> I</span>";
            document.getElementsByTagName("h5")[2].innerHTML = screen100;
            break;
        case 50:
            pago[3] += 1;
            screen50 += "<span> I</span>";
            document.getElementsByTagName("h5")[3].innerHTML = screen50;
            break;
        case 20:
            pago[4] += 1;
            screen20 += "<span> I</span>";
            document.getElementsByTagName("h5")[4].innerHTML = screen20;
            break;
        case 10:
            pago[5] += 1;
            screen10 += "<span> I</span>";
            document.getElementsByTagName("h5")[5].innerHTML = screen10;
            break;
        case 5:
            pago[6] += 1;
            screen5 += "<span> I</span>";
            document.getElementsByTagName("h5")[6].innerHTML = screen5;
            break;
        case 2:
            pago[7] += 1;
            screen2 += "<span> I</span>";
            document.getElementsByTagName("h5")[7].innerHTML = screen2;
            break;
        case 1:
            pago[8] += 1;
            screen1 += "<span> I</span>";
            document.getElementsByTagName("h5")[8].innerHTML = screen1;
            break;
        case 0.50:
            pago[9] += 1;
            screen050 += "<span> I</span>";
            document.getElementsByTagName("h5")[9].innerHTML = screen050;
            break;
        case 0.20:
            pago[10] += 1;
            screen020 += "<span> I</span>";
            document.getElementsByTagName("h5")[10].innerHTML = screen020;
            break;
        case 0.10:
            pago[11] += 1;
            screen010 += "<span> I</span>";
            document.getElementsByTagName("h5")[11].innerHTML = screen010;
            break;
        case 0.05:
            pago[12] += 1;
            screen005 += "<span> I</span>";
            document.getElementsByTagName("h5")[12].innerHTML = screen005;
            break;
        case 0.02:
            pago[13] += 1;
            screen002 += "<span> I</span>";
            document.getElementsByTagName("h5")[13].innerHTML = screen002;
            break;
        case 0.01:
            pago[14] += 1;
            screen001 += "<span> I</span>";
            document.getElementsByTagName("h5")[14].innerHTML = screen001;
            break;

        default:
            calcularCambio(pago);
    }


}


function inicializarEfectivo(c500, c200, c100, c50, c20, c10, c5, c2, c1, c05, c02, c01, c005, c002, c001) {

    return [c500, c200, c100, c50, c20, c10, c5, c2, c1, c05, c02, c01, c005, c002, c001, 0];
}

function calcularTotal(efectivo, billetesMonedas) {
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



function calcularCambio(pago) {
    var caja = inicializarEfectivo(1, 5, 0, 1, 4, 8, 2, 5, 4, 0, 0, 1, 2, 3, 1);
    caja = calcularTotal(caja, billetesMonedas);
    pago = calcularTotal(pago, billetesMonedas);
    //alert("pago: " + pago + " y caja " + caja + " y precio " + precio);

    if (pago[pago.length - 1] - precio == 0) {
        alert('Importe exacto');
        caja = actualizarCaja(caja, pago)
        // alert(caja)
    } else {
        // alert(pago[pago.length - 1] - precio);
        var devolver = pago[pago.length - 1] - precio
        if (devolver > caja[caja.length - 1]) {
            alert("No tenemos cambio")
        } else {
            var cambio = inicializarEfectivo(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
            let i = 0;
            while (devolver > 0 && i < caja.length - 1) {


                if (caja[i] * billetesMonedas[i] >= devolver) {
                    cambio[i] = Math.floor(devolver / billetesMonedas[i]);
                    caja[i] -= cambio[i]
                    devolver -= cambio[i] * billetesMonedas[i];
                } else {
                    cambio[i] = caja[i];
                    caja[i] = 0;
                    devolver -= cambio[i] * billetesMonedas[i];
                }
                caja = calcularTotal(caja, billetesMonedas);
                cambio = calcularTotal(cambio, billetesMonedas);
                //alert(" en " + i + " moneda " + billetesMonedas[i] + " caja es: " + caja + " y cambio es " + cambio);
                i++
            }
            //alert("XXXXXX caja al final es: " + caja + " y el cambio final es " + cambio);
            imprimeCambio (cambio);
        }
    }

return cambio;

}

function imprimeCambio(cambio) {
    var screenCambio = "";
    var cambioTotal = cambio[cambio.length - 1];
    //alert("Llega la funcion de cambio");
    document.querySelector("p").innerText = "Su cambio";
    document.querySelector("h4").innerText = "cambio total " + cambioTotal;
    for (let i = 0; i < cambio.length-1; i++) {
        //alert("IMprimir " + i + "pantalla " + screenCambio);
        if (i <= 6 && cambio[i] > 1) {
            screenCambio = screenCambio + parseInt(cambio[i]) + " billetes de " + billetesMonedas[i] + ", ";
        } else if (i>6 && cambio[i] > 1) {
            screenCambio = screenCambio + parseInt(cambio[i]) + " monedas de " + billetesMonedas[i] + ", "
        } else if (i <= 6 && cambio[i] == 1) {
            screenCambio = screenCambio + parseInt(cambio[i]) + " billete de " + billetesMonedas[i] + ", ";
        } else if (i>6 && cambio[i] == 1) {
            screenCambio = screenCambio + parseInt(cambio[i]) + " moneda de " + billetesMonedas[i] + ", "
        }
    }
    document.querySelector("p").innerText = screenCambio;
    document.getElementById("teclaNumericas").style = "visibility: hidden;";
    document.getElementById("comenzar").style = "visibility: visible;";
    document.getElementById("teclasMonedas").style = "visibility: hidden;"
    document.getElementsByClassName ("terminado1").style = "visibility: hidden;"
}