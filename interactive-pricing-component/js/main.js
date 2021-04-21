let optionsMonthly = [{id: 1, cost: 3, pageviews: 10, yearly: false},
    {id: 2, cost: 12, pageviews: 50, yearly: false},
    {id: 3, cost: 16, pageviews: 100, yearly: false},
    {id: 4, cost: 24, pageviews: 500, yearly: false},
    {id: 5, cost: 36, pageviews: 1000, yearly: false}];

let monthly = true;


const slider = document.querySelector('#slider');
const costAmount = document.querySelector('#cost-amount');
const pageviews = document.querySelector('#pageviews');
const toggle = document.querySelector('#toggle-billing')
const costDuration = document.querySelector('#cost-duration')
const discount = document.querySelector('#discount')

document.addEventListener('DOMContentLoaded', (e) =>{
    setValuesSlider()
    toggleBilling()
})

const setValuesSlider = () =>{
    slider.addEventListener('input', () =>{
        optionsMonthly.forEach(option =>{
            if(slider.value == option.id){
                pageviews.innerHTML = option.pageviews
                if (monthly){
                    costAmount.innerHTML = option.cost.toFixed(2)
                    sliderBackground(option)
                }else{
                    costAmount.innerHTML = ((option.cost/4*3).toFixed(2))
                    sliderBackground(option)
                }
                
            }
        })
    }) 
}

const sliderBackground = (option) =>{
    const lengthOptions = optionsMonthly.length;
    const widthFill = (100/(lengthOptions-1))*(option.id-1)
    document.documentElement.style.setProperty("--with-slider", `${widthFill}%`)
}


const toggleBilling = () => {
    toggle.addEventListener('click', () =>{
        if (monthly){
            toggle.classList.add('yearly')
            optionsMonthly.forEach(option =>{
                if(slider.value == option.id){
                    console.log(option.id)
                    costAmount.innerHTML = ((option.cost/4*3).toFixed(2))
                    pageviews.innerHTML = option.pageviews
                }
                monthly = false
            })
        }else{
            toggle.classList.remove('yearly')
            optionsMonthly.forEach(option =>{
                if(slider.value == option.id){
                    console.log(option.id)
                    costAmount.innerHTML = (option.cost.toFixed(2))
                    pageviews.innerHTML = option.pageviews
                }
                monthly = true
            })
        }
    })
}