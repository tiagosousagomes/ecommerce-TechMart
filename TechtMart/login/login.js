
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
  const email = form.email().value;

  try {
    const user = await firebase.auth().fetchSignInMethodsForEmail(email);

    if (user.length === 0) {
      alert('Usuário não encontrado.');
      return;
    }

    // Verifica se o email está verificado
    const userData = await firebase.auth().getUserByEmail(email);
    if (!userData.emailVerified) {
      alert('Este e-mail ainda não foi verificado. Por favor, verifique sua caixa de entrada para o link de verificação.');
      return;
    }

    // Se o email estiver verificado, envia o email de recuperação de senha
    await firebase.auth().sendPasswordResetEmail(email);
    alert('Email de recuperação de senha enviado.');
  } catch (error) {
    console.error(error);
    alert('Falha ao enviar email de recuperação.');
  }
}


//faz o usuario ficar logado, sem precisar fazer o login novamente
firebase.auth().onAuthStateChanged(user => {
    if(user){
        window.location.href = '../home/home.html'
    }
})


