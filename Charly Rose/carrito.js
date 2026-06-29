// =====================
// CARRITO UNIVERSAL
// =====================

const STORAGE_KEY = "carritoCharlyRose";


// OBTENER

function obtenerCarrito(){

    return JSON.parse(
        localStorage.getItem(STORAGE_KEY)
    ) || [];

}



// GUARDAR

function guardarCarrito(carrito){

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(carrito)
    );

}



// AGREGAR

function agregarAlCarrito(
    nombre,
    precio,
    imagen = "",
    talla = null
){


    let carrito = obtenerCarrito();



    const existe = carrito.find(item =>

        item.nombre === nombre &&
        item.talla === talla

    );



    if(existe){


        existe.cantidad++;


    }else{


        carrito.push({

            nombre,
            precio,
            imagen,
            talla,
            cantidad:1

        });


    }



    guardarCarrito(carrito);



}




// LIMPIAR

function limpiarCarrito(){

    localStorage.removeItem(STORAGE_KEY);

}