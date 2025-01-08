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
   body.classList.toggle('no-scroll');
}

function toggleScreenDiming() {
   const dimOverlay = document.querySelector('.dim-overlay');
   dimOverlay.classList.toggle('dimmed');
}

function carousel(track, links) {
   const moveToSlide = (index) => {
      track.style.transform = `translateX(-${100 * index}%)`;

      document.querySelector('a.active')?.classList.remove('active');
      links[index].classList.add('active');
      closeMenu();
   };

   links.forEach((link, index) => {
      link.addEventListener('click', (e) => {
         e.preventDefault();
         moveToSlide(index);
      });
   });

   links[0].classList.add('active');

   const scheduleBtns = document.querySelectorAll('.schedule.btn');
   scheduleBtns.forEach(btn => {
      btn.addEventListener('click', () => {
         const slideIndex = 7;
         moveToSlide(slideIndex)
      })
   })
}

function desktopCarousel() {
   const track = document.querySelector('.carousel-track');
   const desktopLinks = document.querySelectorAll('.desktop-carousel-selector');

   carousel(track, desktopLinks);
}

function mobileCarousel() {
   const track = document.querySelector('.carousel-track');
   const mobileLinks = document.querySelectorAll('.mobile-carousel-selector');

   carousel(track, mobileLinks);
}

function dropdownOpen() {
   const dropdownContent = document.querySelector('.dropdown-content');
   dropdownContent.style.display = 'block';
}

function dropdownClose() {
   const dropdownContent = document.querySelector('.dropdown-content');
   dropdownContent.style.display = 'none';
}

function initMap() {
   console.log('Initializing Map...');
   
   const location = { lat: 43.22799581130199, lng: 27.868030839950993};
   const map = new google.maps.Map(document.querySelector('.map'), {
      zoom: 17,
      center: location,
      mapId: '6ef82e48884717fb'
   });

   const marker = new google.maps.marker.AdvancedMarkerElement({
      position: location,
      map: map,
      title: "Judo Center Kano",
   });
   
}

document.addEventListener('DOMContentLoaded', () => {
   document.querySelector('.mobile-menu-open').addEventListener('click', openMenu);
   document.querySelector('.mobile-menu-close').addEventListener('click', closeMenu);
   document.querySelector('.dropdown-link').addEventListener('mouseenter', dropdownOpen);
   document.querySelector('.dropdown-content').addEventListener('mouseleave', dropdownClose);

   desktopCarousel();
   mobileCarousel();
});
