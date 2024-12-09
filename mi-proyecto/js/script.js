// Simulación de datos iniciales
let productos = [
    { id: 1, nombre: "Laptop", precio: 1200500, categoria: "Electrónica" },
    { id: 2, nombre: "Smartphone", precio: 800000, categoria: "Electrónica" }
];
let currentId = productos.length;
let productoActual = null; // Almacena el producto que se está editando

// Función para formatear el precio a pesos colombianos
function formatoMoneda(valor) {
    return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(valor);
}

// Función para renderizar la tabla de productos
function renderProductos() {
    const tbody = document.getElementById('productTable').querySelector('tbody');
    tbody.innerHTML = ''; // Limpia la tabla antes de renderizar
    productos.forEach(producto => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${producto.id}</td>
            <td>${producto.nombre}</td>
            <td>${formatoMoneda(producto.precio)}</td>
            <td>${producto.categoria}</td>
            <td>
                <button class="btn btn-update" onclick="editarProducto(${producto.id})">Editar</button>
                <button class="btn btn-delete" onclick="eliminarProducto(${producto.id})">Eliminar</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// Función para agregar un producto
document.getElementById('productForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que se recargue la página
    const nombre = document.getElementById('nombre').value;
    const precio = parseFloat(document.getElementById('precio').value);
    const categoria = document.getElementById('categoria').value;

    // Verifica si los datos son correctos antes de agregar el producto
    if (nombre && !isNaN(precio) && categoria) {
        productos.push({ id: ++currentId, nombre, precio, categoria });
        renderProductos();
    }

    // Limpiar formulario
    e.target.reset();
});

// Función para eliminar un producto
function eliminarProducto(id) {
    productos = productos.filter(producto => producto.id !== id);
    renderProductos();
}

// Función para editar un producto
function editarProducto(id) {
    productoActual = productos.find(producto => producto.id === id);
    if (productoActual) {
        // Mostrar formulario de actualización con los valores actuales
        document.getElementById('updateNombre').value = productoActual.nombre;
        document.getElementById('updatePrecio').value = productoActual.precio;
        document.getElementById('updateCategoria').value = productoActual.categoria;
        document.getElementById('updateForm').style.display = 'block';
    }
}

// Función para actualizar un producto
document.getElementById('updateForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que se recargue la página

    const nombre = document.getElementById('updateNombre').value;
    const precio = parseFloat(document.getElementById('updatePrecio').value);
    const categoria = document.getElementById('updateCategoria').value;

    // Verifica si los datos son correctos antes de actualizar el producto
    if (productoActual && nombre && !isNaN(precio) && categoria) {
        // Actualizar los datos del producto
        productoActual.nombre = nombre;
        productoActual.precio = precio;
        productoActual.categoria = categoria;
        renderProductos();

        // Ocultar formulario de actualización
        document.getElementById('updateForm').style.display = 'none';
    }
});

// Función para cancelar la actualización
function cancelarActualizacion() {
    document.getElementById('updateForm').style.display = 'none';
}

// Llamar a la función para renderizar productos al cargar la página
document.addEventListener('DOMContentLoaded', renderProductos);
