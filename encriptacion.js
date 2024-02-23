function encriptarTexto() {
    var textoOriginal = document.querySelector('.texto').value;
    var textoEncriptado = '';

    // Verificar si alguna letra es mayúscula
    if(/[A-Z]/.test(textoOriginal)) {
        alert('El texto contiene al menos una letra mayúscula.');
        return;
    }

    for (var i = 0; i < textoOriginal.length; i++) {
        var letra = textoOriginal[i];

        switch (letra) {
            case 'e':
                textoEncriptado += 'enter';
                break;
            case 'i':
                textoEncriptado += 'imes';
                break;
            case 'a':
                textoEncriptado += 'ai';
                break;
            case 'o':
                textoEncriptado += 'ober';
                break;
            case 'u':
                textoEncriptado += 'ufat';
                break;
            default:
                textoEncriptado += letra;
        }
    }

    // Mostrar el texto encriptado en el espacio de resultados
    mostrarResultado(textoEncriptado);

    limpiarTexto();

    habilitarBoton();

    ocultarResultados()
}

function desencriptarTexto() {
    var textoModificado = document.querySelector('.texto').value;
    var textoDesencriptado = textoModificado.replace(/(enter|imes|ai|ober|ufat)/g, function(match) {
        switch (match) {
            case 'enter':
                return 'e';
            case 'imes':
                return 'i';
            case 'ai':
                return 'a';
            case 'ober':
                return 'o';
            case 'ufat':
                return 'u';
            default:
                return match;
        }
    });

    // Mostrar el texto desencriptado en el espacio de resultados
    mostrarResultado(textoDesencriptado);

    limpiarTexto();

    habilitarBoton();

    ocultarResultados();
}

function mostrarResultado(resultado) {
    // Obtener el párrafo dentro del contenedor .resultados
    var resultadosDiv = document.querySelector('.resultados');
    var parrafo = resultadosDiv.querySelector('p');
    
    // Actualizar el contenido del párrafo con el resultado de la encriptación
    parrafo.textContent = resultado;
}

/*function mostrarResultado(resultado) {
    // Actualizar el contenido de la sección de resultados
    var resultadosDiv = document.querySelector('.resultados');
    resultadosDiv.innerHTML = '<p>' + resultado + '</p>';
}*/

function limpiarTexto() {
    // Limpiar el contenido del área de texto
    document.querySelector('.texto').value = '';
}

function habilitarBoton() {
    var boton = document.getElementById('botonCopiar'); 
    boton.removeAttribute('disabled'); // Quita el atributo disabled
    boton.removeAttribute('hidden'); // Quita el atributo hidden
}

// Esta función se encarga de copiar el contenido del resultado al formulario
function copiarResultado() {
    // Obtener el contenido del resultado
    var resultado = document.querySelector('.resultados p').textContent;

    // Obtener el área de texto donde se pegará el resultado
    var areaTexto = document.querySelector('.texto');

    // Asignar el contenido del resultado al área de texto
    areaTexto.value = resultado;
}

function ocultarResultados() {
    document.getElementById('imagenResultado').style.display = 'none';
    document.getElementById('tituloResultado').style.display = 'none';
    document.getElementById('mensajeResultado').style.display = 'none';
}