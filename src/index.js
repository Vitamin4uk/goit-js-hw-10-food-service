import menuCardsTpl from './templates/menu-cards.hbs';
import menu from './js/menu.json';
import './css/style.css';

const refs = {
    menu: document.querySelector('.js-menu'),
    checkbox: document.querySelector('#theme-switch-toggle'),
    body: document.body,
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const STORAGE_KEY = 'theme';

const theme = localStorage.getItem(STORAGE_KEY);
setTheme(theme);

refs.menu.insertAdjacentHTML('beforeend', menuCardsTpl(menu));
refs.checkbox.addEventListener('change', onCheckboxChange);

function onCheckboxChange (e) {
    const theme = e.target.checked ? Theme.DARK : Theme.LIGHT;
    localStorage.setItem(STORAGE_KEY, theme);
    refs.body.className = theme;
}

function setTheme(theme) {
    if (theme) {
       refs.body.className = theme;
       if(theme === Theme.DARK) {
           refs.checkbox.checked = true;
       }
    }
}