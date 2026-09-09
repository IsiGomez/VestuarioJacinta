// Arreglo de productos según rúbrica
const listaProductos = [
    {
        id: 1,
        nombre: "Polera azul marino",
        precio: 8990,
        imagen: "assets/productos/1.webp",
        descripcion: "Confeccionada en algodón suave y respirable. Su tono azul marino clásico la convierte en una prenda versátil e imprescindible para el uso diario.",
        variantes: {
            "S": ["Azul marino"],
            "M": ["Azul marino", "Gris"],
            "L": ["Azul marino", "Gris"],
            "XL": ["Gris"]
        }
    },
    {
        id: 2,
        nombre: "Polera negra",
        precio: 8990,
        imagen: "assets/productos/2.webp",
        descripcion: "Un básico esencial de corte cómodo y color negro intenso, ideal para combinar fácilmente con cualquier prenda.",
        variantes: {
            "S": ["Azul marino"],
            "M": ["Azul marino", "Gris"],
            "L": ["Azul marino", "Gris"],
            "XL": ["Gris"]
        }
    },
    {
        id: 3,
        nombre: "Polera verde",
        precio: 8990,
        imagen: "assets/productos/3.webp",
        descripcion: "Polera ligera de color verde fresco, pensada para aportar un toque renovado y relajado al outfit.",
        variantes: {
            "S": ["Azul marino"],
            "M": ["Azul marino", "Gris"],
            "L": ["Azul marino", "Gris"],
            "XL": ["Gris"]
        }
    },
    {
        id: 4,
        nombre: "Polera azul",
        precio: 8990,
        imagen: "assets/productos/4.webp",
        descripcion: "Diseño de calce confortable en un azul vibrante, perfecto para mantenerse cómodo gracias a su tela liviana.",
        variantes: {
            "S": ["Azul marino"],
            "M": ["Azul marino", "Gris"],
            "L": ["Azul marino", "Gris"],
            "XL": ["Gris"]
        }
    },
    {
        id: 5,
        nombre: "Pantalón negro",
        precio: 19990,
        imagen: "assets/productos/5.webp",
        descripcion: "Pantalón versátil y sobrio de color negro, diseñado con un ajuste cómodo que se adapta tanto a estilos casuales como semiformales.",
        variantes: {
            "S": ["Azul marino"],
            "M": ["Azul marino", "Gris"],
            "L": ["Azul marino", "Gris"],
            "XL": ["Gris"]
        }
    },
    {
        id: 6,
        nombre: "Pantalón blanco",
        precio: 19990,
        imagen: "assets/productos/6.webp",
        descripcion: "Prenda de corte moderno en tono blanco luminoso, ideal para destacar en looks frescos y combinaciones veraniegas.",
        variantes: {
            "S": ["Azul marino"],
            "M": ["Azul marino", "Gris"],
            "L": ["Azul marino", "Gris"],
            "XL": ["Gris"]
        }
    },
    {
        id: 7,
        nombre: "Pantalón jeans azules",
        precio: 19990,
        imagen: "assets/productos/7.webp",
        descripcion: "Jeans de mezclilla azul tradicional, fabricados con material resistente y duradero para el uso diario.",
        variantes: {
            "S": ["Azul marino"],
            "M": ["Azul marino", "Gris"],
            "L": ["Azul marino", "Gris"],
            "XL": ["Gris"]
        }
    },
    {
        id: 8,
        nombre: "Pantalón marrón",
        precio: 19990,
        imagen: "assets/productos/8.webp",
        descripcion: "Pantalón en tono marrón cálido, excelente alternativa terrosa para salir del denim tradicional con estilo.",
        variantes: {
            "S": ["Azul marino"],
            "M": ["Azul marino", "Gris"],
            "L": ["Azul marino", "Gris"],
            "XL": ["Gris"]
        }
    }
];

function renderizarProductos() {
    const contenedor = document.getElementById("contenedor-productos");
    if (!contenedor) return;

    contenedor.innerHTML = "";

    listaProductos.forEach(prod => {
        contenedor.innerHTML += `
            <div class="producto">
                <a href="detalle.html" onclick="guardarProductoSeleccionado(${prod.id})">
                    <img src="${prod.imagen}" alt="${prod.nombre}">
                    <h3>${prod.nombre}</h3>
                </a>
                <p>$${prod.precio.toLocaleString('es-CL')}</p>
                <button class="btn w-100 btn-principal" onclick="agregarProducto('${prod.nombre}', ${prod.precio}, '${prod.imagen}', 1)">Añadir</button>
            </div>
        `;
    });
}

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

function procesarPago() {
    let carrito = obtenerCarrito();

    if (carrito.length === 0) {
        alert("El carrito está vacío. Agrega productos antes de pagar.");
        return;
    }

    alert("¡Compra exitosa! Gracias por tu preferencia.");
    vaciarCarrito();
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

function guardarProductoSeleccionado(id) {
    let producto = listaProductos.find(p => p.id === id);
    if (!producto) return;

    localStorage.setItem("nombreElegido", producto.nombre);
    localStorage.setItem("precioElegido", producto.precio);
    localStorage.setItem("imagenElegida", producto.imagen);
    localStorage.setItem("descripcionElegida", producto.descripcion);
    localStorage.setItem("variantesElegidas", JSON.stringify(producto.variantes));
}

let etiquetaNombre = document.getElementById("detalle-nombre");
let etiquetaDescripcion = document.getElementById("detalle-descripcion");
if (etiquetaNombre) {
    document.getElementById("detalle-nombre").innerText = localStorage.getItem("nombreElegido");
    let precioNumero = Number(localStorage.getItem("precioElegido"));
    document.getElementById("detalle-precio").innerText = "$" + precioNumero.toLocaleString('es-CL');
    document.getElementById("detalle-img").src = localStorage.getItem("imagenElegida");
    etiquetaDescripcion.innerText = localStorage.getItem("descripcionElegida") || "Descripción no disponible.";

    let variantes = JSON.parse(localStorage.getItem("variantesElegidas") || "{}");
    let selectTalla = document.getElementById("talla");
    let selectColor = document.getElementById("color");

    // Llenar tallas (las claves del objeto variantes)
    Object.keys(variantes).forEach(t => {
        selectTalla.innerHTML += `<option value="${t}">${t}</option>`;
    });

    function actualizarColores() {
        let tallaElegida = selectTalla.value;
        let coloresDisponibles = variantes[tallaElegida] || [];

        selectColor.innerHTML = "";
        coloresDisponibles.forEach(c => {
            selectColor.innerHTML += `<option value="${c}">${c}</option>`;
        });
    }

    selectTalla.addEventListener("change", actualizarColores);
    actualizarColores(); // pintar los colores de la primera talla
}

function sumarDesdeDetalle() {
    let inputCantidad = document.getElementById("cantidad");
    let cantidadElegida = parseInt(inputCantidad.value);

    if (isNaN(cantidadElegida) || cantidadElegida < 1) {
        alert("La cantidad mínima para añadir es 1.");
        inputCantidad.value = 1;
        return;
    }

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
                    <p class="text-muted mb-0 small">Precio unitario: $${item.precio.toLocaleString('es-CL')}</p>
                    <p class="mb-0"><strong>Cantidad: ${item.cantidad}</strong> <span class="font-monospace subtotal">(Subtotal: $${subtotal.toLocaleString('es-CL')})</span></p>
                </div>
                <div class="col-12 col-sm-5 d-flex justify-content-center justify-content-sm-end align-items-center gap-2">
                    <input type="number" id="quitar-${i}" class="form-control text-center" min="1" max="${item.cantidad}" value="1" style="width: 70px;">
                    <button class="btn btn-sm btn-outline-secondary" onclick="eliminarCantidad(${i})">Quitar</button>
                    <button class="btn btn-sm btn-del" onclick="eliminarProducto(${i})">
                        <i class="bi bi-trash"></i> Borrar Todo
                    </button>
                </div>
            </div>
        `;
    }

    let total = document.getElementById("precio-total");
    if (total) total.innerText = "Total: $" + sumaTotal.toLocaleString('es-CL');
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
renderizarProductos();