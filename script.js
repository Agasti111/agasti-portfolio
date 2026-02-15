    
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
                // Close mobile menu if open
                document.getElementById('mobileMenu').classList.add('hidden');
            });
        });

        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Active navigation highlight
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        function updateActiveNav() {
            const scrollPos = window.scrollY + 100;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');
                
                if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                    navLinks.forEach(link => {
                        link.classList.remove('text-white');
                        link.classList.add('text-zinc-400');
                        if (link.getAttribute('data-section') === sectionId) {
                            link.classList.remove('text-zinc-400');
                            link.classList.add('text-white');
                        }
                    });
                }
            });
        }

        window.addEventListener('scroll', updateActiveNav);
        updateActiveNav();

        // Scroll to top button
        const scrollTopBtn = document.getElementById('scrollTopBtn');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                scrollTopBtn.classList.remove('opacity-0', 'invisible');
                scrollTopBtn.classList.add('opacity-100', 'visible');
            } else {
                scrollTopBtn.classList.add('opacity-0', 'invisible');
                scrollTopBtn.classList.remove('opacity-100', 'visible');
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

emailjs.init("gFFQymiHCvpPZnZcm");

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    emailjs.send("service_abrel3b", "template_p1cc17p", {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    })
    .then(function(response) {
        alert("Message sent successfully!");
        contactForm.reset();
    }, function(error) {
        alert("Failed to send message.");
    });
});

        // Lazy loading for images (if any)
        if ('IntersectionObserver' in window) {
            const lazyImages = document.querySelectorAll('img[data-src]');
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        observer.unobserve(img);
                    }
                });
            });
            
            lazyImages.forEach(img => imageObserver.observe(img));
        }
   