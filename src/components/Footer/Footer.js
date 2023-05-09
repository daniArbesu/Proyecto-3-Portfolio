import './Footer.css';

const template = `
<p>Created with 💖 by Daniel Arbesú - <a class="source-link"href="https://github.com/daniArbesu/Proyecto-3-Portfolio">Source Code</a></p>
    `;

const printFooter = () => {
  document.querySelector('footer').innerHTML = template;
};

export default printFooter;
