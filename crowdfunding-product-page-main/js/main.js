import bookmarkButton from './bookmark.js';
import closeModal from './close-modal.js';
import openModalRewards from './open-start-modal.js';

const bookmarkContainer = document.getElementById('bookmark-container');
const bookmark = document.getElementById('bookmark');
const buttonsReward = document.querySelectorAll('.button-reward');
const startModal = document.getElementById('start-modal')
const aboutSection = document.getElementById('about-section')
const closeIconModal = document.getElementById('close-modal')

document.addEventListener('DOMContentLoaded', () =>{
    bookmarkButton(bookmarkContainer, bookmark);
    openModalRewards(startModal, buttonsReward, aboutSection)
    closeModal(closeIconModal, startModal, aboutSection)
})