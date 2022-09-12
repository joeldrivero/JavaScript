class Producto {
  constructor(id, producto, precio) {
    this.id = id;
    this.producto = producto;
    this.precio = precio;
  }
}
let repetir = "";
let nuevaVenta = "";
var repeticiones = 0;
var montoParcial = 0;
var montoFinal = 0;
var precioProducto = 0;
const producto1 = new Producto(1, "Coca Cola", 130);
const producto2 = new Producto(2, "Jugo Saborizado", 140);
const producto3 = new Producto(3, "Cerveza", 200);

var catalogo = [producto1, producto2, producto3];

do {
  debugger;
  var producto = catalogo[pedirProducto(catalogo)]["precio"];

  while (producto == undefined) {
    producto = catalogo[pedirProducto(catalogo)]["precio"];
  }

  if (producto == undefined) {
    alert("Producto Invalido - Venta Anulada");
    break;
  }

  while (repetir != null) {
    var cantidad = parseInt(prompt("Seleccione una cantidad"));

    if (cantidad > 0) {
      if (repeticiones > 0) {
        montoParcial += producto * cantidad;
      } else {
        montoParcial = producto * cantidad;
      }
    } else {
      alert("Cantidad Invalida");
    }
    alert("Monto actual: $" + montoParcial);
    repetir = prompt(
      "Si deseea agregar otro producto oprima en Aceptar, de lo contrario, presione ESC o Cancelar"
    );
    if (repetir == null) {
      break;
    } else {
      producto = catalogo[pedirProducto(catalogo)]["precio"];
      repeticiones++;
    }
  }

  var pago = prompt(
    "Ingrese metodo de pago:\n 1: EFECTIVO \n 2: TRANSFERENCIA \n 3: TARJETA \n"
  );

  montoFinal = metodoDePago(montoParcial, pago);

  while (montoFinal == undefined) {
    var pago = prompt(
      "Ingrese metodo de pago:\n 1: EFECTIVO \n 2: TRANSFERENCIA \n 3: TARJETA \n"
    );
    montoFinal = metodoDePago(montoParcial, pago);
  }
  alert("El monto final a pagar es de: $" + montoFinal);

  nuevaVenta = prompt(
    "Si desea realizar una nueva venta oprima en Aceptar, de lo contrario, presione ESC o Cancelar"
  );

  repeticiones = 0;
  montoParcial = 0;
  montoFinal = 0;
} while (nuevaVenta != null);

function metodoDePago(montoParcial, pago) {
  switch (pago) {
    case "1":
      return montoParcial;
      break;
    case "2":
      return montoParcial;
      break;
    case "3":
      return cuotas(montoParcial);
      break;
    default: {
      alert("ERROR: Metodo de Pago no valido");
      break;
    }
  }
}

function pedirProducto(catalogo) {
  if (catalogo.length > 0) {
    let codProducto = parseInt(
      prompt(
        "Seleccione un producto:\n1) " +
          catalogo[0]["producto"] +
          ": $" +
          catalogo[0]["precio"] +
          "\n" +
          "2) " +
          catalogo[1]["producto"] +
          ": $" +
          catalogo[1]["precio"] +
          "\n" +
          "3) " +
          catalogo[2]["producto"] +
          ": $" +
          catalogo[2]["precio"]
      )
    );
    switch (codProducto) {
      case 1:
        return (codProducto = 0);
        break;
      case 2:
        return (codProducto = 1);
        break;
      case 3:
        return (codProducto = 2);
        break;
      default: {
        alert("ERROR: Producto no valido");
        break;
      }
    }
  } else {
    alert("CATALOGO INVALIDO");
  }
}

function cuotas(montoDePago) {
  var cantidad = prompt(
    "Seleccione la cantidad de cuotas:\n 1) 1 CUOTA \n 2) 3 CUOTAS \n 3) 6 CUOTAS \n 4) 12 CUOTAS"
  );

  switch (cantidad) {
    case "1":
      return montoDePago;
      break;
    case "2":
      return calculo3Cuotas(montoDePago);
      break;
    case "3":
      return calculo6Cuotas(montoDePago);
      break;
    case "4":
      return calculo12Cuotas(montoDePago);
      break;
    default:
      alert("ERROR: Opcion de Cuotas INVALIDA");
      break;
  }
}

function calculo3Cuotas(montoDePago) {
  let recargo = 1.07;
  var valorCuota = (montoParcial * recargo) / 3;
  alert("El valor por cuota sera de: $" + valorCuota);
  return (montoDePago *= recargo);
}

function calculo6Cuotas(montoDePago) {
  let recargo = 1.12;
  var valorCuota = (montoParcial * recargo) / 6;
  alert("El valor por cuota sera de: $" + valorCuota);
  return (montoDePago *= recargo);
}

function calculo12Cuotas(montoDePago) {
  let recargo = 1.15;
  var valorCuota = (montoParcial * recargo) / 12;
  alert("El valor por cuota sera de: $" + valorCuota);
  return (montoDePago *= recargo);
} 
