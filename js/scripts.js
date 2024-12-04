function openMenu() {
  const mobileMenu = document.querySelector('.mobile-menu-container');
  mobileMenu.classList.add('open');
  toggleScroll();
  toggleScreenDiming();
}

function closeMenu() {
  const mobileMenu = document.querySelector('.mobile-menu-container');

  if (mobileMenu.classList.contains('open')) {
    toggleScroll();
    toggleScreenDiming();
  }

  mobileMenu.classList.remove('open');
}

function toggleScroll() {
  const body = document.body;
  body.classList.toggle('no-scroll')
}

function toggleScreenDiming() {
  const dimOverlay = document.querySelector('.dim-overlay');
  dimOverlay.classList.toggle('dimmed')
}

function carousel(track, links) {
  const moveToSlide = (index) => {
    track.style.transform = `translateX(-${100 * index}%)`;

    document.querySelector('a.active')?.classList.remove('active');
    links[index].classList.add('active');
    closeMenu()
  };

  links.forEach((link, index) => {
    link.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent default anchor behavior
      moveToSlide(index);
    });
  })

  links[0].classList.add('active');
}

function desktopCarousel() {
  const track = document.querySelector('.carousel-track');
  const desktopLinks = document.querySelectorAll('.desktop-carousel-selector');

  carousel(track, desktopLinks)
}

function mobileCarousel() {
  const track = document.querySelector('.carousel-track');
  const mobileLinks = document.querySelectorAll('.mobile-carousel-selector');
  
  carousel(track, mobileLinks)
}


document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.mobile-menu-open').addEventListener('click', openMenu);
    document.querySelector('.mobile-menu-close').addEventListener('click', closeMenu);

    desktopCarousel();
    mobileCarousel();
  });
  