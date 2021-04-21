let optionsMonthly = [{id: 1, cost: 3, pageviews: 20, yearly: false},
    {id: 2, cost: 6, pageviews: 60, yearly: false},
    {id: 3, cost: 8, pageviews: 100, yearly: false},
    {id: 4, cost: 14, pageviews: 200, yearly: false},
    {id: 5, cost: 25, pageviews: 500, yearly: false}];

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
                    costAmount.innerHTML = ((option.cost*12/4*3).toFixed(2))
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
            costDuration.innerHTML = 'yearly'
            optionsMonthly.forEach(option =>{
                if(slider.value == option.id){
                    console.log(option.id)
                    costAmount.innerHTML = ((option.cost*12/4*3).toFixed(2))
                    pageviews.innerHTML = option.pageviews
                }
                monthly = false
            })
        }else{
            toggle.classList.remove('yearly')

            costDuration.innerHTML = '/ month'
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