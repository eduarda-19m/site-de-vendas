/* Variáveis de Cores: Preto, Dourado e Branco */
:root {
    --color-black: #0A0A0A; /* Preto quase absoluto */
    --color-white: #FFFFFF;
    --color-gold: #FFD700; /* Ouro vibrante */
    --color-light-gray: #F9F9F9; /* Branco levemente quebrado */
    --color-text-dark: #222;
}

/* Restante do Reset e Estilos Globais... */

/* Banner Principal: IMAGEM CARREGADA AQUI VIA CSS */
.banner {
    /* Usei shopping (4).webp como imagem de fundo do banner */
    background: url('shopping (4).webp') center center/cover no-repeat; 
    height: 75vh;
    display: flex;
    align-items: center;
    position: relative;
    /* Camada escura para realçar o texto dourado */
    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.65); 
}

.banner-content {
    color: var(--color-white);
    max-width: 700px;
    text-align: left;
}

.banner-content h2 {
    font-family: 'Playfair Display', serif;
    font-size: 3.8rem;
    margin-bottom: 10px;
    font-weight: 700;
    color: var(--color-gold);
}

/* O restante do CSS da seção Banner e das outras seções continua igual... */

/* --- Continuação do style.css anterior, apenas a seção .banner mudou --- */

/* Seções Gerais */
section {
    padding: 100px 0;
}

h2 {
    font-family: 'Playfair Display', serif;
    text-align: center;
    font-size: 3rem;
    margin-bottom: 60px;
    color: var(--color-black);
}

h2::after {
    content: '';
    display: block;
    width: 90px;
    height: 4px;
    background-color: var(--color-gold);
    margin: 15px auto 0;
}

/* Grid de Produtos */
.produtos {
    background-color: var(--color-light-gray);
}

.grid-produtos {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
    gap: 40px;
}

.produto-card {
    background-color: var(--color-white);
    padding: 30px;
    border-radius: 6px;
    text-align: center;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s;
}

.produto-card:hover {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.produto-card img {
    width: 100%;
    max-height: 250px;
    object-fit: contain;
    margin-bottom: 25px;
}

.produto-card h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.6rem;
    color: var(--color-black);
    margin-bottom: 10px;
}

.produto-card p:not(.preco) {
    font-size: 0.95rem;
    color: #666;
    margin-bottom: 15px;
}

.produto-card .preco {
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--color-gold);
    margin-bottom: 30px;
}

.btn-comprar {
    background-color: var(--color-black);
    color: var(--color-white);
    border: none;
    padding: 14px 25px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;
    text-transform: uppercase;
    transition: background-color 0.3s, color 0.3s;
    width: 100%;
}

.btn-comprar:hover {
    background-color: var(--color-gold);
    color: var(--color-black);
}

/* Seção Sobre Nós */
.sobre {
    background-color: var(--color-white);
}

.sobre-content {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
}

.sobre-content p {
    margin-bottom: 25px;
    font-size: 1.1rem;
}

/* Rodapé */
footer {
    background-color: var(--color-black);
    color: var(--color-light-gray);
    padding: 50px 0 30px;
}

.footer-content {
    display: flex;