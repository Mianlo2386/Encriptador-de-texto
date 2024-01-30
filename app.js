var textoCifrado = ""; 
var textoEncriptadoGlobal = "";


var boton1 = document.querySelector(".btn-encriptar");
boton1.addEventListener("click", encriptar);

var boton2 = document.querySelector(".btn-desencriptar");
boton2.addEventListener("click", desencriptar);



function encriptar() {
    var texto = document.querySelector("#input-texto").value;

    if (!validarTexto(texto)) {
      return;
    }

    var miArea = document.getElementById('outputArea');
    miArea.classList.remove('outputArea');
    miArea.classList.add('outputArea-salida');

    var texto = document.querySelector("#input-texto").value;
    textoEncriptadoGlobal = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    miArea.innerText = textoEncriptadoGlobal;
    crearBoton();
    
}
 


function desencriptar() {
    var texto = document.querySelector("#input-texto").value;
    textoEncriptadoGlobal = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.getElementById('outputArea').innerText = textoEncriptadoGlobal;
    crearBoton();
    // Elimina el botón Copiar si existe al desencriptar
    /* var btnCopiarExistente = document.getElementById('btnCopiar');
    if (btnCopiarExistente) {
        btnCopiarExistente.remove();
    } */

}

function limpiarCaja() {
    document.querySelector('#input-texto').value = "";

}

function validarTexto(inputTexto) {
    const contieneMayusculas = /[A-ZÁÉÍÓÚÜ]/.test(inputTexto);
    const contieneAcentos = /[áéíóúü]/.test(inputTexto);
  
    if (contieneMayusculas || contieneAcentos) {
      const mensaje = "Por favor, ingresa solo texto en minúsculas y sin acentos.";
      alert(mensaje);
      return false;
    }
  
    return true;
  }

function crearBoton() {
    var boton = document.createElement("button");
    boton.id = 'btnCopiar';
    boton.innerText = "Copiar!"; 
    boton.className = "btn-copiar";
    boton.onclick = copiarTexto;

    document.getElementById('outputArea').appendChild(boton);
}

function copiarTexto() { // Utiliza la variable global para copiar el texto encriptado
    var textoEncriptado = textoEncriptadoGlobal;

    // Utiliza el Clipboard API para copiar el texto al portapapeles
    navigator.clipboard.writeText(textoEncriptado)
        .then(() => {
            console.log('Texto copiado al portapapeles: ' + textoEncriptado);
        })
        .catch((err) => {
            console.error('Error al intentar copiar el texto: ', err);
        });
}
// Función para alternar entre el modo claro y oscuro
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  
    // Guarda la preferencia de modo en localStorage
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
  }
  
  // Verifica la preferencia de modo almacenada en localStorage al cargar la página
  document.addEventListener('DOMContentLoaded', function() {
    const isDarkModeStored = localStorage.getItem('darkMode');
    if (isDarkModeStored && isDarkModeStored === 'true') {
      document.body.classList.add('dark-mode');
    }
  });
  
  // Ejemplo de asignar la función al botón con el ID 'toggle-dark-mode-btn'
  document.getElementById('toggle-dark-mode-btn').addEventListener('click', toggleDarkMode);
  
