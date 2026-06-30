const searchBox = document.querySelector(".search");

if (searchBox) {
  searchBox.addEventListener("keyup", function () {
    const texto = searchBox.value.toLowerCase();

    const productos = document.querySelectorAll(".producto");

    productos.forEach(producto => {
      const nombre = producto.textContent.toLowerCase();

      producto.style.display = nombre.includes(texto)
        ? "block"
        : "none";
    });
  });
}


const productos = document.querySelectorAll(".producto");

searchBox.addEventListener("keyup", function() {
  const texto = searchBox.value.toLowerCase();

  productos.forEach(producto => {
    const nombre = producto.textContent.toLowerCase();

    if (nombre.includes(texto)) {
      producto.style.display = "block";
    } else {
      producto.style.display = "none";
    }
  });
});
``


document.addEventListener("DOMContentLoaded", initApp);


const IVA_RATE = 0.13;


// =====================
// INICIO
// =====================

function initApp(){

    initMenu();

    initCarrusel();

    initCarrito();

}



// =====================
// MENU HAMBURGUESA
// =====================

function initMenu(){

    const hamburguesa =
    document.querySelector(".hamburguesa");


    const menu =
    document.querySelector(".menu-container");


    if(!hamburguesa || !menu){
        return;
    }


    hamburguesa.addEventListener("click",()=>{

        menu.classList.toggle("active");

    });

}




// =====================
// CARRUSEL
// =====================

function initCarrusel(){

    const slides =
    document.querySelectorAll(".slide");


    if(slides.length === 0){
        return;
    }


    let indice = 0;


    slides.forEach((slide,i)=>{

        slide.style.display =
        i === 0 ? "block" : "none";

    });



    setInterval(()=>{


        slides[indice].style.display="none";


        indice =
        (indice + 1) % slides.length;



        slides[indice].style.display="block";


    },4000);

}





// =====================
// CARRITO
// =====================


function initCarrito(){


    renderCarrito();



    document.addEventListener("click",(e)=>{



        // =====================
        // AGREGAR PRODUCTOS
        // =====================


        const botonAgregar =
        e.target.closest(".btn-agregar");



        if(botonAgregar){



            const producto =
            botonAgregar.closest(".producto");



            const nombre =
            producto.querySelector("h3").textContent;



            const precio =
            parseInt(

            producto
            .querySelector("p")
            .textContent
            .replace(/[^\d]/g,"")

            );



            agregarAlCarrito(
                nombre,
                precio
            );



            alert("Producto agregado 🛒");



            renderCarrito();


        }





        // =====================
        // SUMAR
        // =====================


        if(e.target.classList.contains("sumar")){


            let carrito =
            obtenerCarrito();


            let index =
            Number(e.target.dataset.index);



            carrito[index].cantidad++;



            guardarCarrito(carrito);


            renderCarrito();


        }





        // =====================
        // RESTAR
        // =====================


        if(e.target.classList.contains("restar")){


            let carrito =
            obtenerCarrito();


            let index =
            Number(e.target.dataset.index);



            if(carrito[index].cantidad > 1){

                carrito[index].cantidad--;

            }else{

                carrito.splice(index,1);

            }



            guardarCarrito(carrito);


            renderCarrito();


        }





        // =====================
        // ELIMINAR
        // =====================


        if(e.target.classList.contains("btn-eliminar")){


            let carrito =
            obtenerCarrito();



            let index =
            Number(e.target.dataset.index);



            carrito.splice(index,1);



            guardarCarrito(carrito);



            renderCarrito();


        }




        // =====================
        // FINALIZAR COMPRA
        // =====================


        if(e.target.classList.contains("btn-finalizar")){


            let carrito =
            obtenerCarrito();



            if(carrito.length === 0){


                alert("El carrito está vacío 🛒");

                return;

            }



            alert("Compra realizada con éxito 💖");



            localStorage.removeItem("carritoCharlyRose");



            renderCarrito();



        }



    });



}






// =====================
// AGREGAR AL CARRITO
// =====================


function agregarAlCarrito(nombre,precio){



    let carrito =
    obtenerCarrito();



    let existe =
    carrito.find(item=> item.nombre === nombre);



    if(existe){


        existe.cantidad++;


    }else{


        carrito.push({

            nombre:nombre,

            precio:precio,

            cantidad:1

        });


    }



    guardarCarrito(carrito);



}






// =====================
// STORAGE
// =====================


function obtenerCarrito(){


    return JSON.parse(

        localStorage.getItem("carritoCharlyRose")

    ) || [];


}




function guardarCarrito(carrito){


    localStorage.setItem(

        "carritoCharlyRose",

        JSON.stringify(carrito)

    );


}






// =====================
// MOSTRAR CARRITO
// =====================


function renderCarrito(){


    const lista =
    document.getElementById("lista-carrito");



    if(!lista){

        return;

    }



    let carrito =
    obtenerCarrito();



    lista.innerHTML="";



    if(carrito.length === 0){


        lista.innerHTML =

        `<p class="carrito-vacio">
        Tu carrito está vacío
        </p>`;



        actualizarTotales();


        return;

    }





    carrito.forEach((item,index)=>{


        lista.innerHTML += `


        <div class="item-carrito">


            <p>${item.nombre}</p>


            <p>
            ₡${item.precio.toLocaleString()}
            </p>


            <button 
            class="restar"
            data-index="${index}">
            -
            </button>


            <span>
            ${item.cantidad}
            </span>


            <button 
            class="sumar"
            data-index="${index}">
            +
            </button>



            <button 
            class="btn-eliminar"
            data-index="${index}">
            ✕
            </button>



        </div>


        `;


    });



    actualizarTotales();



}





// =====================
// TOTALES
// =====================


function actualizarTotales(){

    let carrito = obtenerCarrito();

    let subtotal = carrito.reduce(
        (total, item) => total + (item.precio * item.cantidad),
        0
    );

    let iva = subtotal * IVA_RATE;
    let total = subtotal + iva;

    const subtotalHTML = document.getElementById("subtotal");
    const ivaHTML = document.getElementById("iva");
    const totalHTML = document.getElementById("total");

    const formatoCRC = new Intl.NumberFormat("es-CR", {
        style: "currency",
        currency: "CRC",
        minimumFractionDigits: 0
    });

    if(subtotalHTML){
        subtotalHTML.textContent = formatoCRC.format(subtotal);
    }

    if(ivaHTML){
        ivaHTML.textContent = formatoCRC.format(Math.round(iva));
    }

    if(totalHTML){
        totalHTML.textContent = formatoCRC.format(Math.round(total));
    }

}

