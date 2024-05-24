/* let nombre = 'Pedro';
let years = 30;
console.log(years + nombre);

// Clase 10 Java Script
let numberone=120;
let numbertwo=20;
let resultsuma = numberone + numbertwo;
let resultresta = numberone - numbertwo;
let resultmulti = numberone * numbertwo;
let resultdivision = numberone / numbertwo;
console.log("Suma", resultsuma);
console.log("Resta", resultresta);
console.log("Multiplicacion", resultmulti);
console.log("División", resultdivision);

// Tarea Clase 10 
let nombre = "Lionel";
let apellido = "Messi";
console.log(nombre + apellido);

let numero1=1996
let numero2=1998

let suma = numero1 + numero2;
console.log(
"El numero 1 es " + numero1 + " y el numero 2 es " + numero2 + " el resultado da " + suma
);

let sumaVariables = suma + 200;
console.log(sumaVariables);

// Clase 11
let nota = 3;
if (nota < 4) {
    console.log ('Aplazado');
}    else if (nota < 7) {
    console.log ('Desaprobado');
} else if (nota < 9) {
    console.log ('Aprobado');
} else {
    console.log ('Sobresaliente');
}

let nombres = ["Diego", "Anabel", "Esteban", "Juan"];
console.log(nombres);
console.log(nombres[0]);
console.log(nombres[3]);
console.log("Cantidad de nombre:" , nombres.length);
for(let i = 0; i< nombres.length; i++){
    console.log(nombres[i]);
}*/

let topping = "Oreo";
let precio = 0;
let precioFinal = 0;
let helado = 200;

if(topping == "Oreo") {
    precio = 10;
} else if(topping == "KitKat") {
    precio = 15;
} else if(topping == "Kinder") {
    precio = 25;
} else {
    console.log("No tenemos este topping");
}

precioFinal = helado + precio;
console.log("El helado cuesta $" + precioFinal)

//CLASE 11 - TAREA
let menu = ['pescado, carne, verdura'];
for (let i = 0; i < menu.length; i++) {
    let eleccion = menu [i];

    switch (eleccion) {
        case 'carne':
            console.log('Si pide carne, se le ofrecerá como bebida vino tinto.');
            break;
        case 'pescado':
            console.log('Si pide pescado, se le ofrecerá como bebida vino blanco.');
            break;
        case 'verdura':
            console.log('Si pide verdura, se le ofrecerá como bebida agua.');
            break;
        default:
            console.log('Elija carne, pescado o verdura');
    }
}

/*
// CLASE 12

// Declarar variables
let numero = 1;  // Número inicial
let suma = 0;    // Variable para almacenar la suma

// Bucle while
while (numero <= 10) {
  suma += numero;  // Sumar el valor actual de 'numero' a 'suma'
  numero++;        // Incrementar 'numero' en 1
}

// Mostrar el resultado
console.log("La suma de los números del 1 al 10 es: " + suma);

let numeros = 8;
let sumas = 0;

while (numeros <=10) {
    sumas += numeros;
    numeros++;
}

    console.log("La sumas de los numeros del 1 al 10 es: " + sumas);

let resultado
let numero3 = 28;
let numero4 = 30;
function suma_y_muestra () {
    resultado = numero3 + numero4;
    alert("El resultado es " + resultado)
}
suma_y_muestra ();

// Solicita al usuario que introduzca un número entero
let numero = prompt("Introduce un número entero");

// Llama a la función parImpar y guarda el resultado
let resultado = parImpar(numero);

// Muestra el resultado en una alerta
alert("El número " + numero + " es " + resultado);

// Define la función parImpar
function parImpar(numero) {
  if (numero % 2 == 0) {
    return "par";
  } else {
    return "impar";
  }
}

let nombre = prompt('Ingrese su nombre');
function saludo() {
    if (nombre) {
        alert('Bienvenido ' + nombre);
    }
    else {
        alert('Debe ingresar un nombre');
    }
}

saludo();
*/