import Home from '../pages/Home/Home';
/* import { Template as Movie } from '../pages/Movies/Movies.js';
import { Listeners as MovieListeners } from '../pages/Movies/Movies.js';
import { Template as About } from '../pages/About/About.js'; */

import printNavbar from '../components/Navbar/Navbar';
// import { TemplatePrint as Logo } from '../components/Logo/Logo.js';

export const routes = {
  '/': { title: 'Home', render: Home }
};

export const router = () => {
  const page = routes[location.pathname];
  if (page) {
    document.title = page.title;
    document.querySelector('main').innerHTML = page.render();
    // Logo();
    printNavbar();
    page.listeners();
  } else {
    history.replaceState(null, null, '/');
    router();
  }
};

export default router;
