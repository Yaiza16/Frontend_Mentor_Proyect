const screen = document.getElementById('screen')
const statesButtonsContainer = document.getElementById('theme-buttons')
const numbersButtonsContainer = document.getElementById('buttons-container')

let numbers = []
let operations = []


document.addEventListener('DOMContentLoaded', () =>{
    console.log("Probando")
    console.log(statesButtonsContainer)
})


statesButtonsContainer.addEventListener('click', e =>{
    statesToggle(e);
})

numbersButtonsContainer.addEventListener('click', e =>{
    selectOperation(e)
})


const statesToggle = e =>{
    const currentTheme = document.getElementById('main');

    // console.log(`button classList: ${e.target.classList[1]}`)
    // console.log(`current theme classList: ${currentTheme.classList[1]}`)

    if (e.target.classList[1] !== currentTheme.classList[1]){
        currentTheme.classList.remove(currentTheme.classList[1]);
        currentTheme.classList.add(e.target.classList[1])
        // console.log(currentTheme.className)
    }
}

const selectOperation = e =>{
    const bt = e.target;

    if (bt.classList.contains('button')){
        if (bt.dataset.number){
            printNumber(bt.dataset.number)
        }else if(bt.dataset.operation){
            keepOperation(bt.innerHTML)
        }
    }
}


const printNumber = number =>{
    if (screen.value == 0){
        screen.value = number
    }else{
        screen.value += number
    }
}


const keepOperation = operation =>{
    if (numbers.length == 0){
        numbers.push(screen.value)
        operations.push(operation)
        screen.value += operation;

    } else{
        const positionLastOperator = screen.value.lastIndexOf(operations[operations.length-1])
        numbers.push(screen.value.slice(positionLastOperator+1))
        operations.push(operation)
        screen.value += operation;
    }
    
}


