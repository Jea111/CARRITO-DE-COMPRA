const productos = [
  { id: 1, nombre: "Pizza", precio: 25 },
  { id: 2, nombre: "Pasta", precio: 16 },
  { id: 3, nombre: "Ensalada", precio: 12 },
  { id: 4, nombre: "hamburguer", precio: 15 },
  { id: 5, nombre: "Add papas a la francesa", precio: 5 },
  { id: 6, nombre: "postre macadamia", precio: 12 },
  { id: 7, nombre: "filet mignon", precio: 30 },
  { id: 8, nombre: "Rib Eye", precio: 70 },
  { id: 9, nombre: "tomahawk", precio: 60 },
  { id: 10, nombre: "bandeja paisa", precio: 30 },
];

const menu = document.getElementById("menu");

productos.forEach((producto) => {
  const divProducto = document.createElement("div");
  divProducto.classList.add("producto");
  divProducto.innerHTML = `
        <h3>${producto.nombre}</h3>
        <p>$${producto.precio}</p>
        <button onclick="agregarAlCarrito(${producto.id})">Añadir al carrito</button>
        
    `;
  menu.appendChild(divProducto);
});
// Eliminar un producto del carrito por índice
function eliminarDelCarrito(index) {
  // Eliminar el producto del carrito
  carrito.splice(index, 1);
  // Volver a mostrar el carrito actualizado
  mostrarCarrito();
}

let carrito = [];

function agregarAlCarrito(id) {
  const producto = productos.find((p) => p.id === id);
  carrito.push(producto);
  mostrarCarrito();
}

// Mostrar el carrito con la opción de eliminar productos
function mostrarCarrito() {
  const cartSection = document.getElementById("cart");
  cartSection.innerHTML = "<h2>Carrito</h2>";

  if (carrito.length === 0) {
    cartSection.innerHTML = "<p>Tu carrito está vacío.</p>";
    return;
  }

  // Mostrar cada producto en el carrito
  carrito.forEach((item, index) => {
    const productoDiv = document.createElement("div");
    productoDiv.classList.add("producto-en-carrito");
    productoDiv.innerHTML = `
            <p>${item.nombre} - $${item.precio}</p>
            <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
        `;
    cartSection.appendChild(productoDiv);
  });

  // Mostrar total
  const total = carrito.reduce((sum, item) => sum + item.precio, 0);
  cartSection.innerHTML += `<p>Total: $${total}</p>`;
}

function agregarAlCarrito(id) {
  const producto = productos.find((p) => p.id === id);
  carrito.push(producto);
  alert(`${producto.nombre} ha sido agregado al carrito`);
  mostrarCarrito();
}

document
  .getElementById("checkoutForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Gracias por tu compra");
    carrito = [];
    mostrarCarrito();
  });

// Función para realizar el pago simulado
function realizarPago(event) {
  event.preventDefault(); // Prevenir el envío del formulario

  // Validar si el carrito está vacío
  if (carrito.length === 0) {
    alert("¡Tu carrito está vacío! Añade productos antes de realizar el pago.");
    return;
  }

  // Validar los campos del formulario de pago
  const cardName = document.getElementById("cardName").value;
  const cardNumber = document.getElementById("cardNumber").value;
  const expiryDate = document.getElementById("expiryDate").value;
  const cvv = document.getElementById("cvv").value;

  if (!cardName || !cardNumber || !expiryDate || !cvv) {
    alert("Por favor, completa todos los campos de la tarjeta.");
    return;
  }

  // Aquí simulamos un pago exitoso
  alert("Pago exitoso! Gracias por tu compra.");

  // Limpiar el carrito después del pago
  carrito = [];
  mostrarCarrito();
  document.getElementById("paymentForm").reset(); // Limpiar el formulario de pago
}

// Asociar la función de pago al evento submit del formulario
document.getElementById("paymentForm").addEventListener("submit", realizarPago);
