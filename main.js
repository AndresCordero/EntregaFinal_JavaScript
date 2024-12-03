
function principal() {
        const productos = [
                /*                 { id: 1, nombre: "Té Verde", precio: 2.00, categoria: "Bebida", disponibilidad: true },
                                { id: 2, nombre: "Croissant", precio: 1.50, categoria: "Panaderia", disponibilidad: true },
                                { id: 3, nombre: "Muffin de Chocolate", precio: 2.00, categoria: "Panaderia", disponibilidad: true },
                                { id: 4, nombre: "Sándwich de Jamón y Queso", precio: 2.50, categoria: "Comida", disponibilidad: true },
                                { id: 5, nombre: "Ensalada César", precio: 4.00, categoria: "Comida", disponibilidad: true },
                                { id: 6, nombre: "Smoothie de Frutas", precio: 2.50, categoria: "Bebida", disponibilidad: true },
                                { id: 7, nombre: "Espresso", precio: 2.00, categoria: "Bebida", disponibilidad: true },
                                { id: 8, nombre: "Donas", precio: 2.50, categoria: "Panaderia", disponibilidad: true },
                                { id: 9, nombre: "Galletas", precio: 1.50, categoria: "Panaderia", disponibilidad: true },
                                { id: 10, nombre: "Quesadilla", precio: 4.50, categoria: "Comida", disponibilidad: true },
                                { id: 11, nombre: "Empanadas", precio: 2.50, categoria: "Comida", disponibilidad: true },
                                { id: 12, nombre: "Pasta", precio: 4.50, categoria: "Comida", disponibilidad: true },
                                { id: 13, nombre: "Café Americano", precio: 2.50, categoria: "Bebida", disponibilidad: true },
                                { id: 14, nombre: "Café Latte", precio: 3.00, categoria: "Bebida", disponibilidad: true }, */


                { id: 1, nombre: "Té Verde", precio: 2.00, categoria: "Bebida", disponibilidad: true, rutaImagen: "te-verde.jpeg" },
                { id: 2, nombre: "Croissant", precio: 1.50, categoria: "Panaderia", disponibilidad: true, rutaImagen: "criossant.jpg" },
                { id: 3, nombre: "Muffin de Chocolate", precio: 2.00, categoria: "Panaderia", disponibilidad: false, rutaImagen: "muffins-chocolate.webp" },
                { id: 4, nombre: "Sándwich de Jamón y Queso", precio: 2.50, categoria: "Comida", disponibilidad: true, rutaImagen: "sandwitch.jpg" },
                { id: 5, nombre: "Ensalada César", precio: 4.00, categoria: "Comida", disponibilidad: true, rutaImagen: "ensalada-cesar.webp" },
        ];

        crearTarjetasProductos(productos)


}

principal()

function crearTarjetasProductos(productos) {
        let contenedor = document.getElementById("contenedorProductos")
        
        productos.forEach(producto => {
                let mensaje = producto.disponibilidad
                if (producto.disponibilidad === true) {
                        mensaje = "El producto esta disponible"
                } else  mensaje = "Producto NO disponible"

                contenedor.innerHTML += `
                <div class=producto>
                        <h3>${producto.nombre}</h3>
                        <img src="./src/images/${producto.rutaImagen}" />
                        <p> ${mensaje}
                        <div>
                        <button>Agregar al carrito </button>
                        </div>
                </div>        
                `
        })
}


//Ejemplo Boton al darle click
let titulo = document.getElementById("Titulo")
titulo.className ="Verde"

let boton = document.getElementById("botonPrueba")
/* boton.addEventListener("mousemove", funcionAlgo) */
boton.onclick = funcionAlgo

function funcionAlgo () {
        alert("Le diste click")
}

let cajita = document.addEventListener("mouseover", funcionMouse)

function funcionMouse () {
        console.log("Estoy moviendo")
}

