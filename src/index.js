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
localStorage.setItem('checkBox', checkEl.checked);
if (JSON.parse(localStorage.getItem('checkBox'))) {
  body.classList.add(DARK);
  body.classList.remove(LIGHT);
} else {
  body.classList.add(LIGHT);
  body.classList.remove(DARK);
}

//event listeners
checkEl.addEventListener('click', () => {
  body.classList.toggle(DARK);
  body.classList.toggle(LIGHT);
  localStorage.setItem('checkBox', checkEl.checked);
});
