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


