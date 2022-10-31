/* 
    Uma sala contém 5 alunos e para cada aluno foi sorteado um número de 1 - 100.
    Faça um programa que receba os 5 números sorteados para os alunos e mnostre o maior número sorteado.

    Dados de entrada:
    5
    50
    10
    98
    23

    saída:
    98

*/
const {gets, print} = require('./funcoes-auxiliares');

const numeros_sorteados =gets();
var num = 0;

for (let i = 0; i < numeros_sorteados.length; i++){
    if(num < numeros_sorteados[i]){
        num = numeros_sorteados[i];
    }
}

console.log(num)