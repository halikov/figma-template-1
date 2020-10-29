const menuWrapper = document.querySelector('.menu__wrapper');
const menuButton = document.querySelector('.menu__button');


menuButton.addEventListener('click', () => {
  let expanded = menuButton.getAttribute('aria-expanded') === 'true' || false;
  menuButton.setAttribute('aria-expanded', !expanded);
  menuButton.classList.toggle('menu__button--open');
  menuWrapper.classList.toggle('menu__wrapper--open');
});