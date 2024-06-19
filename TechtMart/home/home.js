

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

function toggleIcon() {
    var icon = document.getElementById('hearth-icon');
    icon.classList.toggle('fa-regular');
    icon.classList.toggle('fa-solid');
}
