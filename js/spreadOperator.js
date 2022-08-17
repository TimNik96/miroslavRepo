// let niz = [1, 2, 3]

// let noviNiz = [...niz, 4, 5]

// let osoba = {
//     ime: '',
//     prezime: '',
//     godine: ''
//     // key: value
// }

// let Miroslav = {
//     ...osoba,
//     profesija: ''
// }

// console.log(Object.keys(osoba))

// for(let i = 0; i < Object.keys(osoba).length; i++){
//     let keysArr = Object.keys(osoba)[0]
//     // console.log(keysArr[i])
//     console.log(keysArr);
// }

// try {
//     // sending API call
// } catch (err){
//     if(err instanceof AxiosError)
// }

const inputNumOfDivs = document.createElement('input')
inputNumOfDivs.type = 'number'
const pExplanation = document.createElement('p')
pExplanation.textContent = 'Uneti zeljeni broj paragrafa:'

const body = document.body

body.append(pExplanation, inputNumOfDivs)

parseInt(inputNumOfDivs.value)

for(let i = 0; i < +inputNumOfDivs.value; i++) {

}


// let str = ' 20'

// if(typeof +str !== number)
//     return

// console.log(typeof str);
// console.log(parseInt(str.trim()));