/**Celsius a Fahrenheit: 
Pida una temperatura en grados Celsius y convierta a grados Fahrenheit*/

const celsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius:"));
const fahrenheit = (celsius * 9/5) + 32;

console.log(`${celsius} °C equivalen a ${fahrenheit} °F`);