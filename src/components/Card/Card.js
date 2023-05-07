import { projectLinks } from '../../utils/links';
import icons from '../../utils/icons';
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
            <div class="card__links">
                <a href=${liveWeb} target="_blank" aria-label="Website Link" rel="noopener nofollow" class="cta-button">Website</a>
                <a href=${github} target="_blank" aria-label="Github Link" rel="noopener nofollow" class="button-social">
                    <svg class="social-links__logo" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d='${icons.github}'/> 
                    </svg>
                    Source
                </a>
            </div>
        </section>
    </article>`
  )
  .join('')}
    `;

export default Card;
