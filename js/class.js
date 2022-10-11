// let obj = {
//     duzina: 10,
//     sirina: 20,
//     povrsina: function() {
//         return this.duzina * this.sirina
//     } 
// }

// console.log(obj.povrsina());

// class Pravougaonik {
//     constructor(duzina, sirina) {
//         this.mojaDuzina = duzina
//         this.mojaSirina = sirina
//     }

//     get duzina() {
//         return this.mojaDuzina
//     }

//     set duzina(duzina) {
//         this.mojaDuzina = duzina
//     }

//     get sirina() {
//         return this.mojaSirina
//     }

//     set sirina(sirina) {
//         this.mojaSirina = sirina
//     }

//     ispis() {
//         return `Pravougaonik duzine ${this.mojaDuzina} i sirine ${this.mojaSirina}`
//     }
// }

// let p = {
//     duzina: 10,
//     sirina: 20
// }

// let p1 = new Pravougaonik(10, 20)

// p1.duzina = 30

// console.log(p1.sirina);

// class Covek {
//     constructor(ime, prezime, jmbg) {
//         this.ime = ime
//         this.prezime = prezime
//         this.jmbg = jmbg
//     }
// }

// class Profesor extends Covek {
//     constructor(ime, prezime, jmbg, zanimanje) {
//         super(ime, prezime, jmbg)
//         this.zanimanje = zanimanje
//     }
// }

// let covek1 = new Covek('Petar', 'Petrovic', '1234')
// let profesor1 = new Profesor('Rados', 'Bajic', '123545', 'Profesor rezije')

// console.log(covek1, profesor1);
// Napraviti klasu Sastojak koja sadrzi polja naziv, kolicinu i cenu, a zatim napraviti metodu koja racuna njenu cenu.

class Sastojak {
    constructor(naziv, kolicina, cena) {
        this.naziv = naziv
        this.kolicina = kolicina
        this.cena = cena
    }

    ukupnaCena() {
        return this.cena * this.kolicina
    }

    ispis() {
        return `Naziv sastojka: ${this.naziv}, kolicina: ${this.kolicina} kilograma, cena: ${this.cena} dinara po kilogramu`
    }
}

//Napraviti klasu Recept koja prima sastojke za pripremu istog. (imace polja naziv, sastojci, nacinPripreme, tezinaPripreme, kao i metodu za ispis svih sastojaka i cenuRecepta)

class Recept {
    constructor(naziv, sastojci, nacinPripreme, tezinaPripreme) {
        this.naziv = naziv
        this.sastojci = sastojci
        this.nacinPripreme = nacinPripreme
        this.tezinaPripreme = tezinaPripreme
    }

    cenaRecepta() {
        let cena = 0

        this.sastojci.forEach(s => {
            cena += s.ukupnaCena()
        })

        return cena
    }

    ispisRecepta() {
        let ispisi = []

        this.sastojci.forEach(s => {
            ispisi.push(s.ispis())
        })

        return ispisi
    }
}

let sastojak1 = new Sastojak('brasno', 0.3, 80)
let sastojak2 = new Sastojak('paradajz', 0.5, 120)
let sastojak3 = new Sastojak('sir', 0.4, 350)

let nizSastojaka = [sastojak1, sastojak2, sastojak3]
let nacinPripreme = 'Priprema se tako sto se ....'

let recept1 = new Recept('pizza', nizSastojaka, nacinPripreme, 'srednje')

// console.log(sastojak1.ispis());

// console.log(recept1.cenaRecepta());

console.log(recept1.ispisRecepta())

