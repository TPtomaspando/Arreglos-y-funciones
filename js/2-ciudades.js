/*2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

Ejemplo:
Input:
[‘Nueva York, Estados Unidos’, ‘Barcelona, España’, ‘Tokio, Japón’, ‘Londres, Reino Unido’, ‘Roma, Italia’, ‘Pekín, China’, ‘Río de Janeiro, Brasil’, ‘Ámsterdam, Países Bajos’, ‘Sídney, Australia’, ‘El Cairo, Egipto’]
*/

const ciudades = [];

while (true) {
  let ciudad = prompt("ingrese una ciudad(o cancele si no lo desea):");
  if (ciudad === null) {
    break;
  }
  ciudades.push(ciudad);
}

document.write("<br>numero de ciudades ingresadas: </br>", ciudades.length);
document.write("<br>Primera ciudad: </br>", ciudades[0]);
document.write("<br>Tercera ciudad: </br>", ciudades[2]);
document.write("<br>Última ciudad: </br>", ciudades[ciudades.length - 1]);
ciudades.push("Paris, Francia");
document.write("<br>la segunda posición: </br>", ciudades[1]);
ciudades[1] = "Barcelona";

// Mostrar el arreglo final en la consola
document.write("Arreglo final de ciudades:", ciudades);
