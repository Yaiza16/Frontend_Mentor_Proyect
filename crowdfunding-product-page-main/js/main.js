import bookmarkButton from './bookmark.js';
import closeModal from './close-modal.js';
import closeSuccessModal from './close-success-modal.js';
import openPledgeCard from './open-pledge-card.js';
import { openModalProject, openModalRewards } from './open-start-modal.js';
import updateStats from './update-stats.js';

const bookmarkContainer = document.getElementById('bookmark-container');
const bookmark = document.getElementById('bookmark');
const buttonsReward = document.querySelectorAll('.button-reward');
const startModal = document.getElementById('start-modal')
const aboutSection = document.getElementById('about-section')
const closeIconModal = document.getElementById('close-modal')
const buttonProject = document.getElementById('button-project')

const cardModalInput = document.querySelectorAll('.input-radio-container');
const cardModalTitle = document.querySelectorAll('.card-modal-title');
const cardStartModal = document.querySelectorAll('.card-start-modal')
const cardModalPledge = document.querySelectorAll('.card-modal-pledge-input')

const form = document.querySelectorAll('.form-modal');
const totalAmount = document.getElementById('total-amount');
let backers = document.getElementById('backers');
const pledgeInput = document.getElementById('pledge-input');

const successModal = document.getElementById('success-modal');
const successModalButton = document.getElementById('success-modal-button')


document.addEventListener('DOMContentLoaded', () =>{
    bookmarkButton(bookmarkContainer, bookmark);
    openModalRewards(startModal, buttonsReward, aboutSection)
    openModalProject(startModal, buttonProject, aboutSection);
    closeModal(closeIconModal, startModal, aboutSection, 'card-start-modal--focus', cardStartModal)
    openPledgeCard(cardModalTitle, cardModalInput, '.card-start-modal', cardStartModal, 'card-start-modal--focus');
    updateStats(form, '.number-pledge-input', totalAmount, backers, startModal, aboutSection, successModal, 'card-start-modal--focus', cardStartModal, '.reward-modal-number', '.reward-number')
    closeSuccessModal(successModal, successModalButton)  
})