//  Boolean
let muted: boolean = true;
muted = false;

//  Números
let numerador: number = 36;
let denominador: number = 6;
let resultado = numerador / denominador;

//  String
let nombre: string = "Andrés";
let saludo: string = `Me llamo ${nombre}`;

//  Arreglos
let people: string[] = [];
people = ["pedro","maria","segio"];
people.push("90000");

let peopleAndNumbers: Array<String | number> = [];
peopleAndNumbers.push("Andrés");
peopleAndNumbers.push(10000);

//  Enum
enum Color {
    Rojo = "Rojo",
    Verde = "Verde",
    Amarillo = "Amarillo"
}
const colorFavorito: Color = Color.Rojo;
//console.log(`Mi color favorito es ${colorFavorito}`);

//  Any
let comodin: any = 'Joker';
comodin = { type: 'Wildcard' };

//  Object
let someObject: object = { type: 'Wildcard' };

//  Funciones
function add(a: number, b: number): number {
    return a + b;
}
const suma = add(1, 5);

function createAdder(a: number): (number) => number {
    return function(b: number) {
        return b + a;
    }
}
const addFour = createAdder(4);
const fourPlus6 = addFour(6);

function fullName(firstName: string, lastName: string = 'Sin Apellido'): string {
    return `${firstName} ${lastName}`;
}
const Andres = fullName('Andrés');

//  Interfaces
interface Rectangulo {
    alto: number;
    ancho: number;
    color?: Color;
}
let rect: Rectangulo = {
    alto: 8,
    ancho: 3,
    //color: Color.Rojo,
}
function area(r: Rectangulo): number {
    return r.alto * r.ancho;
}
rect.toString = function() {
    return `Un rectangulo ${this.color?this.color:''}`;
}
const areaRect = area(rect);
//console.log(rect.toString());

console.log(areaRect);