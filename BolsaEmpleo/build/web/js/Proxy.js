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

