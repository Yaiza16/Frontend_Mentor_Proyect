
const buttonsStatesContainer = document.getElementById('theme-buttons')
const buttonsStates = document.querySelectorAll('.theme-buttons__item');

document.addEventListener('DOMContentLoaded', () =>{
    console.log("Probando")
    console.log(buttonsStatesContainer)
})


buttonsStatesContainer.addEventListener('click', e =>{
    toggleStates(e);
})

const toggleStates = e =>{
    const currentTheme = document.getElementById('main');
    console.log(`button classList: ${e.target.classList[1]}`)
    console.log(`current theme classList: ${currentTheme.classList[1]}`)

    if (e.target.classList[1] !== currentTheme.classList[1]){
        currentTheme.classList.remove(currentTheme.classList[1]);
        currentTheme.classList.add(e.target.classList[1])
        console.log(currentTheme.className)
    }
}



