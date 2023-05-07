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
    name: 'GroveMade Shop',
    image:
      'https://res.cloudinary.com/dm1ciqr4c/image/upload/v1683369944/Project_2_Website_Shop_peq0or.png',
    description: 'E-Commerce platform using semantic html and Clean code',
    technologies: ['Javascript', 'CSS'],
    github: 'https://github.com/daniArbesu/Proyecto-2-GroveMadeStore',
    liveWeb: 'https://dani-arbesu-shop.netlify.app/'
  },
  {
    name: 'NASA Picture of the day',
    image:
      'https://res.cloudinary.com/dm1ciqr4c/image/upload/v1683393254/Project_4_NASA_picture_of_the_day_y7sadm.png',
    description:
      "Webapp that allows to look at the NASA's Picture of the day API in an Instagram style",
    technologies: ['React', 'CSS'],
    github: 'https://github.com/daniArbesu/Proyecto-2-GroveMadeStore',
    liveWeb: 'https://dani-arbesu-shop.netlify.app/'
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
    role: 'Mechanical Engineer',
    company: 'Schwihag AG (Switzerland)',
    logo: 'https://res.cloudinary.com/dm1ciqr4c/image/upload/v1683473975/logo-schwihag-fahrbahntechnik-track-switch-technology-eisenbahn-railway-blau_yhfxy3.png',
    time: 'Oct. 2015 - Today',
    description: 'Design and development of railway rail fastening systems, analysis with FEM.',
    responsibilities: ['Design of new products', 'FEM analysis'],
    website: 'https://schwihag.com/en/'
  }
];
