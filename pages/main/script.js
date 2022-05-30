const burger = document.getElementById('burger');
const burgerContainer = document.getElementById('burger-container');
const darkLayer = document.querySelector('.dark-layer');
const nav = document.getElementById('nav');
const navLinks = document.querySelectorAll('.nav-link');

burger.addEventListener('click', () => {
    burgerContainer.classList.toggle('dark');
    darkLayer.classList.toggle('active');
    nav.classList.toggle('nav');
});
navLinks.forEach(item => {
    item.addEventListener('click', () => {
        burgerContainer.classList.remove('dark');
        darkLayer.classList.remove('active');
        nav.classList.remove('nav');
    })
});