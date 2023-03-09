export default function burgerMenu () {
  const menu = document.querySelector('.menu');
  const overlay = document.querySelector('.overlay');
  const btnBurgerMenu = document.querySelector('.burger-menu__link');
  const btnClose = document.querySelector('.header-menu-close');
  menu.style.display = 'inline';
  overlay.style.display = 'inline';

  btnBurgerMenu.addEventListener('click', function() {
    menu.style.display = 'inline';
    overlay.style.display = 'inline';
  });

  btnClose.addEventListener('click', function() {
    menu.style.display = 'none';
    overlay.style.display = 'none';
  });

  overlay.addEventListener('click', function() {
    menu.style.display = 'none';
    overlay.style.display = 'none';
  })
}
