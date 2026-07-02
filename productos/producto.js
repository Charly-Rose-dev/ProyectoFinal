const parametros = new URLSearchParams(window.location.search);
const id = parametros.get("id");


const productos = {
     1: {
        nombre: "Set de Panty Scrunchie",
        categoria: "Lencería",
        precio: "₡12.000",
        imagen: "Imagenes/lenceria/Calzon1.png",
        descripcion: "Set de panty tipo scrunchie, comodo y coqueto.",
        tallas: ["S", "M", "L"]
    },

    2: {
        nombre: "Set de Panty Encaje",
        categoria: "Lencería",
        precio: "₡18.000",
        imagen: "Imagenes/lenceria/calzon2.png",
        descripcion: "Set de panty, estampado de flored veraniegas, bordado en scrunchie: elegancia, picardia y comodidad.",
        tallas: ["S", "M", "L"]
    },

    3: {
        nombre: "Conjunto Romance",
        categoria: "Lenceria",
        precio: "₡16.500",
        imagen: "Imagenes/lenceria/calzon4.png",
        descripcion: "Hermoso conjunto de lencería, inspirado en el romance y el amor. Elaborado a partir de fibras de algodón.",
        tallas: ["S", "M", "L"]
    },

     4: {
        nombre: "Conjunto Elegance",
        categoria: "Lenceria",
        precio: "₡15.000",
        imagen: "Imagenes/lenceria/Conjunto1.png",
        descripcion: "Conjunto en colores blancos y rosas, delicado y armonioso. Descubre la elegancia con este conjunto.",
        tallas: ["S", "M", "L"]
    },

     5: {
        nombre: "Conjunto Rosé",
        categoria: "Lenceria",
        precio: "₡17.000",
        imagen: "Imagenes/lenceria/Conjunto2.png",
        descripcion: "Descubre tu feminidad con este femenino, delicado y silvestre conjunto en color rosa.",
        tallas: ["S", "M", "L"]

     },

     6: {
       nombre: "Set Deluxe",
       categoria: "Lenceria",
       precio: "₡17.000",
       imagen: "Imagenes/lenceria/set2sosten.png",
       descripcion: "Set de sostenes elegantes y hermosos ",
       tallas: ["34B", "36B", "38B"]
     },

    7: {
      nombre: "Bralett Corsét",
      categoria: "Lenceria",
      precio: "₡16.000",
      imagen: "Imagenes/lenceria/bralettcorsett.png",
      descripcion: "Set .",
      tallas:  ["S", "M", "L"]
     },

 8: {
     nombre: "Conjunto Love Luxury",
     categoria: "Lenceria",
     precio: "₡18.000",
     imagen: "Imagenes/lenceria/Conjunto4.png",
     descripcion: "Conjunto de lenceria de encaje negro, con estampado de corazones rojos, suave al tacto y visualmente coqueto y elegante.",
     tallas:  ["S", "M", "L"]
    },

 9: {
     nombre: "Conjunto Red Bloom",
     categoria: "Lenceria",
     precio: "₡20.000",
     imagen: "Imagenes/lenceria/setjuvenil5.png",
     descripcion: "Precioso conjunto de encaje rojo.",
     tallas:  ["S", "M", "L"]
    },


    //CUIDADO DEL CABELLO
 10: {
        nombre: "Set Scrunchies",
        categoria: "Accesorios para Cabello",
        precio: "₡5.000",
        imagen: "Imagenes/cabello/acesorios.png",
        descripcion: "Set de 6 scrunchies grandes y 6 pequeños en colres lavanda, celeste cielo, azul y rosa palo.  .",
        // tallas: ["S", "M", "L"]
    },

  11: {
        nombre: "Set Bandoleras",
        categoria: "Accesorios para el Cabello ",
        precio: "₡6.000",
        imagen: "Imagenes/cabello/banda1.png",
        descripcion: "Set de panty tipo scrunchie, comodo y coqueto.",
        // tallas: ["S", "M", "L"]
    },

  12: {
        nombre: "Set Gold Heart",
        categoria: "Accesorios para Cabello",
        precio: "₡3.500",
        imagen: "Imagenes/cabello/banda2.png",
        descripcion: "Hermosa Bandolera que proteje tu cabello gracias a sus fibras de seda.",
        // tallas: ["S", "M", "L"]
    },

  13: {
        nombre: "Set Bandoleras Gold",
        categoria: "Accesorios para Cabello",
        precio: "₡9.500",
        imagen: "Imagenes/cabello/banda3.png",
        descripcion: "Set de 3 hermosas bandoleras, confeccionadas en fibras de seda para el cuidado de tu cabello, diseño inspirado en minirales de la tierra.",
        // tallas: ["S", "M", "L"]
    },

  14: {
        nombre: "Bandolera Sea White",
        categoria: "Accesorios para el Cabello",
        precio: "₡4.000",
        imagen: "Imagenes/cabello/pañuelo1.png",
        descripcion: "Pañuelo en encaje blanco, hermoso y elegante. Inspirado en la Espuma del mar ¡Luce Fabulosa!",
        // tallas: ["S", "M", "L"]
    },

  15: {
        nombre: "Scrunchie Escolar",
        categoria: "Accesorios para el Cabello",
        precio: "₡2.000",
        imagen: "Imagenes/cabello/scrunchie.png",
        descripcion: "Scrunchie comodo y coqueto, ideal para combinar con tu uniforme escolar.",
        // tallas: ["S", "M", "L"]
    },

  16: {
        nombre: "Conjunto Scrunchies Mystic",
        categoria: "Accesorios para el Cabello",
        precio: "₡5.000",
        imagen: "Imagenes/cabello/scrunchies-encajes.png",
        descripcion: "Coqueto y elegante set de scrunchies en delicado encaje. En colores blanco y negro",
        // tallas: ["S", "M", "L"]
    },
    //CUIDADO PERSONAL 
  17: {
        nombre: "Toallitas Desmaquillantes",
        categoria: "Cuidado Personal",
        precio: "₡3.800",
        imagen: "Imagenes/cuidado-personal/desmaquillante.png",
        descripcion: "Toallitas desmaquillantes en algodon, 7 unidades.",
        // tallas: ["S", "M", "L"]
    },

  18: {
        nombre: "Set Skincare Wild Roses",
        categoria: "Cuidado Personal",
        precio: "₡4.000",
        imagen: "Imagenes/cuidado-personal/Desmasquillantes1.png",
        descripcion: "Set de toallitas desmaquillantes, banda para el cabello y bolsita organizadora.",
        // tallas: ["S", "M", "L"]
    },    
     
 19: {
        nombre: "Set Skincare Romance",
        categoria: "Cuidado Personal",
        precio: "₡5.000",
        imagen: "Imagenes/cuidado-personal/setcuidado1.png",
        descripcion: "Set de toallitas desmaquillantes, banda para el cabello y bolsita organizadora.",
        // tallas: ["S", "M", "L"]
},    
  20: {
        nombre: "Set Skincare Garden Love",
        categoria: "Cuidado Personal",
        precio: "₡4.000",
        imagen: "Imagenes/cuidado-personal/setcuidado2.png",
        descripcion: "Set de toallitas desmaquillantes, banda para el cabello y bolsita organizadora.",
        // tallas: ["S", "M", "L"]
},    
    21: {
        nombre: "Set Skincare Roses and Trees",
        categoria: "Cuidado Personal",
        precio: "₡4.000",
        imagen: "Imagenes/cuidado-personal/setcuidado3.png",
        descripcion: "Set de toallitas desmaquillantes, banda para el cabello y bolsita organizadora.",
        // tallas: ["S", "M", "L"]
},   
    22: {
        nombre: "Set Skincare Blue Flowers",
        categoria: "Cuidado Personal",
        precio: "₡4.000",
        imagen: "Imagenes/cuidado-personal/setcuidado4.png",
        descripcion: "Set de toallitas desmaquillantes, banda para el cabello y bolsita organizadora.",
        // tallas: ["S", "M", "L"]
},    
    23: {
        nombre: "Ecobag Floral",
        categoria: "Ecobags",
        precio: "₡4.000",
        imagen: "Imagenes/ecobags/ecobags.png",
        descripcion: "Set de toallitas desmaquillantes, banda para el cabello y bolsita organizadora.",
        // tallas: ["S", "M", "L"]
},    
    24: {
        nombre: "Ecobag Ecoheart",
        categoria: "Ecobags",
        precio: "₡4.000",
        imagen: "Imagenes/ecobags/ecobagsmensaje.png.png",
        descripcion: "Set de toallitas desmaquillantes, banda para el cabello y bolsita organizadora.",
        // tallas: ["S", "M", "L"]
},     

}

    // 👉 puedes seguir agregando igual


// =====================
// CARGAR PRODUCTO
// =====================

const producto = productos[id];


if(producto){


document.getElementById("imagenProducto").src =
producto.imagen;


document.getElementById("nombreProducto").textContent =
producto.nombre;


document.getElementById("categoriaProducto").textContent =
producto.categoria;


document.getElementById("precioProducto").textContent =
producto.precio;


document.getElementById("descripcionProducto").textContent =
producto.descripcion;



const tallas =
document.getElementById("tallasProducto");



if(producto.tallas && tallas){


producto.tallas.forEach(talla=>{


const boton =
document.createElement("button");


boton.textContent = talla;


tallas.appendChild(boton);



});


}




// =====================
// SELECCIONAR TALLA
// =====================


document.addEventListener("click",(e)=>{


if(e.target.parentElement?.id === "tallasProducto"){


document
.querySelectorAll("#tallasProducto button")
.forEach(btn=>{

btn.classList.remove("active");

});



e.target.classList.add("active");



}


});




// =====================
// AGREGAR AL CARRITO
// =====================


const botonComprar =
document.querySelector(".btn-comprar");



if(botonComprar){


botonComprar.addEventListener("click",()=>{


let talla = null;



const tallaSeleccionada =
document.querySelector(
"#tallasProducto .active"
);



if(tallaSeleccionada){

talla =
tallaSeleccionada.textContent;

}



if(producto.tallas && !talla){


alert("Selecciona una talla");

return;


}



const precio =
parseInt(
producto.precio.replace(/[^\d]/g,"")
);



agregarAlCarrito(

producto.nombre,

precio,

producto.imagen,

talla

);



alert("Producto agregado 🛒");



});



}



}