document.addEventListener("DOMContentLoaded", () => {

  console.log("SCRIPT CARGADO");

  // =====================
  // CARRUSEL
  // =====================

  const slides = document.querySelector(".slides");
  const slide = document.querySelectorAll(".slide");

  if (slides && slide.length > 0) {

    let index = 0;

    function moverCarrusel() {
      index++;

      if (index >= slide.length) {
        index = 0;
      }

      slides.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(moverCarrusel, 4000);
  }

  // =====================
  // MENÚ HAMBURGUESA
  // =====================

  const hamburguesa = document.querySelector(".hamburguesa");
  const menu = document.querySelector(".menu-container");

  if (hamburguesa && menu) {
    hamburguesa.addEventListener("click", () => {
      menu.classList.toggle("active");
    });
  }

  // =====================
  // CARRITO DE COMPRAS
  // =====================

  const btnAgregar = document.querySelectorAll(".producto button");
  const listaCarrito = document.getElementById("lista-carrito");
  const subtotalElem = document.getElementById("subtotal");
  const ivaElem = document.getElementById("iva");
  const totalElem = document.getElementById("total");

  let carrito = [];

  document.addEventListener("DOMContentLoaded", () => {

    const carritoGuardado = localStorage.getItem("carritoCharlyRose");

    if (carritoGuardado) {
      carrito = JSON.parse(carritoGuardado);
      actualizarCarritoHTML();
    }

  });

  btnAgregar.forEach(btn => {
    btn.addEventListener("click", function () {

      const producto = this.parentElement;

      const nombre = producto.querySelector("h3").textContent;

      const precioTexto = producto.querySelector("p").textContent;

      const precio = parseInt(precioTexto.replace(/[^0-9]/g, ""));

      const existe = carrito.find(item => item.nombre === nombre);

      if (existe) {
        existe.cantidad++;
      } else {
        carrito.push({
          nombre,
          precio,
          cantidad: 1
        });
      }

      guardarCarrito();
      actualizarCarritoHTML();

    });
  });

  function actualizarCarritoHTML() {

    if (!listaCarrito) return;

    listaCarrito.innerHTML = "";

    if (carrito.length === 0) {
      listaCarrito.innerHTML = '<p class="carrito-vacio">Tu carrito está vacío</p>';
      calcularTotales();
      return;
    }

    carrito.forEach((item, index) => {

      const div = document.createElement("div");
      div.className = "item-carrito";

      div.innerHTML = `
        <div>
          <p>${item.nombre}</p>
          <p>₡${item.precio.toLocaleString()}</p>
        </div>

        <div class="acciones">
          <button class="btn-cantidad restar" data-index="${index}">-</button>
          <span>${item.cantidad}</span>
          <button class="btn-cantidad sumar" data-index="${index}">+</button>
          <button class="btn-eliminar" data-index="${index}">✕</button>
        </div>
      `;

      listaCarrito.appendChild(div);
    });

    eventosBotones();
    calcularTotales();
  }

  function eventosBotones() {

    document.querySelectorAll(".btn-cantidad.sumar").forEach(btn => {
      btn.addEventListener("click", function () {
        const i = parseInt(this.dataset.index);
        carrito[i].cantidad++;
        guardarCarrito();
        actualizarCarritoHTML();
      });
    });

    document.querySelectorAll(".btn-cantidad.restar").forEach(btn => {
      btn.addEventListener("click", function () {
        const i = parseInt(this.dataset.index);

        if (carrito[i].cantidad > 1) {
          carrito[i].cantidad--;
        } else {
          carrito.splice(i, 1);
        }

        guardarCarrito();
        actualizarCarritoHTML();
      });
    });

    document.querySelectorAll(".btn-eliminar").forEach(btn => {
      btn.addEventListener("click", function () {
        const i = parseInt(this.dataset.index);
        carrito.splice(i, 1);
        guardarCarrito();
        actualizarCarritoHTML();
      });
    });
  }

  function calcularTotales() {

    let subtotal = 0;

    carrito.forEach(item => {
      subtotal += item.precio * item.cantidad;
    });

    const iva = subtotal * 0.13;
    const total = subtotal + iva;

    if (subtotalElem) subtotalElem.textContent = subtotal.toLocaleString();
    if (ivaElem) ivaElem.textContent = Math.round(iva).toLocaleString();
    if (totalElem) totalElem.textContent = Math.round(total).toLocaleString();

  }

  function guardarCarrito() {
    localStorage.setItem("carritoCharlyRose", JSON.stringify(carrito));
  }

});