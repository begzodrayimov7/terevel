// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
}

// Set active navigation link
function setActiveLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === 'index.html' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Newsletter Form Submission
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;
        
        // Show success message
        alert(`🎉 ${email} manziliga obuna bo'ldingiz! Yangiliklardan xabardor bo'lasiz.`);
        
        // Reset form
        newsletterForm.reset();
    });
}

// Contact Form Submission
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = contactForm.querySelector('input[name="name"]').value;
        const email = contactForm.querySelector('input[name="email"]').value;
        const message = contactForm.querySelector('textarea[name="message"]').value;
        
        if (!name || !email || !message) {
            alert('⚠️ Iltimos, barcha maydonlarni to\'ldiring!');
            return;
        }
        
        // Show success message
        alert(`🎉 ${name}, xabaringiz yuborildi! Tez orada siz bilan bog\'lanamiz.`);
        
        // Reset form
        contactForm.reset();
    });
}

// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu after click
            if (window.innerWidth <= 768 && navLinks) {
                navLinks.classList.remove('show');
            }
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (header && window.scrollY > 100) {
        header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.2)';
        header.style.background = 'linear-gradient(135deg, rgba(47, 53, 66, 0.95) 0%, rgba(30, 39, 46, 0.95) 100%)';
    } else if (header) {
        header.style.boxShadow = 'var(--shadow)';
        header.style.background = 'linear-gradient(135deg, var(--dark) 0%, #1e272e 100%)';
    }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    setActiveLink();
    
    // Console message for developers
    console.log('%c🎉 Manga Travel Website', 'color: #ff4757; font-size: 20px; font-weight: bold;');
    console.log('%c✨ Zamonaviy dizayn va interaktiv xususiyatlar bilan yaratilgan', 'color: #3498db; font-size: 14px;');
    console.log('%c📅 Yaratilgan sana: 11-fevral, 2026', 'color: #2ed573; font-size: 12px;');
});

// Card hover effects
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.animation = 'pulse 0.5s';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.animation = '';
    });
});