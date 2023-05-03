import './Footer.css';

const template = `
<p>Created with 💖 by Daniel Arbesú</p>
    `;

const printFooter = () => {
  document.querySelector('footer').innerHTML = template;
};

export default printFooter;
