document.addEventListener("DOMContentLoaded",()=>{
    const loginForm = document.getElementById("secc-log");
    const registerForm = document.getElementById("secc-reg");

    const loginLink = document.getElementById("link-login");
    const registerLink = document.getElementById("link-registro");

    if (loginLink) {
        loginLink.addEventListener('click', (e)=>{
            e.preventDefault();
            loginForm.classList.toggle('oculto');
            registerForm.classList.toggle('oculto');
        });
    }

    if (registerLink) {
        registerLink.addEventListener('click', (e)=>{
            e.preventDefault();
            loginForm.classList.toggle('oculto');
            registerForm.classList.toggle('oculto');
        });
    }

    function mostrarError(idElemento, mensaje) {
        const elemento = document.getElementById(idElemento);
        if (elemento) {
            elemento.textContent = mensaje;
        }
    }

    function limpiarError(idElemento) {
        const elemento = document.getElementById(idElemento);
        if (elemento) {
            elemento.textContent = "";
        }
    }

    const logForm = document.getElementById("secc-log");
    if (logForm) {
        logForm.addEventListener('submit', (e)=>{
            e.preventDefault();
            let esValido = true;

            const email = document.getElementById("log-email");
            const pass = document.getElementById("log-pass");

            const valorEmail = email.value.trim();
            if (valorEmail === ""){
                mostrarError("error-log-email", "El correo electrónico no puede estar vacío");
                esValido=false
            } else if (!valorEmail.endsWith("@duoc.cl") &&
            !valorEmail.endsWith("@profesor.duoc.cl") &&
            !valorEmail.endsWith("@gmail.com")) {
                mostrarError("error-log-email",
                    "El correo electrónico debe incluir dominio (@duoc.cl, @profesor.duoc.cl o @gmail.com)");
                esValido=false
            }

            const valorPass = pass.value.trim();
            if (valorPass === ""){
                mostrarError("error-log-pass", "La contraseña no puede estar vacía");
                esValido=false
            } else if (valorPass.length < 4){
                mostrarError("error-log-pass", "La contraseña debe ser de al menos 4 caracteres");
                esValido=false
            } else if (valorPass.length > 10){
                mostrarError("error-log-pass", "La contraseña debe ser de menos de 10 caracteres");
                esValido=false
            }

            if (esValido) {
                window.location.href = "/.";
            }
        });
    }

});