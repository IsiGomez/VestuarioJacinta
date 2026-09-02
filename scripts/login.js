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
});