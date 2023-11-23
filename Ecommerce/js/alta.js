const inputD = document.getElementById('edadD'),
    numberD = document.querySelector(".DNumber");

inputD.addEventListener("input", () => {
    numberD.textContent = inputD.value;
});

const inputH = document.getElementById('edadH'),
    numberH = document.querySelector(".HNumber");

inputH.addEventListener("input", () => {
    numberH.textContent = inputH.value;
});

function agregar(e) {
    e.preventDefault()

    var refNombre = document.getElementById('nombre')
    var refPrecio = document.getElementById('precio')
    var refStock = document.getElementById('stock')
    var refMarca = document.getElementById('marca')
    var refCategoria = document.getElementById('categoria')
    var refDetalles = document.getElementById('detalles')
    var refDetallesXL = document.getElementById('detallesXL')
    var refEdadDesde = document.getElementById('edadD')
    var refEdadHasta = document.getElementById('edadH')
    var refFoto = document.getElementById('foto')
    var refEnvio = document.getElementById('envio')

    var nombre = refNombre.value
    var precio = refPrecio.value
    var stock = refStock.value
    var marca = refMarca.value
    var categoria = refCategoria.value
    var detalles = refDetalles.value
    var detallesXL = refDetallesXL.value
    var edadD = refEdadDesde.value
    var edadH = refEdadHasta.value
    var foto = refFoto.value
    var envio = refEnvio.checked

    productos.push({
        nombre: nombre,
        precio: precio,
        stock: stock,
        marca: marca,
        categoria: categoria,
        detalles: detalles,
        detallesXL: detallesXL,
        edadD: edadD,
        edadH: edadH,
        foto: foto,
        envio: envio
    })
    tablaProductos()

    refNombre.value = ''
    refPrecio.value = ''
    refStock.value = ''
    refMarca.value = ''
    refCategoria.value = ''
    refDetalles.value = ''
    refDetallesXL.value = ''
    edadD.value = ''
    edadH.value = ''
    refFoto.value = ''
    refEnvio.checked = false
}

function tablaProductos() {
    var FTabla =
        '<tr>' +
        '<th>nombre</th>' +
        '<th>precio</th>' +
        '<th>stock</th>' +
        '<th>marca</th>' +
        '<th>categoria</th>' +
        '<th>detalles</th>' +
        '<th>detallesXL</th>' +
        '<th>edad desde</th>' +
        '<th>edad hasta</th>' +
        '<th>foto</th>' +
        '<th>envío</th>' +
        '</tr>'

    if (productos.length) {
        for (var i = 0; i < productos.length; i++) {
            FTabla +=
                '<tr>' +
                '<td>' + productos[i].nombre + '</td>' +
                '<td> $' + productos[i].precio + '</td>' +
                '<td>' + productos[i].stock + '</td>' +
                '<td>' + productos[i].marca + '</td>' +
                '<td>' + productos[i].categoria + '</td>' +
                '<td>' + productos[i].detalles + '</td>' +
                '<td>' + productos[i].detallesXL + '</td>' +
                '<td>' + productos[i].edadD + '</td>' +
                '<td>' + productos[i].edadH + '</td>' +
                '<td><img width="45" src="' + productos[i].foto + '" alt="foto de ' + productos[i].nombre + '"></td>' +
                '<td>' + (productos[i].envio ? 'Si' : 'No') + '</td>' +
                '</tr>'
        }
    }
    else FTabla = '<h2>No se encontraron productos.. </h2>'
    document.querySelector('table').innerHTML = FTabla
}

function start() {
    tablaProductos()

}
window.onload = start