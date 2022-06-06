export function Burger() {
    const burger = document.getElementById('burger');
    const burgerContainer = document.getElementById('burger-container');
    const darkLayer = document.querySelector('.dark-layer');
    const nav = document.getElementById('nav');
    const navLinks = document.querySelectorAll('.nav-link');

    burger.addEventListener('click', () => {
        if(nav.classList.contains('nav')) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    });

    navLinks.forEach(item => item.addEventListener('click', closeMobileMenu));
    darkLayer.addEventListener('click', closeMobileMenu);

    function openMobileMenu() {
        burgerContainer.classList.add('dark');
        darkLayer.classList.add('active');
        nav.classList.add('nav');
        document.body.style.overflow = 'hidden';
    }

    function closeMobileMenu() {      
        nav.classList.add('nav-close');  
        burgerContainer.classList.add('burger-container-close');  
        darkLayer.classList.remove('active');
        document.body.style.overflow = 'visible';
        setTimeout(() => {
            nav.classList.remove('nav','nav-close');
            burgerContainer.classList.remove('dark','burger-container-close');
        }, 200)
    }
}