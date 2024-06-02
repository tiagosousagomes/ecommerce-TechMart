// variavel que guarda os valores do input
const form = {
    email: () => document.getElementById("email"),
    password: () => document.getElementById("password")
}

 /*autenticação de login,confere no servidor de so usuario está cadastrado,
 se estiver cadastrado ele vai para pagina home, se não, mostra uma mensagem de erro*/
function login(){
   
    firebase.auth().signInWithEmailAndPassword(form.email().value, form.password().value).then(response => {
        window.location.href = '../home/home.html'
    }).catch(error =>{
        console.log('error', error)
    }); 
}


