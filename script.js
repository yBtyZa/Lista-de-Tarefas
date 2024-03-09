let pai = document.body
let filhos = document.querySelectorAll('.div');

pai.addEventListener('click', () => {
    filhos.forEach(div => {
        div.style.backgroundColor = 'red'
    })
})