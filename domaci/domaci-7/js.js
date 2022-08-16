// 1. Napisati skriptu koja racuna stepen broja. (U jedan se input unosi osnova, u drugi stepen. U trecem inputu se javlja resenje klikom na dugme)
const broj = document.querySelector(".broj");
const stepen = document.querySelector(".stepen");
const btn = document.querySelector("button");
const rezultat = document.querySelector(".rezultat");

btn.addEventListener("click", (event) => {
  rezultat.value = Math.pow(broj.value, stepen.value);
});

// 2. Izracunati faktorijel broja. (U jedan input unosimo broj, u drugom se javlja resenje klikom na dugme)
const factorjel = document.querySelector(".faktorijel");
const faktorijelBroja = document.querySelector(".faktorijelBroja");
const btn2 = document.getElementById("btn2");

btn2.addEventListener("click", (event) => {
  let n = factorjel.value;
  let answer = 1;
  if (n == 0 || n == 1) {
    answer = 1;
  } else {
    for (let i = n; i >= 1; i--) {
      answer = answer * i;
    }
  }
  faktorijelBroja.value = answer;
});

// 3. Proveriti klikom na dugme da li uneti username postoji u bazi podataka.(u nizu) Ukoliko postoji, border inputa treba da postane crven, a ukoliko ne postoji, border postaje zelen. (U input se unosi user, taj se input boji)
const username = document.querySelector(".username");
const btn3 = document.getElementById("btn3");
let usernames = ["Pera", "Mika", "Zika"];

btn3.addEventListener("click", (event) => {
  let ime = username.value;
  if (ime.length == 0) {
    alert("put in your username");
    return postoji;
  }

  let postoji = false;

  for (let i = 0; i < usernames.length; i++) {
    if (ime === usernames[i]) {
      postoji = true;
    }
  }
  if (postoji) {
    username.style.backgroundColor = "red";
  } else {
    username.style.backgroundColor = "green";
  }
  console.log(ime);
});

// 4. Tekst iz paragrafa je potrebno refaktorisati tako da posle svake tacke treba da se nalazi razmak. Primer: Danas je lep dan.Idemo da setamo. => Danas je lep dan. Idemo da setamo.
const textarea = document.querySelector("textarea");
const p = document.createElement("p");
const btn4 = document.getElementById("btn4");
const div4 = document.getElementById("zadatak-4");
btn4.addEventListener("click", (event) => {
  let newStr = [];
  let pocetakRecenice = 0;
  let recenica = textarea.value;
  for (let i = 0; i < recenica.length; i++) {
    if (recenica[i] === "." || recenica[i] === "!" || recenica[i] === "?") {
      newStr.push(recenica.substring(pocetakRecenice, i + 1));
      pocetakRecenice = i + 1;
    }
  }
  let text = recenica.replace(/\s*([,.!?:;]+)(?!\s*$)\s*/g, "$1 ");

  p.innerHTML = text;
  div4.appendChild(p);
});

// 5. Napisati kod koji iz inputa kupi broj i ispisuje broj sa ciframa u obrnutom redosledu u drugom inputu kao resenje.(Koristiti dugme) Primer: 1234 => 4321

const broj5 = document.querySelector(".broj5");
const obrniBroj = document.querySelector(".obrniBroj");
const btn5 = document.getElementById("btn5");

btn5.addEventListener("click", (event) => {
  obrniBroj.value = broj5.value.toString().split("").reverse().join("");
});

// 6. Napraviti par korisnika kao objekte u nizu. Dodati polja po izboru. Zatim ih lepo ispisati na stranici u nekom divu. (potruditi se malo oko stilizovanja)

let korisnici = [
  {
    ime: "Pera",
    prezime: "Peric",
    god: 22,
  },
  {
    ime: "Mika",
    prezime: "Mikic",
    god: 21,
  },
  {
    ime: "Zika",
    prezime: "Peric",
    god: 18,
  },
  {
    ime: "Mile",
    prezime: "Peric",
    god: 18,
  },
  {
    ime: "Peca",
    prezime: "Peric",
    god: 18,
  },
];
const div = document.createElement("div");
const zadatak6 = document.getElementById("zadatak-6");

for (let i = 0; i < korisnici.length; i++) {
  let name = korisnici[i].ime;
  let lastName = korisnici[i].prezime;
  let years = korisnici[i].god;
  div.innerHTML +=
    "<div class='ime'><p>user:" +
    name +
    " his last name is: " +
    lastName +
    " and he is " +
    years +
    " years old.</p></div>";

  zadatak6.appendChild(div);
}

// 7. Napisati zadatak koji racuna cenu pizze prema unosu precnika iste. Cena pizze je dinar po kvadratnom centimetru. (Potrebno je imati input za precnik pizze i dugme za vracanje cene u drugom inputu)
const precnik = document.querySelector(".precnik");
const cena = document.querySelector(".cena");
const btn7 = document.getElementById("btn7");

btn7.addEventListener("click", (event) => {
  let d = precnik.value / 2;
  let povrsinaIcena = Math.pow(d, 2) * Math.PI;
  cena.value = povrsinaIcena.toFixed(2) + " dinara";
});

// 8. Korisnike iz 7. zadatka koristiti i ispisati samo one cije ime pocinje na slovo koje se zada u inputu. (Moze se koristiti dugme ili putem Entera, kako god je lakse)
const slovo = document.querySelector(".slovo");
const korisniciNaSlovo = document.querySelector(".korisniciNaSlovo");
const btn8 = document.getElementById("btn8");

btn8.addEventListener("click", (event) => {
  let prvoSlovo = slovo.value;

  for (let i = 0; i < korisnici.length; i++) {
    if (korisnici[i].ime.charAt(0) === prvoSlovo) {
      korisniciNaSlovo.value += korisnici[i].ime + " ";
    }
  }
});

// 9. Napisati skriptu koja pravi x paragrafa. Svaki paran paragraf ima 30 reci lorem ipsum, a svaki treci ima zelenu boju pozadine.

const brojParagrafa = document.querySelector(".brojParagrafa");
const paragraf = document.createElement("p");
const btn9 = document.getElementById("btn9");
const div9 = document.getElementById("zadatak-9");

btn9.addEventListener("click", (event) => {
  let tekst =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sequi vitae incidunt consequatur, laudantium impedit hic molestiae exercitationem eligendi cupiditate quod, quisquam, quaerat reiciendis. Mollitia quasi doloremque voluptatem officiis inventore.";

  for (let i = 0; i < brojParagrafa.value; i++) {
    if (i % 2 === 0 || i === 0) {
      paragraf.innerHTML = tekst;
      div9.appendChild(paragraf.cloneNode(true));
    }
    if (i % 3 === 0) {
      paragraf.innerHTML = tekst;
      paragraf.style.background = "green";
      div9.appendChild(paragraf.cloneNode(true));
    }
  }
});

// 10. Napraviti igru kamen-papir-makaze u jednu pobedu. (postoji jedan input za unos zeljene opcije, u paragrafu ispod se na klik dugmeta ispisuje pobednik, a u konzoli se ispisuje sta je racunar odabrao.
//     Za opciju koju racunar treba da dobije potrebno je koristiti random())

const div10 = document.getElementById("zadatak-10");
const btn10 = document.getElementById("btn10");
const kamen = document.getElementById("kamen");
const papir = document.getElementById("papir");
const makaze = document.getElementById("makaze");
const ispisRezultata = document.getElementById("rezultat");
const potezi = document.getElementById("potezi");
let igracRezultat = 0;
let compRezultat = 0;

btn10.addEventListener("click", (event) => {
  let comp;
  let igrac;

  function potez(igrac) {
    let vrednost = Math.floor(Math.random() * 3) + 1;
    if (vrednost === 1) {
      igrac = "papir";
    }
    if (vrednost === 2) {
      igrac = "kamen";
    }
    if (vrednost === 3) {
      igrac = "makaze";
    }
    return igrac;
  }
  comp = potez(comp);
  if (kamen.checked) {
    igrac = "kamen";
  }
  if (papir.checked) {
    igrac = "papir";
  }
  if (makaze.checked) {
    igrac = "makaze";
  }

  if (igrac === "kamen" && comp === "makaze") {
    igracRezultat++;
  }
  if (igrac === "papir" && comp === "makaze") {
    compRezultat++;
  }
  if (igrac === "makaze" && comp === "kamen") {
    compRezultat++;
  }
  if (igrac === "papir" && comp === "kamen") {
    igracRezultat++;
  }
  if (igrac === "makaze" && comp === "papir") {
    igracRezultat++;
  }
  if (igrac === "kamen" && comp === "papir") {
    compRezultat++;
  }

  console.log(igrac);
  console.log(comp);
  console.log(igracRezultat);
  console.log(compRezultat);

  potezi.innerHTML =
    "<p> igrac je odigrao: " +
    igrac +
    "<br> computer je odigrao: " +
    comp +
    "</p>";
  ispisRezultata.innerHTML =
    "<p>igrac:" + igracRezultat + "<br> computer:" + compRezultat + " </p>";
  if (igrac === comp) {
    alert("nereseno je");
  }
});
// let igrac1;
// let igrac2;
// let igrac1Rezultat = 0
// let igrac2Rezultat = 0

// function potez(igrac) {

//     let vrednost = Math.floor(Math.random() * 3 ) +1
//     if (vrednost === 1) {
//         igrac = 'papir'
//     }
//     if (vrednost === 2) {
//         igrac = 'kamen'
//     }
//     if (vrednost === 3) {
//         igrac = 'makaze'
//     }
//     return igrac

// }

// function kombinacija() {

//     while ( igrac1Rezultat < 4 ) {  // igra se ko prvi do 3 pobede dva if-a ispod svakako prekidaju koji prvi dodje do 3

//         if (igrac1Rezultat === 3) {
//             console.log(`igrac1 je pobedio sa ${igrac1Rezultat} prema ${igrac2Rezultat}`);
//             break
//         }
//         if (igrac2Rezultat === 3) {
//             console.log(`igrac2 je pobedio sa ${igrac2Rezultat} prema ${igrac1Rezultat}`);
//             break
//         }

//         igrac1 = potez(igrac1) // dodela novog poteza igracu 1
//         console.log( `igrac1 pokazuje ${igrac1}`); // ovo je cisto da se vidi u konzoli ko je koji potez dobio
//         igrac2 = potez(igrac2) // dodela novog poteza igracu 2
//         console.log(`igrac2 pokazuje ${igrac2}`);
//         igrac1Rezultat
//         igrac2Rezultat

//         if (igrac1 === igrac2) {
//             console.log('nereseno je');
//         }
//         if (igrac1=== 'kamen' &&  igrac2=== 'makaze') {
//             igrac1Rezultat ++
//         }
//         if (igrac1=== 'papir' && igrac2=== 'makaze') {
//             igrac2Rezultat ++
//         }
//         if (igrac1=== 'makaze' && igrac2=== 'kamen') {
//             igrac2Rezultat ++
//         }
//         if (igrac1=== 'papir' && igrac2=== 'kamen') {
//             igrac1Rezultat ++
//         }
//         if (igrac1=== 'makaze' && igrac2=== 'papir') {
//             igrac1Rezultat ++
//         }
//         if (igrac1=== 'kamen' && igrac2=== 'papir') {
//             igrac2Rezultat ++
//         }
//         console.log( `rezultat je igrac1: ${igrac1Rezultat} igrac2: ${igrac2Rezultat}  ` ); // ispise rezultat posle svake partije
//         // iz preglednosti
//     }

//     return {igrac1Rezultat,igrac2Rezultat}
// }

// console.log(kombinacija());
