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

var totalArticulos = 0;

document.getElementById("contenido").innerHTML += '<h1 class="text-center text-danger">OFERTAS</h1>'
document.getElementById("contenido").innerHTML += '<h3 class="text-center">Pulsa sobre los articulos para añadirlos al carrito</h3>';

document.getElementById("contenido").innerHTML += '<div id="articulos" class="d-flex flex-row flex-wrap justify-content-start col-12" >';
document.getElementById("articulos").innerHTML = tarjeta(articulos[0]);
document.getElementById("articulos").innerHTML += tarjeta(articulos[1]);
document.getElementById("articulos").innerHTML += tarjeta(articulos[2]);

document.getElementById("contenido").innerHTML += '</div>';