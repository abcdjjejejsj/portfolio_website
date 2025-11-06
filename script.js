document.addEventListener('DOMContentLoaded', () => {

    // --- Hamburger Menu Toggle ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const hamburgerIcon = document.querySelector('.hamburger i');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        
        // Toggle icon between 'bars' and 'times' (X)
        if (navLinks.classList.contains('open')) {
            hamburgerIcon.classList.remove('fa-bars');
            hamburgerIcon.classList.add('fa-times');
        } else {
            hamburgerIcon.classList.remove('fa-times');
            hamburgerIcon.classList.add('fa-bars');
        }
    });

    // --- Close Menu When a Link is Clicked ---
    const allNavLinks = document.querySelectorAll('.nav-links li a');

    allNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('open')) {
                navLinks.classList.remove('open');
                hamburgerIcon.classList.remove('fa-times');
                hamburgerIcon.classList.add('fa-bars');
            }
        });
    });

    // --- Dynamic Footer Year ---
    // Replicates the {new Date().getFullYear()} from your React code
    const
    footerText = document.querySelector('.footex');
    if (footerText) {
        footerText.textContent = `Made by @Vaibhav_Salve | ${new Date().getFullYear()}`;
    }

});