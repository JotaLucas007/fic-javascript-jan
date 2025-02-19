// Vriável
const nome = document.getElementById("nome");
const cidade = document.getElementById("cidade");
const email = document.getElementsById("Email");

const titulo = document.getElementById("titulo");
const subtitulo = document.getElementById("subtitulo");
const txtEmail = document.getElementById("txtEmail");

function mudar(event) {
    event.preventDefault();

    // Validação de formulario
    if (nome.value === "" || cidade.value === "" || email.value === "") {
        alert("Preencha o campo!");
        return false;
    }

    // Imprimir na tela
    titulo.innerHTML = nome.value;
    subtitulo.innerHTML = cidade.value;
    txtEmail.innerHTML = email.value;

    // Limpar campos
    nome.value = "";
    cidade.value = "";
    email.value = "";


}

// Outra função 
function mudarCor() {
    if (document.body.style.backgroundColor === "blue") {
        document.body.style.backgroundColor = "";
    } else {
        document.body.style.backgroundColor = "blue";
    }

}   