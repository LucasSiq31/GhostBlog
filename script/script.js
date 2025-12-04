const btnMenu = document.querySelector('.iconMenu');
const menu = document.querySelector('.menu');

// Cria o overlay dinamicamente
const overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.appendChild(overlay);

// Abrir/fechar menu
btnMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
});

// Fechar clicando fora
overlay.addEventListener('click', () => {
    menu.classList.remove('active');
    overlay.classList.remove('active');
});

const closeMenuBtn = document.querySelector('.closeMenu');

closeMenuBtn.addEventListener('click', () => {
    menu.classList.remove('active');
    overlay.classList.remove('active');
});

// Função de compartilhar
const gatilho = document.querySelector('.gatilho');
const container = document.querySelector('.share');

gatilho.addEventListener('click', () => {
    container.classList.toggle('caindo');
});