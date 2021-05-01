export default function updateStats(form, inputSelector, totalAmount, backers, startModal, aboutSection, successModal, cardStartSelector, cardStartModal, rewardModalNumberSelector, rewardNumberAboutSelector){
    form.forEach(el => {
        el.addEventListener('submit', e =>{
            e.preventDefault()

            //Change total amount
            let numberNotComa = deleteComa(totalAmount.innerHTML)
            let newNumberNotComa = Number(numberNotComa)+ Number(el.querySelector(inputSelector).value);
            totalAmount.innerHTML = addComa(newNumberNotComa);
    
            //Sum backers
            let backerNotComa = deleteComa(backers.innerHTML);
            let newBackerNotComa = Number(backerNotComa) + 1;
            backers.innerHTML = addComa(newBackerNotComa);

            //Check if amount has been gotten
            if (deleteComa(totalAmount.innerHTML) > 100000){
             form.forEach(el => {
                 if (!el.closest('.card').classList.contains('card-start-modal--disabled')){
                     el.closest('.card').classList.add('card-start-modal--disabled')
                 }
                 if (!el.closest('.card').classList.contains('card--disabled')){
                    el.closest('.card').classList.add('card--disabled')
                }
             })
             aboutSection.querySelectorAll('.card').forEach(card => {
                 if (!card.classList.contains('card--disabled')){
                     card.classList.add('card--disabled')
                 }
             })
             
             
            }

            //Update rewars left
            updateNumberChanges(rewardModalNumberSelector, el, rewardNumberAboutSelector, aboutSection);

            // Remove focus class
            cardStartModal.forEach(card => {
                if (card.classList.contains(cardStartSelector)){
                    card.classList.remove(cardStartSelector)
                }
            })

            //Reset form
            el.reset();
    
            //Disabled start-modal
            startModal.classList.add('disabled');
    
            //Active main section
            aboutSection.classList.remove('disabled');
    
            //Active success modal
            successModal.classList.remove('disabled')
    
            //Change width bar
            let widthFill = newNumberNotComa/1000;
            if (widthFill>100){
                widthFill = 100;
            }
            document.documentElement.style.setProperty('--width-bar', `${widthFill}%`)
    
    });

    })

    const deleteComa = (number) => {
        let numberArray = Array.prototype.slice.call(number)
        let index = numberArray.indexOf(",");
        numberArray.splice(index, 1)
        let newNumber = numberArray.join('');
        return newNumber
    };

    const addComa = number =>{
        let numberArray = Array.prototype.slice.call(String(number))
        numberArray.splice(-3, 0, ",")
        let newNumber = numberArray.join('')
        return newNumber
    }

    
}

const updateNumberChanges = (rewardNumberSelector,  form, rewardNumberMainSelector, aboutSection) => {
    let valueSelector = form.closest('.card').querySelector(rewardNumberSelector);
    valueSelector.innerHTML --;
    if (valueSelector.innerHTML == 0){
        form.closest('.card').classList.add('card-start-modal--disabled', 'card--disabled')
    }
    
    let valueSelectorRewardMain = aboutSection.querySelectorAll(rewardNumberMainSelector);

    valueSelectorRewardMain.forEach(reward => {
        if (reward.dataset.id == valueSelector.dataset.id){
            reward.innerHTML --;
        }
        if (reward.innerHTML == 0){
            reward.closest('.card').classList.add('card--disabled')
        }

        console.log(reward)
    })
    


}