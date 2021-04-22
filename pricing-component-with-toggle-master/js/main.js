const toggle = document.getElementById('toggle');
const prices = document.querySelectorAll('.price')

document.addEventListener('DOMContentLoaded', () =>{
    setBilling()

})

document.addEventListener('keydown', e =>{
    keyToggle(e)
})



const setBilling = () =>{
    toggle.addEventListener('click', () =>{
        prices.forEach(price =>{
            price.classList.toggle('no-active')
        })

        toggle.classList.toggle('annually')
    })
}



const keyToggle = (e) =>{ 
    if (e.code === "ArrowRight"){
        if (toggle.classList.contains('annually')){
          prices.forEach(price =>{
              price.classList.toggle('no-active')
          })
  
          toggle.classList.toggle('annually')
        }
      }
  
      if (e.code === "ArrowLeft"){
          if (!toggle.classList.contains('annually')){
              prices.forEach(price =>{
                  price.classList.toggle('no-active')
              })
      
              toggle.classList.toggle('annually')
            }
      }
}


