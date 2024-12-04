function openMenu() {
  const mobileMenu = document.querySelector('.mobile-menu-container');
  mobileMenu.classList.add('open');
}

function closeMenu() {
  const mobileMenu = document.querySelector('.mobile-menu-container');
  mobileMenu.classList.remove('open');
}


document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.mobile-menu-open').addEventListener('click', openMenu);
    document.querySelector('.mobile-menu-close').addEventListener('click', closeMenu);

    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);

    if (!track) {
        console.error('Carousel track not found!')
    }
    const navLinks = document.querySelectorAll('.desktop-carousel-selector');
  
    const moveToSlide = (index) => {
      track.style.transform = `translateX(-${100 * index}%)`;
  
      // Update active navigation link
      document.querySelector('nav ul li a.active  ')?.classList.remove('active');
      navLinks[index].classList.add('active');
    };
  
    // Add event listeners to navigation links
    navLinks.forEach((link, index) => {
      link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        moveToSlide(index);
      });
    });
  
    // Set the first slide as active by default
    navLinks[0].classList.add('active');
  });
  