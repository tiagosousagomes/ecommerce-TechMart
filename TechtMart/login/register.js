
// registra um usuario, se não houver conta cadastra com o email, ele registra, se não, alerta uma mensagem de email ja registrado
function register(){

    const email = form.emailRegister().value;
    const password = form.passwordRegister().value;
    firebase.auth().createUserWithEmailAndPassword(email,password).then(()=>{
        alert('email registrado com sucesso"')
        window.location.href = '../home/home.html'}).catch(error =>{
            alert(handleAuthError(error));
        })
    }
    function handleAuthError(error) {

        if(error.code == "auth/weak-password"){
            return "Senha deve ter no minimo 6 caracteres."
        }else if(error.code == "auth/invalid-email"){
            return "E-mail inválido."
        }else if(error.code == "auth/email-already-in-use"){
            return "E-mail já cadastrado."
        }
        return error.message;
    }