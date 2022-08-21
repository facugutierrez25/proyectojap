document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form-login").addEventListener('submit', validForm); 
  });

  function validForm(e) {
    e.preventDefault()

    var emailImput = document.getElementById('email').value;
    var passwordImput = document.getElementById('password').value;
    if(emailImput.length == 0 || passwordImput.length == 0) {
      e.preventDefault();
      document.getElementById("email").className = "form-control is-invalid";
      document.getElementById("password").className = "form-control is-invalid";
      document.getElementById("formError").innerHTML =('<br><span>Todos los campos son obligatorios</span><br>');
    } else{
      this.submit();
      window.location.href = 'index.html';
    }
  };