//Obtém os elemento do DOM
const valor1 = document.getElementById("valor1");
const valor2 = document.getElementById("valor2");

// Variável resultado
const resultado = document.getElementById("resultado");

// Função para fazer a soma
function somar (event) {
    event.preventDefault();
    
    let resultadoSoma = Number(valor1.value) + Number(valor2.value);
    document.getElementById("resultado").innerHTML = resultadoSoma

}

// Função para sub
function sub (event) {
    event.preventDefault();

    let resultadoSub = Number(valor1.value) - Number(valor2.value);
    resultado.innerHTML = resultadoSub;
}
 
// Função mult
// Função div

function mult (event) {
    event.preventDefault();

    let resultadomult = Number(valor1.value) * Number(valor2.value);
    resultado.innerHTML = resultadomult
}

function div (event) {
    event.preventDefault();

    let resultadodiv = Number(valor1.value) / Number(valor2.value);
    resultado.innerHTML = resultadodiv
}