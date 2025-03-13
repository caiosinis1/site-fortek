document.addEventListener("DOMContentLoaded", function () {
    const produtos = {
        estrutural: [
            { nome: "Bloco Estrutural 14x19x39", img: "bloco.png" },
            { nome: "Bloco Estrutural 19x19x39", img: "bloco.png" },
            { nome: "Bloco Estrutural 12x19x39", img: "bloco.png" },
            { nome: "Bloco Estrutural 20x20x40", img: "bloco.png" }
        ],
        vedacao: [
            { nome: "Bloco de Vedação 10x20x40", img: "bloco.png" },
            { nome: "Bloco de Vedação 14x20x40", img: "bloco.png" }
        ],
        especiais: [
            { nome: "Bloco Especial Canaleta", img: "bloco.png" },
            { nome: "Bloco Especial Lintel", img: "bloco.png" }
        ]
    };

    function carregarProdutos(categoria) {
        const container = document.getElementById("product-container");
        container.innerHTML = ""; // Limpa os produtos antes de adicionar novos

        produtos[categoria].forEach(produto => {
            const card = document.createElement("div");
            card.classList.add("product-card");

            card.innerHTML = `
                <img src="${produto.img}" alt="${produto.nome}">
                <h3>${produto.nome}</h3>
                <a href="#" class="btn">Ver Detalhes</a>
            `;

            container.appendChild(card);
        });
    }

    // Inicializa com os produtos estruturais carregados
    carregarProdutos("estrutural");

    // Adiciona evento nos botões para alternar os produtos
    document.querySelectorAll(".tab-btn").forEach(btn => {
        btn.addEventListener("click", function () {
            document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
            this.classList.add("active");
            carregarProdutos(this.getAttribute("data-category"));
        });
    });
});