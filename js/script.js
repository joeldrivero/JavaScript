class Producto {
  constructor(obj) {
    this.id = obj.id;
    this.producto = obj.producto.toUpperCase();
    this.precio = parseFloat(obj.precio);
  }
}
var orden = 0;
var venta = [];
generarCatalogo();
var products = obtenerCatalogo();

const contenedorProductos = document.getElementById("productos");
products.forEach((producto) => {
  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `<div class="card-title">${producto.producto}</div>
  <div class="card-body">PRECIO: $${producto.precio}</div>
  <p>Seleccione la cantidad</p>
  <input class="cantidad" type="number">
  <button id="agregar${producto.id}" onclick="agregarProducto(${producto.id})" class="boton-agregar">Agregar</button>`;
  contenedorProductos.appendChild(div);
});

const agregarAlCarrito = (prodId) => {
  const item = products.find((prod) => prod.id === prodId);
  console.log(item);
};

function obtenerCatalogo() {
  const almacenados = JSON.parse(localStorage.getItem("ListaProductos"));
  const productos = [];

  for (const objeto of almacenados) {
    objeto ? productos.push(new Producto(objeto)) : alert("Catalogo Vacio");
  }

  return productos;
}

function cerrarVenta() {
  var precioFinal = 0;
  for (let i = 0; i < venta.length; i++) {
    precioFinal += venta[i];
  }
  console.log(precioFinal);
  const elementos = document.getElementById("carrito")
  const agregarACarrito = document.createElement("div")
  agregarACarrito.classList.add("card");
  agregarACarrito.innerHTML = `<div class="producto-final">EL PRECIO FINAL ES DE:$ ${precioFinal}</div>`;
  elementos.appendChild(agregarACarrito);

  orden = 0;
  venta = [];
  precioFinal = 0;
  Toastify({
    text: "Venta realizada correctamente ¡Gracias por su compra!",
    duration: 2000,
    gravity: "top",
    position: "center",
  }).showToast();
}
function generarCatalogo() {
  const productosCarrito = [
    { id: 1, producto: "Coca Cola", precio: 130 },
    { id: 2, producto: "Jugo Saborizado", precio: 140 },
    { id: 3, producto: "Cerveza", precio: 200 },
    { id: 4, producto: "Vino", precio: 500 },
    { id: 5, producto: "Fernet", precio: 700 },
    { id: 6, producto: "Agua con Gas", precio: 150 },
    { id: 7, producto: "Agua sin Gas", precio: 150 },
  ];
  const guardarLocal = (clave, valor) => {
    localStorage.setItem(clave, valor);
  };
  guardarLocal("ListaProductos", JSON.stringify(productosCarrito));
}

function agregarProducto(prodId) {
  const item = products.find((prod) => prod.id === prodId);
  let cantidad = document.getElementsByClassName("cantidad")[prodId - 1].value;

  if (cantidad > 0 && item != null) {
    console.log(item);
    const elementos = document.getElementById("carrito")
    const agregarACarrito = document.createElement("div")
    agregarACarrito.classList.add("card");
    agregarACarrito.innerHTML = `<div class="product">PRODUCTO: ${item.producto
      } | PRECIO: $${item.precio} | CANTIDAD: ${cantidad} | PRECIO TOTAL: $${item.precio * cantidad
      }
    <button type="button" value=${orden} onclick="sacarDeCarrito(value)" class="close" aria-label="Close">
    <span aria-hidden="true">&times;</span> 
    </button></div>
  `;
    elementos.appendChild(agregarACarrito);
    venta.push(item.precio * cantidad);
    orden++;
    Toastify({
      text: `Se agregaron ${cantidad} unidades del producto ${item.producto}`,
      duration: 3000,
      gravity: "top",
      position: "center",
    }).showToast();
  }
  else {
    Toastify({
      text: " Por favor, ingrese una cantidad correcta",
      duration: 2000,
      gravity: "top",
      position: "center",
    }).showToast();
  }
}

function vaciarCarrito() {
  var eliminarFinal = document.getElementsByClassName("producto-final");
  var eliminar = document.getElementsByClassName("product");
  while (eliminar.length != 0 || eliminar == null) {
    console.log(eliminar);
    eliminar[0].remove();
  }
  while (eliminarFinal.length != 0) {
    eliminarFinal[0].remove();
  }
  orden = 0;
  venta = [];
  Toastify({
    text: "Carrito vaciado correctamente",
    duration: 1000,
    gravity: "top",
    position: "center",
  }).showToast();

}

function sacarDeCarrito(valor) {
  var eliminar = document.getElementsByClassName("product");
  console.log(venta);
  eliminar[valor].remove();
  Toastify({
    text: "Producto eliminado",
    duration: 1000,
    gravity: "top",
    position: "center",
  }).showToast();
}

function nuevaVenta() {
  var eliminarFinal = document.getElementsByClassName("producto-final");
  var eliminar = document.getElementsByClassName("product");
  while (eliminar.length != 0 || eliminar == null) {
    console.log(eliminar);
    eliminar[0].remove();
  }
  while (eliminarFinal.length != 0) {
    eliminarFinal[0].remove();
  }
  orden = 0;
  venta = [];
  venta.shift();
  orden = 0;
  precioFinal = 0;
}

