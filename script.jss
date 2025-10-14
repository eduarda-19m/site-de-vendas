// Teste básico para garantir que o script está carregado
console.log("Script 'script.js' carregado com sucesso para Bella Bijoux.");

// Exemplo de funcionalidade: Alerta ao clicar no botão "Adicionar ao Carrinho"
document.addEventListener('DOMContentLoaded', () => {
    const botoesCarrinho = document.querySelectorAll('.adicionar-carrinho');

    botoesCarrinho.forEach(botao => {
        botao.addEventListener('click', () => {
            alert('Produto adicionado ao carrinho! (Funcionalidade a ser implementada)');
            // Aqui você adicionaria a lógica real do carrinho de compras.
        });
    });

    // Exemplo de efeito de rolagem suave (scroll)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});