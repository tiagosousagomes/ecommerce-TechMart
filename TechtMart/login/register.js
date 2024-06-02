
// registra um usuario, se não houver conta cadastra com o email, ele registra, se não, alerta uma mensagem de email ja registrado
function register(){

    const email= form.emailRegister().value;
    const password = form.passwordRegister().value;
    firebase.auth().createUserWithEmailAndPassword(email,password).then(()=>{
        alert('email registrado com sucesso"')
        window.location.href = '../home/home.html'}).catch(error =>{
            alert('email já registrado')
        })

    }
