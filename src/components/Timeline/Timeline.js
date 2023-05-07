import { experience } from '../../utils/links';
import './Timeline.css';

const Timeline = () => `
${experience
  .map(
    ({ role, company, logo, time, description, responsibilities, website }) => `
    <article class="timeline">
        <span class="timeline__circle"></span>
        <div class="timeline__logo-wrapper">
            <img class="timeline__logo-img" src=${logo}>
        </div>
        <div class="timeline__info">
            <div class="timeline__company-info">
                <h3 class="timeline__company-role">${role}</h3>
                <p>${company}</p>
                <p>${time}</p>
                <p>${description}</p>
            </div>
            <div>
                <h4>Responsibilities</h4>
                <ul>
                ${responsibilities.map((responsibility) => `<li>- ${responsibility}</li>`).join('')}
                </ul>
            </div>
            <a href=${website} target="_blank" aria-label="Resume" rel="noopener nofollow" class="cta-button">Website</a>
        </div>
    </article>`
  )
  .join('')}
    `;

export default Timeline;
