let array = ["Xbox","Nintendo"];

function usarPush(){
    let entrada = prompt("Agregar una consola de juego: ");
    array.push(entrada);
    alert("El nuevo arreglo es: " + array.join(" "));
}

function usarPop(){
    let basurero = array.pop();
    aler(`Elemento eliminado: ${basurero}`);
}

function usarUnshift(){
    let entrada = prompt("Agregar una consola de juego: ");
    array.unshift(entrada);
    alert("El nuevo arreglo es: " + array.join(" "));
}

function usarShift(){
    let basurero = array.shift();
    aler(`Elemento eliminado: ${basurero}`);
}



