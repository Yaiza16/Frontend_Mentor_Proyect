export default function openPledgeCard(modalTitle, modalInput, cardModalSelector, cardStartModal, cardFocusSelector){

    modalTitle.forEach(element => {
        element.addEventListener('click', () =>{
            let cardModal = element.closest(cardModalSelector);
            cardStartModal.forEach(card => {
                if ((card.classList.contains(cardFocusSelector)) && (card.dataset.id!=cardModal.dataset.id)){
                    card.classList.remove(cardFocusSelector);
                }
            })

            if (!cardModal.classList.contains(cardFocusSelector)){
                cardModal.classList.add(cardFocusSelector)
            }
        })
    });

    modalInput.forEach(element => {
        element.addEventListener('click', () =>{
            let cardModal = element.closest(cardModalSelector);
            cardStartModal.forEach(card => {
                if ((card.classList.contains(cardFocusSelector)) && (card.dataset.id!=cardModal.dataset.id)){
                    card.classList.remove(cardFocusSelector);
                }
            })

            if (!cardModal.classList.contains(cardFocusSelector)){
                cardModal.classList.add(cardFocusSelector)
            }
        })
    });


}