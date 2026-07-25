/* -----------------------------
   FOOTER YEAR
------------------------------ */

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


/* -----------------------------
   ACTIVE NAVIGATION LINK
------------------------------ */

const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll("nav a[href^='#']");

const updateActiveLink = () => {
    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 180;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
};

window.addEventListener("scroll", updateActiveLink);
updateActiveLink();


/* -----------------------------
   SMOOTH SCROLLING
------------------------------ */

document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
        const targetId = link.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            event.preventDefault();

            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


/* -----------------------------
   THEME BUTTON
   Keeps your site dark but lets
   you turn the glowing background
   on and off.
------------------------------ */

const themeToggle = document.getElementById("themeToggle");
const background = document.querySelector(".background");

if (themeToggle && background) {
    themeToggle.addEventListener("click", () => {
        background.classList.toggle("background-muted");

        const isMuted = background.classList.contains("background-muted");

        themeToggle.textContent = isMuted ? "☀️" : "🌙";
        themeToggle.setAttribute(
            "aria-label",
            isMuted ? "Turn background glow on" : "Turn background glow off"
        );
    });
}


/* -----------------------------
   CONTACT FORM MESSAGE
   The form does not send email yet.
------------------------------ */

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        alert(
            "Thanks for reaching out! The contact form is not connected yet. Please use the email link instead."
        );
    });
}
