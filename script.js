
let div = document.getElementById('div')
let img = div.querySelector('img')

div.addEventListener('click', () => {
        img.removeAttribute('src', './mario.png')
})
