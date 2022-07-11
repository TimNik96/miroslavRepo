//POP
// let arr = [1, 2, 3]

// let poslednji = arr.pop()
// console.log(arr.pop())

//PUSH

// console.log(arr.push(4), arr)

//SHIFT

// console.log(arr.shift(), arr)

//UNSHIFT

// console.log(arr.unshift(1,2,3), arr);

// CONCAT
// arr.concat()
// SPREAD OPERATOR
// let newArray = [...arr, ...newArr]

// for(let i = 0; i < arr.length; i++) {
//     newArray.push(arr[i])
// }

// JOIN

// let arr = ['a' , 'b', 'c']

// console.log(arr.join())

// let str = "STRING JE NAJLAKSI TIP PODATKA AKO JE U FORMATU JSON-a"

// console.log(str.split(" "))
// str.join

// SLICE

// console.log(arr.slice(-1), arr);

// SPLICE

// let objekat = {
//     ime,
//     prezime,
//     godine
// }

// let deleted = arr.splice(1, 1, objekat)

// console.log(arr, deleted);

// INDEXOF

// arr.indexOf('b')

// if(arr.indexOf('b') == -1) return

// INCLUDES

// let niz = [1, 2, 3, 4, 20, 12, 200, 13, 405]

// console.log(niz.includes(1));

// REVERSE

// niz.reverse()

// console.log(niz);

// function imeFunkcije(param1, param2) {
//     return param1 + param2
// }

// const imeFunkcije = (param1, param2 = param1) => {
//     return param1 + param2
// }

// imeFunkcije()

// FILTER

// let noviNiz = niz.filter(el => el % 2 == 0)

// console.log(noviNiz);

// FIND 

// niz.find(el => el >= 20)

// FINDINDEX

// niz.findIndex(el => el === 3)

// MAP

// let nekiNiz = niz.map(el => el * 2)

// console.log(nekiNiz, niz)

// FOREACH

// niz.forEach((element, index) => {
//     if(element == 2)
//         return
// })

// for(){
//     if(niz[i] == 2)
//         break
// }

// EVERY

// niz.every(el => el > 2)

// SOME

// niz.some(el => el > 2)

// SORT

// let nizImena = ['Marko', 'Aco', 'Ana', 'Ivan', 'Jana', 'Jovana']

// nizImena.sort((a, b) => a.length - b.length)

// console.log(nizImena)

// niz.reduce((rezultat, trenutni) => {
//     rezultat + trenutni
// }, 0)


// let sati = new Date().getHours()
// let minuti = new Date().getMinutes()
// let sekunde = new Date().getSeconds()

// let datum = new Date()

// console.log(datum)

// console.log(`${sati}:${minuti}:${sekunde}`);

// let rez = 0

// forEach(element => {
//     rez += element
// })

// console.log(rez)

// setTimeout(() => {
    // console.log()
// }, 1000)

// let str = 'Miroslav'

// str.substring()

// function deoStringa(string, start, end = string.length - 1) {
    
// }

// 1 == 0 ? true : false //ternary operator