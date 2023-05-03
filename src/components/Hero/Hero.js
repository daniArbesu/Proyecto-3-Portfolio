import './Hero.css';

const template = `
<section class="hero">
    <h1>Hi, I'm Daniel Arbesú <span class="wave">👋</span></h1>
    <h2 class="highlighted-text">Full-Stack Developer<span class="text-blinking">_</span></h2>
    <div class="location-wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
        <span>Valencia, 🇪🇸</span>
    </div>
</section>
    `;

const printHero = () => {
  document.querySelector('main').innerHTML = template;
};

export default printHero;
