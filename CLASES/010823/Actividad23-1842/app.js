const card = document.querySelector('.card');
const colors = document.querySelectorAll('.colors div');

let hexCodes = ['#e5031d', '#1503e5', '#15e503', '#e5ce03'];


colors.forEach((item, i) => {
    item.addEventListener('click', () => {
        const root = document.querySelector(':root');

        root.style.setProperty('--product-img', `url(img/${item.className}.png)`);
        root.style.setProperty('--bg-color', hexCodes[i]);
    })
})

card.addEventListener('click', () => {
    card.classList.add('active');
})

window.addEventListener('click', (e) => {
    if(e.target.className == ''){
        card.classList.remove('active');
    }
})