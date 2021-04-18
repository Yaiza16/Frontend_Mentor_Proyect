const header = document.querySelector('#header');
const nav = document.querySelector('#nav')
const navLinks = document.querySelector('#nav-links');
const burger = document.querySelector('#burger');
const gallery = document.querySelector('#gallery');
const galleryContainer = document.querySelector('#gallery-container');
const template = document.querySelector('#template').content;
const fragment = document.createDocumentFragment();
const button = document.querySelector('#gallery-button');

document.addEventListener('DOMContentLoaded', () =>{
    fetchData();
})


const fetchData = async () => {
    try{
        const res = await fetch('api.json')
        const images = await res.json();
        paintingImages(images);
    } catch(error){
        console.log(error);
    }
}

const paintingImages = data =>{
    if(screen.width>700){
        gallery.innerHTML = "";
        data.forEach(element => {
            const clone = template.cloneNode(true);
            clone.querySelector('#container-photo__img').src = element.url.desktop
            clone.querySelector('#container-photo__title').innerHTML = element.title
    
            fragment.appendChild(clone);
        });
        gallery.appendChild(fragment)
    }else{
        gallery.innerHTML = "";
        data.forEach(element => {
            const clone = template.cloneNode(true);
            clone.querySelector('#container-photo__img').src = element.url.responsive
            clone.querySelector('#container-photo__title').innerHTML = element.title
    
            fragment.appendChild(clone);
        });
        gallery.appendChild(fragment)
        galleryButton();
    }   
}

const galleryButton = () =>{
    let clone = button.cloneNode(true);
    clone.className ='button-small'

    galleryContainer.appendChild(clone);
}

burger.addEventListener('click', () =>{
    header.classList.toggle('active');


})