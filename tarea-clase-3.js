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




let preguntarNombre = (prompt('¿cuál es tu nombre?') || '').toLocaleLowerCase().trim();
const MY_NAME = 'pablo';


if (preguntarNombre === MY_NAME){
    console.log('Hola Tocayo! yo también me llamo Pablo')
}
else if(preguntarNombre == 'sol'){
    console.log('hola ' + preguntarNombre + ' te llamas igual que el Sol')
}
else if(preguntarNombre.length === 0){
    console.log('No ingresaste ningún nombre')
}
else{
    console.log('hola ' + preguntarNombre)
};

<<<<<<< Updated upstream
/*let miEdad = 37
let edadUsuario = prompt('¿cuál es tu edad?');

f (edadUsuario == 37){
    alert('Tenemos la misma edad')}
else if(edadUsuario > 37){
    alert('sos mayor que yo')
}
else{
     alert('sos menor que yo')
=======
const MY_AGE = 37
const edadUsuario = Number(prompt('¿cuál es tu edad?'));

if(edadUsuario === 0){
    alert('Ingresá un número entero mayor a 0');
}else if(edadUsuario === 37){
    alert('Tenemos la misma edad');
}else if(edadUsuario > 37){
    alert('Sos mayor que yo');
}else if(edadUsuario < 37){
    alert('Sos menor que yo')    
}else{
     alert('No entendí la respuesta. Ingresá un número entero mayor a 0')
>>>>>>> Stashed changes
};
*/


const EDAD_PARA_ENTRAR = 18;
const RESPUESTA_SI = 'si';
const RESPUESTA_NO = 'no';


let preguntarPorDocumento = (prompt('¿Tenés documento?') || '').toLocaleLowerCase();

if(preguntarPorDocumento === RESPUESTA_NO){
    alert('Sin documento no podes pasar');
}else if(preguntarPorDocumento !== RESPUESTA_SI){
    alert('No entendi la respuesta, responder si o no')
}

<<<<<<< Updated upstream
if (edadUsuario > 17)
    alert('podes pasar')
else alert('no podes pasar')

=======
if (preguntarPorDocumento === RESPUESTA_SI) {
    const preguntarEdad = Number(prompt('¿cuál es tu edad?'));

    if (preguntarEdad > 17){
    alert('Podes pasar');}
else alert('No podes pasar')}
>>>>>>> Stashed changes
