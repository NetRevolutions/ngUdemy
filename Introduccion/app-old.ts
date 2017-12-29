

// Ejemplo templates literal

let nombre : string = "Juan";
let apellido : string = "Perez";
let edad : number = 32;


//let texto = "Hola, " + nombre + " " + apellido + "(" + edad + ")";

//Usando template literal
let texto = `Hola, 
${ nombre } ${ apellido }
(${ edad })`;

//Todo lo que va dentro de las llaves es JS puro
let texto2: string = ` ${ 1 + 2 } `;

function getNombre() {
    return 'Jose';
}

let texto3: string = ` ${ getNombre() }`;

console.log(texto);

console.log(texto2);

console.log(texto3);

// Uso de parametros obligatorios

function activar(quien: string) {
    let mensaje : string;
    mensaje = `${quien} activó la batiseñal`;

    console.log(mensaje);
}

activar("Gordon");

// Uso de parametros opcionales
// ejemplo 1
function activar2(quien:string, objeto: string = "batiseñal") {
    let mensaje : string;
    mensaje = `${quien} activó la ${objeto}`;

    console.log(mensaje);
}

activar2("Gordon");

//Ejemplo 2

function activar3(quien:string, objeto: string = "batiseñal", momento?: string) {
    let mensaje : string;
    if(momento)
    {
        mensaje = `${ quien } activó la ${ objeto } en la ${ momento }`;
    }
    else
    {
        mensaje = `${ quien } activó la ${ objeto }`;
    }

    console.log(mensaje);
}

activar3("Gordon", "batiseñal", "tarde");

// Funciones de flecha

//Funcion normal
let miFuncion = function(a){
    return a;
}

// Funcion flecha
let miFuncionF = a => a;

console.log(miFuncion("Normal"));
console.log(miFuncionF("Flecha"));

// Funcion de mas de 2 parametros
let miFuncion2 = function (a:number, b: number) {
    return a + b;
}

let miFuncion2F = (a: number,b: number) => a + b;

let miFuncion3 = function(nombre: string){
    nombre = nombre.toUpperCase();
    return  nombre;
}


let miFuncionF3 = (nombre: string) => {
    nombre = nombre.toUpperCase();
    return  nombre;
}


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

let avenger = {
    nombre2: "Steve",
    clave: "Capitan America",
    poder: "Droga"
};

let { nombre2, clave, poder} = avenger;

// let nombre2 = avenger.nombre2;
// let clave = avenger.clave;
// let poder = avenger.poder;

console.log(nombre2, clave, poder);

