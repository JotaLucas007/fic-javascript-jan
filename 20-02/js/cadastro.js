// Variáveis
const campo = document.querySelector("#campo");
const salvarBtn = document.querySelector("#salvar");

// Adicionar evento de clique ao botão salvar
salvarBtn.addEventListener("click", function() {
    const valor = campo.value;
    
    // Salvar no localStorage
    const chave = `ValorSal_${Date.now}`; // usa timestamp para chve única
    //console.log(chave)
    // Funcionalidade do LocaslStorage
    localStorage.setItem(chave, valor);

    // Limpar campo após salvar
    campo.value = "";
});