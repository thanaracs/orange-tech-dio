const alunos = ['Thainara', 'Stephano', 'Jorge'];
console.log(alunos);

/*
    adicionar: alunos.push('pipipi') ou alunos[3] = 'Luara'
    pegar ultimo valor: alunos.pop()
    pegar primeiro valor: alunos.shift()
*/

const notas = [];
var soma = 0;
var cont = 0;

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(8);

for (var i = 0; i < notas.length; i++ ){
    
    soma += notas[i];
    cont += 1;
}
console.log(soma);
console.log('média do aluno: ' + soma/cont)