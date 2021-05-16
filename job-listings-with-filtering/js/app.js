const cardsContainer = document.getElementById('cards-container')
const templateCards = document.getElementById('template-card').content;
const templateModal = document.getElementById('template-modal').content;
const modal = document.getElementById('modal')
const modalContainer = document.getElementById('filters-container-modal')
const fragment = document.createDocumentFragment();



document.addEventListener('DOMContentLoaded', () =>{
    fetchData();
})



cardsContainer.addEventListener('click', e =>{
    addFilter(e)
})

modal.addEventListener('click', e =>{
    removeFilter(e)
    buttonClear(e)
})



const  fetchData = async function () {
    try{
        const res = await fetch('data.json')
        const data = await res.json()
        pintCards(data)
        
    } catch(e){
        console.log(e)
        return e
    }
}

const pintCards = data =>{
    data.forEach(el => {
        const clone = templateCards.cloneNode(true);

        clone.querySelector('.card-logo').src = el.logo;
        clone.querySelector('.card-company').textContent = el.company;
        clone.querySelector('.card-position').textContent = el.position;
        clone.querySelector('.card-data__item--postedAt').textContent = el.postedAt;
        clone.querySelector('.card-data__item--contract').textContent = el.contract;
        clone.querySelector('.card-data__item--location').textContent = el.location;
        clone.querySelector('.card-filter--role').textContent = el.role;
        clone.querySelector('.card-filter--role').classList.add(`${el.role}`)
        clone.querySelector('.card-filter--level').textContent = el.level;
        clone.querySelector('.card-filter--level').classList.add(`${el.level}`)


        // Add card-feature-new
        if (el.new){ 

            const newFeature = document.createElement('p');
            const newFeatureContent = document.createTextNode('New!');

            newFeature.appendChild(newFeatureContent)
            newFeature.classList.add('card-feature', 'card-feature--new');
            clone.querySelector('.card-features').appendChild(newFeature)
        }

        // Add card-feature-featured
        if (el.featured){ 
            const newFeature = document.createElement('p');
            const newFeatureContent = document.createTextNode('Featured');

            newFeature.appendChild(newFeatureContent)
            newFeature.classList.add('card-feature', 'card-feature--featured');
            clone.querySelector('.card-features').appendChild(newFeature)

            clone.querySelector('.card').classList.add('card--featured')
        }

        //Add filters (languages)
        el.languages.forEach(language =>{
            const newLanguage = document.createElement('div');
            const newLanguageContent = document.createTextNode(`${language}`);

            newLanguage.appendChild(newLanguageContent)
            newLanguage.classList.add('card-filter', `${language}`)
            clone.querySelector('.card-filters').appendChild(newLanguage)
        })

        //Add filteres (tools)
        if (el.tools != null){
            el.tools.forEach(tool =>{
                const newTool = document.createElement('div');
                const newToolContent = document.createTextNode(`${tool}`);

                newTool.appendChild(newToolContent)
                newTool.classList.add('card-filter', `${tool}`)
                clone.querySelector('.card-filters').appendChild(newTool)
            })
        }

        fragment.appendChild(clone)
    });
    cardsContainer.appendChild(fragment)
}


const addFilter = e =>{
    if(e.target.classList.contains('card-filter')){
        const clone = templateModal.cloneNode(true);
        const activatedFilters = modalContainer.querySelectorAll('.filter-modal')
        let repeatFilter = 0;

        activatedFilters.forEach(filter =>{
            if (filter.classList.contains(`${e.target.textContent}`)){
                repeatFilter ++;
            }
        })

        if (repeatFilter == 0){
            clone.querySelector('.filter-modal-name').textContent = e.target.textContent;
            clone.querySelector('.filter-modal').classList.add(`${e.target.textContent}`)
    
            modalContainer.appendChild(clone)
    
            if(modal.classList.contains('disabled')){
                modal.classList.remove('disabled')
            }

            showTargetCards(e.target.textContent)
        }
        
    }
}


const showTargetCards = classFilter =>{
    const cards = document.querySelectorAll('.card')

    cards.forEach(card =>{
        const filters = card.querySelectorAll('.card-filter')
        let filterContain = 0;
        filters.forEach(filter =>{
            if (filter.classList.contains(`${classFilter}`)){
                filterContain ++;
            }
        })

        if (filterContain == 0){
            card.classList.add('card--disabled')
        }
    })
}


const removeFilter = e =>{
    if (e.target.classList.contains('filter-close-container') || e.target.classList.contains('filter-close')){
        const filter = e.target.closest('.filter-modal')
        const nameFilter = filter.querySelector('.filter-modal-name').textContent;
        modalContainer.removeChild(filter)

        const cards = document.querySelectorAll('.card')

        cards.forEach(card =>{
            const filters = card.querySelectorAll('.card-filter');
            let filterContains = 0
            filters.forEach(filter =>{
                if (filter.classList.contains(`${nameFilter}`)){
                    filterContains ++;
                }
            })

            if (filterContains > 0){
                card.classList.remove('card--disabled')
            }
        })

       const filterModal = modalContainer.querySelector('.filter-modal')  
        if (filterModal == null){
            modal.classList.add('disabled')
        }

    }
}

const buttonClear = e =>{
    if (e.target.classList.contains('clear-button')){
        if (modalContainer.hasChildNodes()){
            while (modalContainer.childNodes.length>0){
                modalContainer.removeChild(modalContainer.firstChild)
            }
        }

        modal.classList.add('disabled')

        const cards = document.querySelectorAll('.card')
        cards.forEach(card =>{
            if (card.classList.contains('card--disabled')){
                card.classList.remove('card--disabled')
            }
        })
    }
}








