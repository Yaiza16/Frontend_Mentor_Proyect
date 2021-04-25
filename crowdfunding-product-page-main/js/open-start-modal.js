export default function openModalRewards(modal, buttons, section){
    buttons.forEach(button => {
        button.addEventListener('click', () =>{
            modal.classList.toggle('disabled')
            section.classList.toggle('disabled')
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
              });
        })
    });
}