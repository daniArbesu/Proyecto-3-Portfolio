import './Navbar.css';

const template = `
<svg xmlns="http://www.w3.org/2000/svg" class="mobile-menu" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
  <line x1="4" y1="12" x2="20" y2="12"></line>
  <line x1="4" y1="6" x2="20" y2="6"></line>
  <line x1="4" y1="18" x2="20" y2="18"></line>
</svg>
<button class="dark-light-button">
  <svg xmlns="http://www.w3.org/2000/svg" class="dark-light-button__logo" viewBox="0 0 24 24" class="transition-colors text-wGray hover:text-primaryWText" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 3a6.364 6.364 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
  </svg>
</button>
    `;

const printNavbar = () => {
  document.querySelector('header').innerHTML = template;
};

export default printNavbar;
