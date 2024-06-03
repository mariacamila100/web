let loadMoreBtn=document.querySelector('#load-more');
let currentItem=8;

loadMoreBtn.onclick=()=> {
    let boxes =[...document.querySelectorAll('box-container .box')]
    for(var i=document; i< currentItem+4; i++){
        boxes[i].style.display='inline-block';
    }


    currentItem +=4;
    if(currentItem >= boxes.length){
        loadMoreBtn.style.display='none'
    }
}
    

const carrito = document.getElementById('carrito');
const listaCarrito = document.getElementById('lista-carrito');
const vaciarCarritoBtn = document.getElementById('vaciar_carrito'); // Corregido aquí
const productos = document.getElementById('lista-1');

cargarEventListener();

function cargarEventListener() {
    // Agregar producto al hacer clic
    productos.addEventListener('click', comprarProducto);

    // Eliminar producto del carrito
    carrito.addEventListener('click', eliminarProducto);

    // Vaciar carrito
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
    console.log("Evento de vaciar carrito agregado correctamente");
    console.log(productos);

}


function comprarProducto(e) {
    e.preventDefault();

    // Delegación para agregar al carrito
    if (e.target.classList.contains('agregar-carrito')) {
        const productoSeleccionado = e.target.parentElement.parentElement;
        obtenerInfoProducto(productoSeleccionado);
    }
}
// Definimos la función para agregar productos al carrito
function agregarAlCarrito(e) {
    // Evitamos el comportamiento predeterminado del botón
    e.preventDefault();

    // Obtenemos la información del producto
    const producto = e.target.parentElement;
    const imagen = producto.querySelector('img').src;
    const nombre = producto.querySelector('h3').textContent;
    const precio = producto.querySelector('p').textContent;

    // Creamos una fila para el producto en el carrito
    const fila = document.createElement('tr');
    fila.innerHTML = `
        <td><img src="${imagen}" width="50"></td>
        <td>${nombre}</td>
        <td>${precio}</td>
    `;

    // Agregamos la fila al cuerpo de la tabla del carrito
    listaCarrito.appendChild(fila);

    // Mostramos un mensaje de confirmación
    mostrarMensaje(`${nombre} se ha agregado al carrito`);
}


function obtenerInfoProducto(producto) {
    // Crear un objeto con la información del producto seleccionado
    const productoInfo = {
        imagen: producto.querySelector('img').src,
        nombre: producto.querySelector('h3').textContent,
        precio: producto.querySelector('.precio').textContent,
    };

    // Insertar el producto en el carrito
    insertarProductoCarrito(productoInfo);
}

function insertarProductoCarrito(producto) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td><img src="${producto.imagen}" width="50"></td>
        <td>${producto.nombre}</td>
        <td>${producto.precio}</td>
        <td><a href="#" class="borrar-producto">X</a></td>
    `;
    listaCarrito.appendChild(row);
}

function eliminarProducto(e) {
    e.preventDefault();

    if (e.target.classList.contains('borrar-producto')) {
        e.target.parentElement.parentElement.remove();
    }
}

function vaciarCarrito() {
    // Eliminar todos los productos del carrito
    while (listaCarrito.firstChild) {
        listaCarrito.removeChild(listaCarrito.firstChild);
    }
}
