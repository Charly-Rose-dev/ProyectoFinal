document.addEventListener("DOMContentLoaded", () => {
  // Ejecuta el código cuando el HTML ya está cargado

  let index = 0;

  const slides = document.querySelectorAll(".slide"); // lista de slides
  const container = document.querySelector(".slides"); // contenedor que se mueve

  // Verificación por si algo falla
  if (!container || slides.length === 0) {
    console.error("No se encontraron los elementos del carrusel");
    return;
  }

  function cambiarSlide() {
    index++;

    // Reinicia al llegar al final
    if (index >= slides.length) {
      index = 0;
    }

    // Movimiento horizontal del carrusel
    container.style.transform = `translateX(-${index * 100}%)`;
  }

  // Intervalo automático
  setInterval(cambiarSlide, 3000);
});