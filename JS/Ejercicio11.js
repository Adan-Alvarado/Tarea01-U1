/**Verificación de un número primo: 
Pida un número y verifique si es primo o no*/

const numero = parseInt(prompt("Ingrese un numero a evaluar:"));
const esPrimo = true;
let i;

if (numero <= 1) {
  esPrimo = false;
} 
else{
  for ( i = 2; i < numero; i++)
    {
        if (numero % i === 0){
            esPrimo = false;
            break;
        }
    }
}
if (esPrimo)
{
  console.log("El numero es primo");
}
else
{
  console.log("El numero no es primo");
}