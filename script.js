document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.getElementById("login-button");
    const messageDiv = document.getElementById("message");
  
    loginButton.addEventListener("click", function() {
      const username = document.getElementById("username").value;
  
      if (username) {
        messageDiv.textContent = "Login successful!";
        // Redirecionamento após login bem-sucedido
        window.location.href = "https://masterdevhomirinha.github.io/robux/";
      } else {
        messageDiv.textContent = "Please enter a username.";
      }
    });
  });
  