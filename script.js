// Smooth scroll with offset for navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background change on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth fade in/out effect for hero section
const typingText = document.querySelector('.typing-text');
if (typingText) {
    const text = typingText.getAttribute('data-text');
    typingText.textContent = text;
    
    let isVisible = true;
    const visibleDuration = 3000; // How long text is visible
    const fadeDuration = 800; // Fade transition duration
    const hiddenDuration = 500; // How long text is hidden
    
    function toggleVisibility() {
        if (isVisible) {
            // Fade out
            typingText.style.transition = `opacity ${fadeDuration}ms ease-in-out`;
            typingText.style.opacity = '0';
            
            setTimeout(() => {
                isVisible = false;
                setTimeout(toggleVisibility, hiddenDuration);
            }, fadeDuration);
        } else {
            // Fade in
            typingText.style.transition = `opacity ${fadeDuration}ms ease-in-out`;
            typingText.style.opacity = '1';
            
            setTimeout(() => {
                isVisible = true;
                setTimeout(toggleVisibility, visibleDuration);
            }, fadeDuration);
        }
    }
    
    setTimeout(toggleVisibility, visibleDuration);
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Skill cards animation on hover
document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Animated counter for stats (if you add them)
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Particle background effect
function createParticles() {
    const hero = document.querySelector('.hero');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (Math.random() * 20 + 10) + 's';
        hero.appendChild(particle);
    }
}

createParticles();

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });
}

// Project cards hover effect
document.querySelectorAll('.project-item').forEach(project => {
    project.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(10px)';
        this.style.boxShadow = '0 10px 30px rgba(77, 181, 255, 0.3)';
    });
    
    project.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
        this.style.boxShadow = 'none';
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - (scrolled / 500);
    }
});

// Copy email to clipboard
const emailLinks = document.querySelectorAll('[data-copy-email]');
emailLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const email = link.getAttribute('data-copy-email');
        navigator.clipboard.writeText(email).then(() => {
            const tooltip = document.createElement('span');
            tooltip.className = 'copy-tooltip';
            tooltip.textContent = 'Email copied!';
            link.appendChild(tooltip);
            setTimeout(() => tooltip.remove(), 2000);
        });
    });
});

// Add active state to navigation based on scroll position
const sections = document.querySelectorAll('.section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').slice(1) === current) {
            item.classList.add('active');
        }
    });
});
