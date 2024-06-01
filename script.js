/*let num = prompt("¿Cuánto es 6*9?");
function Multiplicacion_y_muestra (num) {
    if(num == 54) {
        alert("Bienvenido al sitio web");
    } else {
        alert("¡Ponete a estudiar!");
    }
}
Multiplicacion_y_muestra(num); */
 // let nombre = prompt("Escribe tu tag");
// alert("Bienvenido/a" + " " + nombre + " " + "a Punto Gamers");

function verificarEdad() {
    let edad = prompt("Ingrese su edad");
    if(isNaN(edad)) {
        alert("ingrese el numero");
    } else {
        edad = parseInt(edad);
        if(edad < 18){
            alert("Debe ingresar con un responsable");
        } else{
            alert("Bienvenidos a Punto Gamers");
        }
    }
}
window.onload = verificarEdad;