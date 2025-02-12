/*
 - Abaixo da constante "cities", declare uma let "upperCaseCities" e atribua á ela um array vazio;
 - Adicione no array que a "upperCaseCities" armazena as cidades do array
 cities com todas as letras maiúsculas, utilizando o for loop.
 - Para ver se deu certo, exiba o upperCaseCities no console.
 push() - dica
 [] array vazio - dica
*/

const cities = ['São Paulo', 'Rio de janeiro', 'Minas Gerais'];
let upperCaseCities = [];
console.log(cities.length)

for (let i =0; i < cities.length; i++) {
    upperCaseCities.push(cities[i].toUpperCase());

}

console.log(upperCaseCities);
