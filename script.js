// Sticky Navigation Menu
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

// Show/hide sticky navigation/ scroll button
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
}

// Side Navigation Menu
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

// Open side navigation
menuBtn.onclick = function() {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
};

const hideNavMenu = () => {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
};

// Close side navigation
cancelBtn.onclick = hideNavMenu;

// Close side navigation when a menu link is clicked
let navLinks = document.querySelectorAll(".menu li a");
navLinks.forEach((link) => {
  link.addEventListener("click", hideNavMenu);
});

// Smooth scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if(targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if(targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Update current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Background image handler for responsive behavior
function handleBackgroundImage() {
  const homeSection = document.querySelector('.home');
  if (window.innerWidth <= 480 && window.innerHeight <= 500) {
    homeSection.style.backgroundImage = 'none';
  } else if (window.innerWidth <= 768) {
    homeSection.style.backgroundAttachment = 'scroll';
  } else {
    homeSection.style.backgroundAttachment = 'fixed';
    homeSection.style.backgroundImage = 'url("Abiral-Acharya.png")';
  }
}

// Run on load and resize
window.addEventListener('load', function() {
  handleBackgroundImage();
  
  // Animate progress bars
  document.querySelectorAll('.progress-bar').forEach(bar => {
    bar.style.setProperty('--percentage', bar.style.getPropertyValue('--percentage'));
  });
});

window.addEventListener('resize', handleBackgroundImage);

// Add focus styles for keyboard navigation
document.addEventListener('keyup', function(e) {
  if(e.key === 'Tab') {
    document.documentElement.classList.add('keyboard-nav');
  }
});

document.addEventListener('mousedown', function() {
  document.documentElement.classList.remove('keyboard-nav');
});

document.addEventListener('contextmenu', function(event) {
  event.preventDefault();
});