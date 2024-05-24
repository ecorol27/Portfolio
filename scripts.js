/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


document.addEventListener("DOMContentLoaded", function () {
    const masthead = document.querySelector('.masthead');
    const footer = document.querySelector('.footer');

    function createStar() {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = `${Math.random() * window.innerWidth}px`;
        star.style.top = `${Math.random() * window.innerHeight}px`;

        const destinationX = Math.random() * window.innerWidth;
        const destinationY = Math.random() * window.innerHeight;

        const animationDuration = Math.random() * 30 + 10; // Durée aléatoire pour chaque étoile

        const directionX = Math.random() > 0.5 ? 1 : -1; // Direction aléatoire en X
        const directionY = Math.random() > 0.5 ? 1 : -1; // Direction aléatoire en Y

        star.style.animation = `star-move-${directionX}-${directionY} ${animationDuration}s linear infinite`;

        star.style.animationDelay = `${Math.random() * 5}s`; // Décalage aléatoire pour créer un effet de déplacement aléatoire entre les étoiles

        masthead.appendChild(star);

        const star2 = star.cloneNode(true);
        footer.appendChild(star2);
    }

    function createStars() {
        for (let i = 0; i < 75; i++) {
            createStar();
        }
    }

    createStars();
});








