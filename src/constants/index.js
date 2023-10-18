import {
  mobile,
  backend,
  MERN,
  web,
  javascript,
  typescript,
  express,
  restaurant,
  next,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  yorfy,
  gamica,
  netixsol,
  shopify,
  covidImage,
  expenseTracker,
  coinflip,
  todoJS,
  threejs,
  netflix,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "MERN Developer",
    icon: MERN,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Nextjs",
    icon: next,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "ExpressJs",
    icon: express,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Junior Developer Intern",
    company_name: "GamicaCloud",
    icon: gamica,
    iconBg: "#383E56",
    date: "November 2022 - January 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Developed many designs using tailwind, material UI, Bootstrap etc",
      "Learnt backend there",
    ],
  },
  {
    title: "MERN Intern",
    company_name: "Netixsol",
    icon: netixsol,
    iconBg: "#E6DEDD",
    date: "June 2023 - Present",
    points: [
      "Making RestApi in mongodb, nodejs, express, and collaborating on different projects",
      "Learning new styling Frameworks like tailwind css, material UI",
      "Learnt Nextjs Framework by making full stack nextjs projects",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Netflix Clone",
    description:
      "Built with Next.js, Tailwind CSS, Firebase, and TypeScript, this app brings you a seamless streaming experience like never before. This app also gives you trailers of the movies as fetched from the API.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "RestApi",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
      {
        name: "recoil",
        color: "violet-text-gradient",
      },
    ],
    image: netflix,
    liveUrl: "https://netflix-clone-main-alpha.vercel.app/login",
    source_code_link: "https://github.com/ehtashamtoor/Netflix-clone-main",
  },
  {
    name: "RestaurantLovers",
    description:
      "Welcome to RestaurantLovers, the ultimate destination for food enthusiasts! Our app brings together a delightful experience for both restaurants and customers. Restaurants can easily sign up, create custom categories, and showcase their mouthwatering food items. Meanwhile, customers can explore a wide array of restaurants, place orders effortlessly, and stay updated on their orders' status. Powered by Next.js, NextAuth for secure authentication, MongoDB for efficient data storage, and enhanced with the elegance of Tailwind CSS, RestaurantLovers is your go-to app for a seamless dining experience.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "nextAuth",
        color: "blue-text-gradient",
      },
    ],
    image: restaurant,
    liveUrl: "https://restaurantlovers-ehtashamtoor.vercel.app/",
    source_code_link: "https://github.com/ehtashamtoor/restaurantlovers",
  },
  {
    name: "Covid 19 Tracker",
    description:
      "Get in-depth information about the total cases, recovered cases, and unfortunate deaths for each selected country in specific timeframes.Dynamic Bar graph display how the virus spread, the recovery trends, and the unfortunate loss of lives over time.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Restapi",
        color: "green-text-gradient",
      },
    ],
    image: covidImage,
    liveUrl: "https://covid19trracker.surge.sh/",
    source_code_link: "https://github.com/ehtashamtoor/covid19tracker/",
  },
  {
    name: "Expense Tracker",
    description:
      "Monitor your balance, track your expenses and income effortlessly, and achieve financial clarity. Add transactions with ease using intuitive input fields. Take charge of your financial journey today and use our Expense Tracker App for a smarter approach to managing your money.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: expenseTracker,
    liveUrl: "https://exxpense-manageer.surge.sh/",
    source_code_link: "https://github.com/ehtashamtoor/expense-manager",
  },
  {
    name: "Coin Flip Design",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: coinflip,
    liveUrl: "https://coin-flip-jade.vercel.app/",
    source_code_link: "https://github.com/ehtashamtoor/CoinFLip",
  },
  {
    name: "TodoApp(JS)",
    description:
      "A simple todo app built using javascript to test the javascript logic. In it you can read  your todos, add them from the fields and even edit and delete them.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: todoJS,
    liveUrl: "https://todo-appjs.surge.sh/",
    source_code_link: "https://github.com/ehtashamtoor/Todo-app-Vanilla-JS",
  },

  {
    name: "Yorfy",
    description:
      "A Yorfy Responsive website design made using MATERIAL UI. MUI is from the top most css styling frameworks in the world today. This project gives an insight about the styling made using MUI.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "MUI",
        color: "pink-text-gradient",
      },
    ],
    image: yorfy,
    liveUrl: "https://yorrfy.vercel.app/",
    source_code_link: "https://github.com/ehtashamtoor/Yorfy/",
  },
];

export { services, technologies, experiences, testimonials, projects };
