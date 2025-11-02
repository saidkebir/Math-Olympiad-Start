

        // Mobile menu toggle
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');

        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when link is clicked
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // Navbar scroll effect and active menu highlighting
        const sections = document.querySelectorAll('section');
        const navItems = document.querySelectorAll('.nav-link');

        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            
            // Navbar style on scroll - increased threshold to prevent false triggers
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }

            // Active menu highlighting based on current page
            const currentPage = window.location.pathname.split('/').pop();
            
            navItems.forEach(item => {
                item.classList.remove('active');
                const itemPage = item.getAttribute('href');
                
                // Check if the current page matches the nav item
                if ((currentPage === '' && itemPage === 'index.html') ||
                    (currentPage === itemPage) ||
                    (currentPage === '' && itemPage === './index.html') ||
                    (currentPage === itemPage.replace('./', ''))) {
                    item.classList.add('active');
                }
            });
        });

        // Trigger scroll event on load to set initial active state
        window.dispatchEvent(new Event('scroll'));

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Fade in animation on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Form submission (prevent default for demo)
        document.querySelector('form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Message sent successfully!');
            this.reset();

        });
