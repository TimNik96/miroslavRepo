export const isValid = (user, pass, forma) => {
    let postojeci = false
    let username = false
    let nizKorisnika = JSON.parse(localStorage.getItem('korisnici'))

    if(user.value.trim() === '' && pass.value.trim() === ''){
        alert('Morate uneti Vas user i pass!')
        forma.reset()
        return
    }

    if(user.value.trim() === ''){
        alert('Morate uneti Vas username!')
        return
    }

    if(pass.value.trim() === ''){
        alert('Morate uneti Vas pass!')
        return
    }

    nizKorisnika.forEach(element => {
        if(user.value.trim() == element.username){
            username = true
            if(pass.value.trim() == element.password) {
                postojeci = true
            } else {
                alert('Uneli ste pogresan password!')
                return
            }
        }
           
    })

    if(!postojeci && !username){
        alert('Morate se registrovati kako biste mogli da pristupite sajtu!')
        forma.reset()
        return
    }

    return postojeci
}

export const changePass = (email, inputNewPass, inputConfirmPass) => {
    let indeksKorisnika
    let dozvolaZaPromenu = false
    let nizKorisnika = JSON.parse(localStorage.getItem('korisnici'))

    for(let i = 0; i < nizKorisnika.length; i++){
        if(email.value.trim() == nizKorisnika[i].email){
            dozvolaZaPromenu = true
            indeksKorisnika = i
        }
    }

    if(dozvolaZaPromenu) {
        if(inputNewPass.value.trim() === inputConfirmPass.value.trim()){
            nizKorisnika[indeksKorisnika].password = inputConfirmPass.value
            localStorage.setItem('korisnici', JSON.stringify(nizKorisnika))
            alert('Uspesno ste promenili sifru')
            return true
        } else {
            alert('Morate uneti identicnu sifru u oba polja!')
        }
    } else {
        alert('Nepostojeci email!')
    }
}

export const brisiKorisnika = (nizDivova, nizKorisnika) => {
    for(let i = 0; i < nizDivova.length; i++){
        if(nizDivova[i].classList.contains('marked')){
            nizKorisnika.splice(i + 1, 1)
            nizDivova.splice(i, 1)
            i--
        }
    }
}

export let nizKorisnika = [
    {
        username: 'admin',
        password: 'admin',
        isAdmin: true
    },
    {
        first_name: 'Marko',
        last_name: 'Markovic',
        birthday: '1990-10-10',
        phone: '+381/600102003',
        username: 'kreativanNick',
        password: 'gaming123',
        email: 'kreativac@gmail.com',
        isAdmin: false
    },
    {
        first_name: 'Marta',
        last_name: 'Jovanovic',
        birthday: '1997-12-03',
        phone: '+381/601102303',
        username: 'ucenik',
        password: 'biblioteka17',
        email: 'martajov97@gmail.com',
        isAdmin: false
    },
    {
        first_name: 'Dunja',
        last_name: 'Micic',
        birthday: '1999-21-07',
        phone: '+381/642102553',
        username: 'dunjica12',
        password: 'mojpass99',
        email: 'dunjica99micic@yahoo.com',
        isAdmin: false
    }
]

if(localStorage.getItem('korisnici') == null)
    localStorage.setItem('korisnici', JSON.stringify(nizKorisnika))