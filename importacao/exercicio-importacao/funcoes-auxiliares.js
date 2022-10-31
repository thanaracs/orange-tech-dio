const entradas =[5,50,10,98,23];
let i = 0;

/* gets e print */

function gets(){
    const valor = entradas[i];
    i++;
    return entradas;
}

function print(texto){
    console.log(texto);
}

module.exports = { gets, print};