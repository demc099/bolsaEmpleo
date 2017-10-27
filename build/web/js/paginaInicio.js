function carrousel () {
var lista = document.getElementById("listCarrousel");
        var divSlide;
        for (i = 0; i < 3; i++){
divSlide = document.createElement("div");
        if (i == 0)
        divSlide.className = "item active animated fadeInLeft";
        else
        divSlide.className = "item animated fadeInLeft";
    
        divSlide.innerHTML = "\n\
<div id='slider" + (i + 1) + "'><h4>" + Objeto[i].nombre + " </h4><table><tr><td>Descripcion: " + Objeto[i].oferta[i].descripcion + "</td>\n\
    </tr><tr><td>Caracteristicas: " + Objeto[i].oferta[i].caracteristicas + "</td></tr><tr><td>Salario: $" + Objeto[i].oferta[i].salario + "</td>\n\
</tr><tr><td>Telefono: " + Objeto[i].telefono + " </td></tr><tr><td>Email: " + Objeto[i].email + "</td></tr></table></div>";
        lista.appendChild(divSlide);
}
 }
function foo(event) {
    listOferta(Objeto);
}

function listOferta(oferta) {
    var listado = document.getElementById("listaOferta");
    listado.innerHTML = "";
    for (i = 0; i < oferta.length; i++) {
        var ofer = oferta[i].oferta;
        var div = document.createElement("div");
        var br = document.createElement("br");
        for (j = 0; j < ofer.length; j++) {

            var h4 = document.createElement("h4");
            div.className += " col-sm-4";
            h4.className += "hh4"

            var nnombre = document.createTextNode(oferta[i].nombre);
            h4.appendChild(nnombre);
            div.appendChild(h4);
            f(div, oferta[i].oferta[j]);
            listado.appendChild(div);
        }
        div.appendChild(br);

    }
}

function f(lista, oferta) {

    var td;
    td = document.createElement("td");
    td.className += " quote-box";
    td.className += " quote-text";
    var descripcion = oferta.descripcion;
    var salario = oferta.salario;
    var car = oferta.caracteristicas;
    var br = document.createElement("br");
    td.appendChild(document.createTextNode("Descripcion: " + descripcion));
    td.appendChild(br);
    td.appendChild(document.createTextNode(" Caracteristicas: " + car));
    td.appendChild(br);
    td.appendChild(document.createTextNode(" Salario: $" + salario));
    lista.appendChild(td);



}
document.addEventListener("DOMContentLoaded", foo);
document.addEventListener("DOMContentLoaded", carrousel);

