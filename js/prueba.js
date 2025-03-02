swal(" BIENVENIDO A LOS SAZONES DE LIBIA 🥩🥓");
const carrito = [];

// Agregar productos al carrito
const productos = document.querySelectorAll(".producto");
productos.forEach((producto) => {
  producto.querySelector(".add-to-cart").addEventListener("click", () => {
    const nombre = producto.dataset.nombre;
    const precio = parseFloat(producto.dataset.precio);
    carrito.push({ nombre, precio });
    mostrarCarrito();
  });
});

// Mostrar carrito
function mostrarCarrito() {
  const carritoList = document.getElementById("carrito-list");
  carritoList.innerHTML = "";
  let total = 0;
  carrito.forEach((item, index) => {
    const itemElement = document.createElement("li");
    itemElement.innerHTML = `
      ${item.nombre} - $${item.precio.toFixed(2)}
      <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
    `;
    carritoList.appendChild(itemElement);
    total += item.precio;
  });
  document.getElementById("total").textContent = total.toFixed(2);
}

// Eliminar productos del carrito
function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  mostrarCarrito();
}

// Realizar pago simulado

function realizarPago() {
  if (carrito.length === 0) {
    swal("¡TU CARRITO ESTÁ VACIO \n AGREGA PRODUCTOS.😣");
  } else {
    swal({
      title: "PRODUCTO CONFIRMADO🎇",
      text: "TU PEDIDO ESTARÁ LISTO PARA SER ENVIADO\n EN 30 MINUTOS",
      icon: "success",
      button: " ¡CERRAR!",
    });

    carrito.length = 0; // Limpiar carrito
    mostrarCarrito();
  }
}
