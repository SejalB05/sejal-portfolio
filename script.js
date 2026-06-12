// Smooth Scroll Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {

    e.preventDefault();

    const target = document.querySelector(
      this.getAttribute('href')
    );

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }

  });
});

// Fade-in Animation
const sections = document.querySelectorAll('.fade-in');

function revealSections() {

  sections.forEach(section => {

    const sectionTop = section.getBoundingClientRect().top;

    const triggerPoint = window.innerHeight - 100;

    if (sectionTop < triggerPoint) {
      section.classList.add('show');
    }

  });

}

// Run on page load
revealSections();

// Run on scroll
window.addEventListener('scroll', revealSections);