function validar() {
    var Rut = document.formulario.Rut.value
    if (Rut < 9 || Rut > 10) {
        alert("Ingrese correctamente el rut, siendo el minimo de caracteres 9")
        document.formulario.txt_codigoProducto.focus();
        return false;
    }


}

   

