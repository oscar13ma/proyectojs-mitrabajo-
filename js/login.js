function inicioSesion() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password1").value;
  
    fetch("./json/user.json")
      .then((response) => response.json())
      .then((users) => {
        const usuarioLogueado = users.find(
          (user) => user.username === username && user.password === password
        );
        console.log(usuarioLogueado, "user");
  
        if (usuarioLogueado) {
          localStorage.setItem("user", username);
          
          
  
          setTimeout(function () {
            window.location.href = "./restabecerContraseña.html";
          }, 300);
        } else {
          swal({
            title: "Error",
            text: "Los datos son incorrectos.",
            icon: "error",
            button: "OK",
          });
        }
      });
  }