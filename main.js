import printFooter from './src/components/Footer/Footer';
import printNavbar from './src/components/Navbar/Navbar';
import Home from './src/pages/Home/Home';
import Projects from './src/pages/Projects/Projects';
import Experience from './src/pages/Experience/Experience';

import linkPage from './src/utils/linkPage';
import './style.css';

printNavbar();
// Render Page on Start
Home();
printFooter();

// Añadimos los eventos click a los link para que pinten las diferentes páginas
linkPage('#homelink', Home);
linkPage('#projectslink', Projects);
linkPage('#experiencelink', Experience);
