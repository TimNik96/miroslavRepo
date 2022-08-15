import { renderAdminPage, renderBase } from "./funkcije.js"
import { brisiKorisnika } from "./korisnici.js"
const mainIspis = document.querySelector('main')
const buttonDeleteUser = document.querySelector('button')

renderAdminPage(mainIspis)

buttonDeleteUser.addEventListener('click', e => {
    let nizDivova = []
    let nizKorisnika = JSON.parse(localStorage.getItem('korisnici'))

    for(let i = 1; i < mainIspis.children.length; i++){
        nizDivova.push(mainIspis.children[i])
    }

    brisiKorisnika(nizDivova, nizKorisnika)

    localStorage.setItem('korisnici', JSON.stringify(nizKorisnika))
    mainIspis.textContent = ''
    renderBase(mainIspis)
    renderAdminPage(mainIspis)
})

