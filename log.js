// script.js

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Get user input
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Perform simple validation
    if (username === "" || password === "") {
        showError("Please fill in both username and password.");
    } else if (username === "user" && password === "password123") {
        // Simple hardcoded check for demonstration purposes
        alert("Login successful!");
        // Redirect or show logged-in content (for demo, we simply alert)
    } else {
        showError("Invalid username or password.");
    }
});

// Function to show error message
function showError(message) {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = message;
    errorMessage.style.display = "block";
}
