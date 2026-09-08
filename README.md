# Vestuario Jacinta

Tienda online de ropa desarrollada como parte de la **Evaluación Parcial 1 (30%)** de la asignatura **DSY1104 – Desarrollo Fullstack II** (DuocUC).

Basado en el caso **"Vestuarios Jacinta"**: una tienda chilena de ropa casual y urbana para toda la familia que busca renovar su sistema de ventas online.

---

## Integrantes del Equipo

* **Isidora Gómez**
* **Lukas Calvo**

---

## 🔗 Links de inicio a pagina
- Página de Vestuario Jacinta: <a href="https://isigomez.github.io/VestuarioJacinta/index.html">Clic aqui</a>

---

## 🧵 Descripción

El proyecto corresponde al **frontend** de la tienda Jacinta de vestuario, desarrollado con HTML, CSS y JavaScript, con estilos propios y formularios validados en tiempo real.

## 🛠️ Tecnologías utilizadas

- **HTML5** — estructura semántica (`header`, `nav`, `main`, `section`, `article`, `footer`)
- **CSS3** — hojas de estilo propias, una externa por página y una general.
- **JavaScript** — validaciones de formularios, carrito de compras, render dinámico de productos y año actual.
- **[Bootstrap 5.3.3](https://getbootstrap.com/)** — grillas y componentes responsivos
- **[Bootstrap Icons](https://icons.getbootstrap.com/)** — iconografía (carrito, redes sociales, etc.)
- **[Google Fonts](https://fonts.google.com/)** — tipografías [Poppins](https://fonts.google.com/specimen/Poppins) (texto general) y [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) (encabezados)

## 📁 Estructura del proyecto

```
VestuarioJacinta/
├── index.html              # Página principal
├── catalogo.html            # Listado de productos
├── detalle.html              # Detalle de un producto
├── carrito.html               # Carrito de compras
├── contacto.html               # Formulario de contacto
├── nosotros.html                # Historia, misión y visión
├── login.html                     # Inicio de sesión y registro
├── blog.html                        # Listado de noticias/blog
├── blogs/
│   ├── blogdetalle1.html
│   └── blogdetalle2.html
├── assets/
│   ├── style.css            # Estilos globales
│   ├── style-*.css          # Estilos específicos por página
│   ├── img/                 # Logo, íconos, fotos
│   ├── productos/            # Imágenes de productos
│   └── video/                 # Videos de la página principal
└── scripts/
    ├── catalogo.js           # Productos, carrito y localStorage
    ├── login.js               # Validación de login/registro (RUT, región/comuna)
    ├── contacto.js              # Validación del formulario de contacto
    └── annio.js                  # Año dinámico en el footer
```

## ✅ Funcionalidades implementadas

- Navegación completa entre todas las páginas mediante hipervínculos
- Catálogo de productos generado dinámicamente con JavaScript
- Carrito de compras persistente con `localStorage` (agregar, quitar cantidad, eliminar, vaciar, total)
- Formulario de **contacto** con validación en tiempo real (nombre, correo, mensaje)
- Formulario de **inicio de sesión** con validación de correo y contraseña
- Formulario de **registro** con:
  - Validación de RUT chileno (dígito verificador)
  - Selección en cascada Región → Comuna
  - Validación de nombre/apellido, correo, dirección y confirmación de contraseña
- Blog con 2 artículos de detalle
- Diseño responsivo con Bootstrap (menú colapsable)
- Footer con año dinámico y enlaces a redes sociales

## 🎨 Paleta de diseño

| Uso | Muestra | Código |
| :--- | :---: | :--- |
| Fondo principal | <img src="https://img.shields.io/badge/-%20-f4efea?style=flat-square" alt="f4efea"> | `#f4efea` |
| Acento (botones) | <img src="https://img.shields.io/badge/-%20-d98a7d?style=flat-square" alt="d98a7d"> | `#d98a7d` |
| Acento secundario | <img src="https://img.shields.io/badge/-%20-8c9a7b?style=flat-square" alt="8c9a7b"> | `#8c9a7b` |
| Texto principal | <img src="https://img.shields.io/badge/-%20-2e2b5f?style=flat-square" alt="2e2b5f"> | `#2e2b5f` |
| Texto secundario | <img src="https://img.shields.io/badge/-%20-8B87A0?style=flat-square" alt="8B87A0"> | `#8B87A0` |
