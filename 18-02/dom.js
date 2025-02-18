// Vriável
const nome = document.getElementById("nome");
const cidade = document.getElementById("cidade");
const email = document.getElementsById("email");

const titulo = document.getElementById("titulo");
const subtitulo = document.getElementById("subtitulo");
const txtEmail = document.getElementById("txtEmail");

function mudar(event) {
    event.preventDefault();
    console.log(nome.value);

    // Imprimir na tela
    titulo.innerHTML = nome.value;
    subtitulo.innerHTML = cidade.value;
    txtEmail.innerHTML = email.value;


}