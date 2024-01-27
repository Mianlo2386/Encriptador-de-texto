var textoCifrado = ""; 
var miArea = "";
var textoEncriptadoGlobal = "";

document.addEventListener("DOMContentLoaded", function () {
    var boton1 = document.querySelector(".btn-encriptar");
    boton1.addEventListener("click", encriptar);

    var boton2 = document.querySelector(".btn-desencriptar");
    boton2.addEventListener("click", desencriptar);
});

/* function encriptar() {
    miArea = document.getElementById('outputArea');
    miArea.classList.remove('outputArea');
    miArea.classList.add('outputArea-salida');

    var texto = document.querySelector("#input-texto").value;
    textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    miArea.innerText = textoCifrado;

    
        crearBoton();
    
    console.log(textoCifrado);
    return textoCifrado;

} */
function encriptar() {
    var miArea = document.getElementById('outputArea');
    miArea.classList.remove('outputArea');
    miArea.classList.add('outputArea-salida');

    var texto = document.querySelector("#input-texto").value;
    // Guardar el texto encriptado en la variable global
    textoEncriptadoGlobal = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    miArea.innerText = textoEncriptadoGlobal;
    crearBoton();
    console.log(textoEncriptadoGlobal);
}
 
console.log( 'Salida de función:' + miArea);

function desencriptar() {
    var texto = document.querySelector("#input-texto").value;
    var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.getElementById('outputArea').innerText = textoCifrado;

    // Eliminar el botón Copiar si existe al desencriptar
    var btnCopiarExistente = document.getElementById('btnCopiar');
    if (btnCopiarExistente) {
        btnCopiarExistente.remove();
    }
}

function limpiarCaja() {
    document.querySelector('#input-texto').value = "";
}

function crearBoton() {
    var boton = document.createElement("button");
    boton.id = 'btnCopiar';
    boton.innerText = "Copiar!"; 
    boton.className = "btn-copiar";
    boton.onclick = copiarTexto;

    document.getElementById('outputArea').appendChild(boton);
}

/* function copiarTexto() {
    // Lógica para copiar el texto encriptado al portapapeles
    var textoEncriptado = document.getElementById('outputArea').innerText;
    // Tu lógica de copiado aquí
} */


/* function copiarTexto() {
    // Obtener el elemento de texto encriptado
    var textoEncriptado = document.getElementById('outputArea').innerText;

    // Crear un elemento de textarea temporal para copiar el texto
    var textareaTemp = document.createElement('textarea');
    textareaTemp.value = textoEncriptado;

    // Agregar el textarea temporal al cuerpo del documento
    document.body.appendChild(textareaTemp);

    // Seleccionar y copiar el contenido del textarea
    textareaTemp.select();
    document.execCommand('copy');

    // Eliminar el textarea temporal
    document.body.removeChild(textareaTemp);

    // Mostrar un mensaje de copiado (opcional)
    console.log('Texto copiado al portapapeles: ' + textoEncriptado);
} */

function copiarTexto() {
    // Utilizar la variable global para copiar el texto encriptado
    var textoEncriptado = textoEncriptadoGlobal;

    // Utilizar el Clipboard API para copiar el texto al portapapeles
    navigator.clipboard.writeText(textoEncriptado)
        .then(() => {
            console.log('Texto copiado al portapapeles: ' + textoEncriptado);
        })
        .catch((err) => {
            console.error('Error al intentar copiar el texto: ', err);
        });
}

