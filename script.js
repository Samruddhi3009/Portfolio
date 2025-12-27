// Theme toggle
const toggle = document.getElementById("theme-toggle");
const body = document.body;

toggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    toggle.classList.toggle("fa-sun");
});

// Mobile menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// ✅ CLOSE MENU WHEN ANY LINK IS CLICKED
const navLinks = document.querySelectorAll("#nav-menu a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});
