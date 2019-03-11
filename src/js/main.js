document.addEventListener('DOMContentLoaded', function(){

  function toggleMenu() {
    const nav = document.querySelector('#nav-menu');
    nav.classList.toggle('hidden');
  }

  document.querySelector('.header__nav__toggle')
    .addEventListener('click', toggleMenu);
});
