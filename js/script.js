class Producto {
  constructor(obj) {
    this.producto = obj.producto.toUpperCase();
    this.precio = parseFloat(obj.precio);
  }
}

var venta = [];
generarCatalogo();
var products = obtenerCatalogo();
console.log(products);

function generarCatalogo() {
  const productosCarrito = [
    { id: 1, producto: "Coca Cola", precio: 130 },
    { id: 2, producto: "Jugo Saborizado", precio: 140 },
    { id: 3, producto: "Cerveza", precio: 200 },
  ];
  const guardarLocal = (clave, valor) => {
    localStorage.setItem(clave, valor);
  };
  guardarLocal("ListaProductos", JSON.stringify(productosCarrito));
}

function obtenerCatalogo() {
  const almacenados = JSON.parse(localStorage.getItem("ListaProductos"));
  const productos = [];

  for (const objeto of almacenados) {
    productos.push(new Producto(objeto));
  }

  return productos;
}

function cerrarVenta(venta){
  var precioFinal = 0;
  for(let i=0;i<venta.length;i++){
    precioFinal+=venta[i];
  }
  console.log(precioFinal);
  var carrito = document.querySelector(".carrito");

  const agregarACarrito = document.createElement("div");
  agregarACarrito.innerHTML = `<br><div class="product">EL PRECIO FINAL ES DE:$ ${precioFinal}</div>`;
  carrito.appendChild(agregarACarrito);
  orden=0;
  venta = [];

}

function agregarProducto(id) {
  var orden = 0;
  let producto = products[id];
  let cantidad = document.getElementsByClassName("cantidad")[id].value;
  validarCantidad(cantidad);
  console.log(producto.producto);

  var carrito = document.querySelector(".carrito");

  const agregarACarrito = document.createElement("div");
  agregarACarrito.innerHTML = `<div class="product">PRODUCTO: ${producto.producto} | PRECIO: $${producto.precio} | CANTIDAD: ${cantidad} | PRECIO TOTAL:$${producto.precio*cantidad}</div>
  <button type="button" value=${orden} onclick="sacarDeCarrito(value)" class="close" aria-label="Close">
  <span aria-hidden="true">&times;</span> 
  </button>`;
  carrito.appendChild(agregarACarrito);
  venta.push(producto.precio*cantidad);
  orden++;

}

function vaciarCarrito(){
  debugger;
  var eliminar = document.getElementsByClassName("product");
  var eliminarBoton = document.getElementsByClassName("close");
while(eliminar.length!=0){
  eliminar[0].remove();
  eliminarBoton[0].remove();
}

  orden=0;
  venta = [];
}

function sacarDeCarrito(valor) {
  var eliminar = document.getElementsByClassName("product");
  var eliminarBoton = document.getElementsByClassName("close");
  console.log(valor);
  eliminar[valor].remove();
  eliminarBoton[valor].remove();

}

function validarCantidad(cantidad) {
  console.log(cantidad);
}

