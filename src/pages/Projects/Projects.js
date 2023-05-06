import Card from '../../components/Card/Card';

const template = () => `
  <h2>Highlighted Projects</h2>
  ${Card()}
`;

const Projects = () => {
  document.querySelector('main').innerHTML = template();
};

export default Projects;
