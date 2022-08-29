const p = document.querySelector('#ispis')
const btn = document.querySelector('#btn')
let ispis = true

btn.addEventListener('click', () => {
    p.textContent = ''
    ispis = !ispis
    p.textContent = ispis

    {
        isMarked: false
    }

    obj.isMarked = !obj.isMarked

    // if(p.innerText == 'false')
    //     p.innerText = 'true'

    // if(p.innerText == 'true') {
    //     p.innerText = 'false'
    // }
})

let prom = false
