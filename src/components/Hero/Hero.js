import './Hero.css';
import { resumeLink, ctaButtons } from '../../utils/links';

const template = `
<section class="hero">
    <div class="hero__info">
        <div class="title">
            <h1><span class="wave">👋</span> I'm Daniel Arbesú</h1>
            <h2 class="highlighted-text">Full-Stack Developer<span class="text-blinking">_</span></h2>
            <div class="location-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>Valencia, 🇪🇸</span>
            </div>    
        </div>
        <div class="cta-wrapper">
        <a href=${resumeLink} target="_blank" aria-label="Resume" rel="noopener nofollow" class="cta-button">See Resume</a>
            <div class="social-links-wrapper">
                ${ctaButtons
                  .map(
                    ({ name, link, iconPath }) => `
                    <a href=${link} target="_blank" aria-label=${name} rel="noopener nofollow" class="button-social">
                        <svg class="social-links__logo" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d='${iconPath}'/> 
                        </svg>
                    </a>
                `
                  )
                  .join('')}
            </div>
        </div>
    </div>
    <img src="https://res.cloudinary.com/dm1ciqr4c/image/upload/v1683572388/profile-pic_xitqka.jpg" alt="Image from Daniel Arbesú" class="hero__photo">
</section>
    `;

const printHero = () => {
  document.querySelector('main').innerHTML = template;
};

export default printHero;
