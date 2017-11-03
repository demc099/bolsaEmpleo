function listarPuestosPublicos(puestos) {
    var listado = document.getElementById("listaPuestos");
    listado.innerHTML = "";
    if(puestos != null){
    for (i = 0; i < puestos.length; i++) {
        var empresa = puestos[i].empresa ;
        var div = document.createElement("div");
        var br = document.createElement("br");
        var h4 = document.createElement("h4");
        div.className += " col-sm-4";
        h4.className += "hh4";

        var nnombre = document.createTextNode(empresa.nombre);
        h4.appendChild(nnombre);
        div.appendChild(h4);
        listarPuesto(div, puestos[i]);
        listado.appendChild(div);
        div.appendChild(br);

   }
    }
}

function listarPuesto(lista, puesto) {

    var td;
    td = document.createElement("td");
    td.className += " quote-box";
    td.className += " quote-text";
    var descripcion = puesto.descripcion;
    var salario = puesto.salario;
    var caracteristicas = puesto.caracteristicas;
    var br = document.createElement("br");
    var ul = document.createElement("ul");

    td.appendChild(document.createTextNode("Descripcion: " + descripcion));
    td.appendChild(br);
    td.appendChild(document.createTextNode(" Caracteristicas .......................... "));
    td.appendChild(br);
    
    for (i = 0; i < caracteristicas.length; i++) {
        td.appendChild(br);
        var ul = document.createElement("ul");
        var opcion = caracteristicas[i].opcion;
        var caracteristica = opcion.caracteristica;
        td.appendChild(document.createTextNode(caracteristica.nombre + " :"));
        td.appendChild(br);
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(opcion.descripcion+" --> "));
        li.appendChild(br);
        li.appendChild(document.createTextNode("Nivel: " + caracteristicas[i].nivel));
        li.appendChild(br);
        ul.appendChild(li);
        td.appendChild(ul);
    }
    td.appendChild(br);
    td.appendChild(document.createTextNode("-- Salario: $" + salario));
    lista.appendChild(td);
}

