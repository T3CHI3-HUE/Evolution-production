// Gallery View More/Less: Toggle images for each section
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.gallery-section').forEach(section => {
    const images = section.querySelectorAll('.gallery-grid .image');
    const btn = section.querySelector('button[id="view-more-btn"]');
    if (!btn || images.length <= 6) return;

    // Hide images after the 6th
    images.forEach((img, i) => {
      if (i > 5) img.style.display = 'none';
    });

    btn.textContent = 'View More';
    btn.dataset.expanded = 'false';

    btn.addEventListener('click', function () {
      const expanded = btn.dataset.expanded === 'true';
      if (!expanded) {
        images.forEach((img, i) => {
          if (i > 5) img.style.display = '';
        });
        btn.textContent = 'View Less';
        btn.dataset.expanded = 'true';
      } else {
        images.forEach((img, i) => {
          if (i > 5) img.style.display = 'none';
        });
        btn.textContent = 'View More';
        btn.dataset.expanded = 'false';
        btn.scrollIntoView({behavior: 'smooth', block: 'center'});
      }
    });
  });
});
// Section pop-up on scroll (Intersection Observer)
document.addEventListener('DOMContentLoaded', () => {
  const popSections = document.querySelectorAll('.section-pop');
  const observer = new window.IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, { threshold: 0.15 });
  popSections.forEach(section => {
    observer.observe(section);
  });
});
// Gallery View More functionality removed (all effects cancelled)
alert("Welcome to Evolution Production!");

// Theme toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Gallery image enlarge
const images = document.querySelectorAll('.image');
const enlargedImageContainer = document.getElementById('enlarged-image-container');
const enlargedImage = document.getElementById('enlarged-image');
images.forEach((image) => {
  image.addEventListener('click', () => {
    enlargedImageContainer.style.display = 'Flex';
    enlargedImage.src = image.src;
  });
});
enlargedImageContainer.addEventListener('click', (e) => {
  if (e.target === enlargedImageContainer){
    enlargedImageContainer.style.display = 'none';
  }
});

// Dynamic text effects
function animateText(element, effect = 'fadeInUp', delay = 0) {
  element.style.opacity = 0;
  element.style.transform = 'translateY(30px)';
  setTimeout(() => {
    element.style.transition = 'opacity 0.7s, transform 0.7s';
    element.style.opacity = 1;
    element.style.transform = 'translateY(0)';
  }, delay);
}

// Animate all headings and paragraphs
window.addEventListener('DOMContentLoaded', () => {
  const textSelectors = [
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
    'p', '.text-overlay', '.text-overlay1', '.gallery-description', '.name', '.ceo', '.statement', '.contact-info'
  ];
  let delay = 0;
  textSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
      animateText(el, 'fadeInUp', delay);
      delay += 100;
    });
  });
});

// Optional: Add hover effect for text
function addHoverEffect(selector) {
  document.querySelectorAll(selector).forEach(el => {
    el.addEventListener('mouseenter', () => {
      el.style.transition = 'color 0.3s, text-shadow 0.3s';
      el.style.color = '#e67e22';
      el.style.textShadow = '0 2px 10px #0002';
    });
    el.addEventListener('mouseleave', () => {
      el.style.color = '';
      el.style.textShadow = '';
    });
  });
}
addHoverEffect('h1, h2, h3, h4, h5, h6, p, .gallery-description, .name, .ceo, .statement, .contact-info');
