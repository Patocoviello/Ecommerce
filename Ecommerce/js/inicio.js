function cardsProductos() {
    for (var i=0; i<productos.length; i++) {
        document.querySelector('.cards-container').innerHTML +=
        '<section>' +
            '<h3>' + productos[i].nombre + '</h3>' +
            '<img src="' + productos[i].foto + '" alt="">' +
            '<p>Marca:' + productos[i].marca + '</p>' +
            '<p>Categoría:' + productos[i].categoria + '</p>' +
            '<p>Precio:$' + productos[i].precio + '</p>' +
            '<p><b>Envío:</b> '+ (productos[i].envio? 'Si':'No') +'</p>' +
            '<button>Agregar</button>'
        '</section>'
    }
}
function start() {
    cardsProductos()
}
window.onload = start