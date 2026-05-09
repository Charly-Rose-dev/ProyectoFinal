const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slide");

let index = 0;

function moverCarrusel() {
  index++;

  if (index >= slide.length) {
    index = 0;
  }

  slides.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(moverCarrusel, 4000);


const hamburguesa = document.querySelector(".hamburguesa");
const menu = document.querySelector(".menu-container");

hamburguesa.addEventListener("click", () => {

  menu.classList.toggle("active");

});