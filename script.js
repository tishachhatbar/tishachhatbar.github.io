// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all links
        document.querySelectorAll('.nav-link').forEach(navLink => {
            navLink.classList.remove('active');
        });
        
        // Add active class to clicked link
        this.classList.add('active');
        
        // Get target section
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            // Scroll to section
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Update active navigation on scroll
const sections = document.querySelectorAll('.content-section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all timeline items and cards
document.querySelectorAll('.timeline-item, .leadership-card, .skill-category').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Photo upload functionality
// Note: To add your photo, simply replace 'profile-photo.jpg' with your actual photo file
// Or you can use this function to dynamically load it

function loadProfilePhoto() {
    const photo = document.getElementById('profilePhoto');
    const placeholder = document.getElementById('photoPlaceholder');
    
    // Check if photo exists
    photo.addEventListener('load', function() {
        placeholder.style.display = 'none';
        photo.classList.add('visible');
    });
    
    // If photo doesn't load, keep placeholder
    photo.addEventListener('error', function() {
        placeholder.style.display = 'flex';
        photo.style.display = 'none';
    });
}

// Initialize photo loading
loadProfilePhoto();

// Add parallax effect to section numbers
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const sectionNumbers = document.querySelectorAll('.section-number');
    
    sectionNumbers.forEach(number => {
        const speed = 0.5;
        const offset = number.offsetTop;
        const yPos = -(scrolled - offset) * speed;
        number.style.transform = `translateY(${yPos}px)`;
    });
});

// Add hover effect to timeline items
document.querySelectorAll('.timeline-content').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// Typing effect for name (optional - can be removed if you don't want it)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Smooth reveal on page load
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});
