import './Navbar.css';

const template = `
<svg xmlns="http://www.w3.org/2000/svg" class="mobile-menu__icon" id="mobile-menu__icon" stroke-linecap="round" stroke-linejoin="round">
  <line x1="4" y1="12" x2="20" y2="12"></line>
  <line x1="4" y1="6" x2="20" y2="6"></line>
  <line x1="4" y1="18" x2="20" y2="18"></line>
</svg>
<button class="dark-light-button">
  <svg xmlns="http://www.w3.org/2000/svg" class="dark-light-button__logo" viewBox="0 0 24 24" class="transition-colors text-wGray hover:text-primaryWText" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 3a6.364 6.364 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
  </svg>
</button>
<nav class="mobile-menu__nav showmobilelinks" id="mobile-menu__nav">
  <svg xmlns="http://www.w3.org/2000/svg" class="mobile-menu__icon" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
  <ul class="mobile-menu__links">
    <li>
      <a href="#" class="mobile-menu__item" id="homelink" aria-label="Home Link" rel="noopener nofollow">
        <svg width="24px" height="24px" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor">
          <path d="M10 18v-3a2 2 0 012-2v0a2 2 0 012 2v3M2 8l9.732-4.866a.6.6 0 01.536 0L22 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M20 11v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
        Home
      </a>
    </li>
    <li><a href="#" class="mobile-menu__item" id="projectslink" aria-label="Home Link" rel="noopener nofollow">Projects</a></li>
    <li><a href="#" class="mobile-menu__item" id="experiencelink" aria-label="Home Link" rel="noopener nofollow">Experience</a></li>
  </ul>
</nav>
    `;

const addListeners = () => {
  const hamburger = document.querySelector('#mobile-menu__icon');
  hamburger.addEventListener('click', () => {
    document.querySelector('#mobile-menu__nav').classList.toggle('showmobile-menu__nav');
  });
};

const printNavbar = () => {
  document.querySelector('header').innerHTML = template;
  addListeners();
};

export default printNavbar;
