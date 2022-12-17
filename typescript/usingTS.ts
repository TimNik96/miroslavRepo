//number
//boolean
//string
//null
//undefined
//symbol

//object
    //array
    //function

const inputNum1 = document.querySelector('#num1')! as HTMLInputElement
const inputNum2 = document.querySelector('#num2')! as HTMLInputElement
const button = document.querySelector('button')

// const num1: number = +inputNum1.value
// const nmb = 5

// console.log(inputNum1.value)

const saberi = (number_1: number, number_2: number) => {
    return number_1 + number_2
}

console.log(saberi(10, 20))

