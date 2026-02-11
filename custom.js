/* ==========================================================================
   ALL OF THE HUMANS - SHARED JAVASCRIPT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function() {
  
  // 1. SMART SEO ALT TEXT GENERATOR
  // This detects the page and creates descriptive alt tags for Google
  const pagePath = window.location.pathname.toLowerCase();
  let pageContext = "documentary photography";
  let locationContext = "UK and Dallas TX";

  if (pagePath.includes('romance')) {
    pageContext = "documentary wedding photography";
    locationContext = "Gloucestershire, Bristol, and Bath";
  } else if (pagePath.includes('family')) {
    pageContext = "authentic family lifestyle photography";
    locationContext = "South Gloucestershire and Bristol";
  } else if (pagePath.includes('branding')) {
    pageContext = "elevated brand and product photography";
    locationContext = "commercial studio";
  }

  // Target all gallery images to apply the new SEO Alt Text
  const galleryImgs = document.querySelectorAll('.gallery-item img');
  galleryImgs.forEach((img, index) => {
    img.alt = `All of the Humans: ${pageContext} portfolio image ${index + 1} serving ${locationContext}.`;
  });


  // 2. SMOOTH SCROLL TO ANCHORS
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href !== '') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const offsetTop = target.offsetTop - 100; // Account for fixed nav
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
    });
  });
  
  // 3. NAVIGATION ACTIVE STATE
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.style.opacity = '1';
      link.style.fontWeight = '400';
    }
  });
  
  // 4. LAZY LOAD IMAGES
  const images = document.querySelectorAll('img[data-src]');
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
  
  images.forEach(img => imageObserver.observe(img));
  
  // 5. SCROLL REVEAL ANIMATIONS
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, {
    threshold: 0.1
  });
  
  revealElements.forEach(el => revealObserver.observe(el));
});

// Mobile menu toggle
function toggleMobileMenu() {
  const nav = document.querySelector('.nav-links');
  nav.classList.toggle('mobile-open');
}