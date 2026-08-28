// ================================================================
// AULA: CATÁLOGO DE PRODUTOS
// Objetos, Arrays, JSON, Destructuring, Spread, forEach e filter
// ================================================================


// ================================================================
// 1. OBJETOS JS E ARRAYS DE OBJETOS
// ================================================================

// Criamos um array contendo objetos.
// Cada objeto representa um produto.

const catalogoOriginal = [

    {
        id: 1,
        nome: "Notebook Dell",
        preco: 4500.00,
        categoria: "Eletrônicos",
        imagem: "notebook.jpg",
        emEstoque: true
    },

    {
        id: 2,
        nome: "Mouse Sem Fio",
        preco: 120.00,
        categoria: "Acessórios",
        imagem: "mouse.jpg",
        emEstoque: true
    },

    {
        id: 3,
        nome: "Teclado Mecânico",
        preco: 350.00,
        categoria: "Acessórios",
        imagem: "teclado.jpg",
        emEstoque: false
    },

    {
        id: 4,
        nome: "Monitor 24 Pol",
        preco: 850.00,
        categoria: "Eletrônicos",
        imagem: "monitor.jpg",
        emEstoque: true
    },

    {
        id: 5,
        nome: "Cadeira Gamer",
        preco: 1200.00,
        categoria: "Móveis",
        imagem: "cadeira.jpg",
        emEstoque: true
    }

];

console.log("--- CATÁLOGO ORIGINAL ---");
console.log(catalogoOriginal);


// ================================================================
// 2. DESTRUCTURING
// ================================================================

// Pegando o primeiro produto do array.

const primeiroProduto = catalogoOriginal[0];

// Extraindo apenas o nome e o preço.

const { nome, preco } = primeiroProduto;

console.log("\n--- DESTRUCTURING ---");

console.log(`Produto em destaque: ${nome} - R$ ${preco}`);


// ================================================================
// 3. DIFERENÇA ENTRE "=" E SPREAD
// ================================================================

console.log("\n--- COPIANDO OBJETOS: '=' VS SPREAD ---");


// ❌ JEITO ERRADO

// Usar "=" não cria uma cópia.
// Cria apenas uma referência ao mesmo objeto.

const produtoCopiaErrada = catalogoOriginal[1];

produtoCopiaErrada.preco = 999.99;

console.log(
    "Preço original alterado pelo jeito errado:",
    catalogoOriginal[1].preco
);


// Vamos voltar o preço original para continuar a atividade.

catalogoOriginal[1].preco = 120.00;


// ✅ JEITO CERTO

// Usando spread criamos uma nova cópia do objeto.

const produtoCopiaCerta = {
    ...catalogoOriginal[1]
};

produtoCopiaCerta.preco = 50.00;

console.log(
    "Preço na cópia certa:",
    produtoCopiaCerta.preco
);

console.log(
    "Preço no original continua intacto:",
    catalogoOriginal[1].preco
);


// ================================================================
// 4. SPREAD OPERATOR EM ARRAYS
// ================================================================

console.log("\n--- NOVO CATÁLOGO COM SPREAD ---");


// Criando um novo produto.

const novoProduto = {

    id: 6,
    nome: "Mesa de Escritório",
    preco: 800.00,
    categoria: "Móveis",
    imagem: "mesa.jpg",
    emEstoque: true

};


// Criando um novo array usando spread.

const catalogoAtualizado = [
    ...catalogoOriginal,
    novoProduto
];


console.log(
    `Catálogo Original tem ${catalogoOriginal.length} produtos.`
);

console.log(
    `Catálogo Atualizado tem ${catalogoAtualizado.length} produtos.`
);


// ================================================================
// 5. JSON
// ================================================================

console.log("\n--- JSON STRINGIFY E PARSE ---");


// JSON.stringify()
// Converte o array de objetos JavaScript para texto JSON.

const jsonTexto = JSON.stringify(catalogoAtualizado);

console.log("Formato Texto (JSON):");

console.log(jsonTexto);


// JSON.parse()
// Converte o texto JSON novamente para JavaScript.

const dadosConvertidos = JSON.parse(jsonTexto);

console.log("\nDe volta para JavaScript (Array):");

console.log(
    `Temos ${dadosConvertidos.length} produtos recebidos do JSON.`
);


// ================================================================
// 6. FUNÇÃO PARA LISTAR PRODUTOS
// ================================================================

// A função recebe uma lista de produtos.

function listarProdutos(listaDeProdutos) {

    console.log("\n--- LISTA DE PRODUTOS ---");


    // forEach percorre cada produto da lista.

    listaDeProdutos.forEach((produto) => {


        // Destructuring novamente.

        const {
            id,
            nome,
            preco,
            emEstoque
        } = produto;


        // Operador ternário para verificar o estoque.

        const status = emEstoque
            ? "✅ Disponível"
            : "❌ Indisponível";


        // Exibindo o produto.

        console.log(
            `[ID: ${id}] ${nome} - R$ ${preco.toFixed(2)} - ${status}`
        );

    });

}


// ================================================================
// 7. FUNÇÃO PARA FILTRAR POR CATEGORIA
// ================================================================

function filtrarPorCategoria(
    listaDeProdutos,
    categoriaDesejada
) {

    // filter cria um NOVO array
    // apenas com os produtos que atendem à condição.

    return listaDeProdutos.filter((produto) => {

        return produto.categoria === categoriaDesejada;

    });

}


// ================================================================
// 8. EXECUTANDO AS FUNÇÕES
// ================================================================


// Listando todos os produtos.

listarProdutos(catalogoAtualizado);


// ================================================================
// 9. FILTRANDO ELETRÔNICOS
// ================================================================

const apenasEletronicos = filtrarPorCategoria(
    catalogoAtualizado,
    "Eletrônicos"
);


console.log("\n--- FILTRO APLICADO: ELETRÔNICOS ---");

listarProdutos(apenasEletronicos);


// ================================================================
// 10. FILTRANDO ACESSÓRIOS
// ================================================================

const apenasAcessorios = filtrarPorCategoria(
    catalogoAtualizado,
    "Acessórios"
);


console.log("\n--- FILTRO APLICADO: ACESSÓRIOS ---");

listarProdutos(apenasAcessorios);


// ================================================================
// 11. FILTRANDO MÓVEIS
// ================================================================

const apenasMoveis = filtrarPorCategoria(
    catalogoAtualizado,
    "Móveis"
);


console.log("\n--- FILTRO APLICADO: MÓVEIS ---");

listarProdutos(apenasMoveis);


// ================================================================
// RESUMO DOS CONCEITOS
// ================================================================
//
// 1. OBJETO
//    Agrupa informações relacionadas.
//
// 2. ARRAY
//    Guarda vários valores ou objetos.
//
// 3. DESTRUCTURING
//    Extrai propriedades de um objeto.
//
// 4. SPREAD (...)
//    Cria cópias ou combina arrays e objetos.
//
// 5. JSON.stringify()
//    Converte JavaScript para texto JSON.
//
// 6. JSON.parse()
//    Converte JSON para JavaScript.
//
// 7. forEach()
//    Percorre todos os itens de um array.
//
// 8. filter()
//    Cria um novo array com os itens que atendem
//    a uma determinada condição.
//
// ================================================================