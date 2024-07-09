document.addEventListener('DOMContentLoaded', function() {
    let menuicon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    // Toggle navbar on menu icon click
    menuicon.onclick = () => {
        menuicon.classList.toggle('fa-xmark');
        navbar.classList.toggle('active');
    };

    // Handle scroll events
    window.onscroll = () => {
        let top = window.scrollY;

        // Highlight nav link based on section in view
        sections.forEach(sec => {
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
            }
        });

        // Add sticky class to header
        let header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 100);
    };

    // Remove toggle icon and hide navbar when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuicon.classList.remove('fa-xmark');
            navbar.classList.remove('active');
        });
    });

    // ScrollReveal configuration
    ScrollReveal({ 
        distance: '80px',
        duration: 2000,
        delay: 200,
    });
    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .skill-container, .portfolio-box, .education-container, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

    // Typed.js initialization
    const typed = new Typed('.multiple-text', {
        strings: ['FULL-STACK DEVELOPER', 'WEB DEVELOPER', 'JAVA DEVELOPER'],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 1000,
        loop: true,
    });
});
