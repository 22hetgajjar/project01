function toggleForm() {
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");
  const formTitle = document.getElementById("form-title");
  const toggleButton = document.getElementById("toggle-button");

  if (loginForm.style.display === "none") {
    loginForm.style.display = "block";
    signupForm.style.display = "none";
    formTitle.innerText = "Login";
    toggleButton.innerText = "Sign up";
  } else {
    loginForm.style.display = "none";
    signupForm.style.display = "block";
    formTitle.innerText = "Sign up";
    toggleButton.innerText = "Login";
  }
}

function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    // Here, you would validate the email and password against a database or other data source
    // For simplicity, we'll just hard-code a valid email and password
    if (email === "user@example.com" && password === "password123") {
      // Clear the input fields
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
  
      // Redirect the user to the new page
      window.location.href = "np-02.html";
    } else {
      document.getElementById("error-message").textContent =
        "Invalid email or password. Please try again.";
    }
  }
  
