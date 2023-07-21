document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if the username and password are valid
    if (username === "Vivek" && password === "password") {
        // Successful login
        document.getElementById("messages").textContent = "Login successful";
    } else {
        // Failed login
        document.getElementById("message").textContent = "Invalid username or password";
    }
});
