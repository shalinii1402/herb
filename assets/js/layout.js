/**
 * Shared Layout Component
 * Renders Header and Footer consistently across all pages.
 */

const Layout = {
  renderHeader: function(basePath = '.') {
    const headerHTML = `
    <header class="header">
      <div class="container">
        <nav class="navbar">
          <a href="${basePath}/index.html" class="logo">
            <img src="https://www.pngitem.com/pimgs/m/333-3335536_ayurveda-icon-hd-png-download.png"
              alt="PranaLeaf Ayurveda Logo" class="logo-img">
            <span class="logo-text">Prana<span class="logo-accent">Leaf</span></span>
          </a>
          <ul class="nav-menu">
            <li class="dropdown">
              <a href="#" class="dropdown-toggle">Home <i class="fas fa-chevron-down"></i></a>
              <ul class="dropdown-menu">
                <li><a href="${basePath}/index.html">Home 1</a></li>
                <li><a href="${basePath}/pages/index2.html">Home 2</a></li>
              </ul>
            </li>
            <li><a href="${basePath}/pages/about.html">About</a></li>
            <li><a href="${basePath}/pages/services.html">Services</a></li>
            <li><a href="${basePath}/pages/herbal-remedies.html">Herbal Remedies</a></li>
            <li><a href="${basePath}/pages/doctors.html">Doctors</a></li>
            <li><a href="${basePath}/pages/departments.html">Departments</a></li>
            <li><a href="${basePath}/pages/blog.html">Blog</a></li>
            <li><a href="${basePath}/pages/contact.html">Contact</a></li>
            <li><a href="${basePath}/pages/dashboard.html" class="btn btn-secondary btn-rounded"><i class="fas fa-tachometer-alt"></i>
                Dashboard</a></li>
            <li><a href="${basePath}/pages/appointments.html" class="btn btn-primary btn-rounded">Book Appointment</a></li>
            <li class="theme-toggle-wrapper">
              <button class="theme-toggle" aria-label="Toggle Dark Mode">
                <i class="fas fa-moon"></i>
              </button>
            </li>
          </ul>
          <div class="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </div>
    </header>`;

    const container = document.getElementById('header-container');
    if (container) {
      container.innerHTML = headerHTML;
      // Re-initialize scripts needed for header interaction
      this.initHeaderScripts();
    }
  },

  renderFooter: function(basePath = '.') {
    const footerHTML = `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <a href="${basePath}/index.html" class="footer-logo"
              style="text-decoration: none; display: inline-block; margin-bottom: 1.5rem;">
              <img src="https://www.pngitem.com/pimgs/m/333-3335536_ayurveda-icon-hd-png-download.png"
                alt="PranaLeaf Ayurveda Logo" class="footer-logo-img">
            </a>
            <p style="font-family: var(--font-secondary); line-height: 1.8;">Your sacred sanctuary for holistic healing.
              We honor ancient Ayurvedic wisdom while embracing modern precision in wellness care.</p>
            <p class="sanskrit-accent" style="margin-top: 1rem; font-size: 1rem; opacity: 0.8;">सर्वे भवन्तु सुखिनः</p>
            <p style="font-size: 0.9rem; margin-top: 0.5rem; opacity: 0.7; font-style: italic;">"May all beings be happy"
            </p>
            <div class="social-links">
              <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
              <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
              <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
              <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
            </div>
          </div>
          <div class="footer-section">
            <h3>Quick Links</h3>
            <ul class="footer-links">
              <li><a href="${basePath}/pages/about.html">About Us</a></li>
              <li><a href="${basePath}/pages/services.html">Our Services</a></li>
              <li><a href="${basePath}/pages/doctors.html">Our Doctors</a></li>
              <li><a href="${basePath}/pages/departments.html">Departments</a></li>
              <li><a href="${basePath}/pages/pricing.html">Pricing</a></li>
              <li><a href="${basePath}/pages/testimonials.html">Testimonials</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h3>Our Services</h3>
            <ul class="footer-links">
              <li><a href="${basePath}/pages/services.html#ayurveda">Herbal Medicine</a></li>
              <li><a href="${basePath}/pages/herbal-remedies.html">Herbal Remedies</a></li>
              <li><a href="${basePath}/pages/services.html#panchakarma">Herbal Panchakarma</a></li>
              <li><a href="${basePath}/pages/services.html#yoga">Herbal Yoga Therapy</a></li>
              <li><a href="${basePath}/pages/services.html#physiotherapy">Herbal Physiotherapy</a></li>
              <li><a href="${basePath}/pages/services.html#nutrition">Herbal Nutrition</a></li>
              <li><a href="${basePath}/pages/services.html#spa">Herbal Spa & Massage</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h3>Contact Us</h3>
            <ul class="footer-contact">
              <li>
                <i class="fas fa-map-marker-alt"></i>
                <span>123 MG Road, Koramangala<br>Bengaluru, Karnataka 560034<br>India</span>
              </li>
              <li>
                <i class="fas fa-phone"></i>
                <span>+91 98765 43210</span>
              </li>
              <li>
                <i class="fas fa-envelope"></i>
                <span>contact@ayurawell.in</span>
              </li>
              <li>
                <i class="fas fa-clock"></i>
                <span>Mon - Sat: 9:00 AM - 8:00 PM<br>Sunday: 10:00 AM - 4:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2025 PranaLeaf Ayurveda Clinic. All Rights Reserved. | <a href="${basePath}/pages/privacy-policy.html">Privacy
              Policy</a> | <a href="#">Terms & Conditions</a></p>
          <p style="margin-top: 0.5rem; font-size: 0.85rem; opacity: 0.6; font-style: italic;">Holistic · Sacred ·
            Intelligent · Pure · Botanical Luxury · Ancient Wisdom</p>
        </div>
      </div>
    </footer>`;

    const container = document.getElementById('footer-container');
    if (container) {
      container.innerHTML = footerHTML;
    }
  },

  // Initialize scripts that rely on header elements being present
  initHeaderScripts: function() {
    // Re-bind theme toggle
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    
    // Check local storage
    if (localStorage.getItem('theme') === 'dark') {
      body.classList.add('dark-mode');
      if (themeToggle) themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    if (themeToggle) {
      themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
          localStorage.setItem('theme', 'dark');
          this.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
          localStorage.setItem('theme', 'light');
          this.innerHTML = '<i class="fas fa-moon"></i>';
        }
      });
    }

    // Nav Toggle for Mobile
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
      navToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
        body.classList.toggle('menu-open');
      });
    }

    // Dropdowns
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    dropdownToggles.forEach(toggle => {
      toggle.addEventListener('click', function(e) {
        if (window.innerWidth <= 1024) {
          e.preventDefault();
          e.stopPropagation();
          const p = this.parentElement;
          p.classList.toggle('active');
        }
      });
    });

    // Highlight active link
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
       // Simple check if href matches end of current path
       const href = link.getAttribute('href');
       if (currentPath.endsWith(href) || (currentPath.endsWith('/') && href.endsWith('index.html'))) {
          // Remove active from others if needed, though usually redundant
          link.classList.add('active');
       }
    });

    // Ensure dashboard links are correctly styled
    // The theme toggle and other items are maintained
  }
};
