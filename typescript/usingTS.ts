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

// const inputNum1 = document.querySelector('#num1')! as HTMLInputElement
// const inputNum2 = document.querySelector('#num2')! as HTMLInputElement
// const button = document.querySelector('button')

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
// num = 5
// let str = 

class P {
    name: string;
    age: string;
    
}
type Combined = string | null

type MyObj = {
    name: string;
    age: number;
    // mode: [string, number];
    outputType: 'as-number' | 'as-text';
    hobbies?: Combined[];
    pozicija?: [string, number];
}

const obj: MyObj = {
    name: 'Marko',
    age: 31,
    outputType: "as-text",
    // hobbies: ['Kosarka', 'Fudbal'],
    pozicija: ['play', 1]
}

// for(const hobby of obj.hobbies) {
//     console.log(hobby);
// }

// let niz: string[]


// obj.pozicija.push('item')
console.log(obj.pozicija)




