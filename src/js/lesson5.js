import refs from './refs.js';
import cats from '../db/data.json';
import catTemplate from '../templates/catTemplate.hbs';

const { ulEl, inputEl, btnEl } = refs;

localStorage.setItem('catsArray', JSON.stringify(cats));
const localCats = JSON.parse(localStorage.getItem('catsArray'));

const catsHtml = catTemplate(localCats);

ulEl.insertAdjacentHTML('beforeend', catsHtml);

// слушатели

inputEl.addEventListener('input', e => {
  let value = e.target.value;
  localStorage.setItem('filter', value);
  const newArray = cats.filter(({ photographer }) =>
    photographer.toLowerCase().includes(localStorage.getItem('filter')),
  );

  const catsHtml = catTemplate(newArray);
  ulEl.innerHTML = catsHtml;

  localStorage.setItem('catsArray', JSON.stringify(newArray));
});

btnEl.addEventListener('click', e => {
  if (localStorage.getItem('filter')) {
    localStorage.removeItem('filter');
    localStorage.setItem('catsArray', JSON.stringify(cats));
    ulEl.insertAdjacentHTML('beforeend', catsHtml);
    inputEl.value = '';
  }
});
