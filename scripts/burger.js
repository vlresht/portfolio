const burgerButton = document.querySelector('.menu__icon');

if (burgerButton) {
  const menuBody = document.querySelector('.menu__body');
  burgerButton.addEventListener('click', function(e) {
    document.body.classList.toggle('locked');
    burgerButton.classList.toggle('menu__icon--active');
    menuBody.classList.toggle('menu__body--active');
  })
}

const burgerLinks = document.querySelectorAll('.menu__link');

burgerLinks.forEach((link) => {
  const menuBody = document.querySelector('.menu__body');
  link.addEventListener('click', function(e) {
    document.body.classList.toggle('locked');
    burgerButton.classList.toggle('menu__icon--active');
    menuBody.classList.toggle('menu__body--active');
  })
})