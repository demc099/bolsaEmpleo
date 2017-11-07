/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function ListarEmpresas(empresas){
  
    var listado = document.getElementById("listaEmpresas");
    listado.innerHTML = "";
    if(empresas != null){
    for (i = 0; i < empresas.length; i++) {
        var nombre = empresas[i].nombre.value ;
        var div = document.createElement("div");
        var br = document.createElement("br");
        var h4 = document.createElement("h4");
        div.className += " col-sm-4";
        h4.className += "hh4";

        var nnombre = document.createTextNode(nombre);
        h4.appendChild(nnombre);
        div.appendChild(h4);
        listarPuesto(div, puestos[i]);
        listado.appendChild(div);
        div.appendChild(br);

   }
    }
}
