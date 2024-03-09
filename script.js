let pai = document.querySelector('.div');
let filhos = document.createElement('h1')

pai.addEventListener('click', () => {
    pai.appendChild(filhos)
})