
function principal() {
        const productos = [
                { id: 1, nombre: "Té Verde", precio: 2.00, categoria: "Bebida", disponibilidad: true, rutaImagen: "te-verde.jpeg" },
                { id: 2, nombre: "Croissant", precio: 1.50, categoria: "Panaderia", disponibilidad: true, rutaImagen: "criossant.jpg" },
                { id: 3, nombre: "Muffin de Chocolate", precio: 2.00, categoria: "Panaderia", disponibilidad: false, rutaImagen: "muffins-chocolate.webp" },
                { id: 4, nombre: "Sándwich de Jamón y Queso", precio: 2.50, categoria: "Comida", disponibilidad: true, rutaImagen: "sandwitch.jpg" },
                { id: 5, nombre: "Ensalada César", precio: 4.00, categoria: "Comida", disponibilidad: true, rutaImagen: "ensalada-cesar.webp" },
        ];

        // Cargar el carrito desde el almacenamiento local (si existe)
        cargarCarrito();

        crearTarjetasProductos(productos);
}

function crearTarjetasProductos(productos) {
        let contenedor = document.getElementById("contenedorProductos");

        productos.forEach(producto => {
                let mensaje = producto.disponibilidad ? "El producto está disponible" : "Producto NO disponible";

                contenedor.innerHTML += `
                <div class="producto" id="producto-${producto.id}">
                    <h3>${producto.nombre}</h3>
                    <img src="./src/images/${producto.rutaImagen}" />
                    <p>${mensaje}</p>
                    <div>
                        <button class="agregarCarrito" data-id="${producto.id}" ${!producto.disponibilidad ? 'disabled' : ''}>Agregar al carrito</button>
                    </div>
                </div>
            `;
        });

        // Añadir los event listeners a los botones "Agregar al carrito"
        document.querySelectorAll('.agregarCarrito').forEach(boton => {
                boton.addEventListener('click', agregarAlCarrito);
        });
}

// Función para agregar al carrito
function agregarAlCarrito(event) {
        const productoId = parseInt(event.target.getAttribute("data-id"));
        const producto = obtenerProductoPorId(productoId);

        // Agregar el producto al carrito
        let carrito = obtenerCarrito();
        let productoEnCarrito = carrito.find(item => item.id === productoId);

        if (productoEnCarrito) {
                productoEnCarrito.cantidad += 1;
        } else {
                carrito.push({ ...producto, cantidad: 1 });
        }

        // Guardar el carrito en localStorage
        localStorage.setItem('carrito', JSON.stringify(carrito));

        // Actualizar la vista del carrito
        actualizarCarrito();
}

// Obtener un producto por su id
function obtenerProductoPorId(id) {
        const productos = [
                { id: 1, nombre: "Té Verde", precio: 2.00, categoria: "Bebida", disponibilidad: true, rutaImagen: "te-verde.jpeg" },
                { id: 2, nombre: "Croissant", precio: 1.50, categoria: "Panaderia", disponibilidad: true, rutaImagen: "criossant.jpg" },
                { id: 3, nombre: "Muffin de Chocolate", precio: 2.00, categoria: "Panaderia", disponibilidad: false, rutaImagen: "muffins-chocolate.webp" },
                { id: 4, nombre: "Sándwich de Jamón y Queso", precio: 2.50, categoria: "Comida", disponibilidad: true, rutaImagen: "sandwitch.jpg" },
                { id: 5, nombre: "Ensalada César", precio: 4.00, categoria: "Comida", disponibilidad: true, rutaImagen: "ensalada-cesar.webp" },
        ];

        return productos.find(producto => producto.id === id);
}

// Obtener el carrito del almacenamiento local
function obtenerCarrito() {
        const carrito = JSON.parse(localStorage.getItem('carrito'));
        return carrito ? carrito : [];
}

// Actualizar la vista del carrito
function actualizarCarrito() {
        let carrito = obtenerCarrito();
        let carritoContenedor = document.getElementById("carritoContenedor");
        carritoContenedor.innerHTML = ""; // Limpiar carrito

        if (carrito.length === 0) {
                carritoContenedor.innerHTML = "<p>El carrito está vacío.</p>";
        } else {
                let total = 0;
                carrito.forEach(item => {
                        carritoContenedor.innerHTML += `
                    <div class="carrito-item">
                        <h4>${item.nombre}</h4>
                        <p>Cantidad: ${item.cantidad}</p>
                        <p>Precio: $${(item.precio * item.cantidad).toFixed(2)}</p>
                    </div>
                `;
                        total += item.precio * item.cantidad;
                });

                carritoContenedor.innerHTML += `<p>Total: $${total.toFixed(2)}</p>`;
        }
}

// Cargar el carrito en la página al inicio
function cargarCarrito() {
        actualizarCarrito();
}

principal();

