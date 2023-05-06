import Card from '../../components/Card/Card';
import './Projects.css';

const template = () => `
  <h2 class="page__title">Highlighted Projects</h2>
  <section class="project-grid">
    ${Card()}
  </section>
`;

const Projects = () => {
  document.querySelector('main').innerHTML = template();
};

export default Projects;
