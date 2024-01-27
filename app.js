function encriptar() {
    var miArea = document.getElementById('outputArea');
    miArea.classList.remove('outputArea');
    miArea.classList.add('outputArea-salida');
    var texto = document.querySelector("#input-texto").value;
    var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    miArea.innerText = textoCifrado;
    console.log(textoCifrado);
}

var boton1 = document.querySelector("#btn-encriptar");
boton1.onclick = encriptar;

function desencriptar() {
    var texto = document.querySelector("#input-texto").value;
    var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.getElementById('outputArea').innerText = textoCifrado;
}

var boton2 = document.querySelector("#btn-desencriptar");
boton2.onclick = desencriptar;

function limpiarCaja() {
    document.querySelector('#input-texto').value = "";
}




