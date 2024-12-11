const header = document.querySelector("header");
let lastScrollPosition = 0;

window.addEventListener("scroll", () => {
  const currentScrollPosition = window.scrollY;

  if (currentScrollPosition > lastScrollPosition) {
    // User is scrolling down
    header.classList.add("hidden");
  } else {
    // User is scrolling up
    header.classList.remove("hidden");
    if (currentScrollPosition > 50) {
      header.classList.add("scrolled"); // Add semi-transparent effect
    } else {
      header.classList.remove("scrolled"); // Reset to original style
    }
  }

  lastScrollPosition = currentScrollPosition;
});
window.addEventListener("scroll", () => {
    const heroText = document.querySelector(".hero-text");
    const scrollPosition = window.scrollY;
  
    if (scrollPosition > 50) {
      heroText.style.transform = "translateY(-20px)";
      heroText.style.opacity = "0.9";
    } else {
      heroText.style.transform = "translateY(0)";
      heroText.style.opacity = "1";
    }
  });
// JavaScript to handle scroll and trigger animations on courses section
window.addEventListener('scroll', function() {
    const coursesSection = document.querySelector('#courses');
    const coursesGrid = document.querySelector('.courses-grid');
  
    const sectionTop = coursesSection.getBoundingClientRect().top;
    const sectionHeight = coursesSection.offsetHeight;
  
    // Check if the section is in the viewport
    if (sectionTop <= window.innerHeight && sectionTop + sectionHeight >= 0) {
      coursesSection.style.opacity = '1';
      coursesGrid.style.opacity = '1';
      coursesSection.classList.add('fadeInUp');
    } else {
      coursesSection.style.opacity = '0';
      coursesGrid.style.opacity = '0';
    }
  });
// Fade-in animation when the footer enters the viewport
window.addEventListener('scroll', function() {
    const footer = document.querySelector('footer');
    const footerTop = footer.getBoundingClientRect().top;
    
    if (footerTop <= window.innerHeight) {
      footer.style.animation = 'fadeIn 1s forwards';
    }
  });
      
