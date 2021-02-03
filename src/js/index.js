// POPUP 
const popup = document.querySelector('.popup')
const showPopup = document.querySelector('#show-popup-form')
const closePopup = document.querySelector('.close-popup')
// FORMS 
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const form = document.querySelector('.form')
// TEXT
const showText = document.querySelector('.show-text')

showPopup.addEventListener('click', () => { 
    popup.classList.add('show')
})

closePopup.addEventListener('click', () => { 
    popup.classList.remove('show')
})


form.addEventListener('submit', (e) => { 
    e.preventDefault()
    if(password.value.length <= 5) { 
        alert('Password must be longer than 5 characters')
    }
    if(password.value.length >= 12) { 
        alert('Password must be less than 5 characters')
    }
    setTimeout(() => { 
        popup.classList.add('hide')
        showText.classList.add('show')
        showPopup.classList.add('hide')
    }, 3000)
})