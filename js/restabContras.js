const email = document.getElementById("email")
// const contraseña = document.getElementById("exampleInputPassword1")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener('submit', event => {
    event.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3,3})+$/
    

    parrafo.innerHTML = " "

   
    
    if(!regexEmail.test(email.value)){
warnings += ` El Email no es valido `
entrar = true
    }
// if(contraseña.value.length < 6) {
//     warnings += `La contraseña  no es valida <br>`
//     entrar = true
// }




if(entrar) {
    parrafo.innerHTML = warnings
}else {
    parrafo.innerHTML = ' Enviado'
    setTimeout(function () {
        window.location.href = "./login.html";
      }, 3000);
}

console.log(regexEmail.test(email.value))
// console.log(contraseña.value.lenght < 5)
})