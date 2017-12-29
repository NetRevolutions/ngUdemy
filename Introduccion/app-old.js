// Ejemplo templates literal
var nombre = "Juan";
var apellido = "Perez";
var edad = 32;
//let texto = "Hola, " + nombre + " " + apellido + "(" + edad + ")";
//Usando template literal
var texto = "Hola, \n" + nombre + " " + apellido + "\n(" + edad + ")";
//Todo lo que va dentro de las llaves es JS puro
var texto2 = " " + (1 + 2) + " ";
function getNombre() {
    return 'Jose';
}
var texto3 = " " + getNombre();
console.log(texto);
console.log(texto2);
console.log(texto3);
// Uso de parametros obligatorios
function activar(quien) {
    var mensaje;
    mensaje = quien + " activ\u00F3 la batise\u00F1al";
    console.log(mensaje);
}
activar("Gordon");
// Uso de parametros opcionales
// ejemplo 1
function activar2(quien, objeto) {
    if (objeto === void 0) { objeto = "batiseñal"; }
    var mensaje;
    mensaje = quien + " activ\u00F3 la " + objeto;
    console.log(mensaje);
}
activar2("Gordon");
//Ejemplo 2
function activar3(quien, objeto, momento) {
    if (objeto === void 0) { objeto = "batiseñal"; }
    var mensaje;
    if (momento) {
        mensaje = quien + " activ\u00F3 la " + objeto + " en la " + momento;
    }
    else {
        mensaje = quien + " activ\u00F3 la " + objeto;
    }
    console.log(mensaje);
}
activar3("Gordon", "batiseñal", "tarde");
// Funciones de flecha
//Funcion normal
var miFuncion = function (a) {
    return a;
};
// Funcion flecha
var miFuncionF = function (a) { return a; };
console.log(miFuncion("Normal"));
console.log(miFuncionF("Flecha"));
// Funcion de mas de 2 parametros
var miFuncion2 = function (a, b) {
    return a + b;
};
var miFuncion2F = function (a, b) { return a + b; };
var miFuncion3 = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
var miFuncionF3 = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
//Ejemplo completo de funcion flecha
/*
let hulk = {
    nombre : 'Hulk',
    smash(){
        //Haciendo => el this apunta al this del mismo objeto (Hulk)
        setTimeout(() => console.log(this.nombre + ' smash!!'), 1500);
    }
};

hulk.smash();
*/
// Destructuracion de objetos y arreglos
var avenger = {
    nombre2: "Steve",
    clave: "Capitan America",
    poder: "Droga"
};
var nombre2 = avenger.nombre2, clave = avenger.clave, poder = avenger.poder;
// let nombre2 = avenger.nombre2;
// let clave = avenger.clave;
// let poder = avenger.poder;
console.log(nombre2, clave, poder);
