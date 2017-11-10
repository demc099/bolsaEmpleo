

function ListarOferentes(oferentes){
    
     //limpia la información que tiene la tabla
    $("#listaOferentes").html(""); 
    
    //carga la tabla con el json devuelto
    for (var i = 0; i < oferentes.length; i++) {
        dibujarFila(oferentes[i]);
    }

}

function dibujarFila(rowData) {
    //Cuando dibuja la tabla en cada boton se le agrega la funcionalidad de cargar o eliminar la informacion
    //de una persona
    
    var row = $("<tr />");
    $("#listaOferentes").append(row); 
    row.append($("<td>" + rowData.identificacion + "</td>"));
    row.append($("<td>" + rowData.nombre + "</td>"));
    row.append($("<td>" + rowData.apellido + "</td>"));
    row.append($("<td>" + rowData.nacionalidad +"</td>"));
    row.append($("<td>" + rowData.telefono + "</td>"));
    row.append($("<td>" + rowData.correo + "</td>"));
    row.append($("<td>" + rowData.residencia +"</td>"));
    row.append($("<td> " + rowData.estado + "</td>"));
    if(rowData.estado == "Activo"){
         row.append($('<td><button  disabled="true" type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="activarOferente('+"'"+rowData.identificacion+"'"+');">'+
                        'Activar'+
                    '</button>'+
                    '<button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="eliminarOferente('+"'"+rowData.identificacion+"'"+');">'+
                        '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>'+
                    '</button></td>'));
    }
    else{
    row.append($('<td><button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="activarOferente('+"'"+rowData.identificacion+"'"+');">'+
                        'Activar'+
                    '</button>'+
                    '<button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="eliminarOferente('+"'"+rowData.identificacion+"'"+');">'+
                        '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>'+
                    '</button></td>'));
        }
}
  
  
  
  
  
  function validarOferente() {
    if(!validar()){
        alert(" Error! \n\n Debe digitar los campos del formulario");
        return false;
    }
    else if(!validarTamCampos()){
        alert(" Error! \n\n Tamaño de los campos marcados Excedido");
        return false;
    }
    
    else if(!validarNumeros()){
         alert(" Error! \n\n Solo numeros permitidos en los campos marcados");
         return false;
    }
    
    else if(!validarLetras()){
         alert(" Error! \n\n Solo Letras permitidas en los campos marcados");
         return false;
    }
    else if (!validarPass()){
        alert(" Error! \n\n El password debe coincidir");
        return false;
    }
        
    else {
        return true;
       
    } 
}

function validar() {
    var validacion = true;

    //Elimina estilo de error en los css
    //notese que es sobre el grupo que contienen el input
    $("#groupId").removeClass("has-error");
    $("#groupNombre").removeClass("has-error");
    $("#groupApellido").removeClass("has-error");
    $("#groupNacionalidad").removeClass("has-error");
    $("#groupTelefono").removeClass("has-error");
    $("#groupCorreo").removeClass("has-error");
    $("#groupDireccion").removeClass("has-error");
    $("#groupPassword").removeClass("has-error");
    $("#groupPasswordConf").removeClass("has-error");
    

    //valida cada uno de los campos del formulario
    //Nota: Solo si fueron digitados
    if ($("#inputId").val() === "") {
        $("#groupId").addClass("has-error");
        validacion = false;
    }
    if ($("#inputNombre").val() === "") {
        $("#groupNombre").addClass("has-error");
        validacion = false;
    }
    if ($("#inputApellido").val() === "") {
        $("#groupApellido").addClass("has-error");
        validacion = false;
    }
    if ($("#inputNacionalidad").val() === "") {
        $("#groupNacionalidad").addClass("has-error");
        validacion = false;
    }
    if ($("#inputTelefono").val() === "") {
        $("#groupTelefono").addClass("has-error");
        validacion = false;
    }
    if ($("#inputCorreo").val() === "") {
        $("#groupCorreo").addClass("has-error");
        validacion = false;
    }
    if ($("#inputDireccion").val() === "") {
        $("#groupDireccion").addClass("has-error");
        validacion = false;
    }
    if ($("#inputPassword").val() === "") {
        $("#groupPassword").addClass("has-error");
        validacion = false;
    }
    if ($("#inputPasswordConf").val() === "") {
        $("#groupPasswordConf").addClass("has-error");
        validacion = false;
    }
   
    return validacion;
}

function limpiarForm() {
    //setea el focus del formulario
    $('#inputId').focus();
     
    $('#oferenteForm').trigger("reset");
}

function validarNumeros(){
    $("#groupId").removeClass("has-error");
    $("#groupTelefono").removeClass("has-error");
    var validacion =true;
   var contenido = $("#inputId").val();
    if(isNaN(contenido)){
         $("#groupId").addClass("has-error");
       validacion = false;
   }
    contenido = $("#inputTelefono").val();
    if(isNaN(contenido)){
         $("#groupTelefono").addClass("has-error");
       validacion = false;
   }
   

   return validacion;
}

function validarTamCampos() {
    var validacion = true;

    //Elimina estilo de error en los css
    //notese que es sobre el grupo que contienen el input
    $("#groupId").removeClass("has-error");
    $("#groupNombre").removeClass("has-error");
    $("#groupApellido").removeClass("has-error");
    $("#groupNacionalidad").removeClass("has-error");
    $("#groupTelefono").removeClass("has-error");
    $("#groupCorreo").removeClass("has-error");
    $("#groupDireccion").removeClass("has-error");
    $("#groupPassword").removeClass("has-error");
    $("#groupPasswordConf").removeClass("has-error");
    

    //valida cada uno de los campos del formulario
    //Nota: Solo si fueron digitados
    if ($("#inputId").val().length > 11) {
        $("#groupId").addClass("has-error");
        validacion = false;
    }
    if ($("#inputNombre").val().length > 50) {
        $("#groupNombre").addClass("has-error");
        validacion = false;
    }
    if ($("#inputApellido").val().length > 50) {
        $("#groupApellido").addClass("has-error");
        validacion = false;
    }
    if ($("#inputNacionalidad").val().length > 50) {
        $("#groupNacionalidad").addClass("has-error");
        validacion = false;
    }
    if ($("#inputTelefono").val().length > 20) {
        $("#groupTelefono").addClass("has-error");
        validacion = false;
    }
    if ($("#inputCorreo").val().length > 50) {
        $("#groupCorreo").addClass("has-error");
        validacion = false;
    }
    if ($("#inputDireccion").val().length > 100) {
        $("#groupDireccion").addClass("has-error");
        validacion = false;
    }
    if ($("#inputPassword").val().length > 20) {
        $("#groupPassword").addClass("has-error");
        validacion = false;
    }
    if ($("#inputPasswordConf").val().length > 20) {
        $("#groupPasswordConf").addClass("has-error");
        validacion = false;
    }
   
    return validacion;
    
}

function validarLetras() {
    var validacion = true;

    //Elimina estilo de error en los css
    //notese que es sobre el grupo que contienen el input
    $("#groupNombre").removeClass("has-error");
    $("#groupApellido").removeClass("has-error");
    $("#groupNacionalidad").removeClass("has-error");
    
    var cont = $("#inputNombre").val();
    for(var i = 0;i<cont.length;i++)
    if (cont.charAt(i)!=" " && !isNaN(cont.charAt(i))) {
        $("#groupNombre").addClass("has-error");
        validacion = false;
        break;
    }
    cont = $("#inputApellido").val();
    for(var i = 0;i<cont.length;i++)
    if (cont.charAt(i)!=" " && !isNaN(cont.charAt(i))) {
        $("#groupApellido").addClass("has-error");
        validacion = false;
        break;
    }

cont = $("#inputNacionalidad").val();
    for(var i = 0;i<cont.length;i++)
    if (cont.charAt(i)!=" " && !isNaN(cont.charAt(i))) {
        $("#groupNacionalidad").addClass("has-error");
        validacion = false;
        break;
    }
  

    return validacion;
}


function validarPass() {
    var validacion = true;

    //Elimina estilo de error en los css
    //notese que es sobre el grupo que contienen el input
    $("#groupPassword").removeClass("has-error");
    $("#groupPasswordConf").removeClass("has-error");
    
   if($("#inputPassword").val() != $("#inputPasswordConf").val()){
    $("#groupPassword").addClass("has-error");
    $("#groupPasswordConf").addClass("has-error");
    validacion = false;
   }
   
  

    return validacion;
}

function eliminarOferente(id) {
    if (confirm("Esta seguro de que desea eliminar este oferente?")) {
        Proxy.eliminarOferente(id);
    }
}

function activarOferente(id) {
    if (confirm("Esta seguro de que desea activar este oferente?")) {
        Proxy.activarOferente(id);
    }
}

  
  
  
    
