// JS
//number
//boolean
//string
//null
//undefined
//symbol

//object
    //array
    //function

//TS
//number
//string
//boolean
//object
//array
//tuple
//enum
//any
//unknown
//never

//custom type
//union type
//literal type

// advanced types
// -intersection types
// -type guards
// -type casting
// -discriminating types
// -function overloads
// -indexing
// -optional chaining ?
// -null coalescing (&& ||) ??

// const inputNum1 = document.querySelector('#num1')! as HTMLInputElement
// const inputNum2 = document.querySelector('#num2')! as HTMLInputElement
// const button = document.querySelector('button')!

// function mojaF(str: string){
//     console.log('str' + str);    
// }

// if(button != null)
//     button.addEventListener('click', mojaF.bind(null, 'mojstr'))

// short circuit conditionals
// let pokreni = false
// console.log(pokreni && mojaF())
// console.log(pokreni || false || 0)



// const num1: number = +inputNum1.value
// const nmb = 5

// console.log(inputNum1.value)

// const saberi = (number_1: number, number_2: number) => {
//     return number_1 + number_2
// }

// console.log(saberi(10, 20))

// const promenljiva: unknown = 5
// // promenljiva = 5
// promenljiva = 'nmsakldmasdk'

// let num: unknown;
// num = '5'
// let str: string = num

// /}

// for(const hobby of obj.hobbies) {
//     console.log(hobby);
// }

// let niz: string[]


// obj.pozicija.push('item')
// console.log(obj.pozicija)


// function saberi(num1: number, num2: number) {
//     return num1 + num2
// }

// function pozdrav(str: string): void { //never
//     console.log(str)
//     return
// }

// type customType = {
//     message: string;
//     code: number;
// }

// function error(obj: customType): never {
//     throw (obj)
// }

// let greska = {
//     message: 'greska',
//     code: 405
// }

// let g1 = greska

// let zbir = saberi(10, 20)
// console.log(pozdrav('Pozdrav'));
// console.log(error(greska));

// let mojaF: (param2: string, param1: boolean) => void

// let num = 5
// console.log('poz', num)

// INTERSECTION
// type MojTip = number | string | boolean
// type MojTip2 = string | boolean

// type Kombinacija = MojTip | MojTip2 
// type Kombinacija = MojTip & MojTip2 

// interface Osoba {
//     name: string
//     prezime: string
//     hobi: string[]
// }

// interface Zaposleni {
//     name: string
//     prezime: string
//     pozicija: string
// }

// type Osoba = {
//     name: string
//     prezime: string
//     hobi: string[]
// }

// type Zaposleni = {
//     prezime: string
//     pozicija: string
//     name: string
// }

// type Racunovodja = Zaposleni & Osoba
// interface Racunovodja extends Zaposleni, Osoba

// let o1: Racunovodja = {
//     name: 'Mirko',
//     prezime: 'Mirkovic',
//     pozicija: 'Racunovodja',
//     hobi: ['Skijanje']
// }

// TYPE GUARDS
// function add(a: number | string, b: number | string) {
//     if(typeof a === 'string' || typeof b === 'string')
//         return a.toString() + b.toString()
//     return a + b
// }

// type Osoba = {
//     name: string
//     prezime: string
//     hobi: string[]
// }

// type Zaposleni = {
//     prezime: string
//     pozicija: string
//     name: string
// }

// type MyO = Osoba | Zaposleni

// function printHobby(object:MyO) {
//     if('hobi' in object)
//         console.log(object.hobi)
// }

// DISCRIMINATING TYPES
// interface Kosarka {
//     type: 'Kosarka'
//     koraci: boolean
// }

// interface Fudbal {
//     type: 'Fudbal'
//     ofsajd: boolean
// }

// let greska: boolean
// let obj3: Kosarka | Fudbal

// switch (obj3.type) {
//     case 'Fudbal':
//         greska = obj3.ofsajd
//         break;
//     default:
//         break;
// }

// console.log(greska);

// TYPE CASTING
// const divIspis1 = document.querySelector('div')! as HTMLDivElement
// const inputUser = document.querySelector('input')! as HTMLInputElement
// divIspis1.textContent = 'pozdrav'

// divIspis1.value  
// inputUser.value

// INDEXING (index properties)

// interface Error {   // {email: 'str', user: 'str', ...}
//     [key: string | number]: string
// }

// interface MojI extends Error  {
//     email: 'moj mail',
//     1: 'moj broj'
// }

// -NULL COALESCING (&& ||) ??
// || gleda falsey value, null i undefined
// ?? gleda samo null i undefined

// const str = null
// let mojStr = str ?? 'DEFAULT'

// OPTIONAL CHAINING ?
// obj?.hobby?.sport[0]
// function add(a: number, b?:number) {
    
// }

// FUNCTION OVERLOADS

// function add(a: string, b: number): string;
// function add(a: number, b: number): number;
// function add(a: number | string, b: number | string) {
//     if(typeof a === 'string' || typeof b === 'string')
//         return a.toString() + b.toString()
//     return a + b
// }

// class Automobil {

//     constructor(num: number) {
//         this.number = num
//     }
// }

// let obj = {
//     name: "marko",

//     pozdrav() {
//         console.log('Pozdrav,' + this.name);
//     }
// }

// class
//     -polja(private, public, protected)
//     -readonly polja
//     -shorthand syntax
//     -singlton design pattern(OOP design patterns)
//     -apstraktne klase i metode
//     -override
//     -nasledjivanje
//     -implementacija interfejsa
//     -static
// import
//     -es6 imports
//     -namespace
// generics
//     -ugradjeni generics
//         -Array 
//         -Promise
//     -constrains 
//         -keyof
interface MojAutomobil {
    // make: string
    // productionYear: number

    // ocistiMe(): void
}

abstract class Automobil implements MojAutomobil{
    protected make: string
    private productionYear: number

    constructor(make: string, productionYear: number) {
        // super()  -  poziva konstruktor nasledje klase
        this.make = make
        this.productionYear = productionYear
    }

    get myMake() {
        return this.make
    }

    set myMake(newMake: string) {
        this.make = newMake
    }

    ocistiMe(): void {
        console.log("Hvala ti!")
    }

    abstract drive(this: Automobil): void
}

class SportsCar extends Automobil{
    // private readonly tipGoriva: string
    static brojSasije: number

    constructor(private readonly tipGoriva: string) {
        super('lambo', 2022)
        this.tipGoriva = tipGoriva
    }

    drive(this: SportsCar) {
        console.log('Sad vozim ' + this.make)
    }

    static drift() {
        console.log('Spaljivanje guma!!')
    }
}

// let a1 = new Automobil('mazda', 2019)
// let a2 = new SportsCar('benzin')
SportsCar.brojSasije
SportsCar.drift()

// let prom = a1.myMake

// let a2 = {make: 'vw', productionYear: 2020, drive()}

// import {sth} from './app.js'
// import * as Sth from './sth.js'

// import biloKojiObj

// Sth.add()

/// <reference />
// namespace MojSpace {
//     export interface MojI {
//         name: string
//     }
// }

// namespace MojSpace {
//     class 
// }

// let niz1: string[]

// let niz1: Array<string>

// let promise = new Promise<string>((resolve: object, reject: object) => {
    
// })

// promise.then((data) => {
//     console.log(data)
// })

function kreirajObjekat<T extends object | number | string>(objekat1: T, objekat2: T) {
    return Object.assign(objekat1, objekat2)
}

let object1 = kreirajObjekat({name: 'Marko'}, {age: 30})
object1.name

function returnKey<T extends object, U extends keyof object>(object: T, key: U) {
    return object[key]
}

let myObject = {
    name: 'Marko'
}

console.log(myObject.name);
