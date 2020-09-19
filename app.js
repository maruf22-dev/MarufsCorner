const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelector('.nav-links li');
const disc = document.querySelector('.disc');
burger.addEventListener('click',() =>
{
  navLinks.classList.toggle("open");
  disc.classList.toggle("open");
})
