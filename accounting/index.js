const inputCompanyName = document.querySelector('#company_name')
const inputCompanyPIB = document.querySelector('#company_pib')
const inputDate = document.querySelector('[type="date"]')
const inputPrice = document.querySelector('#price')
const forma = document.querySelector('form')
const btnFakture = document.querySelector('button')
const divIspisFaktura = document.querySelector('.ispis')

const nizFaktura = []

const renderInput = (divIspisFaktura, nizFaktura) => {
    nizFaktura.forEach(element => {
        const divFaktura = document.createElement('div')
        divFaktura.classList.add('faktura')

        const pName = document.createElement('p')
        pName.textContent = element.companyName

        const pPIB = document.createElement('p')
        pPIB.textContent = element.companyPIB

        const pDate = document.createElement('p')
        pDate.textContent = element.companyDate

        const pPrice = document.createElement('p')
        pPrice.textContent = element.price

        const btnDelete = document.createElement('button')
        btnDelete.textContent = 'Obrisi'

        btnDelete.addEventListener('click', (event) => {
            // console.log(event.target.parentElement.children[0].textContent);
            nizFaktura.splice(nizFaktura.findIndex(f => f.companyName === event.target.parentElement.children[0].textContent), 1)
            divIspisFaktura.textContent = ''
            renderInput(divIspisFaktura, nizFaktura)
        })

        divFaktura.append(pName, pPIB, pDate, pPrice, btnDelete)
        divIspisFaktura.appendChild(divFaktura)
    })

}

forma.addEventListener('submit', (event) => {
    event.preventDefault()

    if (inputCompanyName.value.trim().length > 50) {
        alert('Predugacko ime kompanije')
        return
    }

    if (inputCompanyPIB.value.length !== 8) {
        alert('Pogresan PIB kompanije')
        return
    }

    if (inputPrice.value < 0) {
        alert('Cena fakture ne moze biti negativna')
        return
    }

    const unos = {
        companyName: inputCompanyName.value,
        companyPIB: inputCompanyPIB.value,
        companyDate: inputDate.value,
        price: inputPrice.value
    }

    nizFaktura.push(unos)

    divIspisFaktura.textContent = ''
    renderInput(divIspisFaktura, nizFaktura)
    forma.reset()
})

btnFakture.addEventListener('click', () => {
    console.log(nizFaktura);
})