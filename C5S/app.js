const prompt = require("prompt-sync")({sigint: true});

/************* Ejercicio 1 ***************/

/*
const convertirPulgadasACm = pulgadas => pulgadas * 2.54;

let pulgadas = prompt("Ingrese pulgadas: ");
console.log(pulgadas+" pulgadas equivalen a "+convertirPulgadasACm(pulgadas)+" cm");
*/

/************* Ejercicio 2 ***************/
/*
const convertirUrl = cadena => "http://www."+cadena+".com";

let cadena = prompt("Ingrese un texto: ");
console.log(convertirUrl(cadena));
*/

/************* Ejercicio 3 ***************/
/*const convertirFrase = frase => frase+" !";

const frase = prompt("Ingrese una frase: ")
console.log(convertirFrase(frase));
*/

/************* Ejercicio 4 ***************/
/*
edad = prompt("Ingrese la edad del perro: ");

const calcularEdadPerro = edad => edad * 7;
console.log("edad perro en años perros es: "+calcularEdadPerro(edad));
*/

/************* Ejercicio 5 ***************/
//mes-40hs
/*
const sueldo = prompt("Ingrese suelado: ");
const calcularValorHora = sueldo => sueldo / 40;

console.log("el valor de hora trabajadas es: "+calcularValorHora(100000));
*/

/************* Ejercicio 6 ***************/
//FALTA
/*
const calculadorIMC = (altura,peso)=> peso / (altura*altura);

let kg = prompt("Ingrese el peso en Kg: ");
let cm = prompt("Ingrese la altura en metros: ");
console.log("El indice de masa corporal es: "+calculadorIMC(kg,cm));
*/

/************* Ejercicio 7 ***************/
/*const convertirMayuscula = cadena => cadena.toUpperCase();

const texto = prompt("Ingrese un texto: ");
console.log(convertirMayuscula(texto));
*/

/************* Ejercicio 8 ***************/
/*const tipoDeDato = dato =>{
    return typeof(dato);
}

//const dato = prompt("Ingrese un dato: ");
console.log("El tipo de dato es: "+tipoDeDato(45));
*/

/************* Ejercicio 9 ***************/

const calcularCircunferencia = radio => 2 * Math.PI * radio;

const radio = prompt("Ingrese el radio : ");
console.log(calcularCircunferencia(radio));


