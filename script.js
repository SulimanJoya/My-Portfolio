const hamburger = document.querySelector('.hamburger');
const navContainer = document.querySelector('.navContainer');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navContainer.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navContainer.classList.remove('active');
}));
