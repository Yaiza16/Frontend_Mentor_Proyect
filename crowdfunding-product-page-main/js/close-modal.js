export default function closeModal(closeModal, modal, section, closeModalSelector, cardStartModal){
    closeModal.addEventListener('click', () =>{
        modal.classList.add('disabled');
        section.classList.remove('disabled');
        cardStartModal.forEach(card => {
            if (card.classList.contains(closeModalSelector)){
                card.classList.remove(closeModalSelector)
            }
        });

    })
}