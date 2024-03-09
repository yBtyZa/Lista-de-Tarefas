
let div = document.getElementById('div')
let img = div.querySelector('img')

div.addEventListener('click', () => {
        img.setAttribute('src', './mario.png')
        img.style.width = '50vw'
        img.style.height = '100vh'
})
