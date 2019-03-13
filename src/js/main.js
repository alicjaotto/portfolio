document.addEventListener('DOMContentLoaded', function(){
  const button = document.querySelector('.header__toggle__button');

  function toggleMenu() {
    const nav = document.querySelector('#nav-menu');
    nav.classList.toggle('collapse');
    button.classList.toggle('expanded');
    console.log(button);
  }

  button.addEventListener('click', toggleMenu);
});
