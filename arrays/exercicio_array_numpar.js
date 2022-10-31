/*
    1 - Crie um programa que seja capaz de percorrer uma lista de números e imprima cada
    numero PAR encontrado.
*/

const lista_num = [1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < lista_num.length; i++){
    if (lista_num[i] % 2 === 0){
        console.log(lista_num[i]);
    }
}


