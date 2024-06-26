

//faz o logout do usuario para a pagina de login
function logout(){
    firebase.auth().signOut().then(() => {
        window.location.href = '../login/login.html'
    }).catch(()=>{
        alert('erro ao fazer logout')
    })   
}

/*function alternarCoracao() {
    var heartIcon = document.getElementById('heart-icon');
    if (heartIcon == 'fa-sharp fa-regular fa-heart fa-2x') {
        heartIcon == 'fa-sharp fa-solid fa-herat fa-2x';
        //heartIcon.classList.add('fa-solid');
    } else {
        heartIcon.classList.remove('fa-solid');
        heartIcon.classList.add('fa-regular');
    }
}*/


/*document.addEventListener('DOMContentLoaded', () => {
      document.addEventListener('click', (event) => {
        if (event.target.classList.contains('heart-icon')) {
            toggleIcon(event);
        }
    });
});*/

function toggleIcon(element) {
    //var icon = document.getElementById('hearth-icon');
    element.classList.toggle('fa-regular');
    element.classList.toggle('fa-solid');
}
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

function logout(){
    firebase.auth().signOut().then(() => {
        window.location.href = '../login/login.html'
    }).catch(()=>{
        alert('erro ao fazer logout')
    })   
}

// Inicializa a wishlist a partir do localStorage ao carregar a página


// Exemplo de função para adicionar um produto à wishlist
function adicionarProdutoWishlist(number) {
    // Verifica se o produto já está na wishlist
    if (!wishlist.includes(number)) {
        wishlist.push(number);
        // Salva a wishlist atualizada no localStorage
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        console.log(`Produto ${number} adicionado à wishlist:`, wishlist);
    } else {
        console.log(`Produto ${number} já está na wishlist.`);
    }
}

// Exemplo de função para remover um produto da wishlist
function removerProdutoWishlist(number) {
    // Encontra o índice do produto na wishlist
    let index = wishlist.indexOf(number);
    if (index !== -1) {
        wishlist.splice(index, 1);
        // Salva a wishlist atualizada no localStorage
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        console.log(`Produto ${number} removido da wishlist:`, wishlist);
    } else {
        console.log(`Produto ${number} não encontrado na wishlist.`);
    }
}

function toggleIcon(element) {
    // Troca as classes entre 'fa-regular' e 'fa-solid'
    element.classList.toggle('fa-regular');
    element.classList.toggle('fa-solid');

    // Captura o id do elemento pai (div com classe 'hearth')
    var parentId = element.parentElement.id;

    // Extrai o número do id
    var number = parentId.split('-')[1];

    // Verifica se a classe 'fa-solid' está presente após a troca
    if (element.classList.contains('fa-solid')) {
        // Adiciona o número à wishlist
        adicionarProdutoWishlist(number);
    } else {
        // Remove o número da wishlist
        removerProdutoWishlist(number);
    }
}

function setInitialIcons() {
    wishlist.forEach(index => {
        let iconElement = document.querySelector(`#hearth-${index} .fa-heart`);
        if (iconElement) {
            iconElement.classList.remove('fa-regular');
            iconElement.classList.add('fa-solid');
        }
    });
}

