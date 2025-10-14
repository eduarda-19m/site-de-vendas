/// Teste básico para garantir que o script está carregado
console.log("Script 'script.js' carregado com sucesso para Bella Bijoux.");

document.addEventListener('DOMContentLoaded', () => {
    // 1. Alerta ao clicar no botão "Comprar"
    const botoesCarrinho = document.querySelectorAll('.adicionar-carrinho');

    botoesCarrinho.forEach(botao => {
        botao.addEventListener('click', () => {
            alert('Produto adicionado ao carrinho! (Funcionalidade a ser implementada em um próximo passo)');
        });
    });

    // 2. Efeito de rolagem suave (scroll)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});