const openMenuButton = document.querySelector('#menu-open-button');
const closeMenuButton = document.querySelector('#menu-close-button');
const mobileMenu = document.querySelector('#mobile-menu');
const backdropOverlay = document.querySelector('#backdrop');

function openMobileMenu() {
  mobileMenu.classList.add('menu-is-open');
  backdropOverlay.classList.remove('backdrop-hidden');
}

function closeMobileMenu() {
  mobileMenu.classList.remove('menu-is-open');
  backdropOverlay.classList.add('backdrop-hidden');
}

openMenuButton.addEventListener('click', openMobileMenu);

closeMenuButton.addEventListener('click', closeMobileMenu);

backdropOverlay.addEventListener('click', closeMobileMenu);