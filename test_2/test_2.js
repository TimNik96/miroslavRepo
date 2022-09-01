//1. Kako ce izgledati niz koji se ispisuje?

// let niz = ['Ana', 'Marko', 'Aleksa', 'Jovana', 'Mirko', 'Aca']

// console.log(niz.sort((a, b) => b.length - a.length).filter(el => el.charAt(0) == 'A').map(el => el.toUpperCase()))

//2. Sta radi sledeci program?

// const div = document.querySelector('#div2')
// div.addEventListener('click', e => {
//     switch(e.target.textContent) {
//         case '-':
//         case 'O': e.target.textContent = 'X'
//             break
//         case 'X': e.target.textContent = 'O'
//             break
//     }
// })

//3. Dopuniti kod tako da kad se u input unese string koji nije prazan na enter
//   ubaci u niz i input polje se ocisti na prazno.

// let niz_1 = []
// const input = document.querySelector('#unos')
// input.addEventListener('keypress', e => {
//     if(e.key === 'Enter' && e.target.value != ''){
//         niz_1.push(input.value)
//         input.value = ''
//     }
// })

//4. Sta bi se desilo da se izostavi e.preventDefault()?
//   Dopuniti kod tako da se objekti koji sadrze ime, prezime i godine smestaju u niz studenti.
//   Zasto u 55. liniji koristimo map umesto da direktno stavimo ta.value = studenti?

// let studenti = []
// const forma = document.querySelector('#student-forma')
// const ta = document.querySelector('#ispis')

// forma.addEventListener('submit', e => {
//     e.preventDefault()

//     let ime = document.querySelector('#ime').value
//     let prezime = document.querySelector('#prezime').value
//     let godine = document.querySelector('#godine').value

//     let student = {
//         ime,
//         prezime,
//         godine
//     }

//     studenti.push(student)

//     ta.value = studenti.map(el => el.ime + ' ' + el.prezime + ' ' + el.godine)
    // ta.value = studenti
// })