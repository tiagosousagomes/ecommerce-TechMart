let wishlist = JSON.parse(localStorage.getItem('wishlist'));

let produtos = [
    {nome: 'iphone', valor: 9500.00},
    {nome: 'notebook', valor: 4500.00},
    {nome: 'suporte', valor: 100.00},
    {nome: 'fone', valor: 435.00}
]

let produtosFavoritos = wishlist.map(index => produtos[index]);

console.log(produtosFavoritos);

function criarCardsProdutos() {
    let listaProdutos = document.getElementById('listaProdutos');

    // Filtra os produtos que estão na wishlist
    
    produtosFavoritos.forEach(produto => {
        // Cria um elemento div para o card
        let card = document.createElement('div');
        card.classList.add('card');

        // Cria um elemento h3 para o nome do produto
        let nomeProduto = document.createElement('h3');
        nomeProduto.textContent = produto.nome;

        // Cria um elemento p para o valor do produto
        let valorProduto = document.createElement('p');
        valorProduto.textContent = `R$ ${produto.valor.toFixed(2)}`;

        // Adiciona os elementos ao card
        card.appendChild(nomeProduto);
        card.appendChild(valorProduto);

        // Adiciona o card à lista de produtos
        listaProdutos.appendChild(card);
    });
}

// Chama a função para criar os cards quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    criarCardsProdutos();
});