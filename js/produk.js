// JavaScript untuk halaman produk
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

// Update active navigation link berdasarkan scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        } else if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active'); 
        }
    });
});

// Animasi untuk card produk saat scroll
function animateOnScroll() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const cardVisible = 150;
        
        if (cardTop < window.innerHeight - cardVisible) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
}

// Set initial state untuk cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Jalankan animasi pertama kali
    animateOnScroll();
});

// Listen untuk scroll event
window.addEventListener('scroll', animateOnScroll);

// Efek hover untuk color options
document.addEventListener('DOMContentLoaded', function() {
    const colorOptions = document.querySelectorAll('.color-option');
    
    colorOptions.forEach(option => {
        option.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.2)';
            this.style.boxShadow = '0 4px 8px rgba(0,0,0,0.3)';
        });
        
        option.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });
    });
});