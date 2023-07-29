// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

//Tarea 1



let preguntarNombre = (prompt('¿cuál es tu nombre?') || '').trim();
const MY_NAME = 'pablo';


if (preguntarNombre.toLocaleLowerCase() === MY_NAME){
    console.log('Hola Tocayo! yo también me llamo Pablo')
}
else if(preguntarNombre == 'sol'){
    console.log('hola ' + preguntarNombre + ' te llamas igual que el Sol')
}
else if(preguntarNombre.trim().length === 0){
    console.log('No ingresaste ningún nombre')
}
else{
    console.log('hola ' + preguntarNombre)
};

/*let miEdad = 37
let edadUsuario = prompt('¿cuál es tu edad?');

f (edadUsuario == 37){
    alert('Tenemos la misma edad')}
else if(edadUsuario > 37){
    alert('sos mayor que yo')
}
else{
     alert('sos menor que yo')
};
*/

let preguntarPorDocumento = prompt('¿Tenés documento?');
if(preguntarPorDocumento == 'no')
    alert('Sin documento no podes pasar')
if(preguntarPorDocumento !== 'si')
    alert('No entendi la respuesta, responder si o no')
if(preguntarPorDocumento == 'si')
{ 
let edadUsuario = prompt('¿cuál es tu edad?')
};

if (edadUsuario > 17)
    alert('podes pasar')
else alert('no podes pasar')