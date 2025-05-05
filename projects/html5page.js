document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    const closeBtn = document.getElementById('close-btn');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    closeBtn.addEventListener('click', function() {
        navLinks.classList.remove('active');
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('nav');
    const header = document.querySelector('header');

    function checkScroll() {
        const headerHeight = header.offsetHeight;
        if (window.scrollY > headerHeight) {
            nav.classList.add('nav-scrolled'); // Add class when scrolled past header
        } else {
            nav.classList.remove('nav-scrolled'); // Remove class when in header area
        }
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Initial check to apply class if already scrolled
});
