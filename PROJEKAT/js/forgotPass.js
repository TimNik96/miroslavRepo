import { changePass } from './korisnici.js'

const inputEmail = document.querySelector('#email')
const inputNewPass = document.querySelector('#newPass')
const inputConfirmPass = document.querySelector('#confPass')
const forma = document.querySelector('form')

forma.addEventListener('submit', e => {
    e.preventDefault()
    
    if(changePass(inputEmail, inputNewPass, inputConfirmPass)) {
        window.location.href = 'index.html'
    }
})