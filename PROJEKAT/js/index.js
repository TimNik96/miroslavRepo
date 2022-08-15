import { isValid } from "./korisnici.js"

const forma = document.querySelector('form')
const inputUser = document.querySelector('#user')
const inputPass = document.querySelector('#pass')

forma.addEventListener('submit', e => {
    e.preventDefault()
    if(isValid(inputUser, inputPass, forma)) {
        if(inputUser.value == 'admin') {
            window.location.href = "adminPage.html"
        } else {
            window.location.href = "site.html"
        }
        forma.reset()
    }
})