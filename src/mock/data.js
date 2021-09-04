import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Ritë Sermaxhaj',
  subtitle: 'The passionate developer you need!',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profilepic.jpg',
  paragraphOne:
    'Hello there again! I am a senior student in last year of bachelor studies field of computer science at University for Bussiness and Technology. Finishing this experience with great results in knowledge and also practice part. During the time of my studies I have been working with different technologies like Java, .NET Core, Javascript and many more. Working with such technologies it has made me expand also my willing to learn new stuff about other technologies just like the framework of Javascript such as Vue.js, the event-driven approach Node.js and a little bit of PHP.',
  paragraphTwo:
    'I have taken part in different technology training such as in Red-T Project implemented by AUK and in Techstitution of Open Data Kosovo. But since I love sharing my knowledge I also have been working as a mentor and trainer in Tech Heroes projects that are implemented by my currently job, jCoders Academy.',
  paragraphThree:
    'I am ambitious for my job. Always excited and willing to learn new stuff everytime there is a chance. Rapid and sustainable self growth is my true passion. A quick learner, able to take responsibilities for any kind of project.',
  resume: 'text', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'slack.jpg',
    title: 'Slack Clone',
    vue: 'Vue.js',
    html: 'HTML',
    javascript: 'Javascript',
    css: '',
    mysql: '',
    php: '',
    info: 'Slack Clone Project it is a chatting app, just like the Slack program itself. Users through this app can chat with each other and also share ideas and communicate in different channels, where you can added it as much as you want to.',
    info2: '',
    url: 'https://slack-clone-83e3b.web.app/login',
    repo: 'https://github.com/RitaSermaxhaj123/Slack-Clone', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'jewelry.PNG',
    title: 'Jewelry shop',
    vue: '',
    html: '',
    javascript: '',
    css: '',
    mysql: '',
    php: '',
    info: 'Jewelry Shop is the last project that I have been working with some of my university collegues. It is created with the most famous CMS - Wordpress and in the project are used different elements such as pages, categories, comments, widgets, themes and lots of plugins to make the website more functional.',
    info2: '',
    url: 'http://lefony.wts2021.net/',
    repo: 'https://github.com/rina-kasabaqi/jewerlyshop', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'learnsify.PNG',
    title: 'Learnsify',
    vue: '',
    html: 'HTML',
    javascript: 'Javascript',
    css: 'CSS',
    mysql: '',
    php: '',
    info: 'Learnsify is a webpage where you can get different courses about technologies. Those courses you may find in youtube channels or can be  well documented blogs for begginers. Also in other pages you can learn more about the importance of e-Learning and the benefits of that. This is a simple HTML, CSS and Javascript that also contains Bootstrap, that helped me with the grid system.',
    info2: '',
    url: '',
    repo: 'https://github.com/RitaSermaxhaj123/Tech/tree/main/Techstitution%204.0', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'prefito.PNG',
    title: 'Learnsify',
    vue: '',
    html: 'HTML',
    javascript: 'Javascript',
    css: 'CSS',
    mysql: 'MySQL',
    php: 'PHP',
    info: 'Prefito is the name of the project that it is based in PHP Language. It is a jewelry shop, where you have your jewelries categorized, you may sort them depending on the attributes given and you have a section for creating card for any kind of event made with Javascript, respectfully with DOM.',
    info2: '',
    url: '',
    repo: 'https://github.com/RitaSermaxhaj123/Tech/tree/main/Techstitution%204.0', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Mail me!',
  email: 'ritaa.sermaxhaj@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/rita.sermaxhaj',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/rita-sermaxhaj-79037a1a6/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/RitaSermaxhaj123',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
