import axios from 'axios'

const body = document.body

const Loader = () => {
    const divLoader = document.createElement('div')
    divLoader.classList.add('animationContainer') 

    const divBar1 = document.createElement('div')
    divBar1.classList.add('bars')
    divBar1.classList.add('bar-1')

    const divBar2 = document.createElement('div')
    divBar2.classList.add('bars')
    divBar2.classList.add('bar-2')

    const divBar3 = document.createElement('div')
    divBar3.classList.add('bars')
    divBar3.classList.add('bar-3')

    const divBar4 = document.createElement('div')
    divBar4.classList.add('bars')
    divBar4.classList.add('bar-4')

    const divBar5 = document.createElement('div')
    divBar5.classList.add('bars')
    divBar5.classList.add('bar-5')

    divLoader.append(divBar1, divBar2, divBar3, divBar4, divBar5)  
    
    return divLoader
}

const render = (arr) => {
    arr.forEach(element => {
        const divPerson = document.createElement('div')
        divPerson.classList.add('person')

        const pFirstName = document.createElement('p')
        pFirstName.textContent = element.first_name

        const pLastName = document.createElement('p')
        pLastName.textContent = element.last_name
        
        const pEmail = document.createElement('p')
        pEmail.textContent = element.email

        divPerson.append(pFirstName, pLastName, pEmail)
        body.appendChild(divPerson)
    })
}

let podaci
let loader = Loader()

body.appendChild(loader)

setTimeout(() => {
    axios.get('https://reqres.in/api/users?page=2').then(response => {
        // console.log(response.status, response.data.data);
        body.removeChild(loader)
        podaci = response.data.data
        // console.log(podaci);
        render(podaci)
    })
}, 1000)

// 


// setTimeout(() => {
//     console.log(podaci)
// }, 2000)



