// DESTRUCTION

// const arr = [1, 2, 3, 4]

// let [, , , num_2] = arr

// console.log( num_2);


// const component = ({state, onClick, onLoad}) => {

// }


// const nekaFunkcija = ({ocupation}) => {
//     console.log(ocupation)
// }

// let obj = {
//     name: 'Miroslav',
//     ocupation: 'developer',
//     salary: '?'
// }

// nekaFunkcija(obj)

//SPREAD OPERATOR

let obj = {
    name: 'nesto',
    age: 23
}

let obj_1 = {
    ...obj,
    ocupation: 'front developer'
}

let niz = [1, 2, 3]

// let noviNiz = [4, 5]

let noviNiz = [4, ...niz, 5, ...noviNiz]

console.log(noviNiz);

