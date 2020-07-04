const menu_button = document.querySelector('.menu-button');
const menu_list = document.querySelector('.site-menu');

menu_button.addEventListener('click', (evt)=> {
  menu_button.classList.toggle('open');
  menu_list.classList.toggle('visually-hidden');
});