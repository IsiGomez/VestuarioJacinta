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

    function limpiarError() {
        const errores = document.querySelectorAll(".error-msg");
        errores.forEach(el => el.textContent = "");
    }

    function validarRun(run) {
        const runSinDV = run.slice(0,-1);
        const dv = run.slice(-1);
        const runInvertido = runSinDV.split('').reverse().join('');
        const serie = [2,3,4,5,6,7]
        const runLista = Array.from(runInvertido,Number);

        let suma = 0;
        for (let i = 0; i < runLista.length; i++) {
            const factor = serie[i % serie.length];
            suma += runLista[i] * factor;
        }

        const resto = suma % 11;

        const resultado = 11 - resto;

        let dvEsperado;
        if (resultado === 11) {
            dvEsperado = '0';
        } else if (resultado === 10) {
            dvEsperado = 'K';
        } else {
            dvEsperado = resultado.toString();
        }

        return dvEsperado === dv;
    }

    function validarCharEsp(texto){
        const patron = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
        return !patron.test(texto);
    }

    const logForm = document.getElementById("secc-log");
    if (logForm) {
        logForm.addEventListener('submit', (e)=>{
            e.preventDefault();
            limpiarError();
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

    const regForm = document.getElementById("secc-reg");
    if (regForm) {
        regForm.addEventListener('submit', (e)=>{
            e.preventDefault();
            limpiarError();
            let esValido = true;

            const run = document.getElementById("reg-run");
            const nombre = document.getElementById("reg-nom");
            const apellidos = document.getElementById("reg-apll");
            const email = document.getElementById("reg-email");
            const pass = document.getElementById("reg-pass");
            const passCon = document.getElementById("reg-pass-con");

            const valorRun = run.value.trim();
            if (valorRun === "") {
                mostrarError("error-reg-run", "El run no puede estar vacío");
                esValido=false;
            }
            else if (valorRun.length < 7) {
                mostrarError("error-reg-run", "El run debe ser de al menos 7 caracteres");
                esValido=false;
            }
            else if (!validarRun(valorRun.toUpperCase())) {
                mostrarError("error-reg-run", "El run no es valido");
                esValido=false;
            }

            const valorNombre = nombre.value.trim();
            if (valorNombre === "") {
                mostrarError("error-reg-nom", "El nombre no puede estar vacío");
                esValido=false;
            } else if (validarCharEsp(valorNombre)) {
                mostrarError("error-reg-nom", "El nombre no puede contener caracteres especiales");
                esValido=false;
            }

            const valorApellidos = apellidos.value.trim();
            if (valorApellidos === "") {
                mostrarError("error-reg-apll", "El apellido no puede estar vacío");
                esValido=false;
            } else if (validarCharEsp(valorApellidos)) {
                mostrarError("error-reg-apll", "El apellido no puede contener caracteres especiales");
                esValido=false;
            }

            const valorEmail = email.value.trim();
            if (valorEmail === "") {
                mostrarError("error-reg-email", "El correo electrónico no puede estar vacío");
                esValido = false;
            } else if (!valorEmail.endsWith("@duoc.cl") &&
                       !valorEmail.endsWith("@profesor.duoc.cl") &&
                       !valorEmail.endsWith("@gmail.com")) {
                mostrarError("error-reg-email", "El correo debe terminar en @duoc.cl, @profesor.duoc.cl o @gmail.com");
                esValido = false;
            }

            const valorPass = pass.value.trim();
            const valorPassCon = passCon.value.trim();
            if (valorPass === "") {
                mostrarError("error-reg-pass", "La contraseña no puede estar vacía");
                esValido = false;
            } else if (valorPass.length < 4) {
                mostrarError("error-reg-pass", "La contraseña no puede ser menor a 4 caracteres");
                esValido = false;
            }

            if (valorPassCon === "") {
                mostrarError("error-reg-pass-con", "La contraseña no puede estar vacía");
                esValido = false;
            } else if (valorPass !== valorPassCon) {
                mostrarError("error-reg-pass-con", "Las contraseñas no coinciden");
                esValido = false;
            } else if (valorPassCon.length < 4) {
                mostrarError("error-reg-pass-con", "La contraseña no puede ser menor a 4 caracteres");
                esValido = false;
            }

            if (esValido) {
                window.location.href = "login.html";
            }
        });
    }
});