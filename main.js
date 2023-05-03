import printFooter from './src/components/Footer/Footer';
import printNavbar from './src/components/Navbar/Navbar';
import printHero from './src/components/Hero/Hero';
import './style.css';

const init = () => {
  printNavbar();
  printHero();
  // initMain();
  printFooter();
};

init();
