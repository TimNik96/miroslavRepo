const divPrikaz = document.querySelector('.prikaz')

const renderUser = (niz) => {
    niz.forEach((korisnik, index) => {
        const divPrikazKorisnika = document.createElement('div')
        divPrikazKorisnika.classList.add('korisnik')
    
        const pIme = document.createElement('p')
        pIme.textContent = korisnik.ime
    
        const pPrezime = document.createElement('p')
        pPrezime.textContent = korisnik.prezime
    
        const pGodine = document.createElement('p')
        pGodine.textContent = korisnik.godine
    
        const btnBrisi = document.createElement('button')
        btnBrisi.textContent = 'Obrisi'
    
        btnBrisi.addEventListener('click', () => {
            divPrikaz.textContent = ''
            niz.splice(index, 1)
            renderUser(niz)
            // divPrikazKorisnika.classList.add('hide')
        })
        
        divPrikazKorisnika.append(pIme, pPrezime, pGodine, btnBrisi)
        divPrikaz.appendChild(divPrikazKorisnika)
        // document.write(korisnik)
    })
}

const logovanje = () => {
    console.log('Pozdrav iz modula');
}

const obj = {
    renderUser,
    logovanje
}

export default obj