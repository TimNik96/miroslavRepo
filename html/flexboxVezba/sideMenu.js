const hamburgerSvg = document.querySelector('#ham')
const closingSvg = document.querySelector('#x')
const divSideMenu = document.querySelector('.side-menu')

hamburgerSvg.addEventListener('click', () => {
    divSideMenu.style.transform = 'translateX(0)'
})

closingSvg.addEventListener('click', () => {
    divSideMenu.style.transform = 'translateX(-100%)'
})