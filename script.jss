document.addEventListener('DOMContentLoaded', () => {
    // Lista de produtos com os dados e as imagens que você forneceu
    // Nomes de arquivos são case-sensitive (sensíveis a maiúsculas/minúsculas)
    const produtosData = [
        {
            nome: "Anel Flor da Bela",
            imagem: "Anel-Disney-Rosa-de-A-Bela-e-A-Fera-163984C01-v2.png",
            valor: getRandomPrice(300, 400),
            descricao: "Anel de Prata S925 com detalhes em ouro. Toque de realeza."
        },
        {
            nome: "Pulseira Prata e Ouro",
            imagem: "pulseira-pandora-de-prata-e-ouro1-b795376c853b55c59d16513476788592-640-0.webp",
            valor: getRandomPrice(350, 400),
            descricao: "Pulseira clássica dois tons, ideal para colecionar memórias."
        },
        {
            nome: "Colar Coração Cravejado",
            imagem: "368425C01.png",
            valor: getRandomPrice(200, 300),
            descricao: "Pingente de coração vazado com microzircônias. Puro charme."
        },
        {
            nome: "Brinco Argola Fina",
            imagem: "PNGTRPNT_198421C02_V5_RGB.png",
            valor: getRandomPrice(150, 250),
            descricao: "Argolas leves e douradas. O básico que eleva o look."
        },
        {
            nome: "Pingente Estrela",
            imagem: "PNGTRPNT_397436CZ_RGB.png",
            valor: getRandomPrice(100, 200),
            descricao: "Estrela em ouro 18k, símbolo de luz e guia."
        },
        {
            nome: "Conjunto Glamour",
            imagem: "shopping.webp",
            valor: getRandomPrice(300, 400),
            descricao: "Colar e Brinco cravejados. Pronta para brilhar!"
        },
        {
            nome: "Anéis Minimalistas",
            imagem: "shopping (1).webp",
            valor: getRandomPrice(250, 350),
            descricao: "Mix de anéis delicados para usar em conjunto ou separados."
        },
        {
            nome: "Pérolas Clássicas",
            imagem: "shopping (2).webp",
            valor: getRandomPrice(100, 180),
            descricao: "Brincos de pérola atemporal. Elegância garantida."
        },
        {
            nome: "Corrente Camadas",
            imagem: "shopping (3).webp",
            valor: getRandomPrice(180, 280),
            descricao: "Corrente longa em banho de ouro para um visual moderno."
        },
        {
            nome: "Joia de Destaque",
            imagem: "shopping (4).webp",
            valor: getRandomPrice(320, 400),
            descricao: "Peça única e imponente. Para momentos inesquecíveis."
        },
    ];

    const gridProdutos = document.querySelector('.grid-produtos');

    // Função para gerar um preço aleatório (R$ 100,00 a R$ 400,00)
    function getRandomPrice(min, max) {
        const preco = Math.floor(Math.random() * (max - min + 1) + min);
        return (Math.round(preco * 2) / 2).toFixed(2); 
    }

    // Função para criar o card de produto
    function criarCardProduto(produto) {
        const card = document.createElement('div');
        card.classList.add('produto-card');

        card.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>${produto.descricao}</p>
            <p class="preco">R$ ${produto.valor}</p>
            <button class="btn-comprar" data-nome="${produto.nome}" data-valor="${produto.valor}">Comprar Agora</button>
        `;

        gridProdutos.appendChild(card);
    }

    // Popula o grid de produtos
    produtosData.forEach(produto => {
        criarCardProduto(produto);
    });

    // Lógica básica para o botão 'Comprar' (simulação de carrinho)
    gridProdutos.addEventListener('click', (event) => {
        if (event.target.classList.contains('btn-comprar')) {
            const nome = event.target.getAttribute('data-nome');
            const valor = event.target.getAttribute('data-valor');
            
            // Alerta de simulação
            alert(`✅ ${nome} (R$ ${valor}) foi adicionado ao seu carrinho!`);
        }
    });
});