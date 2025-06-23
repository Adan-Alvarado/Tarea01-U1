/* Verificación de par o impar: 
Pida un número al usuario y determina si es par o impar*/

const numero = parseInt(prompt("Ingrese el numero:"));

if (isNaN(numero)) {
  console.log("Eso no es un numero valido.");
} else {
  if (numero % 2 === 0) {
    console.log("El numero es par");
  } else {
    console.log("El numero es impar");
  }
}


/*Investigue una manera para que el si no es numero no sea valido
que en este caso seria si ingresaran texto, devuelva al ususario*/

