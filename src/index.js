//imports
import template from './templates/template.hbs';
import refs from './js/refs.js';
import menu from './menu.json';

//variables
const { body, ulEl, checkEl } = refs;
const menuHtml = template(menu);
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const { LIGHT, DARK } = Theme;

//DOM
ulEl.insertAdjacentHTML('beforeend', menuHtml);

// localStorage
body.classList.add(localStorage.getItem('bodyTheme'));

if (body.classList.contains(null)) {
  body.classList.remove(null);
  body.classList.add(LIGHT);
  localStorage.setItem('bodyTheme', LIGHT);
}

//event listeners
checkEl.addEventListener('click', e => {
  body.classList.toggle(DARK);
  body.classList.toggle(LIGHT);
  localStorage.setItem('bodyTheme', body.classList.value);
});

console.log(checkEl.checked);
