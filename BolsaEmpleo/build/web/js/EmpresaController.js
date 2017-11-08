
function ListarEmpresas(empresas){
    
     //limpia la información que tiene la tabla
    $("#listaEmpresas").html(""); 
    
    //carga la tabla con el json devuelto
    for (var i = 0; i < empresas.length; i++) {
        dibujarFila(empresas[i]);
    }

}

function dibujarFila(rowData) {
    //Cuando dibuja la tabla en cada boton se le agrega la funcionalidad de cargar o eliminar la informacion
    //de una persona
    
    var row = $("<tr />");
    $("#listaEmpresas").append(row); 
    row.append($("<td>" + rowData.nombre + "</td>"));
    row.append($("<td>" + rowData.localizacion + "</td>"));
    row.append($("<td>" + rowData.telefono + "</td>"));
    row.append($("<td>" + rowData.correo + "</td>"));
    row.append($("<td>" + rowData.descripcion +"</td>"));
    row.append($("<td> " + rowData.estado + "</td>"));
    if(rowData.estado == "Activo"){
         row.append($('<td><button  disabled="true" type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="activarEmpresa('+"'"+rowData.empresaid+"'"+');">'+
                        'Activar'+
                    '</button>'+
                    '<button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="eliminarEmpresa('+"'"+rowData.empresaid+"'"+');">'+
                        '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>'+
                    '</button></td>'));
    }
    else{
    row.append($('<td><button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="activarEmpresa('+"'"+rowData.empresaid+"'"+');">'+
                        'Activar'+
                    '</button>'+
                    '<button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="eliminarEmpresa('+"'"+rowData.empresaid+"'"+');">'+
                        '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>'+
                    '</button></td>'));
        }
}
  
    
