document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');

    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // 2. Sticky Navbar on Scroll
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Run once on load in case we start somewhat scrolled
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    }

    // 3. Intersection Observer for Scroll Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once visible if you want the animation to happen only once
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => scrollObserver.observe(el));
});

// 4. Tab Switching Logic for Services Section
function switchTab(clickedTab, tabIndex) {
    // 1. Remove active state from all tabs
    const allTabs = document.querySelectorAll('.services-tabs .tab-item');
    const allBodies = document.querySelectorAll('.services-tabs .tab-body');
    
    allTabs.forEach(tab => tab.classList.remove('active'));
    allBodies.forEach(body => body.style.display = 'none');
    
    // 2. Add active state to clicked tab
    clickedTab.classList.add('active');
    
    // 3. Show the corresponding body
    const targetBody = document.getElementById(`tab-body-${tabIndex}`);
    if (targetBody) {
        targetBody.style.display = 'block';
    }
}

// 5. Testimonials Slider Logic
let currentSlide = 0;
let slideInterval;

function initSlider() {
    const slides = document.querySelectorAll('.testimo-slide');
    if (slides.length === 0) return;
    
    // Start auto-slide
    startSlideInterval();
}

function changeTestimonial(direction) {
    const slides = document.querySelectorAll('.testimo-slide');
    if (slides.length === 0) return;
    
    // Reset interval on manual interaction
    clearInterval(slideInterval);
    
    slides[currentSlide].classList.remove('active');
    
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    
    slides[currentSlide].classList.add('active');
    
    // Resume auto-slide
    startSlideInterval();
}

function startSlideInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(() => {
        const slides = document.querySelectorAll('.testimo-slide');
        if (slides.length === 0) return;
        
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 5000);
}

document.addEventListener('DOMContentLoaded', initSlider);
