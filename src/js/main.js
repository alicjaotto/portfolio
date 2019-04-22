document.addEventListener('DOMContentLoaded', function(){
  const button = document.querySelector('.header__toggle__button');
  const links = document.querySelectorAll('.header__nav__menu__list__item');
  const projects = document.querySelectorAll('.content__projects__project__view__window');
  const navbar = document.querySelector('.header');

  function toggleMenu() {
    const nav = document.querySelector('#nav-menu');
    nav.classList.toggle('collapse');
    button.classList.toggle('expanded');
  }

  button.addEventListener('click', toggleMenu);

  links.forEach((item) => {
    item.addEventListener('click', toggleMenu);
  });

  function addShadow() {
    var scroll = window.scrollTop;
    console.log(scroll);
    navbar.classList.add('shadow');
  }

  window.addEventListener('scroll', addShadow);

  function showLinks() {
    const inner = this.querySelector('.content__projects__project__view__window__inner')
    inner.classList.toggle('hidden');
  }

  projects.forEach((item) => {
    item.addEventListener('click', showLinks);
  });
});
