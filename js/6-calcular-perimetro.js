/*6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)

Ejemplo:




Input:
lado A = 24
lado B = 5

Output: 58
*/

function calcularPerimetro(ladoA, ladoB) {
  return 2 * (ladoA + ladoB);
}

let ladoA = parseInt(prompt("ingrese el primer lado: "));

let ladoB = parseInt(prompt("ingrese el segundo lado: "));

let perimetro = calcularPerimetro(ladoA, ladoB);

document.write("El perimetro es igual a: " + perimetro);
