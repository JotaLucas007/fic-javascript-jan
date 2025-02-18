// Variáveis
const inputNota = document.getElementById("nota");
const resultado = document.getElementById("resultado");
const message = document.getElementById("message")

function resultadoNotaClick(Event) {
    // previne um comportamento no navegador
    Event.preventDefault();
    console.log(inputNota.value);

    // Validaçãode formulário
    if (inputNota.value === "") {
        message.style.display = "block";
        return false;
    }

    message.style.display = "none";

    // Condição
    if (inputNota.value >= 6) {
        resultado.innerHTML = "Aprovado";
    } else {
        resultado.innerHTML = "Reprovado";
    }

    inputNota.value = "";

}