// Aguarda o HTML carregar completamente antes de rodar o script
document.addEventListener("DOMContentLoaded", function() {
    
    // Captura os elementos do formulário e da área de resultado
    const form = document.getElementById("vagaForm");
    const resultadoDiv = document.getElementById("resultado");

    form.addEventListener("submit", function(event) {
        // Evita que a página recarregue ao enviar o formulário
        event.preventDefault();

        // Pega os valores digitados e os converte para os tipos corretos (números)
        const nome = document.getElementById("nome").value.trim();
        const idade = parseInt(document.getElementById("idade").value);
        const altura = parseFloat(document.getElementById("altura").value);

        // Limpa classes anteriores da div de resultado
        resultadoDiv.className = "resultado-box"; 

        // Critério: Altura >= 1.70 E Idade >= 18
        if (altura >= 1.70 && idade >= 18) {
            resultadoDiv.innerHTML = `Parabéns, ${nome}! Você pode prosseguir no processo para a vaga!`;
            resultadoDiv.classList.add("resultado-sucesso");
        } else {
            resultadoDiv.innerHTML = `Infelizmente, ${nome}, você não é apto à vaga.`;
            resultadoDiv.classList.add("resultado-erro");
        }

        // Mostra o resultado na tela (removendo a classe que o escondia)
        resultadoDiv.classList.remove("hidden");
    });
});