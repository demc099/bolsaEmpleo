
function ListarEmpresas(empresas) {

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
    row.append($("<td>" + rowData.descripcion + "</td>"));
    row.append($("<td> " + rowData.estado + "</td>"));
    if (rowData.estado == "Activo") {
        row.append($('<td><button  disabled="true" type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="activarEmpresa(' + "'" + rowData.empresaId + "'" + ');">' +
                'Activar' +
                '</button>' +
                '<button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="eliminarEmpresa(' + "'" + rowData.empresaId + "'" + ');">' +
                '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>' +
                '</button></td>'));
    } else {
        row.append($('<td><button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="activarEmpresa(' + "'" + rowData.empresaId + "'" + ');">' +
                'Activar' +
                '</button>' +
                '<button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="eliminarEmpresa(' + "'" + rowData.empresaId + "'" + ');">' +
                '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>' +
                '</button></td>'));
    }
}


function validarEmpresa() {
    if (!validar()) {
        alert(" Error! \n\n Debe digitar los campos del formulario");
        return false;
    } else if (!validarTamCampos()) {
        alert(" Error! \n\n Tamaño de los campos marcados Excedido");
        return false;
    } else if (!validarNumeros()) {
        alert(" Error! \n\n Solo numeros permitidos en los campos marcados");
        return false;
    } else if (!validarPass()) {
        alert(" Error! \n\n El password debe coincidir");
        return false;
    } else {
        return true;

    }
}

function validar() {
    var validacion = true;

    //Elimina estilo de error en los css
    //notese que es sobre el grupo que contienen el input
    $("#groupNombre").removeClass("has-error");
    $("#groupDescripcion").removeClass("has-error");
    $("#groupLocalizacion").removeClass("has-error");
    $("#groupTelefono").removeClass("has-error");
    $("#groupCorreo").removeClass("has-error");
    $("#groupPassword").removeClass("has-error");
    $("#groupPasswordConf").removeClass("has-error");


    //valida cada uno de los campos del formulario
    //Nota: Solo si fueron digitados

    if ($("#inputNombre").val() === "") {
        $("#groupNombre").addClass("has-error");
        validacion = false;
    }
    if ($("#inputDescripcion").val() === "") {
        $("#groupDescripcion").addClass("has-error");
        validacion = false;
    }
    if ($("#inputLocalizacion").val() === "") {
        $("#groupLocalizacion").addClass("has-error");
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
    $('#inputNombre').focus();

    $('#empresaForm').trigger("reset");
}

function validarNumeros() {
    $("#groupTelefono").removeClass("has-error");
    var validacion = true;

    var contenido = $("#inputTelefono").val();
    if (isNaN(contenido)) {
        $("#groupTelefono").addClass("has-error");
        validacion = false;
    }


    return validacion;
}

function validarTamCampos() {
    var validacion = true;

    //Elimina estilo de error en los css
    //notese que es sobre el grupo que contienen el input
    $("#groupNombre").removeClass("has-error");
    $("#groupDescripcion").removeClass("has-error");
    $("#groupLocalizacion").removeClass("has-error");
    $("#groupTelefono").removeClass("has-error");
    $("#groupCorreo").removeClass("has-error");
    $("#groupPassword").removeClass("has-error");
    $("#groupPasswordConf").removeClass("has-error");


    //valida cada uno de los campos del formulario
    //Nota: Solo si fueron digitados
    if ($("#inputNombre").val().length > 50) {
        $("#groupNombre").addClass("has-error");
        validacion = false;
    }
    if ($("#inputDescripcion").val().length > 100) {
        $("#groupDescripcion").addClass("has-error");
        validacion = false;
    }
    if ($("#inputLocalizacion").val().length > 200) {
        $("#groupLocalizacion").addClass("has-error");
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



function validarPass() {
    var validacion = true;

    //Elimina estilo de error en los css
    //notese que es sobre el grupo que contienen el input
    $("#groupPassword").removeClass("has-error");
    $("#groupPasswordConf").removeClass("has-error");

    if ($("#inputPassword").val() != $("#inputPasswordConf").val()) {
        $("#groupPassword").addClass("has-error");
        $("#groupPasswordConf").addClass("has-error");
        validacion = false;
    }



    return validacion;
}

function eliminarEmpresa(id) {
    if (confirm("Esta seguro de que desea eliminar esta empresa?")) {
        Proxy.eliminarEmpresa(id);
    }
}

function activarEmpresa(id) {
    if (confirm("Esta seguro de que desea activar esta empresa?")) {
        Proxy.activarEmpresa(id);
    }
}


