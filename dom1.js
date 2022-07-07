// 1. Napisati funkciju koja vraca imena iz niza koja imaju bar dva slova 'a'.

// let niz = ['Aca','Marko','Aleksandar','Jana','Marina','Joca']

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
//                 return
//             }
//         }
//     });

//         return imeSaDvaA

// }

// console.log(barDvaSlovaA(niz));


// 2. Napisati funkciju koja vraca index karaktera u stringu.

// let str = "neki string"

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

// const deljivostSa = (m,n,d) => {

//     for (let i = m; i < n; i++) {
//     if(i % d === 0){
//         console.log(i);
//     }

// }
// }
// console.log(deljivostSa(1,100,11));

// 5. Napisati funkciju koja proverava koliko se puta odredjeni element pojavljuje u nizu.

// let niz = [1, 2, 3, 4, 2, 2, 200, 13, 405, 200]


// const brojPonavljanja = (arr,ponavljac) => {
//     let brojac = 0
//     arr.forEach(element => {
//     if(element === ponavljac)
//     brojac ++
//         return
// })
// return brojac
// }

// console.log(brojPonavljanja(niz,200));

// 6. Napisati funkciju koja vraca da li odredjeni element postoji u nizu. (Ukoliko postoji, vraca element, u suprotnom vraca poruku)

// let niz = ['el1','el2',1,2,3,'el3']

// const postoji = (arr,element) => {

//     if (arr.find(el => el === element)) {
//         return element
//     }else{
//         console.log(`nema ga`);
//     }



// }
// console.log(postoji(niz,'el2'));

// 7. Napisati funkciju koja proverava da li je broj prost.

// const prostIliNe = (number) => {
//     if((number % number === 0) && (number % 1 === 0)){

//         console.log(`broj ${number} je prost`);

//     }else {
//          console.log(`broj ${number} nije prost`);
//     }

// }
// console.log(prostIliNe(11));

