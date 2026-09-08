document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("secc-log");
    const registerForm = document.getElementById("secc-reg");

    const loginLink = document.getElementById("link-login");
    const registerLink = document.getElementById("link-registro");

    const selectRegion = document.getElementById("reg-region");
    const selectComuna = document.getElementById("reg-comuna");

    const datosChile = [
        {"region": "Arica y Parinacota", "comunas": ["Arica", "Camarones", "General Lagos", "Putre"]},
        {"region": "Tarapacá", "comunas": ["Alto Hospicio", "Camiña", "Colchane", "Huara", "Iquique", "Pica", "Pozo Almonte"]},
        {"region": "Antofagasta", "comunas": ["Antofagasta", "Calama", "María Elena", "Mejillones", "Ollagüe", "San Pedro de Atacama", "Sierra Gorda", "Taltal", "Tocopilla"]},
        {"region": "Atacama", "comunas": ["Alto del Carmen", "Caldera", "Chañaral", "Copiapó", "Diego de Almagro", "Freirina", "Huasco", "Tierra Amarilla", "Vallenar"]},
        {"region": "Coquimbo", "comunas": ["Andacollo", "Canela", "Combarbalá", "Coquimbo", "Illapel", "La Higuera", "La Serena", "Los Vilos", "Monte Patria", "Ovalle", "Paiguano", "Punitaqui", "Río Hurtado", "Salamanca", "Vicuña"]},
        {"region": "Valparaíso", "comunas": ["Algarrobo", "Cabildo", "Calle Larga", "Cartagena", "Casablanca", "Catemu", "Concón", "El Quisco", "El Tabo", "Hijuelas", "Isla de Pascua", "Juan Fernández", "La Calera", "La Cruz", "La Ligua", "Limache", "Llay-Llay", "Los Andes", "Nogales", "Olmué", "Panquehue", "Papudo", "Petorca", "Puchuncaví", "Putaendo", "Quillota", "Quilpué", "Quintero", "Rinconada", "San Antonio", "San Esteban", "San Felipe", "Santa María", "Santo Domingo", "Valparaíso", "Villa Alemana", "Viña del Mar"]},
        {"region": "Región Metropolitana", "comunas": ["Alhué", "Buin", "Calera de Tango", "Cerrillos", "Cerro Navia", "Colina", "Conchalí", "Curacaví", "El Bosque", "El Monte", "Estación Central", "Huechuraba", "Independencia", "Isla de Maipo", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Lampa", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "María Pinto", "Melipilla", "Ñuñoa", "Padre Hurtado", "Paine", "Pedro Aguirre Cerda", "Peñaflor", "Peñalolén", "Pirque", "Providencia", "Pudahuel", "Puente Alto", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "San Bernardo", "San Joaquín", "San José de Maipo", "San Miguel", "San Pedro", "San Ramón", "Santiago", "Talagante", "Tiltil", "Vitacura"]},
        {"region": "O'Higgins", "comunas": ["Chépica", "Chimbarongo", "Codegua", "Coínco", "Coltauco", "Doñihue", "Graneros", "La Estrella", "Las Cabras", "Litueche", "Lolol", "Machalí", "Malloa", "Marchigüe", "Nancagua", "Navidad", "Olivar", "Palmilla", "Paredones", "Peralillo", "Peumo", "Pichidegua", "Pichilemu", "Placilla", "Pumanque", "Quinta de Tilcoco", "Rancagua", "Rengo", "Requínoa", "San Fernando", "San Francisco de Mostazal", "San Vicente de Tagua Tagua", "Santa Cruz"]},
        {"region": "Maule", "comunas": ["Cauquenes", "Chanco", "Colbún", "Constitución", "Curepto", "Curicó", "Empedrado", "Hualañé", "Licantén", "Linares", "Longaví", "Maule", "Molina", "Parral", "Pelarco", "Pelluhue", "Pencahue", "Rauco", "Retiro", "Río Claro", "Romeral", "Sagrada Familia", "San Clemente", "San Javier", "San Rafael", "Talca", "Teno", "Vichuquén", "Villa Alegre", "Yerbas Buenas"]},
        {"region": "Ñuble", "comunas": ["Bulnes", "Chillán", "Chillán Viejo", "Cobquecura", "Coelemu", "Coihueco", "El Carmen", "Ninhue", "Ñiquén", "Pemuco", "Pinto", "Portezuelo", "Quillón", "Quirihue", "Ránquil", "San Carlos", "San Fabián", "San Ignacio", "San Nicolás", "Treguaco", "Yungay"]},
        {"region": "Bío Bío", "comunas": ["Alto Biobío", "Antuco", "Arauco", "Cabrero", "Cañete", "Chiguayante", "Concepción", "Contulmo", "Coronel", "Curanilahue", "Florida", "Hualpén", "Hualqui", "Laja", "Lebu", "Los Ángeles", "Lota", "Mulchén", "Nacimiento", "Negrete", "Penco", "Quilaco", "Quilleco", "San Rosendo", "Santa Bárbara", "Santa Juana", "Talcahuano", "Tirúa", "Tomé", "Tucapel", "Yumbel"]},
        {"region": "La Araucanía", "comunas": ["Angol", "Carahue", "Cholchol", "Collipulli", "Cunco", "Curacautín", "Curarrehue", "Ercilla", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Lonquimay", "Los Sauces", "Lumaco", "Melipeuco", "Nueva Imperial", "Padre Las Casas", "Perquenco", "Pitrufquén", "Pucón", "Purén", "Renaico", "Saavedra", "Temuco", "Teodoro Schmidt", "Toltén", "Traiguén", "Victoria", "Vilcún", "Villarrica"]},
        {"region": "Los Ríos", "comunas": ["Corral", "Futrono", "La Unión", "Lago Ranco", "Lanco", "Los Lagos", "Máfil", "Mariquina", "Paillaco", "Panguipulli", "Río Bueno", "Valdivia"]},
        {"region": "Los Lagos", "comunas": ["Ancud", "Calbuco", "Castro", "Chaitén", "Chonchi", "Cochamó", "Curaco de Vélez", "Dalcahue", "Fresia", "Frutillar", "Futaleufú", "Hualaihué", "Llanquihue", "Los Muermos", "Maullín", "Osorno", "Palena", "Puerto Montt", "Puerto Octay", "Puerto Varas", "Puqueldón", "Queilén", "Quellón", "Quemchi", "Quinchao", "Río Negro", "San Juan de la Costa", "San Pablo"]},
        {"region": "Aysén", "comunas": ["Aysén", "Chile Chico", "Cisnes", "Cochrane", "Coyhaique", "Guaitecas", "Lago Verde", "O'Higgins", "Río Ibáñez", "Tortel"]},
        {"region": "Magallanes", "comunas": ["Antártica", "Laguna Blanca", "Natales", "Porvenir", "Primavera", "Punta Arenas", "Río Verde", "San Gregorio", "Timaukel", "Torres del Paine"]}
    ];

    if (selectRegion && selectComuna) {
        datosChile.forEach(item => {
            const opcion = document.createElement("option");
            opcion.value = item.region;
            opcion.textContent = item.region;
            selectRegion.appendChild(opcion);
        });

        selectRegion.addEventListener("change", () => {
            const regionSeleccionada = selectRegion.value;
            selectComuna.innerHTML = '<option value="">Seleccione una comuna</option>';

            if (regionSeleccionada === "") {
                selectComuna.disabled = true;
                return;
            }

            const regionEncontrada = datosChile.find(item => item.region === regionSeleccionada);
            if (regionEncontrada) {
                regionEncontrada.comunas.forEach(comuna => {
                    const opcion = document.createElement("option");
                    opcion.value = comuna;
                    opcion.textContent = comuna;
                    selectComuna.appendChild(opcion);
                });
                selectComuna.disabled = false;
            }
        });
    }

    if (loginLink) {
        loginLink.addEventListener('click', (e) => {
            e.preventDefault();
            loginForm.classList.toggle('oculto');
            registerForm.classList.toggle('oculto');
        });
    }

    if (registerLink) {
        registerLink.addEventListener('click', (e) => {
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
        const runSinDV = run.slice(0, -1);
        const dv = run.slice(-1);
        const runInvertido = runSinDV.split('').reverse().join('');
        const serie = [2, 3, 4, 5, 6, 7];
        const runLista = Array.from(runInvertido, Number);

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

    function validarCharEsp(texto) {
        const patron = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
        return !patron.test(texto);
    }

    const logForm = document.getElementById("secc-log");
    if (logForm) {
        logForm.addEventListener('submit', (e) => {
            e.preventDefault();
            limpiarError();
            let esValido = true;

            const email = document.getElementById("log-email");
            const pass = document.getElementById("log-pass");

            const valorEmail = email.value.trim();
            if (valorEmail === "") {
                mostrarError("error-log-email", "El correo electrónico no puede estar vacío");
                esValido = false;
            } else if (!valorEmail.endsWith("@duoc.cl") &&
                       !valorEmail.endsWith("@profesor.duoc.cl") &&
                       !valorEmail.endsWith("@gmail.com")) {
                mostrarError("error-log-email", "El correo electrónico debe incluir dominio (@duoc.cl, @profesor.duoc.cl o @gmail.com)");
                esValido = false;
            }

            const valorPass = pass.value.trim();
            if (valorPass === "") {
                mostrarError("error-log-pass", "La contraseña no puede estar vacía");
                esValido = false;
            } else if (valorPass.length < 4) {
                mostrarError("error-log-pass", "La contraseña debe ser de al menos 4 caracteres");
                esValido = false;
            } else if (valorPass.length > 10) {
                mostrarError("error-log-pass", "La contraseña debe ser de menos de 10 caracteres");
                esValido = false;
            }

            if (esValido) {
                window.location.href = "index.html";
            }
        });
    }

    const regForm = document.getElementById("secc-reg");
    if (regForm) {
        regForm.addEventListener('submit', (e) => {
            e.preventDefault();
            limpiarError();
            let esValido = true;

            const run = document.getElementById("reg-run");
            const nombre = document.getElementById("reg-nom");
            const apellidos = document.getElementById("reg-apll");
            const email = document.getElementById("reg-email");
            const region = document.getElementById("reg-region");
            const comuna = document.getElementById("reg-comuna");
            const direccion = document.getElementById("reg-dir");
            const pass = document.getElementById("reg-pass");
            const passCon = document.getElementById("reg-pass-con");

            const valorRun = run.value.trim();
            if (valorRun === "") {
                mostrarError("error-reg-run", "El run no puede estar vacío");
                esValido = false;
            } else if (valorRun.length < 7) {
                mostrarError("error-reg-run", "El run debe ser de al menos 7 caracteres");
                esValido = false;
            } else if (!validarRun(valorRun.toUpperCase())) {
                mostrarError("error-reg-run", "El run no es válido");
                esValido = false;
            }

            const valorNombre = nombre.value.trim();
            if (valorNombre === "") {
                mostrarError("error-reg-nom", "El nombre no puede estar vacío");
                esValido = false;
            } else if (validarCharEsp(valorNombre)) {
                mostrarError("error-reg-nom", "El nombre no puede contener caracteres especiales");
                esValido = false;
            }

            const valorApellidos = apellidos.value.trim();
            if (valorApellidos === "") {
                mostrarError("error-reg-apll", "El apellido no puede estar vacío");
                esValido = false;
            } else if (validarCharEsp(valorApellidos)) {
                mostrarError("error-reg-apll", "El apellido no puede contener caracteres especiales");
                esValido = false;
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

            if (region.value === "") {
                mostrarError("error-reg-region", "Debe seleccionar una región");
                esValido = false;
            }

            if (comuna.value === "") {
                mostrarError("error-reg-comuna", "Debe seleccionar una comuna");
                esValido = false;
            }

            const valorDireccion = direccion.value.trim();
            if (valorDireccion === "") {
                mostrarError("error-reg-dir", "La dirección no puede estar vacía");
                esValido = false;
            } else if (valorDireccion.length > 300) {
                mostrarError("error-reg-dir", "La dirección no puede superar los 300 caracteres");
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