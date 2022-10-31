/*
    1 - Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por Km rodado.
    Crie um método que dado a quantidade de km e o preço do combustível, nos dê o valor gasto
    em reais para realizar este percurso.
*/

class Carro{
    marca;
    cor;
    gasto_combustivel_por_km;

    
    constructor(marca, cor, gasto_combustivel_por_km){
        this.marca = marca;
        this.cor = cor;
        this.gasto_combustivel_por_km = gasto_combustivel_por_km;
    }

    valorGastoPercurso(distancia_km, valor_combustivel){
        return distancia_km * this.gasto_combustivel_por_km * valor_combustivel;
    }

  
}

const uno = new Carro('Fiat', 'Branco', 1/12);
console.log(uno.valorGastoPercurso(70,4.90));
const civic = new Carro('Honda', 'Preto', 1/7.5);
console.log(civic.valorGastoPercurso(73,4.90))




