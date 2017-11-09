var Proxy = Proxy || {};

Proxy.consultarPuestosPublicos = function () {

    //Se envia la información por ajax
    $.ajax({
        url: 'PuestosService',
        data: {
            accion: 'consultarPuestosPublicos'
        },
        error: function () { //si existe un error en la respuesta del ajax
            alert("Se presento un error a la hora de cargar la información de los Puestos en la base de datos");
        },
        success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
            listarPuestosPublicos(data);

        },
        type: 'POST',
        dataType: "json"
    });

};

Proxy.consultarEmpresas = function () {
    //Se envia la información por ajax
    $.ajax({
        url: 'EmpresaService',
        data: {
            accion: 'consultarEmpresas'
        },
        error: function () { //si existe un error en la respuesta del ajax
            alert("Se presento un error a la hora de cargar la información de las Empresas en la base de datos");
        },
        success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
            ListarEmpresas(data);

        },
        type: 'POST',
        dataType: "json"
    });
};

Proxy.consultarOferentes = function () {
    //Se envia la información por ajax
    $.ajax({
        url: 'OferenteService',
        data: {
            accion: 'consultarOferentes'
        },
        error: function () { //si existe un error en la respuesta del ajax
            alert("Se presento un error a la hora de cargar la información de las Empresas en la base de datos");
        },
        success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
            ListarOferentes(data);

        },
        type: 'POST',
        dataType: "json"
    });
};

Proxy.insertarOferente = function () {
    if (validarOferente()) {
        $.ajax({
            url: 'OferenteService',
            data: {
                accion: "insertarOferente",
                id: $("#inputId").val(),
                nombre: $("#inputNombre").val(),
                apellido: $("#inputApellido").val(),
                nacionalidad: $("#inputNacionalidad").val(),
                telefono: $("#inputTelefono").val(),
                correo: $("#inputCorreo").val(),
                direccion: $("#inputDireccion").val(),
                password: $("#inputPassword").val()

            },
            error: function () { //si existe un error en la respuesta del ajax
                alert("Se genero un error, contacte al administrador (Error del ajax)");
            },
            success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
                if (data == "Exito") {
                    alert("Se ha registrado Correctamente!! \n\n espere a la confirmacion de la activacion de su cuenta por parte del Administrador");
                    limpiarForm();
                } else
                    alert("Ya existe un Registro con esa identificacion");

            },
            type: 'POST'
        });
    }
};