
// variavel que guarda os valores do input
const form = {
    email: () => document.getElementById("email"),
    password: () => document.getElementById("password"),
    name: () => document.getElementById("name-register"),
    emailRegister: () => document.getElementById("email-register"),
    passwordRegister: () => document.getElementById("password-register"),
}

 /*autenticação de login,confere no servidor de so usuario está cadastrado,
 se estiver cadastrado ele vai para pagina home, se não, mostra uma mensagem de erro*/
function login(){
    firebase.auth().signInWithEmailAndPassword(form.email().value, form.password().value).then(response => {
        window.location.href = '../home/home.html'
    }).catch(error =>{
        alert('email ou senha incorreto')
    }); 
}

//função de recuperar senha, se o email estiver cadastro, ele envia uma mensagem pelo email, se não, alerta que não encontrou o usuario
async function recoverPassword() {
    try {
        await firebase.auth().sendPasswordResetEmail(form.email().value);
        setTimeout(() => {
          alert('Email enviado com sucesso');
        }, 1500);
  
    } catch (error) {
      setTimeout(() => {
          alert('Usuario não encontrado');
        }, 1500);
    }
  }
  


//faz o usuario ficar logado, sem precisar fazer o login novamente
firebase.auth().onAuthStateChanged(user => {
    if(user){
        window.location.href = '../home/home.html'
    }
})


