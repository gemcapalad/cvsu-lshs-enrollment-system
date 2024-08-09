<<<<<<< HEAD
let finalPassword = "572003";

document.addEventListener("DOMContentLoaded", function() {
    formValidation();
    reinput();
})

function loginError() {
    document.getElementById("username").style.borderColor = '#ff3131';
    document.getElementById("password").style.borderColor = '#ff3131';
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
        const email = document.getElementById("email").value;
        const ok = document.getElementById("ok-button");


        if (email) {
            finalPassword = email;
            resetComplete();
        } else if (ok.style.display == 'block') {
            enterButton();
        } else if (username == "202202371" && password == finalPassword){
            alert("Login successful!");
            location.reload();
        } else {
            loginError();
        }
    });
}

function enterButton() {
    document.addEventListener("keypress", function(event) {
        if (event.key == "Enter") {
            reload();
        }
    });
}

function reinput() {
    const usernameTextBox = document.getElementById("username");
    const passwordTextBox = document.getElementById("password");

    usernameTextBox.addEventListener('focus', undoError);
    passwordTextBox.addEventListener('focus', undoError);

    }

function undoError() {
    var element = document.getElementById('invalid');
    var basis = window.getComputedStyle(element).getPropertyValue("visibility");
    if (basis == "visible") {
        document.getElementById("username").style.borderColor = '#000000';
        document.getElementById("password").style.borderColor = '#000000';
        document.getElementById("username").style.borderWidth = 'thin';
        document.getElementById("password").style.borderWidth = 'thin';
        document.getElementById("invalid").style.visibility = 'hidden';
    }
}

function forgotPassword() {
    const button = document.getElementsByClassName("the-button");
    const loginTitle = document.getElementById("login-title");
    const description = document.getElementById("description");
    const inputBox = document.getElementsByClassName("input-box");
    const emailBox = document.getElementById("email-box");

    loginTitle.innerHTML = '<h1>Password Reset</h1>';
    description.innerHTML = '<p id="with-space">Please enter your email address to reset your password.</p>'
    inputBox[0].style["display"] = 'none';
    inputBox[1].style["visibility"] = 'hidden';
    emailBox.style.display = 'block'
    document.getElementById("invalid").style.visibility = 'hidden'
    document.getElementById("forgot-button").style.visibility = 'hidden';
    button[0].style["display"] = 'none';
    document.getElementById("submit-button").style.display = 'block';

    formValidation();
}

function resetComplete() {
    const form = document.getElementById("login-form");
    const description = document.getElementById("description");
    const button = document.getElementById("ok-button");

    description.innerHTML = '<p id="with-space">Your password reset email has been sent. Please check your email.</p>'
    document.getElementById("email-box").style.visibility = 'hidden';
    document.getElementById("invalid").style.visibility = 'hidden'
    document.getElementById("submit-button").style.display = 'none';
    button.style.display = 'block';
    form.addEventListener("click", reload);
    enterButton();
}

function reload() {
    alert("Returning to login screen...")
    location.reload();
}
=======
let finalPassword = "572003";

document.addEventListener("DOMContentLoaded", function() {
    formValidation();
    reinput();
})

function loginError() {
    document.getElementById("username").style.borderColor = '#ff3131';
    document.getElementById("password").style.borderColor = '#ff3131';
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
        const email = document.getElementById("email").value;
        const ok = document.getElementById("ok-button");


        if (email) {
            finalPassword = email;
            resetComplete();
        } else if (ok.style.display == 'block') {
            alert("Returning to login page...");
            location.reload();
        } else if (username == "202202371" && password == finalPassword){
            alert("Login successful!");
            location.reload();
        } else {
            loginError();
        }
    });
}

function reinput() {
    const usernameTextBox = document.getElementById("username");
    const passwordTextBox = document.getElementById("password");

    usernameTextBox.addEventListener('focus', undoError);
    passwordTextBox.addEventListener('focus', undoError);

    }

function undoError() {
    var element = document.getElementById('invalid');
    var basis = window.getComputedStyle(element).getPropertyValue("visibility");
    if (basis == "visible") {
        document.getElementById("username").style.borderColor = '#000000';
        document.getElementById("password").style.borderColor = '#000000';
        document.getElementById("username").style.borderWidth = 'thin';
        document.getElementById("password").style.borderWidth = 'thin';
        document.getElementById("invalid").style.visibility = 'hidden';
    }
}

function forgotPassword() {
    const button = document.getElementsByClassName("the-button");
    const loginTitle = document.getElementById("login-title");
    const description = document.getElementById("description");
    const inputBox = document.getElementsByClassName("input-box");
    const emailBox = document.getElementById("email-box");

    loginTitle.innerHTML = '<h1>Password Reset</h1>';
    description.innerHTML = '<p id="with-space">Please enter your email address to reset your password.</p>'
    inputBox[0].style["display"] = 'none';
    inputBox[1].style["visibility"] = 'hidden';
    emailBox.style.display = 'block'
    document.getElementById("invalid").style.visibility = 'hidden'
    document.getElementById("forgot-button").style.visibility = 'hidden';
    button[0].style["display"] = 'none';
    document.getElementById("submit-button").style.display = 'block';

    formValidation();
}

function resetComplete() {
    const form = document.getElementById("login-form");
    const description = document.getElementById("description");
    const button = document.getElementById("ok-button");

    description.innerHTML = '<p id="with-space">Your password reset email has been sent. Please check your email.</p>'
    document.getElementById("email-box").style.visibility = 'hidden';
    document.getElementById("invalid").style.visibility = 'hidden'
    document.getElementById("submit-button").style.display = 'none';
    button.style.display = 'block';

    form.addEventListener("submit", reload)
}

function reload() {
    location.reload();
}
>>>>>>> f3743eb6c098dd58d6d3252394efe15294f5c241
