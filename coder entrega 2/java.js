const main =document.getElementById("main");


const listado = "./genero.json"

fetch(listado)
.then(res => res.json())
.then(data => mostrarProductos(data))
    data.forEach(producto => {
        listado.innerHTML += `<h2> Nombre:libro ${producto.nombre}</h2>
        <p> Genero : ${producto.genero}</p>
        <p> id: ${producto.id}<p/>`
    })

const contenedorProd= document.querySelector('#main')

function mostrarProductos(libros){

    libros.forEach ()

    libros
}

function PreciodeProducto(){
    let librofrankenstein = 4000;
    let librosouleater = 1500;
    let libroelcuervo = 2000;
}
function libros() {
    let PreciodeProducto 

    switch (libros) {
        case "frankenstein":
            let PreciodeProducto = librofrankenstein;
            break;
        case "souleater":
            PreciodeProducto = librosouleater;
        case "elcuervo":
            PreciodeProducto = libroelcuervo;
        break;
        default:
            PreciodeProducto = false;
        break;
}
}
function CantidadDelibros(){
    if (!Cantidad  <= 3  || Cantidad  >= 4  || Cantidad >=10 )
        Cantidad = false;
    }

    
    CantidadDelibros()


    return precio;