/* toggle*/
const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("hidden");
}) 

/* navbar*/
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(link => link.classList.remove('active'));
        link.classList.add('active'); 
    });
});

// Navbar Active 
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
    let currentSection = '';

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100; 
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove('active'); 

        if (['visimisi', 'achievement'].includes(currentSection)) {
            if (link.getAttribute('href').includes('tentangkami')) {
                link.classList.add('active');
            }
        } else if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active'); 
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    new TypeIt("#typing", {
        speed: 200,
        deleteSpeed: 300,
        loop: true,
        deleteDelay: 1000,
        afterString: (string) => {
                toggleTextColor();
            },
    }).go();
});

const colors = ["#ffffff", "black", "#4A90E2", "#FFD700"];
let currentColorIndex = 0; 
function toggleTextColor() {
    const typingElement = document.querySelector("#typing");
    typingElement.style.color = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % colors.length;
}