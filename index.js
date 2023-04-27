function encriptar() {
    let texto =  document .getElementById("texto").value;
    let tituloMensaje = document.getElementById ("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let personaje = document.getElementById("personaje");

    let textoCifrado = texto
                  .replace(/e/gi, "enter")
                  .replace(/i/gi, "imes")
                  .replace(/a/gi, "ai")
                  .replace(/o/gi, "ober")
                  .replace(/u/gi, "ufat")
 if (texto.length !=0){
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto encriptado con éxito";
    parrafo.textContent = ""
    personaje.src = "./img/Encriptado.gif";
 }else {
   personaje.src = "./img/94992-error-404.gif"
   tituloMensaje.textContent = "Ningún mensaje fue encontrado";
   parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    swal("Upssss!", "Debes ingresar un texto")
    
 }
}


function desencriptar() {
   let texto = document.getElementById("texto").value;
   let tituloMensaje = document.getElementById ("titulo-mensaje");
   let parrafo = document.getElementById("parrafo");
   let personaje = document.getElementById("personaje");

   let textoCifrado = texto 
   .replace(/enter/gi, "e")
   .replace(/imes/gi, "i")
   .replace(/ai/gi, "a")
   .replace(/ober/gi, "o")
   .replace(/ufat/gi, "u")

   if (texto.length !=0){
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto desencriptado con éxito";
    parrafo.textContent = ""
    personaje.src = "./img/85848-high-five.gif";
   } else {
   personaje.src = "./img/94992-error-404.gif"
   tituloMensaje.textContent = "Ningún mensaje fue encontrado";
   parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
   swal("Upssss!", "Debes ingresar un texto")
  }
}