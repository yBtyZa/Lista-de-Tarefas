let pai = document.querySelector('.div');
let filhos = pai.querySelectorAll('p');

pai.addEventListener('click', () => {
    filhos.forEach(p => {
        pai.removeChild(p)
    })
})