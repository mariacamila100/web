let carrito = []; // Lista para almacenar los productos en el carrito

function agregarAlCarrito(id, nombre, precio) {
    // Agregar el producto al carrito
    carrito.push({ id: id, nombre: nombre, precio: precio });

    // Actualizar la visualización del carrito
    mostrarCarrito();
}

function mostrarCarrito() {
    let listaCarrito = document.getElementById('lista-carrito');
    listaCarrito.innerHTML = ''; // Limpiar el contenido actual del carrito

    // Recorrer todos los productos en el carrito y agregarlos a la lista del carrito
    carrito.forEach(producto => {
        let fila = document.createElement('tr');
        fila.innerHTML = `
            <td><img src="../Img/${producto.id}.jpg" alt="${producto.nombre}" width="50"></td>
            <td>${producto.nombre}</td>
            <td>$${producto.precio}</td>
        `;
        listaCarrito.appendChild(fila);
    });

    // Actualizar el contador del carrito
    document.getElementById('contador-carrito').innerText = carrito.length;
}
