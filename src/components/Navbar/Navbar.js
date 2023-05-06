import './Navbar.css';
import { navbarMenu } from '../../utils/links';

const template = `
<svg xmlns="http://www.w3.org/2000/svg" class="mobile-menu__icon" id="mobile-menu__icon" stroke-linecap="round" stroke-linejoin="round">
  <line x1="4" y1="12" x2="20" y2="12"></line>
  <line x1="4" y1="6" x2="20" y2="6"></line>
  <line x1="4" y1="18" x2="20" y2="18"></line>
</svg>
<button class="dark-light-button" id="dark-light-button">
  <svg xmlns="http://www.w3.org/2000/svg" class="dark-light-button__logo" viewBox="0 0 24 24" class="transition-colors text-wGray hover:text-primaryWText" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 3a6.364 6.364 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
  </svg>
</button>
<nav class="mobile-menu__nav showmobilelinks" id="mobile-menu__nav">
  <ul class="mobile-menu__links">
    ${navbarMenu
      .map(
        ({ name, id, icon }) => `
        <li>
          <a href="#" class="mobile-menu__item" id=${id} aria-label=${name} rel="noopener nofollow">
            <svg class="mobile-menu__item-icon" xmlns="http://www.w3.org/2000/svg">
              <path d='${icon}' stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
            ${name}
          </a>
        </li>`
      )
      .join('')}
  </ul>
</nav>
    `;

const addListeners = () => {
  const hamburger = document.querySelector('#mobile-menu__icon');
  const colorstoggle = document.querySelector('#dark-light-button');

  hamburger.addEventListener('click', () => {
    document.querySelector('#mobile-menu__nav').classList.toggle('showmobile-menu__nav');
  });
  colorstoggle.addEventListener('click', () => {
    document.querySelector('body').classList.toggle('darkmode');
  });
};

const printNavbar = () => {
  document.querySelector('header').innerHTML = template;
  addListeners();
};

export default printNavbar;
