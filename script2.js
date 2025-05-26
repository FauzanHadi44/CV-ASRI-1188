/* toggle*/
const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("hidden");
}) 

// Navbar Active State on Click and Scroll
const navLinks = document.querySelectorAll('nav ul li a');

// Make the "Kontak" section active when the page loads
document.addEventListener("DOMContentLoaded", function() {
    // Remove 'active' from all links
    navLinks.forEach(link => link.classList.remove('active'));

    // Set 'Kontak' link as active
    const kontakLink = document.querySelector('nav ul li a[href="#kontak"]');
    if (kontakLink) {
        kontakLink.classList.add('active');
    }

    // Hide all sections except for 'kontak'
    const sections = document.querySelectorAll('section');
    sections.forEach(section => section.style.display = 'none');
    
    // Show the 'kontak' section
    const kontakSection = document.getElementById('kontak');
    if (kontakSection) {
        kontakSection.style.display = 'block';
    }
});
