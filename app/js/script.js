const body = document.querySelector('body')
const burgerIcon = document.querySelector('#burger-icon')
const header = document.querySelector('.header')
const overlay = document.querySelector('.overlay')
const fadedElems = document.querySelectorAll('.faded')

burgerIcon.addEventListener('click', () => {
    console.log('burger')

    if (header.classList.contains('open')){
        body.classList.remove('noscroll')
        header.classList.remove('open')
        fadedElems.forEach(elem => {
            elem.classList.remove('fade-in')
            elem.classList.add('fade-out')
        })
        

    } else {
        body.classList.add('noscroll')
        header.classList.add('open')
        fadedElems.forEach(elem => {
            elem.classList.remove('fade-out')
            elem.classList.add('fade-in')
        })
        
    }

    
})