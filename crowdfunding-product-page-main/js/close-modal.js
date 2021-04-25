export default function closeModal(closeModal, modal, section){
    closeModal.addEventListener('click', () =>{
        modal.classList.add('disabled');
        section.classList.remove('disabled');
    })
}