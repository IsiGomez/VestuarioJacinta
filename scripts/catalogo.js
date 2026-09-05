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
        contenedorCarrito.innerHTML = "<p>El carrito está vacío.</p>";
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
            <div style="border-bottom: 1px solid #ccc; padding: 10px; display: flex; align-items: center; gap: 15px;">
                <img src="${item.imagen}" width="60">
                <div>
                    <h4>${item.nombre}</h4>
                    <p>Precio unitario: $${item.precio}</p>
                    <p><strong>Cantidad: ${item.cantidad}</strong> (Subtotal: $${subtotal})</p>
                </div>
                <div style="margin-left: auto; display: flex; align-items: center; gap: 5px;">
                    <input type="number" id="quitar-${i}" min="1" max="${item.cantidad}" value="1" style="width: 50px;">
                    <button onclick="eliminarCantidad(${i})">Quitar</button>
                    <button onclick="eliminarProducto(${i})">Borrar Todo</button>
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