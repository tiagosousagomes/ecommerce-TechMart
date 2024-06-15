

//faz o logout do usuario para a pagina de login
function logout(){
    firebase.auth().signOut().then(() => {
        window.location.href = '../login/login.html'
    }).catch(()=>{
        alert('erro ao fazer logout')
    })   
}