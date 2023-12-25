 const $submit = document.getElementById("submit") 
 $email = document.getElementById("email2")
 $contraseña = document.getElementById("password")
 $adress = document.getElementById("adress")
 $codigoPostal = document.getElementById("codPos")
 $contraseña2 = document.getElementById("password2")
 $telefono = document.getElementById("phone")
 $form = document.getElementById("form")

// const parrafo = document.getElementById("warnings2")

function validateInputs() {
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3,3})+$/
  



    if ($email.value === ""){
        swal({
            text: "Faltan completar datos",
          });
          return
        }
        if (!regexEmail.test($email.value)){
          swal({
              text: "El email no es valido",
            });
            return
          
      }
    if ($adress.value === ""){
        swal({
            text: "Faltan completar datos",
          });
          return
    }
    if ($telefono.value === ""){
        swal({
            text: "Faltan completar datos",
          });
          return
        } 
    if ($codigoPostal.value === ""){
        swal({
            text: "Faltan completar datos",
          });
          return
        } 
    if ($contraseña.value === ""){
        swal({
            text: "Faltan completar datos",
          });
          return
        
    }  
    if($contraseña.value.length < 6){
      swal({
        text: "La contraseña debe tener al menos 6 caracteres",
      });
      return
    }
   
    if ($contraseña2.value === ""){
        swal({
            text: "Faltan completar datos",
          });
          return
        
    } if ($contraseña2.value != $contraseña.value ){
      swal({
          text: "La contraseña no coincide",
        });
        return
      
  } else {
        setTimeout(function () {
        swal({
            title: "Cuenta creada",
            
          });
        });
        setTimeout(function () {
            window.location.href = "./login.html";
          }, 2000); 

 }
  }








form.addEventListener('click', event => {
    if (event.target === $submit) {
        event.preventDefault();
        validateInputs();

      
       
    }
    
}); 