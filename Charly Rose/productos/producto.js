/* ==========================
   CONTENEDOR GENERAL
========================== */

.producto-container{
    max-width:1200px;
    margin:60px auto;
    padding:20px;
    display:flex;
    gap:60px;
}

/* ==========================
   IMAGEN
========================== */

.imagen-container{
    flex:1;
}

.imagen-container img{
    width:100%;
    display:block;
    border-radius:12px;
}

/* ==========================
   INFORMACIÓN
========================== */

.info-container{
    flex:1;
}

.info-container h1{
    font-size:2.5rem;
    margin-bottom:15px;
}

.categoria{
    display:inline-block;
    margin-bottom:15px;
    font-size:0.9rem;
    font-weight:bold;
    letter-spacing:1px;
    text-transform:uppercase;
}

.precio{
    font-size:2rem;
    font-weight:bold;
    margin-bottom:20px;
}

.descripcion{
    line-height:1.8;
    margin-bottom:30px;
}

/* ==========================
   TALLAS
========================== */

.tallas{
    margin-bottom:30px;
}

.tallas h3{
    margin-bottom:15px;
}

#tallasProducto{
    display:flex;
    gap:10px;
    flex-wrap:wrap;
}

#tallasProducto button{
    padding:10px 18px;
    border:1px solid #ccc;
    background:white;
    cursor:pointer;
    border-radius:8px;
    transition:.3s;
}

#tallasProducto button:hover{
    transform:translateY(-2px);
}

/* ==========================
   BOTÓN
========================== */

.btn-comprar{
    padding:15px 35px;
    border:none;
    cursor:pointer;
    border-radius:10px;
    font-size:1rem;
}

/* ==========================
   RESPONSIVE
========================== */

@media(max-width:768px){

    .producto-container{
        flex-direction:column;
        gap:30px;
    }

    .info-container h1{
        font-size:2rem;
    }

    .precio{
        font-size:1.7rem;
    }

}