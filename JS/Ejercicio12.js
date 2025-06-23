/*Permite al usuario realizar operaciones basicas con dos numeros */

const num1 = parseFloat(prompt('Ingrese el primer numero:'));
const num2 = parseFloat(prompt('Ingrese el segundo numero:'));
const operacion = prompt("Ingrese la operacion \n (suma, resta, multiplicacion, division):");
let resultado;

if (operacion === "suma") {
  resultado = num1 + num2;
  
} else if (operacion === "resta") {
  resultado = num1 - num2;

} else if (operacion === "multiplicacion") {
  resultado = num1 * num2;

} else if (operacion === "division") {
  resultado = num1 / num2;
}

console.log(`Resultado: ${resultado.toFixed(2)}`);
