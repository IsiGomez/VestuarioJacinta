function obtenerCarrito() {
    let datos = localStorage.getItem("miCarrito");
    if (datos === null) {
        return [];
    }
    return JSON.parse(datos);
}

function guardarCarrito(lista) {
    localStorage.setItem("miCarrito", JSON.stringify(lista));
    actualizarContadorNavbar();
}

function actualizarContadorNavbar() {
    let carrito = obtenerCarrito();
    let totalItems = 0;

    for (let i = 0; i < carrito.length; i++) {
        totalItems = totalItems + carrito[i].cantidad;
    }

    let textCarrito = document.getElementById("cont-carrito");
    if (textCarrito) {
        textCarrito.textContent = "Carrito (" + totalItems + ")";
    }
}

function agregarProducto(nombre, precio, imagen, cantidad) {
    let carrito = obtenerCarrito();
    let encontrado = false;

    for (let i = 0; i < carrito.length; i++) {
        if (carrito[i].nombre === nombre) {
            carrito[i].cantidad = carrito[i].cantidad + cantidad;
            encontrado = true;
            break;
        }
    }

    if (!encontrado) {
        carrito.push({
            nombre: nombre,
            precio: precio,
            imagen: imagen,
            cantidad: cantidad
        });
    }

    guardarCarrito(carrito);
    alert(nombre + " añadido al carrito");
}

function guardarProductoSeleccionado(nombre, precio, imagen) {
    localStorage.setItem("nombreElegido", nombre);
    localStorage.setItem("precioElegido", precio);
    localStorage.setItem("imagenElegida", imagen);
}

let etiquetaNombre = document.getElementById("detalle-nombre");
if (etiquetaNombre) {
    document.getElementById("detalle-nombre").innerText = localStorage.getItem("nombreElegido");
    document.getElementById("detalle-precio").innerText = "$" + localStorage.getItem("precioElegido");
    document.getElementById("detalle-img").src = localStorage.getItem("imagenElegida");
}

function sumarDesdeDetalle() {
    let cantidadElegida = parseInt(document.getElementById("cantidad").value);
    let nombre = localStorage.getItem("nombreElegido");
    let precio = parseInt(localStorage.getItem("precioElegido"));
    let imagen = localStorage.getItem("imagenElegida");

    agregarProducto(nombre, precio, imagen, cantidadElegida);
}

let contenedorCarrito = document.getElementById("lista-carrito");

function pintarCarrito() {
    if (!contenedorCarrito) return;

    let carrito = obtenerCarrito();
    contenedorCarrito.innerHTML = "";

    if (carrito.length === 0) {
        contenedorCarrito.innerHTML = '<div class="alert alert-light text-center my-4">El carrito está vacío.</div>';
        let total = document.getElementById("precio-total");
        if (total) total.innerText = "Total: $0";
        return;
    }

    let sumaTotal = 0;

    for (let i = 0; i < carrito.length; i++) {
        let item = carrito[i];
        let subtotal = item.precio * item.cantidad;
        sumaTotal = sumaTotal + subtotal;

        contenedorCarrito.innerHTML += `
            <div class="row align-items-center py-3 border-bottom">
                <div class="col-12 col-sm-2 text-center text-sm-start mb-2 mb-sm-0">
                    <img src="${item.imagen}" alt="${item.nombre}" class="img-fluid rounded" style="max-height: 80px; object-fit: cover;">
                </div>
                <div class="col-12 col-sm-5 text-center text-sm-start mb-2 mb-sm-0">
                    <h5 class="mb-1">${item.nombre}</h5>
                    <p class="text-muted mb-0 small">Precio unitario: $${item.precio}</p>
                    <p class="mb-0"><strong>Cantidad: ${item.cantidad}</strong> <span class="text-primary font-monospace">(Subtotal: $${subtotal})</span></p>
                </div>
                <div class="col-12 col-sm-5 d-flex justify-content-center justify-content-sm-end align-items-center gap-2">
                    <input type="number" id="quitar-${i}" class="form-control text-center" min="1" max="${item.cantidad}" value="1" style="width: 70px;">
                    <button class="btn btn-sm btn-outline-secondary" onclick="eliminarCantidad(${i})">Quitar</button>
                    <button class="btn btn-sm btn-danger" onclick="eliminarProducto(${i})">
                        <i class="bi bi-trash"></i> Borrar Todo
                    </button>
                </div>
            </div>
        `;
    }

    let total = document.getElementById("precio-total");
    if (total) total.innerText = "Total: $" + sumaTotal;
}

function eliminarCantidad(posicion) {
    let carrito = obtenerCarrito();
    let cantidadAQuitar = parseInt(document.getElementById("quitar-" + posicion).value);

    if (isNaN(cantidadAQuitar) || cantidadAQuitar <= 0) {
        return;
    }

    if (cantidadAQuitar >= carrito[posicion].cantidad) {
        carrito.splice(posicion, 1);
    } else {
        carrito[posicion].cantidad = carrito[posicion].cantidad - cantidadAQuitar;
    }

    guardarCarrito(carrito);
    pintarCarrito();
}

function eliminarProducto(posicion) {
    let carrito = obtenerCarrito();
    carrito.splice(posicion, 1);
    guardarCarrito(carrito);
    pintarCarrito();
}

function vaciarCarrito() {
    guardarCarrito([]);
    pintarCarrito();
}

actualizarContadorNavbar();
pintarCarrito();