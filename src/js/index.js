/* Here goes your JS code */
const popup = document.querySelector('.popup')
const showPopup = document.querySelector('#show-popup-form')
const closePopup = document.querySelector('.close-popup')

showPopup.addEventListener('click', () => { 
    popup.classList.add('show')
})

closePopup.addEventListener('click', () => { 
    popup.classList.remove('show')
})
