/*
    1 - Crie um programa que dado um número imprima sua tabuada.
*/

const tabuada = [1,2,3,4,5,6,7,8,9,10];
const numero_informado = 5;
var resultado_tabuada = 0;

for (let i= 0; i < tabuada.length; i++){
    resultado_tabuada = tabuada[i] * numero_informado;
    console.log(resultado_tabuada);
}