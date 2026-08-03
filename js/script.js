// ==========================
// AOS Animation
// ==========================

AOS.init({
    duration: 1000,
    once: true,
    easing: "ease-in-out"
});


// ==========================
// Typing Animation
// ==========================

new Typed("#typing", {

    strings: [
        "Linux System Administrator",
        "AWS Cloud Engineer",
        "DevOps Enthusiast",
        "Kubernetes Engineer",
        "Infrastructure Engineer"
    ],

    typeSpeed: 60,

    backSpeed: 40,

    backDelay: 1800,

    loop: true

});


// ==========================
// Navbar Scroll Effect
// ==========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        navbar.style.background = "#020617";

        navbar.style.boxShadow = "0 8px 20px rgba(0,0,0,.3)";

        navbar.style.padding = "10px 0";

    } else {

        navbar.style.background = "rgba(11,17,32,.95)";

        navbar.style.boxShadow = "none";

        navbar.style.padding = "15px 0";

    }

});


// ==========================
// Smooth Scroll
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


// ==========================
// Active Navbar Link
// ==========================

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(item => item.classList.remove("active"));

        this.classList.add("active");

    });

});


// ==========================
// Back To Top Button
// ==========================

// Create Button

const topBtn = document.createElement("button");

topBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';

topBtn.id = "topBtn";

document.body.appendChild(topBtn);


// Button Style

topBtn.style.position = "fixed";

topBtn.style.right = "20px";

topBtn.style.bottom = "20px";

topBtn.style.width = "50px";

topBtn.style.height = "50px";

topBtn.style.border = "none";

topBtn.style.borderRadius = "50%";

topBtn.style.background = "#2563EB";

topBtn.style.color = "#fff";

topBtn.style.cursor = "pointer";

topBtn.style.display = "none";

topBtn.style.zIndex = "999";

topBtn.style.transition = ".3s";


// Show / Hide

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});


// Click Event

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ==========================
// Skill Card Animation
// ==========================

const cards = document.querySelectorAll(".skill-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px) scale(1.05)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});


// ==========================
// Fade-in Elements
// ==========================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".fade").forEach(el => {

    observer.observe(el);

});


// ==========================
// Footer Year
// ==========================

const year = new Date().getFullYear();

const footer = document.querySelector("footer p.mt-4");

if (footer) {

    footer.innerHTML = `© ${year} Md. Hafizur Rahman. All Rights Reserved.`;

}
