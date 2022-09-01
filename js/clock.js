// let year = new Date().getFullYear()
// let month = new Date().getMonth()
// let day = new Date().getDay()

const divCasovnik = document.querySelector('.casovnik')


const time = () => {
    let hours = new Date().getHours()
    let minutes = new Date().getMinutes()
    let seconds = new Date().getSeconds()
    let dobaDana = 'AM'

    if(hours > 12) {
        dobaDana = 'PM'
        hours -= 12
    }

    if(hours < 10)
        hours = '0' + hours
    if(minutes < 10)
        minutes = '0' + minutes
    if(seconds < 10)
        seconds = '0' + seconds
    
    divCasovnik.textContent = `${hours}:${minutes}:${seconds} ${dobaDana}`

    return setTimeout(() => {
        time()
    }, 1000)
}

time()