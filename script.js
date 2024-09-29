const images = [
    './img/autumn-4470022_1920.jpg',
    './img/dog-4390885_1920.jpg',
    './img/paw-7231300_1920.jpg'
];

let currentImageIndex = 0;
const section = document.getElementById('inicio');

function changeBackgroundImage() {
    section.style.backgroundImage = `url(${images[currentImageIndex]})`;
    currentImageIndex = (currentImageIndex + 1) % images.length;
}

setInterval(changeBackgroundImage, 3500);
changeBackgroundImage(); 

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
  
    const observerOptions = {
      threshold: 0.1
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible-section');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
  
    sections.forEach(section => {
      section.classList.add('hidden-section');
      observer.observe(section);
    });
  });
  