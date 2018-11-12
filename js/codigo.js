// Juan Alcocer
// El Codigo es ejecutado en index.html

var articulo1= new arti("art1", "Smartphone", "Xiaomi redmi 5", 5, 150, 21, "./img/xiaomi_redmi_5.jpg");
var articulo2 = new arti("art2", "Televisor", "Sansumg Qled 55\"", 2, 890, 21, "./img/Sansumg_Qled.jpg");
var articulo3 = new arti("art3", "Ordenador portatil", "Lenovo Y520", 8, 699, 21, "./img/Lenovo_Y520.jpg");

function arti(id, nombre, modelo, cantidadDisponible, precio, impuesto, imagen){
    this.id = id;
    this.nombre = nombre;
    this.modelo = modelo;
    this.cantidadDisponible = cantidadDisponible;
    this.precio = precio;
    this.impuesto = impuesto;
    this.imagen = imagen;
}

var articulos = [articulo1,articulo2,articulo3];

function tarjeta(articulo){ //Tarjetas que muestran los articulos de la tienda
    var card = '<button id="' + articulo.id + '" class="card col-3">';
        card += '<div class="card-header">' + articulo.nombre + '</div>';
        card += '<div class="card-body">';
        card += '<h4 class="card-title">' + articulo.modelo + '</h4>';
        card += '<p class="card-text"> Unidades disponibles: ' + articulo.cantidadDisponible + '</p>';
        card += '<p class="card-text"> Precio (Sin IVA): ' + articulo.precio + '</p>';
        card += '<img class="card-img" src="' + articulo.imagen + '" alt="' + articulo.nombre + '"></img>';
        card +=  '</div></button>';
    return card;
}

function evento(articulo){
    document.getElementById(articulo.id).addEventListener("click", eventoArticulo);

    function eventoArticulo() {
        document.getElementById("carrito").style.display = "block";
        totalArticulos += articulo.precio;
        document.getElementById("artcarri").innerHTML += '<tr> <th scope="row">'+ articulo.id + '</th> <td>' + articulo.nombre + '</td> <td>' + articulo.modelo + '</td> <td>' + articulo.precio + '€</td> </tr>';
        document.getElementById("total").innerHTML = 'Total: ' + totalArticulos + '€';
    }
}

var totalArticulos = 0;

document.getElementById("contenido").innerHTML += '<h1 class="text-center text-danger">OFERTAS</h1>'
document.getElementById("contenido").innerHTML += '<h3 class="text-center">Pulsa sobre los articulos para añadirlos al carrito</h3>';

document.getElementById("contenido").innerHTML += '<div id="articulos" class="d-flex flex-row flex-wrap justify-content-start col-12" >';
document.getElementById("articulos").innerHTML = tarjeta(articulos[0]);
document.getElementById("articulos").innerHTML += tarjeta(articulos[1]);
document.getElementById("articulos").innerHTML += tarjeta(articulos[2]);

document.getElementById("contenido").innerHTML += '</div>';

//Crear nuevos articulos
document.getElementById("contenido").innerHTML += '<br><button type="button" id="btn0" class="btn btn-secondary my-2 btn-secondary font-weight-bold">crear articulo</button><br>';
document.getElementById("btn0").addEventListener("click", crearArt);

function crearArt(){
    document.getElementById("contenido").innerHTML += formulario;
    document.getElementById("cre").addEventListener("click", nuevoObjeto);
    for(let i = 0; i < articulos.length; i++){
        evento(articulos[i]);
    }
}
function nuevoObjeto(){
    let numero = articulos.length + 1;
    
    let name = document.getElementById("name").value;
    let modelo = document.getElementById("modelo").value;
    let cantidad = parseInt(document.getElementById("cantidad").value);
    let precio = parseInt(document.getElementById("precio").value);
    let impuesto = parseInt(document.getElementById("impuesto").value);
    let imagen = "";

    if((document.getElementById("imagen").value).length == 0){
        imagen = "./img/generico.jpg"
    }else{
        imagen = document.getElementById("imagen").value;
    }
    articulos[articulos.length] = new arti("art" + numero, name, modelo, cantidad, precio, impuesto, imagen);    
    document.getElementById("articulos").innerHTML += tarjeta(articulos[articulos.length -1]);
        
    for(let i = 0; i < articulos.length; i++){
        evento(articulos[i]);
    }

}

var formulario = '<form id="from" class="form-inline col-12 mt-5">';
    formulario += '<input type="text" class="form-control mb-2 mr-sm-2" id="name" placeholder="Nombre articulo" required>';
    formulario += '<input type="text" class="form-control mb-2 mr-sm-2" id="modelo" placeholder="Modelo articulo" required>';
    formulario += '<input type="number" class="form-control mb-2 mr-sm-2" id="cantidad" placeholder="Cantidad disponible" required>';
    formulario += '<input type="number" class="form-control mb-2 mr-sm-2" id="precio" placeholder="Precio (Sin IVA)" required>';
    formulario += '<input type="number" class="form-control mb-2 mr-sm-2" id="impuesto" placeholder="IVA aplicable" required>';
    formulario += '<input type="text" class="form-control mb-2 mr-sm-2" id="imagen" placeholder="URL Imagen">';
    formulario += '<button id="cre" type="button" class="btn btn-primary mb-2">Crear Articulo</button>';
    formulario += '</form>';

evento(articulos[0]);
evento(articulos[1]);
evento(articulos[2]);