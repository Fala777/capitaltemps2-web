/* ========================================
   BURGER MENU - NAVIGATION TOGGLE
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const nav = document.querySelector('nav');

    if (burgerMenu && nav) {
        burgerMenu.addEventListener('click', function() {
            burgerMenu.classList.toggle('active');
            nav.classList.toggle('active');
        });

        // Close menu when a link is clicked
        const navLinks = nav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                burgerMenu.classList.remove('active');
                nav.classList.remove('active');
            });
        });
    }

    // Mark current page link as active
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        const linkPath = href.substring(href.lastIndexOf('/') + 1);
        const currentPageName = currentPath.substring(currentPath.lastIndexOf('/') + 1) || 'index.html';
        
        if (linkPath === currentPageName || 
            (linkPath === 'index.html' && currentPageName === '') ||
            (currentPageName === 'index.html' && linkPath === 'index.html')) {
            link.classList.add('active');
        }
    });
});
