import './Navbar.css';

const template = `
<div>NAVBAR</div>
    `;

const printNavbar = () => {
  document.querySelector('header').innerHTML = template;
};

export default printNavbar;
