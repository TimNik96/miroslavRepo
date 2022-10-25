import Launch from "./components/Launch"
import { getAllLaunches } from "./services"

const divIspis = document.querySelector('.ispis')

getAllLaunches().then(response => {
    let allLaunches = []
    allLaunches = response.data.filter(launch => launch.links.mission_patch !== null)
    
    allLaunches.forEach((l, index) => {
        divIspis.appendChild(Launch(l, index))
    })
})