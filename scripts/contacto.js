const formContacto = document.getElementById("formContacto");

if (formContacto) {
    const campoNombre = document.getElementById("nombre");
    const campoCorreo = document.getElementById("correo");
    const campoMensaje = document.getElementById("mensaje");
    const confirmacion = document.getElementById("confirmacionEnvio");
    const btnLimpiar = document.getElementById("btnLimpiar");

    const regexCorreo = /^[a-zA-Z0-9._%+-]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/i;

    function validarNombre() {
        const valor = campoNombre.value.trim();
        if (valor === "") return "El nombre es obligatorio.";
        if (valor.length < 6) return "El nombre debe tener al menos 6 caracteres.";
        if (valor.length > 100) return "El nombre debe tener menos de 100 caracteres."
        return "";
    }

    function validarCorreo() {
        const valor = campoCorreo.value.trim();
        if (valor === "") return "El correo es obligatorio.";
        if (valor.length > 100) return "El correo no puede tener más de 100 caracteres.";
        if (!regexCorreo.test(valor)) return "Solo se aceptan correos @duoc.cl, @profesor.duoc.cl o @gmail.com.";
        return "";
    }

    function validarMensaje() {
        const valor = campoMensaje.value.trim();
        if (valor === "") return "El mensaje es obligatorio.";
        if (valor.length < 10) return "Escribe al menos 10 caracteres.";
        if (valor.length > 500) return "El mensaje no puede tener más de 500 caracteres.";
        return "";
    }

    function mostrarError(input, idError, mensaje) {
        const divError = document.getElementById(idError);
        if (divError) divError.textContent = mensaje;
        input.classList.toggle("is-invalid", mensaje !== "");
        input.classList.toggle("is-valid", mensaje === "" && input.value.trim() !== "");
    }

    function limpiarFormulario() {
        formContacto.reset();
        confirmacion.classList.add("d-none");
        [campoNombre, campoCorreo, campoMensaje].forEach(campo => {
            campo.classList.remove("is-invalid", "is-valid");
        });
        ["error-nombre", "error-correo", "error-mensaje"].forEach(id => {
            const div = document.getElementById(id);
            if (div) div.textContent = "";
        });
    }

    campoNombre.addEventListener("input", () => mostrarError(campoNombre, "error-nombre", validarNombre()));
    campoCorreo.addEventListener("input", () => mostrarError(campoCorreo, "error-correo", validarCorreo()));
    campoMensaje.addEventListener("input", () => mostrarError(campoMensaje, "error-mensaje", validarMensaje()));

    formContacto.addEventListener("submit", (evento) => {
        evento.preventDefault();

        const errorNombre = validarNombre();
        const errorCorreo = validarCorreo();
        const errorMensaje = validarMensaje();

        mostrarError(campoNombre, "error-nombre", errorNombre);
        mostrarError(campoCorreo, "error-correo", errorCorreo);
        mostrarError(campoMensaje, "error-mensaje", errorMensaje);

        const formularioValido = !errorNombre && !errorCorreo && !errorMensaje;

        if (formularioValido) {
            limpiarFormulario();
            confirmacion.classList.remove("d-none");
        } else {
            confirmacion.classList.add("d-none");
        }
    });

    if (btnLimpiar) {
        btnLimpiar.addEventListener("click", limpiarFormulario);
    }
}