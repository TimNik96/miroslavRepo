// 1. Napisati funkciju koja vraca imena iz niza koja imaju bar dva slova 'a'.

// const barDvaSlovaA = (arr) => {
//     let imeSaDvaA =[]

//     arr.forEach(el => {
//         let brojac = 0

//         for (let i = 0; i < el.length; i++) {

//              if (el[i]==='A'|| el[i]==='a' ) {
//                 brojac++
//             }
//             if (brojac>=2) {
//                 imeSaDvaA.push(el)
//                 break
//             }
//         }
//     });
//     return imeSaDvaA
// }

// let niz = ['Aca','Marko','Aleksandar','Jana','Marina','Joca']

// console.log(barDvaSlovaA(niz));

// 2. Napisati funkciju koja vraca index karaktera u stringu.

// let str = "neki string"
// let niz = str.split("") //Array.from(str)
// let char = 'i'
// console.log(niz.findIndex(el => el === char), niz)

// const vratiIndex = (string) =>{
//     for (let i = 0; i < string.length; i++) {
//         console.log(`${str[i]} je na indeksu ${i}`);
//     }
// }

// console.log(vratiIndex(str));

// 3. Napisati kod koji ispisuje koliko slova ima svaki element niza. (niz stringova je u pitanju)

// let niz = ['Marko', 'Aco', 'Ana', 'Ivan', 'Jana', 'Jovana']
// const kolikoSlova = (arr) => {

//     for (let i = 0; i < arr.length; i++) {

//         console.log(arr[i].length);
//     }
// }
// console.log(kolikoSlova(niz));


// 4. Napisati kod koji vraca da li ima brojeva deljivih sa 11 u rasponu od m do n.

// const deljivostSa = (m, n, d) => {

//     for (let i = m; i < n; i++) {
//         if (i % d === 0) {
//             console.log(i);
//         }

//     }
// }

// console.log(deljivostSa(1, 100, 11));

// let niz = []
// let numToBeDevidedBy = 11

// for(let i = m; i < n; i++) {
//     niz.push(i)
// }

// if(niz.some(el => el % numToBeDevidedBy === 0)) {
//     console.log(`postoji deljiv sa ${numToBeDevidedBy}`);
// }

// 5. Napisati funkciju koja proverava koliko se puta odredjeni element pojavljuje u nizu.

// const brojPonavljanja = (arr, ponavljac) => {
//     let brojac = 0
//     arr.forEach(element => {
//         if (element === ponavljac)
//             brojac++
//     })
//     return brojac
// }

// let niz = [1, 2, 3, 4, 2, 2, 200, 13, 405, 200]

// console.log(brojPonavljanja(niz,2));

// 6. Napisati funkciju koja vraca da li odredjeni element postoji u nizu. (Ukoliko postoji, vraca element, u suprotnom vraca poruku)

// const postoji = (arr,element) => {
//     if (arr.find((el => el === element))) return element

//     console.log(`nema ga`)
// }

// let niz = ['el1','el2',1,2,3,'el3']
// console.log(postoji(niz,'el2'));

// if(osoba.godine == 18){
//     if(osoba.budzet > 21000){
//         if(osoba.minPotrosnja > 50000){
//             console.log("Dobrodosli ste")
//         } else {

//         }
//     } else {

//     }
// }else {

// }

// if(osoba.godine < 18) return message
// if(osoba.budzet <= 21000) return message
// if(osoba.minPotrosnja < 50000) return message

// console.log("Dobrodosli ste")

// 7. Napisati funkciju koja proverava da li je broj prost.

// const prostIliNe = (number) => {
//     if ((number % number === 0) && (number % 1 === 0)) {

//         console.log(`broj ${number} je prost`);

//     } else {
//         console.log(`broj ${number} nije prost`);
//     }

// }

// const prostBroj = (number) => {
//     let prost = true
//     for(let i = 2; i < Math.sqrt( number); i++) {
//         if(number % i === 0) {
//             prost = false
//             break
//         }
//     }
//     return prost
// }

// console.log(prostBroj(77), Math.sqrt(77));

// Napisati kod koji proverava da li su brojevi do n deljivi sa 3 ili sa 5 ili sa 7. Ukoliko je deljiv sa 3, vraca fizz. Ukoliko je deljiv
// sa 5, vraca buzz. Ukoliko je deljiv sa 7, vraca zazz. Ukoliko broj nije deljiv nijednim od navedenih, vraca broj.

// const fizzBuzz = (n) => {
//     let rezultat
//     for(let i = 0; i < n; i++){
//         rezultat = ''

//         if(i % 3 === 0) rezultat += 'fizz'
//         if(i % 5 === 0) rezultat += 'buzz'
//         if(i % 7 === 0) rezultat += 'zazz'
//         if(i % 11 === 0) rezultat += 'gazz'

//         if(rezultat)
//             console.log(rezultat)
//         else 
//             console.log(i)
//     }
// }

// fizzBuzz(100)

