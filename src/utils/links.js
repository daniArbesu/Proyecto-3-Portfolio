import icons from './icons';

export const ctaButtons = [
  {
    name: 'LinkedIN',
    link: 'https://www.linkedin.com/in/danielarbesu/',
    iconPath: icons.linkedin
  },
  {
    name: 'GitHub',
    link: 'https://github.com/daniArbesu',
    iconPath: icons.github
  }
];

export const projectLinks = [
  {
    name: 'Olympic Games App',
    image:
      'https://res.cloudinary.com/dm1ciqr4c/image/upload/v1684759070/portfolio-project-3/Olympic-Games-app_cpxa1k.jpg',
    description:
      'Olympic Games App to manage the different Athletes and the games where they won a medal',
    technologies: ['Next.js', 'TypeScript', 'Express.JS', 'Styled-Components'],
    github: 'https://github.com/daniArbesu/Proyecto-10-Olympic-Games-App',
    liveWeb: 'https://proyecto-10-olympic-games-app.vercel.app/'
  },
  {
    name: 'Tesla Website',
    image:
      'https://res.cloudinary.com/dm1ciqr4c/image/upload/v1684758722/portfolio-project-3/tesla-website.jpg',
    description: 'Copy of the Tesla website, to try the new Astro framework',
    technologies: ['HTML', 'CSS', 'Astro'],
    github: 'https://github.com/daniArbesu/tesla-landing',
    liveWeb: 'https://tesla-landing-dani-arbesu.netlify.app/'
  },
  {
    name: 'Serpistar Website',
    image:
      'https://res.cloudinary.com/dm1ciqr4c/image/upload/v1683628663/Serpistar_Website_k1klzu.jpg',
    description: 'Responsive website for a car electronics client with E-commerce platform',
    technologies: ['HTML', 'CSS', 'Wordpress'],
    liveWeb: 'https://www.serpistar.com/ssisles/'
  },
  {
    name: 'GroveMade Website',
    image:
      'https://res.cloudinary.com/dm1ciqr4c/image/upload/v1683556637/Grovemade-Website_ungwxf.jpg',
    description: 'Responsive website with some cool animations',
    technologies: ['HTML', 'CSS'],
    github: 'https://github.com/daniArbesu/Proyecto-1---GroveMade',
    liveWeb: 'https://boisterous-naiad-c10842.netlify.app/'
  },
  {
    name: 'GroveMade Shop',
    image:
      'https://res.cloudinary.com/dm1ciqr4c/image/upload/v1683491341/grovemade-shop_izxrm1.jpg',
    description: 'E-Commerce platform using semantic html and Clean code',
    technologies: ['Javascript', 'CSS'],
    github: 'https://github.com/daniArbesu/Proyecto-2-GroveMadeStore',
    liveWeb: 'https://dani-arbesu-shop.netlify.app/'
  },
  {
    name: 'NASA Picture of the day',
    image: 'https://res.cloudinary.com/dm1ciqr4c/image/upload/v1683491860/NASA-App-2_bn6s2f.jpg',
    description:
      "Webapp that allows to look at the NASA's Picture of the day API in an Instagram style",
    technologies: ['React', 'CSS'],
    github: 'https://github.com/daniArbesu/Proyecto-4-App-NASA',
    liveWeb: 'https://dani-arbesu-nasa.netlify.app/'
  },
  {
    name: 'Weather App',
    image: 'https://res.cloudinary.com/dm1ciqr4c/image/upload/v1683556089/Weather_App_gveft0.jpg',
    description: 'Minimalistic weather app fetching data from openweather API',
    technologies: ['React', 'CSS'],
    github: 'https://github.com/daniArbesu/Proyecto-5-App-Tiempo',
    liveWeb: 'https://dani-arbesu-weather.netlify.app/'
  },
  {
    name: 'Game Hub',
    image: 'https://res.cloudinary.com/dm1ciqr4c/image/upload/v1683556348/Game-Hub_uv8vgi.jpg',
    description: 'Webapp with 3 different games to play: Tic-Tac-Toe, Hangman and Sudoku',
    technologies: ['React', 'CSS', 'Vitest'],
    github: 'https://github.com/daniArbesu/Proyecto-6-Hub-Juegos',
    liveWeb: 'https://dani-arbesu-game-hub.netlify.app/'
  }
];

export const resumeLink =
  'https://drive.google.com/file/d/1P2q3GneVdGBKBs-7JXJj9D89DLt9xK-4/view?usp=sharing';

export const navbarMenu = [
  {
    name: 'Home',
    id: 'homelink',
    icon: icons.home
  },
  {
    name: 'Projects',
    id: 'projectslink',
    icon: icons.projects
  },
  {
    name: 'Experience',
    id: 'experiencelink',
    icon: icons.experience
  }
];

export const experience = [
  {
    role: 'Web Development',
    company: 'Freelance',
    logo: '',
    time: 'Dec. 2020 - Today',
    description: 'Design and development of Web Concepts for different companies',
    responsibilities: ['Web Design', 'Web Development', 'SEO Optimization', 'Marketing strategies'],
    website: '#'
  },
  {
    role: 'Mechanical Engineer',
    company: 'Schwihag AG (Switzerland)',
    logo: 'https://res.cloudinary.com/dm1ciqr4c/image/upload/v1683473975/logo-schwihag-fahrbahntechnik-track-switch-technology-eisenbahn-railway-blau_yhfxy3.png',
    time: 'Oct. 2015 - Today',
    description: 'Design and development of railway rail fastening systems, analysis with FEM.',
    responsibilities: ['Design of new products', 'FEM analysis'],
    website: 'https://schwihag.com/en/'
  },
  {
    role: 'R&D engineer for material savings and process optimization',
    company: 'Nussbaum Rielasingen GmbH (Germany)',
    logo: 'https://res.cloudinary.com/dm1ciqr4c/image/upload/v1683479863/nussbaum_h1vdti.png',
    time: 'Jan. 2014 - Sep. 2015',
    description:
      'Improve top selling designs and manufacturing processes to reduce production costs',
    responsibilities: [
      'Product design improvement (FEM analysis)',
      'Optimization ofproduction processes'
    ],
    website: 'https://www.nucan.com/en/'
  },
  {
    role: 'Software Engineer',
    company: 'Veronica Durán architecture studio (Spain)',
    logo: 'https://res.cloudinary.com/dm1ciqr4c/image/upload/v1683480361/Veronica-Duran-Logo-240x34-V2_lm0gc0.png',
    time: 'Dec. 2011 - Feb. 2012',
    description:
      'Development of a computer program to manage the equipment and places of the new hospital "Vital Álvarez Buylla" in Mieres, Asturias (HVAB).',
    responsibilities: ['Software Development', 'Technical Support'],
    website: 'https://estudioveronicaduran.com/'
  }
];
