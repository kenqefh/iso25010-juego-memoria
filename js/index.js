var caracteristicas = [{
    icon: "lock",
    caracteristica: "Seguridad",
    texto: "<strong>Capacidad de protección de la información y los datos de manera que personas o sistemas no autorizados no puedan leerlos o modificarlos.</strong> <ul class='collection'> <li class='collection-item'>Confidencialidad</li><li class='collection-item'>Integridad</li><li class='collection-item'>No repudio</li><li class='collection-item'>Responsabilidad</li><li class='collection-item'>Autenticidad</li></ul>",
    id: "001",
    isSelect: false,
    subCaracteristicas: []
}, {
    icon: "security",
    caracteristica: "Fiabilidad",
    texto: "<strong>Capacidad de un sistema o componente para desempeñar  las funciones especificadas, cuando se usa bajo unas condiciones y periodo de tiempo determinados</strong>  <ul class='collection'> <li class='collection-item'>Madurez</li><li class='collection-item'>Integridad</li><li class='collection-item'>Disponibilidad</li><li class='collection-item'>Tolerancia a fallos</li><li class='collection-item'>Capacidad de recuperación</li></ul>",
    id: "002",
    isSelect: false,
    subCaracteristicas: []
}, {
    icon: "perm_data_setting",
    caracteristica: "Mantenibilidad",
    texto: "<strong>Esta característica representa la capacidad del producto software para ser modificado efectiva y eficientemente, debido a necesidades evolutivas, correctivas o perfectivas.</strong> <ul class='collection'> <li class='collection-item'>Modularidad</li><li class='collection-item'>Reusabilidad</li><li class='collection-item'>Analizabilidad</li><li class='collection-item'>Capacidad para ser modificado</li><li class='collection-item'>Capacidad para ser probado</li></ul>",
    id: "003",
    isSelect: false,
    subCaracteristicas: []
}, {
    icon: "screen_share",
    caracteristica: "Portabilidad",
    texto: "<strong>Capacidad del producto o componente de ser transferido de forma efectiva y eficiente de un entorno hardware, software, operacional o de utilización a otro</strong> <ul class='collection'> <li class='collection-item'>Adaptabilidad</li><li class='collection-item'>Capacidad para ser instalado</li><li class='collection-item'>Capacidad para ser reemplazado</li></ul>",
    id: "004",
    isSelect: false,
    subCaracteristicas: []
}, {
    icon: "hot_tub",
    caracteristica: "Usabilidad",
    texto: "<strong>Capacidad del producto software para ser entendido, aprendido, usado y resultar atractivo para el usuario, cuando se usa bajo determinadas condiciones.</strong> <ul class='collection'> <li class='collection-item'>Capacidad para reconocer su adecuación</li><li class='collection-item'>Capacidad de aprendizaje</li><li class='collection-item'>Capacidad para ser usado</li><li class='collection-item'>Protección contra errores de usuario</li><li class='collection-item'>Estética de la interfaz de usuario</li><li class='collection-item'>Accesibilidad</li></ul>",
    id: "005",
    isSelect: false,
    subCaracteristicas: []
}, {
    icon: "devices_other",
    caracteristica: "Compatibilidad",
    texto: "<strong>Capacidad de dos o más sistemas o componentes para intercambiar información y/o llevar a cabo sus funciones requeridas cuando comparten el mismo entorno hardware o software</strong> <ul class='collection'> <li class='collection-item'>Coexistencia</li><li class='collection-item'>Interoperabilidad</li></ul>",
    id: "006",
    isSelect: false,
    subCaracteristicas: []
}, {
    icon: "featured_play_list",
    caracteristica: "Eficiencia de desempeño",
    texto: "<strong>Esta característica representa el desempeño relativo a la cantidad de recursos utilizados bajo determinadas condiciones</strong> <ul class='collection'> <li class='collection-item'>Comportamiento temporal</li><li class='collection-item'>Utilización de recursos.</li><li class='collection-item'>Capacidad</li></ul>",
    id: "007",
    isSelect: false,
    subCaracteristicas: []
}, {
    icon: "flight_takeoff",
    caracteristica: "Adecuacion funcional",
    texto: "<strong>Representa la capacidad del producto software para proporcionar funciones que satisfacen las necesidades declaradas e implícitas, cuando el producto se usa en las condiciones especificadas.</strong> <ul class='collection'> <li class='collection-item'>Completitud funcional.</li><li class='collection-item'>Corrección funcional</li><li class='collection-item'>Pertinencia funcional</li></ul>",
    id: "008    ",
    isSelect: false,
    subCaracteristicas: []
}]
var cartas = $(".cartas")
var contadorArray = 0;
var collapsible = $("ul.collapsible")
var set;
var fallidos = 0;
var acertados = 0;
$(document).ready(function () {

    creacionTemplateCartas();
    agregacionInformacionCartas()
    eventoClickCartas()
    $(".collapsible").collapsible()
    creacionCollapside()
})
function creacionCollapside() {
    caracteristicas.forEach(elemento => {
        let template = ` <li class="noClick" data-identificador=${elemento.id}>
    <div class="collapsible-header"><i class="material-icons">${elemento.icon}</i> ${elemento.caracteristica}</div>
    <div class="collapsible-body">
        <span>${elemento.texto}</span>
        </div>
</li>`
        collapsible.append(template)
    })
}
function efectoElemento(elemento) {
    elemento.animate({ fontSize: "+1.5em" }, 1000, function () {
        elemento.css("fontSize", "")
    });
}
function creacionTemplateCartas() {
    for (let i = 1; i <= 16; i++) {
        let template = `<div class="carta  hoverable" >
        <div class="adelante parte">
        <i class="material-icons medium" style="color:white"></i>
        </div>
        <div class="atras parte"></div>
        </div>`
        cartas.append(template)
    }
}
function eventoClickCartas() {
    $(".carta").on("click", function () {
        $(this).addClass("isSeleccionado")

        if ($(".isSeleccionado").length == 2) {

            let isSeleccionado = $(".isSeleccionado");
            comparacion(isSeleccionado[0], isSeleccionado[1])
        }
        if ($(".activo").length == 16) {
            swal({
                title: '<strong><u>Resumen</u></strong>',
                type: 'info',
                html:
                    `<ul>
                    <li>Numero Intentos: <b>${acertados + fallidos}</b></li>
                    <li>Acertados: <b>${acertados}</b></li>
                    <li>Fallidad: <b>${fallidos}</b></li>
                    </ul>`,
                showCloseButton: true,
                showCancelButton: true,
                focusConfirm: false,
                confirmButtonText:
                    '<i class="fa fa-thumbs-up"></i> Great!',
                confirmButtonAriaLabel: 'Thumbs up, great!',
                cancelButtonText:
                    '<i class="fa fa-thumbs-down"></i>',
                cancelButtonAriaLabel: 'Thumbs down',
            })
            $(".carta").off()
        }
    })
}
function comparacion(elemeto1, elemeto2) {
    if (parseInt($(elemeto1).attr("data-identificador")) == parseInt($(elemeto2).attr("data-identificador"))) {
        console.log("estan iguales")
        $(elemeto1).addClass("activo").off()
        $(elemeto2).addClass("activo").off()
        let elementoSeleccionado = (caracteristicas.find(elemento => { return parseInt(elemento.id) == parseInt($(elemeto1).attr("data-identificador")) }))
        activarLista(elementoSeleccionado.id)
        acertados++
    } else {
        console.log("no son iguales")
        fallidos++;


    }
    set = setTimeout(function () {
        console.log("ento")
        $(elemeto1).removeClass("isSeleccionado")
        $(elemeto2).removeClass("isSeleccionado")
        clearInterval(set);
    }, 1000)

}
function activarLista(data_identificado) {
    $("li.noClick").each((index, elemento) => {
        if (parseInt($(elemento).attr("data-identificador")) == parseInt(data_identificado)) {
            console.log("entro al if")
            $(elemento).removeClass("noClick")
            efectoElemento($(elemento))
            return;
        }
    })
}
function agregacionInformacionCartas() {
    numeroAleatorio = 0;
    let cartas = $(".carta");
    let buscado = true;
    for (let i = 1; i <= 2; i++) {
        for (let j = 0; j < caracteristicas.length; j++) {
            do {
                numeroAleatorio = Math.floor(Math.random() * (cartas.length))
                if (!$(cartas[numeroAleatorio]).hasClass("seleccionado")) {
                    $(cartas[numeroAleatorio]).addClass("seleccionado")
                    buscado = false;
                    $(cartas[numeroAleatorio]).attr("data-identificador", caracteristicas[j].id)
                    $(cartas[numeroAleatorio]).children("div.adelante").children("i").text(caracteristicas[j].icon)
                }
            } while (buscado)
            buscado = true
        }
    }

}