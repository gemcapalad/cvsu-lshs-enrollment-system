function loginError() {
    document.getElementById("username").style.borderColor = '#ff3131'
    document.getElementById("password").style.borderColor = '#ff3131'
    document.getElementById("invalid").style.visibility = 'visible';
    document.getElementById("invalid").style.color = '#ff3131';
}

function stopReload() {
    var form = document.getElementById("login-form");

    function handleForm(event) {
        event.preventDefault();
    }

    form.addEventListener('submit', handleForm)
}

