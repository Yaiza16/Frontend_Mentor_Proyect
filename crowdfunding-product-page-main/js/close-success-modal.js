export default function closeSuccessModal(successModal, closeSuccessModal){
    closeSuccessModal.addEventListener('click', () =>{
        successModal.classList.add('disabled');
        
    })
}