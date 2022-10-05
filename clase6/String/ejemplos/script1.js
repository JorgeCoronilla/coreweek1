const string1 = "Una cadena primitiva";
    console.log(string1);
    const string2 = 'También una cadena primitiva';
    console.log(string2);
    const string3 = `Otra cadena primitiva más con un ${"template"}`;
    console.log(string3);
    const string4 = new String("Un objeto String");
    console.log(string4);//String {'Un objeto String'}

    console.log(string4.valueOf);//ƒ valueOf() { [native code] }
    console.log(string4["valueOf"]);//ƒ valueOf() { [native code] }
  //Tres formas de hacer lo mismo
    const nombreF = "valueOf";
    console.log(string4[nombreF]);//ƒ valueOf() { [native code] }
  
  
    console.log(string4.valueOf()); //Un objeto String
    console.log(typeof(string1));//string
    console.log(typeof(string4));//object
    console.log(typeof(string4[nombreF])); //function





    
   