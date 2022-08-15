export const renderBase = (main) => { 
    const divRow = document.createElement('div')
    divRow.classList.add('row')
    divRow.id = 'mainRow'

    const pUsername = document.createElement('p')
    pUsername.textContent = 'Username'
    
    const pFirstName = document.createElement('p')
    pFirstName.textContent = 'First Name'

    const pLastName = document.createElement('p')
    pLastName.textContent = 'Last Name'

    const pEmail = document.createElement('p')
    pEmail.textContent = 'E-mail'

    const pPassword = document.createElement('p')
    pPassword.textContent = 'Password'

    const pPhone = document.createElement('p')
    pPhone.textContent = 'Phone'

    const pBirthday = document.createElement('p')
    pBirthday.textContent = 'Birthday'

    divRow.append(
        pUsername,
        pFirstName,
        pLastName,
        pEmail,
        pPassword,
        pPhone,
        pBirthday
    )

    main.appendChild(divRow)
}

export const renderAdminPage = (main) => {
    let nizKorisnika = JSON.parse(localStorage.getItem('korisnici'))

    for(let i = 0; i < nizKorisnika.length; i++) {

        if(nizKorisnika[i].isAdmin)
            continue

        const divRow = document.createElement('div')
        divRow.classList.add('row')
    
        const pUsername = document.createElement('p')
        pUsername.textContent = nizKorisnika[i].username
        
        const pFirstName = document.createElement('p')
        pFirstName.textContent = nizKorisnika[i].first_name
    
        const pLastName = document.createElement('p')
        pLastName.textContent = nizKorisnika[i].last_name
    
        const pEmail = document.createElement('p')
        pEmail.textContent = nizKorisnika[i].email
    
        const pPassword = document.createElement('p')
        pPassword.textContent = nizKorisnika[i].password
    
        const pPhone = document.createElement('p')
        pPhone.textContent = nizKorisnika[i].phone
    
        const pBirthday = document.createElement('p')
        pBirthday.textContent = nizKorisnika[i].birthday
    
        divRow.append(
            pUsername,
            pFirstName,
            pLastName,
            pEmail,
            pPassword,
            pPhone,
            pBirthday
        )
    
        main.appendChild(divRow)

        divRow.addEventListener('click', e => {
            if(!divRow.classList.contains('marked')){
                divRow.classList.add('marked')
                divRow.style.backgroundColor = '#262155'
                divRow.style.borderRadius = '2rem'
            } else {
                divRow.classList.remove('marked')
                divRow.style.backgroundColor = '#0e0c1f'
            }
        })
    } 
}