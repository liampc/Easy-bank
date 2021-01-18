const burgerIcon = document.querySelector('#burger-icon')
const header = document.querySelector('.header')

burgerIcon.addEventListener('click', () => {
    console.log('burger')

    if (header.classList.contains('open')){
        header.classList.remove('open')
    } else {
        header.classList.add('open')
    }

    
})