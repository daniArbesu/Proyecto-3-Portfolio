const linkPage = (id, page) => {
  const links = document.querySelectorAll(id);
  links.forEach((link) =>
    link.addEventListener('click', () => {
      page();
      document.querySelector('#mobile-menu__nav').classList.toggle('showmobile-menu__nav');
    })
  );
};

export default linkPage;
