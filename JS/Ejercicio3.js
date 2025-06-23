/** Multiplicación y División: 
Solicite dos números al usuario y muestra el resultado
de la multiplicación y división de los mismos*/

const numero1 = parseFloat(prompt("Ingrese el primer numero:"));
const numero2 = parseFloat(prompt("Ingrese el segundo numero:"));
const multiplicacion = numero1 * numero2;
const division = numero1 / numero2;

console.log("La multiplicacion de los dos numeros es: ", multiplicacion);
console.log("La division de los dos numeros es: ", division);