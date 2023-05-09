import icons from './icons';

const linkPage = (id, page) => {
  const links = document.querySelectorAll(id);
  const hamburgerpath = document.querySelector('#mobile-menu__icon-path');

  links.forEach((link) =>
    link.addEventListener('click', () => {
      page();
      const isDesktop =
        document.querySelector('#mobile-menu__nav').getAttribute('class') ===
        'mobile-menu__nav showmobilelinks';
      if (!isDesktop) {
        document.querySelector('#mobile-menu__nav').classList.toggle('showmobile-menu__nav');
      }

      const isMenuClose =
        document.querySelector('#mobile-menu__nav').getAttribute('class') ===
        'mobile-menu__nav showmobilelinks';
      if (isMenuClose) {
        hamburgerpath.setAttribute('d', icons.hamburgerOpen);
      } else {
        hamburgerpath.setAttribute('d', icons.hamburgerClose);
      }
    })
  );
};

export default linkPage;
