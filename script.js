let pai = document.querySelector('.div');
let filhos = pai.querySelectorAll('p');

pai.addEventListener('click', () => {
    filhos.forEach(p => {
        p.textContent = 'Mudança de texto'
    })
})