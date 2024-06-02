//cria um menu suspenso ao clicar na imagem de perfil

document.getElementById('imgPerfil').addEventListener('click', function() {
    var dropdownMenu = document.getElementById('dropdownMenu');
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

window.onclick = function(event) {
    if (!event.target.matches('.img-perfil')) {
        var dropdownMenu = document.getElementById('dropdownMenu');
        if (dropdownMenu.style.display === 'block') {
            dropdownMenu.style.display = 'none';
        }
    }
};

//faz o logout do usuario para a pagina de login
function logout(){
    firebase.auth().signOut().then(() => {
        window.location.href = '../login/login.html'
    }).catch(()=>{
        alert('erro ao fazer logout')
    })   
}