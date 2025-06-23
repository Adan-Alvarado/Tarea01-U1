/*Concatenación de cadenas: 
Capture de forma separada los 2 nombres y los dos apellidos de una persona 
y luego almacene en una variable los valores 
por medio de una concatenación y muéstrelo en la consola. */

const nombre1= (prompt("Ingrese su primer nombre:"));
const nombre2= (prompt("Ingrese su segundo nombre:"));
const apellido1= (prompt("Ingrese su primer apellido:"));
const apellido2= (prompt("Ingrese su segundo apellido:"));

console.log(`Su nombre es: ${nombre1} ${nombre2} ${apellido1} ${apellido2}`);