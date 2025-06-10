function mayoriaEdad(){
    let edad = parseInt(prompt("Ingrese Edad: "));
    if(edad >= 18){
        document.getElementsById("resultado").innerHTML =
        <P>Es mayor de Edad: ${edad}</P>;
    }else if(edad <= 17 && edad >= 0){
        document.getElementById("resultado").innerHTML =
        <P>Es menor de Edad: ${edad}</P>;
    }else{
        document.getElementById("resultado").innerHTML =
        <P>El valor <strong>${edad}</strong> es invalido</P>;
    }
}

