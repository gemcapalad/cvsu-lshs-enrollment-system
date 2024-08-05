document.addEventListener("DOMContentLoaded", function() {
    formValidation();
})

function loginError() {
    document.getElementById("username").style.borderColor = '#ff3131'
    document.getElementById("password").style.borderColor = '#ff3131'
    document.getElementById("invalid").style.visibility = 'visible';
    document.getElementById("invalid").style.color = '#ff3131';
    document.getElementById("username").blur();
    document.getElementById("password").blur();
}

function formValidation() {
    const form = document.getElementById("login-form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;


        if (username == "iamgmac" && password == "Taurus5723"){
            alert("Login successful!")
            location.reload();
        } else {
            loginError();
        }
    });
}
