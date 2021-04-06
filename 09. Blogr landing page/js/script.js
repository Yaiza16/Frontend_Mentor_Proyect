const buttonHamburger = document.querySelector('#buttonHamburger')
const menuMobileContainer = document.querySelector('#menuContainer')
console.log(buttonHamburger.getAttribute('src'))


buttonHamburger.addEventListener('click', () =>{
    if (buttonHamburger.getAttribute('src') == 'images/icon-hamburger.svg'){
        menuMobileContainer.classList.add('visible')
        buttonHamburger.setAttribute('src', 'images/icon-close.svg')
    }
    else{ 
        if(buttonHamburger.getAttribute('src') == 'images/icon-close.svg'){
        menuMobileContainer.classList.remove('visible')
        buttonHamburger.setAttribute('src', 'images/icon-hamburger.svg')
    }}
})