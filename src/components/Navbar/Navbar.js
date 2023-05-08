import './Navbar.css';
import { navbarMenu } from '../../utils/links';
import icons from '../../utils/icons';

const template = `
<nav class="desktop-menu__nav" id="desktop-menu__nav">
  <ul class="desktop-menu__links">
    ${navbarMenu
      .map(
        ({ name, id }) => `
        <li>
          <a href="#" class="mobile-menu__item" id=${id} aria-label=${name} rel="noopener nofollow">
            ${name}
          </a>
        </li>`
      )
      .join('')}
  </ul>
</nav>
<svg xmlns="http://www.w3.org/2000/svg" class="mobile-menu__icon" id="mobile-menu__icon" stroke-linecap="round" stroke-linejoin="round">
  <path id="mobile-menu__icon-path" d='${icons.hamburgerOpen}'></path>
</svg>
<button class="dark-light-button" id="dark-light-button">
  <svg xmlns="http://www.w3.org/2000/svg" class="dark-light-button__logo" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
    <path id="dark-light-button__path" d='${icons.darkTheme}'></path>
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
  const colorstogglepath = document.querySelector('#dark-light-button__path');
  const hamburgerpath = document.querySelector('#mobile-menu__icon-path');

  hamburger.addEventListener('click', () => {
    document.querySelector('#mobile-menu__nav').classList.toggle('showmobile-menu__nav');

    const isMenuClose =
      document.querySelector('#mobile-menu__nav').getAttribute('class') ===
      'mobile-menu__nav showmobilelinks';
    if (isMenuClose) {
      hamburgerpath.setAttribute('d', icons.hamburgerOpen);
    } else {
      hamburgerpath.setAttribute('d', icons.hamburgerClose);
    }
  });

  colorstoggle.addEventListener('click', () => {
    document.querySelector('body').classList.toggle('darkmode');

    const isLightTheme = colorstogglepath.getAttribute('d') === icons.lightTheme;
    if (isLightTheme) {
      colorstogglepath.setAttribute('d', icons.darkTheme);
    } else {
      colorstogglepath.setAttribute('d', icons.lightTheme);
    }
  });
};

const printNavbar = () => {
  document.querySelector('header').innerHTML = template;
  addListeners();
};

export default printNavbar;
