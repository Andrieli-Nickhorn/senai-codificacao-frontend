const produtos = [
    { nome: "Caneta", preco: 2.5 },
    { nome: "Caderno", preco: 12 },
    { nome: "Mochila", preco: 89.9 }
];

const container = document.getElementById("lista-produtos");
const botao = document.getElementById("renderizar");

function renderizarProdutos(lista) {
    container.innerHTML = "";

    lista.forEach((produto) => {
        const item = document.createElement("li");

        item.textContent = `${produto.nome} - R$ ${produto.preco}`;

        item.addEventListener("click", () => {
            item.classList.toggle("favorito");
        });

        container.appendChild(item);
    });
}

renderizarProdutos(produtos);

botao.addEventListener("click", () => {
    renderizarProdutos(produtos);
});

produtos.push({ nome: "Lápis", preco: 1.5 });