// 1. Napraviti improvizovanu login aplikaciju. Za ime i prezime uneti vrednosti po zelji koje se proveravaju u nizu u kome se nalaze neki korisnici. Korisnici mogu biti u bilo kom formatu u nizu, kako je lakse piscu.
//    Obraditi situacije kada se u promenljive ime ili/i prezime ne upise nista.

// let imenaKorisnika = [
//   {
//     ime: "Pera",
//     prezime: "Peric",
//   },
//   {
//     ime: "Aca",
//     prezime: "Peric",
//   },
//   {
//     ime: "Mika",
//     prezime: "Mikic",
//   },
//   {
//     ime: "Boban",
//     prezime: "Marijanovic",
//   },
//   {
//     ime: "Nikola",
//     prezime: "Jokic",
//   },
//   {
//     ime: "Nikola",
//     prezime: "Kokic",
//   },
//   {
//     ime: "Nikola",
//     prezime: "Lokic",
//   },
//   {
//     ime: "Boban",
//     prezime: "Bobic",
//   },
//   {
//     ime: "Ana",
//     prezime: "Peric",
//   },
// ];

// const proveriImeIprezime = (nizObject, ime, prezime) => {
//   let ime1 = ime.trim();
//   let prezime1 = prezime.trim();

//   if (ime1 === "") return console.log(`Niste uneli validno ime`);

//   if (prezime1 === "") return console.log(`Niste uneli validno prezime`);

//   let prezimenaSaIstimImenom = [];
//   let postoji = false;

//   for (let i = 0; i < nizObject.length; i++) {
//     if (nizObject[i].ime === ime1)
//       prezimenaSaIstimImenom.push(nizObject[i].prezime);
//   }
//   for (let i = 0; i < prezimenaSaIstimImenom.length; i++) {
//     if (prezimenaSaIstimImenom[i] === prezime1) postoji = true;
//   }

//   if (postoji === false)
//     return console.log(`${ime1} ${prezime1} nema vas u bazi`);

//   return console.log(`${ime1} ${prezime1} ima vas u bazi`);
// };

// let ime = "Ana";
// let prezime = " Peric ";

// console.log(proveriImeIprezime(imenaKorisnika, ime, prezime));

// 2. Napisati funkciju substring.

// const deoStringa = (string, start, end = string.length - 1) => {
//   let noviStr = "";
//   for (let i = start; i <= end; i++) {
//     noviStr += string[i];
//   }
//   return noviStr;
// };

// let tekst = "Neki tekst";
// console.log(deoStringa(tekst, 0, 4));

// 3. Napisati funkciju koja refaktorise string tako da posle svake tacke treba da se nalazi razmak. Primer: Danas je lep dan.Idemo da setamo. => Danas je lep dan. Idemo da setamo.

// const proveraKarakter = (karakter) => {
//   return karakter === karakter.toUpperCase()
// }

// let recenica =
//   "Danas je lep dan.Idemo da setamo.Oces da prosetamo?Brze!Hoces da prosetamo npr.?";

// const odvajac = (str) => {
//   let newStr = [];
//   let pocetakRecenice = 0
  
//   for (let i = 0; i < str.length ; i++) {
//     if (str[i] === "." || str[i] === "!" || str[i] === "?") {
//       newStr.push(str.substring(pocetakRecenice, i + 1));
//       pocetakRecenice = i + 1
//       console.log(newStr);
//     }
//   }

//   return newStr
// };

// console.log(odvajac(recenica));

// console.log(odvajac(recenica));

// text = recenica.replace(/\s*([,.!?:;]+)(?!\s*$)\s*/g, "$1 ");
// console.log(text);

// 4. Napisati kod koji ispisuje broj sa ciframa u obrnutom redosledu kao resenje.

// const obrni = (number) => {
//   let okreni = number.toString().split("").reverse().join("");
//   return okreni;
// };

// console.log(obrni(123));

// 5. Napisati skriptu koja za uneti niz pokemona sa njihovim indexom napada vraca sledeci ispis u konzolu:

// 		primer niza, imena pokemona mogu bili bilo koja: [[pokemon_1, 55],[pokemon_2, 70],[pokemon_3, 40]]

// 		ispis u konzoli:  pokemon_1: jacina napada je 55
// 			  	  pokemon_2: jacina napada je 70
// 			  	  pokemon_3: jacina napada je 40

// const ispisati = (arr) => {
//   arr.forEach((element) => {
//     if (element) {
//       let ime = element.shift();
//       let jacina = element.pop();
//       console.log(`${ime} jacina napada je ${jacina} `);
//     }
//   });
// };

// let niz = [
//   ["pokemon_1", 55],
//   ["pokemon_2", 70],
//   ["pokemon_3", 40],
//   ["pokemon_4", 57],
//   ["pokemon_5", 77],
//   ["pokemon_6", 47],
// ];
// console.log(ispisati(niz));
