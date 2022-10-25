const Launch = (launch, index) => {
    const divLaunch = document.createElement('div')
    divLaunch.classList.add('launch')
    divLaunch.classList.add('col-3')

    if(index % 3 !== 0)
        divLaunch.classList.add('offset-1')

    const imgPatch = document.createElement('img')
    imgPatch.src = launch.links.mission_patch
    
    const pRocketName = document.createElement('p')
    pRocketName.textContent = launch.rocket.rocket_name

    const pLaunchYear = document.createElement('p')
    pLaunchYear.textContent = launch.launch_year

    divLaunch.append(imgPatch, pRocketName, pLaunchYear)

    return divLaunch
}

export default Launch
