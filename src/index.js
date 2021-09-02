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
checkEl.checked = localStorage.getItem('checkBox');

if (body.classList.contains(null)) {
  body.classList.remove(null);
  body.classList.add(LIGHT);
  localStorage.setItem('bodyTheme', LIGHT);
  localStorage.setItem('checkBox', (checkEl.checked = false));
}

//event listeners
checkEl.addEventListener('click', () => {
  body.classList.toggle(DARK);
  body.classList.toggle(LIGHT);
  localStorage.setItem('bodyTheme', body.classList.value);
  localStorage.setItem('checkBox', checkEl.checked);
});
