const inputFirstName = document.querySelector('#firstName')
const inputLastName = document.querySelector('#lastName')
const inputDateOfBirth = document.querySelector('#dateOfBirth')
const inputPhone = document.querySelector('#phone')
const inputUserName = document.querySelector('#username')
const inputEmail = document.querySelector('#email')
const inputPassword = document.querySelector('#pass')
const inputConfirmPassword = document.querySelector('#confPass')
const forma = document.querySelector('form')

let noviKorisnik = {}
let slobodanNick

inputUserName.addEventListener('focusout', e => {
    let nizKorisnika = JSON.parse(localStorage.getItem('korisnici'))
    slobodanNick = true
    
    nizKorisnika.forEach(element => {
        if(inputUserName.value.trim() == element.username){
            slobodanNick = false
        }
    })
    
    if(slobodanNick) {
        inputUserName.style.borderColor = '#0f0'
    } else {
        inputUserName.style.borderColor = '#f00'
    }
})

forma.addEventListener('submit', e => {
    e.preventDefault()
    let nizKorisnika = JSON.parse(localStorage.getItem('korisnici'))
    let ispravanTelefon = false
    let ispravanPass = false
    
    noviKorisnik = {
        first_name: inputFirstName.value.trim(),
        last_name: inputLastName.value.trim(),
        birthday: inputDateOfBirth.value,
        phone: '',
        username: '',
        password: '',
        email: inputEmail.value.trim(),
        isAdmin: false
    }

    if(inputPhone.value.trim().length == 10 || inputPhone.value.trim().length == 9) {
        noviKorisnik.phone = '+381/' + inputPhone.value.trim().substring(1)
        ispravanTelefon = true
    } else {
        alert('Pogresno ste uneli broj telefona!')
        return
    }

    if(slobodanNick) {
        noviKorisnik.username = inputUserName.value.trim()
    } else {
        alert('Uneti username nije slobodan. Birajte neki drugi username sve dok polje ne postane zeleno!')
        return
    }
    
    if(inputPassword.value.trim() === inputConfirmPassword.value.trim()){
        noviKorisnik.password = inputConfirmPassword.value.trim()
        ispravanPass = true
    } else {
        alert('Morate uneti identicnu sifru u oba polja!')
        return
    }
    
    if(ispravanTelefon && slobodanNick && ispravanPass){
        nizKorisnika.push(noviKorisnik)
        localStorage.setItem('korisnici', JSON.stringify(nizKorisnika))
        inputUserName.style.borderColor = '#3f43bc'
        alert('Uspesno ste se registrovali!')
        window.location.href = 'index.html'
    }
})