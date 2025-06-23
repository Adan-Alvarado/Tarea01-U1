/** Área de un círculo: 
Solicite el radio de un círculo y calcule su área */

const radio = parseFloat(prompt("Ingrese el radio del circulo:"));
const area = Math.PI * (radio*radio);
console.log(`El area del circulo es: ${area.toFixed(2)}`);
