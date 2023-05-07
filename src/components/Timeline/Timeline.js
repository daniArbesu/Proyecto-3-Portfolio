import { experience } from '../../utils/links';
import './Timeline.css';

const Timeline = () => `
${experience
  .map(
    ({ role, company, logo, time, description, responsibilities }) => `
    <article class="timeline">
        <span class="timeline__circle"></span>
        <div class="timeline__logo">
            <img src=${logo}>
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
                ${responsibilities.map((responsibility) => `<li>${responsibility}</li>`).join('')}
                </ul>
            </div>
        </div>
    </article>`
  )
  .join('')}
    `;

export default Timeline;
