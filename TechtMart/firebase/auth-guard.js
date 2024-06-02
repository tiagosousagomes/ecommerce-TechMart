
// se o usuario não estiver logado e tentar acessar a pagina home pela url, faz com que ele volte para a pagina login
firebase.auth().onAuthStateChanged(user =>{
    if (!user){
        window.location.href = '../login/login.html'
    }
})