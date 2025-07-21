// Accordion
const accordionButtons = document.querySelectorAll('.accordion-btn');
accordionButtons.forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    // Toggle display between 'block' and 'none'
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});

// Mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
  // Toggles the 'active' class on the navigation links for mobile menu visibility
  navLinks.classList.toggle('active');
});