const passwordInput = document.getElementById('password');
const togglePasswordButton = document.getElementById('toggle-password');
togglePasswordButton.addEventListener('click', () => {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    togglePasswordButton.textContent = type === 'password' ? 'Mostrar' : 'Ocultar';
});
const loginButton = document.getElementById('login-btn');
loginButton.addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = passwordInput.value;
    if (username === '' || password === '') {
        alert('Ingrese usuario y contraseña');
    } else if (username === 'admin' && password === 'admin') {
        alert('Bienvenido');

    } else {
        alert('Usuario o contraseña incorrectos');
    }
});

$(document).ready(function() {
    // al cargar la página, comprueba si hay un token de sesión guardado en una cookie
    var token = getCookie('session-token');
    if (token) {
        // si hay un token, inicie sesión automáticamente y redirija al usuario a la página principal
        loginWithToken(token);
        window.location.href = "pagina-principal.html";
    }

    // cuando se hace clic en el botón de inicio de sesión
    $('#login-btn').click(function() {
        // compruebe si el checkbox está seleccionado
        if ($('#remember-password').is(':checked')) {
            // si es así, guarde la contraseña en localStorage y genere un token de sesión
            var password = $('#password-input').val();
            localStorage.setItem('password', password);
            var token = generateToken();
            setCookie('session-token', token, 7);
        }
        // inicie sesión con la contraseña ingresada y redirija al usuario a la página principal
        loginWithPassword(password);
        window.location.href = "inicio.html";
    });

    // función para iniciar sesión con una contraseña
    function loginWithPassword(password) {
        // código para iniciar sesión con la contraseña
    }

    // función para iniciar sesión con un token de sesión
    function loginWithToken(token) {
        // código para iniciar sesión con el token
    }

    // función para generar un token de sesión aleatorio
    function generateToken() {
        // código para generar un token de sesión aleatorio
        return token;
    }

    // función para establecer una cookie
    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + value + expires + "; path=/";
    }

    // función para obtener el valor de una cookie
    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }
});