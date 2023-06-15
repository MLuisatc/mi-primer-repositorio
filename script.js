// Mª Luisa Trassierra

//Toggles de navbar

$('#logo').click(function(){
    $('.ej').attr('hidden', true)
})

$('#nav1').click(function(){
    $('.ej').attr('hidden', true)
    $('#3').attr('hidden', false)
})

$('#nav2').click(function(){
    $('.ej').attr('hidden', true)
    $('#4').attr('hidden', false)
})

$('#nav3').click(function(){
    $('.ej').attr('hidden', true)
    $('#6').attr('hidden', false)
})

$('#nav4').click(function(){
    $('.ej').attr('hidden', true)
    $('#7').attr('hidden', false)
})

$('#nav5').click(function(){
    $('.ej').attr('hidden', true)
    $('#10').attr('hidden', false)
})

//Ejercicio 3
let checkbox = document.getElementById("casilla");
let enlace = document.getElementById("act3");

checkbox.addEventListener("change", function () {
    if (this.checked) {
        // si la casilla está marcada, abre el enlace en una nueva ventana, el setAttribute agrega el atributo target="_blank"
        enlace.setAttribute("target", "_blank");
    } else {
        // si la casilla no está marcada, abre el enlace en la misma ventana, el removeAttribute elimina el atributo target.
        enlace.removeAttribute("target");
    }
});

// Ejercicio 4
//Para este ejercicio utilizaremos jQuery
$(function () {

    $("#ocultar").click(function () {
        $("#imagen").hide();
    });

    $("#mostrar").click(function () {
        $("#imagen").show();
    });
});

//Ejercicio 6
$(document).ready(function () {
    $("#boton6").click(function () {
        let color = $("#color").val();
        $("body").css("background-image", "none");
        $("body").css("background-color", color);
    });
});

//Ejercicio 7
$(document).ready(function () {
    $("#lista").change(function () {
        let colores = $("#lista").val();
        $("body").css("background-image", "none");
        $("body").css("background-color", colores);
    });
});

//Ejercicio 10

function validarFormulario() {
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let nif = document.getElementById("nif").value;

    if (nombre === "" || edad === "" || nif === "") {
        alert("Hay campos sin rellenar");
        return false;
        //Comprobamos que los campos no estan vacíos
    }
    else if (isNaN(edad) || edad < 18 || edad > 120) {
        alert("La edad debe ser un número y estar entre 18 y 120");
        return false;
        //Comprobamos que el 
    }
    else if (nif.length !== 10 || nif.indexOf('-') === -1) {
        alert("El NIF debe tener 10 carácteres y uno de ellos debe ser un guion (-)");
        return false;
    }
    return true;
}


