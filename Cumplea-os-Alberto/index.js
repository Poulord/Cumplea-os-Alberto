function verificarCodigo() {
    const codigoCorrecto = "AV20"; // Código que se formará con las adivinanzas
    const codigoIngresado = document.getElementById("codigoSecreto").value.trim(); // Eliminar espacios en blanco
    
    console.log("Código ingresado:", codigoIngresado); // Depuración
    console.log("Código correcto:", codigoCorrecto); // Depuración

    if (codigoIngresado === codigoCorrecto) {
        console.log("Redirigiendo a secreto.html..."); // Depuración
        window.location.href = "secreto.html";
    } else {
        alert("Código incorrecto. Sigue resolviendo las adivinanzas para descubrirlo.");
    }
}