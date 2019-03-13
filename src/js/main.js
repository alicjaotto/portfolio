document.addEventListener('DOMContentLoaded', function(){
  const button = document.querySelector('.header__toggle__button');
  const links = document.querySelectorAll('.header__nav__menu__list__item');

  function toggleMenu() {
    const nav = document.querySelector('#nav-menu');
    nav.classList.toggle('collapse');
    button.classList.toggle('expanded');
  }

  button.addEventListener('click', toggleMenu);

  links.forEach((item) => {
    item.addEventListener('click', toggleMenu);
  });
});
