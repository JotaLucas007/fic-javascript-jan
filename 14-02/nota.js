// Variáveis
const inputNota = document.getElementById("nota");
const resultado = document.getElementById("resultado");

function resultadoNotaClick(Event) {
    // previne um comportamento no navegador
    Event.preventDefault();
    console.log(inputNota.value);

    // Condição
    if (inputNota.value >= 6) {
        resultado.innerHTML = "Aprovado";
    } else {
        resultado.innerHTML = "Reprovado";
    }

    inputNota.value = "";

}