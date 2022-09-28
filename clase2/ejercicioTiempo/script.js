
alert("Holña");

function onlySeconds (hours, minutes, seconds) {
    return alert("Son " + (hours*60*60)+(minutes*60)+seconds + " segundos");
}

function timeHMS (secondsUser) {
    let hours, minutes, seconds;
    seconds=parseInt(secondsUser%60);
    hours=parseInt((secondsUser/60)/60);
    minutes = parseInt((secondsUser/60)%60);
    return [hours, minutes, seconds];}

function pideHMS () {
    horas = prompt("Introduce el número de horas");
    minutos = prompt("Introduce el número de minutos");
    segundos = prompt("Introduce el número de segundos");
    return [horas, minutos, segundos];
}

function pideSegundos () {
    return prompt("Introduce el número total de segundos");
}

function menu () {
    var opcion = prompt("Menu\n\n1. Pasar horas, minutos y segundos a segundos.\n2. Pasar segundos a horas, minutos y segundos.");
    var respuesta;
    if (opcion == 1) { 
        respuesta = pideHMS();
        onlySeconds(respuesta[0], respuesta[1], respuesta[2]);
    } else if (opcion == 2) {
        respuesta = timeHMS(pideSegundos());
        alert("Son " + respuesta[0] + "horas, " + respuesta[1] + "minutes y " + respuesta[2] + " segundos");
}
        //alert(timeHMS(pideSegundos())); 
    }


