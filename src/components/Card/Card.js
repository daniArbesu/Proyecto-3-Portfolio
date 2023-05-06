import { projectLinks } from '../../utils/links';
import './Card.css';

const Card = () => `
${projectLinks
  .map(
    ({ name, image, description, technologies, github, liveWeb }) => `
    <article class="card">
        <img class="card__cover" src=${image}>
        <section class="card__info">
            <h3 class="card__title">${name}</h3>
            <p class="card__description">${description}</p>
            <ul class="card__tags-wrapper">
                ${technologies
                  .map((technology) => `<li class="card__tag">${technology}</li>`)
                  .join('')}
            </ul>
            <div>
                <a href=${liveWeb}>Website</a>
                <a href=${github}>Github</a>
            </div>
        </section>
    </article>`
  )
  .join('')}
    `;

export default Card;
