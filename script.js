function register() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "" || password === "") {

        alert("Please enter your username/email and password.");

    } else {

        alert("Registration successful! Welcome, " + username + "!");
    }
}