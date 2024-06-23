let wishlist = JSON.parse(localStorage.getItem('wishlist'));

let produtos = [
    {nome: 'Iphone 15 Pro Max', imagem: '../assets/iphone-15-pro-maxx.jpeg', valor: 9500.00},
    {nome: 'Notebook Gamer Dell G15-i1300', imagem: '../assets/notebook-g15.jpeg', valor: 4500.00},
    {nome: 'Suporte para notebook portátil', imagem: '../assets/suporte-notebook.jpg', valor: 100.00},
    {nome: 'Headset Gamer Sem Fio Logitech G435 LIGHTSPEED', imagem: '../assets/fone-de-ouvido.jpg', valor: 435.00}
]

let produtosFavoritos = wishlist.map(index => produtos[index]);

console.log(produtosFavoritos);

function criarCardsProdutos() {
    let listaProdutos = document.getElementById('listaProdutos');

    // Filtra os produtos que estão na wishlist
    
    produtosFavoritos.forEach(produto => {
        // Cria um container principal para o pedido
        let pedidoContainer = document.createElement('div');
        pedidoContainer.classList.add('pedido-container');

        // Cria a seção da imagem do produto
        let imageProduct = document.createElement('div');
        imageProduct.classList.add('image-product-1');

        let imagem = document.createElement('img');
        imagem.src = produto.imagem;
        imagem.alt = `Imagem de ${produto.nome}`;

        imageProduct.appendChild(imagem);

        // Cria a seção do título do pedido
        let pedidoTitulo = document.createElement('div');
        pedidoTitulo.classList.add('pedido-titulo');

        let titulo = document.createElement('h4');
        titulo.textContent = produto.nome;

        //let entrega = document.createElement('p');
        //entrega.textContent = 'Entregue em: 15 de Junho de 2024'; // Você pode alterar a data conforme necessário

        //let comprarNovamente = document.createElement('button');
        //comprarNovamente.classList.add('button-buy-again');
        //comprarNovamente.textContent = 'Comprar novamente';

        let verItem = document.createElement('button');
        verItem.classList.add('button-see-item');
        verItem.textContent = 'Ver item';

        pedidoTitulo.appendChild(titulo);
        //pedidoTitulo.appendChild(entrega);
        //pedidoTitulo.appendChild(comprarNovamente);
        pedidoTitulo.appendChild(verItem);

        // Cria a seção dos botões de ação
        let listButton = document.createElement('div');
        listButton.classList.add('list-button');

        let ul = document.createElement('ul');

        let botoesAcao = ['Adicionar ao carrinho'];
        botoesAcao.forEach(textoBotao => {
            let li = document.createElement('li');
            let botao = document.createElement('button');
            botao.classList.add('button-action');
            botao.textContent = textoBotao;
            li.appendChild(botao);
            ul.appendChild(li);
        });

        listButton.appendChild(ul);

        // Adiciona todos os elementos ao container principal
        pedidoContainer.appendChild(imageProduct);
        pedidoContainer.appendChild(pedidoTitulo);
        pedidoContainer.appendChild(listButton);

        // Adiciona o container do pedido à lista de produtos na página
        listaProdutos.appendChild(pedidoContainer);
    });
}

// Chama a função para criar os cards quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    criarCardsProdutos();
});