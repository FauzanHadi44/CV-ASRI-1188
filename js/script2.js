// JavaScript untuk halaman contact
const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

// Toggle menu mobile
menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("hidden");
});

// Smooth scrolling untuk navigasi
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.location.href = targetId;
        }
    });
});

// Tidak ada update active link berdasarkan scroll - Kontak selalu aktif
// window.addEventListener('scroll', function() {
//     // Disabled scroll-based active state changes
// });

// Animasi untuk elemen saat scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Set initial state untuk animasi
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Set Kontak as active on page load
    const kontakLink = document.querySelector('nav ul li a[href="contact.html"]');
    if (kontakLink) {
        kontakLink.classList.add('active');
    }
    
    // Jalankan animasi pertama kali
    animateOnScroll();
});

// Listen untuk scroll event
window.addEventListener('scroll', animateOnScroll);
