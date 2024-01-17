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



//Solución 1
let nombreUsuario = (prompt('¿cuál es tu nombre?') || '').toLocaleLowerCase().trim();
const MI_NOMBRE = 'pablo';


if (nombreUsuario === MI_NOMBRE){
    console.log('Hola tocayo! yo también me llamo Pablo')
}
else if(nombreUsuario === 'laura'){
    console.log('hola ' + nombreUsuario + ' te llamas igual que mi hermana')
}
else if(nombreUsuario.length === 0){
    console.log('No ingresaste ningún nombre')
}
else{
    console.log('hola ' + nombreUsuario[0].toUpperCase() + nombreUsuario.substring(1))
};

//Solución 2
const MI_EDAD = 37
const EDAD_USUARIO = Number(prompt('¿cuál es tu edad?'));

if(EDAD_USUARIO === 0){
    alert('Ingresá un número entero mayor a 0');
}else if(EDAD_USUARIO === MI_EDAD){
    alert('Tenemos la misma edad');
}else if(EDAD_USUARIO > MI_EDAD){
    alert('Sos mayor que yo');
}else if(EDAD_USUARIO < MI_EDAD){
    alert('Sos menor que yo')    
}else{
     alert('No entendí la respuesta. Ingresá un número entero mayor a 0')
};


//Solución 3
const EDAD_PARA_ENTRAR = 18;
const RESPUESTA_SI = 'sí';
const RESPUESTA_SI_TILDADA = 'sí'
const RESPUESTA_NO = 'no';



let usuarioConDocumento = (prompt('¿Tenés documento?') || '').toLocaleLowerCase();

if(usuarioConDocumento = RESPUESTA_SI_TILDADA){
    usuarioConDocumento = RESPUESTA_SI
}

if(usuarioConDocumento === RESPUESTA_NO){
    alert('Sin documento no podes pasar');
    
}else if(usuarioConDocumento !== RESPUESTA_SI){
    alert('No entendi la respuesta, responder si o no')
}

if (EDAD_USUARIO >= EDAD_PARA_ENTRAR && usuarioConDocumento === RESPUESTA_SI)
    alert('Podes pasar')
else alert('No podes pasar')

