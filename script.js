const openMenu = document.getElementById('open');
const closeMenu = document.getElementById('close');
const container = document.querySelector('.container');

openMenu.addEventListener('click', () => {
  container.classList.add('show-nav');
  console.log(123);
});

closeMenu.addEventListener('click', () => {
  container.classList.remove('show-nav');
});
