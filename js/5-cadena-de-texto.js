//5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

function analizarCadena(cadena) {
  if (cadena === cadena.toUpperCase()) {
    return "esta cadena esta integrada por mayusculas";
  } else if (cadena === cadena.toLowerCase()) {
    return "<br>esta cadena esta integrada por minusculas</br>";
  } else {
    return "esta cadena esta integrada por minusculas y mayusculas";
  }
}

document.write(analizarCadena("HOLA MUNDO")); // Solo mayúsculas
document.write(analizarCadena("hola mundo")); // Solo minúsculas
document.write(analizarCadena("Hola Mundo")); // Mezcla
