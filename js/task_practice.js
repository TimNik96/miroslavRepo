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