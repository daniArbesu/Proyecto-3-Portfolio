import Timeline from '../../components/Timeline/Timeline';
import './Experience.css';

const template = () => `
  <h2 class="page__title">Work Experience</h2>
  <section class="experience-grid">
  ${Timeline()}
</section>
`;

const Experience = () => {
  document.querySelector('main').innerHTML = template();
};

export default Experience;
