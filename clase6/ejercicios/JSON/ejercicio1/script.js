
 var a =  {
    "localidade 1": {
    "Continente": "África",
    "País": "Angola",
    "Capital": "Luanda"
    },
    "localidade 2": {
    "Continente": "América do Norte",
    "País": "Estados Unidos",
    "Capital": "Washington DC"
    },
    "localidade 3": {
    "Continente": "América Central",
    "País": "México",
    "Capital": "Cidade do México"
    },
    "localidade 4": {
    "Continente": "América do Sul",
    "País": "Brasil",
    "Capital": "Brasília"
    },
    "localidade 5": {
    "Continente": "Europa",
    "País": "Espanha",
    "Capital": "Madri"
    },
    "localidade 6": {
    "Continente": "Europa",
    "País": "Alemanha",
    "Capital": "Berlim"
    },
    "localidade 7": {
    "Continente": "Oceania",
    "País": "Austrália",
    "Capital": "Camberra"
    },
    "localidade 8": {
    "Continente": "Ásia",
    "País": "Japão",
    "Capital": "Tóquio"
    }
};

/*Siendo a la variable que almacena el JSON

- Código para obtener el país de la localidade 8
- Código que permite añadir una localidad a tu elección
- Modifica la localidade 4, añadiendo el número de habitantes
- Cambia la estructura del JSON de forma que sea más directo 
  acceder a las capitales de las localidades, 
  dado que va a ser el dato que más vamos a consultar*/

  //Código para obtener el país de la localidade 8
var localidad8Pais = a["localidade 8"]["País"]
var localidad8Pais2 = a["localidade 8"].País
console.log(localidad8Pais);
console.log(localidad8Pais2);


  //Código que permite añadir una localidad a tu elección
console.log(a["localidade 9"]={"Continente": "Europa", "País": "Grecia", "Capital": "Atenas"});
console.log(a["localidade 9"].Capital);

  // Modifica la localidade 4, añadiendo el número de habitantes
//Añade población pero reescribe todo y elimina las otras categorias
console.log(a["localidade 4"]);
console.log(a["localidade 4"]={"Poblacion": "98888888"});

//Añade todo - añado el elemento nuevo en el total... No es útil
console.log(a["localidade 4"]);
console.log(a["localidade 4"]={"Continente": "América do Sul", "País": "Brasil", "Capital": "Brasília","Poblacion": "98888888"});

//LA manera es así
//Con punto
console.log(a["localidade 4"]);
console.log(a["localidade 4"].NumeroDeHabitantes = "5000000");
console.log(a["localidade 4"]);
//Con corchetes
console.log(a["localidade 4"]["NumeroDeHabitantes1"] = "111111111");
console.log(a["localidade 4"]);

/*
- Cambia la estructura del JSON de forma que sea más directo 
  acceder a las capitales de las localidades, 
  dado que va a ser el dato que más vamos a consultar*/
var b =  {
    "Luanda": {
    "Continente": "África",
    "País": "Angola"
    },
    "Washington DC": {
    "Continente": "América do Norte",
    "País": "Estados Unidos"
    },
    "Cidade do México": {
    "Continente": "América Central",
    "País": "México"
    },
    "Brasília": {
    "Continente": "América do Sul",
    "País": "Brasil"
    },
    "Madri": {
    "Continente": "Europa",
    "País": "Espanha"
    },
    "Berlim": {
    "Continente": "Europa",
    "País": "Alemanha"
    },
    "Camberra": {
    "Continente": "Oceania",
    "País": "Austrália"
    },
    "Tóquio": {
    "Continente": "Ásia",
    "País": "Japão"
    }
}; 

//console.log(b["Tóquio"]);

var c =  {
    "Capital": "Luanda",
    "info": {
    "Continente": "África",
    "País": "Angola",

    },
    "Capital": "Washington DC",
    "info": {
    "Continente": "América do Norte",
    "País": "Estados Unidos"
    },
    "Capital": "Cidade do México",
    "info": {
    "Continente": "América Central",
    "País": "México"
    },
    "info": {
    "Continente": "América do Sul",
    "País": "Brasil",
    "Capital": "Brasília"
    },
    "Capital": "Madri",
    "info": {
    "Continente": "Europa",
    "País": "Espanha"
    },
    "Capital": "Berlim",
    "info": {
    "Continente": "Europa",
    "País": "Alemanha"
    
    },
    "Capital": "Camberra",
    "info": {
    "Continente": "Oceania",
    "País": "Austrália"
  
    },
    "Capital": "Tóquio",
    "info": {
    "Continente": "Ásia",
    "País": "Japão"
    }
}; 

let text = '{ "localidade 1" : [' +
'{"Continente": "África"},' +
'{ "País": "Angola" , "Capital": "Luanda" }';


const objeto = JSON.parse(text);
console.log(text + "\n" + objeto);
 