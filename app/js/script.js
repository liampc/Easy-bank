const burgerIcon = document.querySelector('#burger-icon')

burgerIcon.addEventListener('click', () => {
    console.log('burger')

    if (burgerIcon.classList.contains('open')){
        burgerIcon.classList.remove('open')
    } else {
        burgerIcon.classList.add('open')
    }

    
})