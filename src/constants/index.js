import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
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
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React Native Developer",
    icon: web,
  },
  {
    title: "Android Developer",
    icon: mobile,
  },
  {
    title: "Game Developer",
    icon: creator,
  },
  {
    title: "Web Developer",
    icon: backend,
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
    name: "TypeScript",
    icon: typescript,
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
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "March 2016 - Sep 2018",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Android Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Oct 2018 - Dec 2022",
    points: [
      "Developed and maintained mobile applications for Android using Java and Kotlin, ensuring high-quality code and excellent user experiences.",
      "Collaborated with designers and product managers to create intuitive and visually appealing interfaces.",
      "Integrated APIs and third-party services to enhance app functionality and data retrieval.",
      "Conducted thorough testing and debugging to identify and resolve issues, resulting in improved app stability.",
      "Implemented responsive and adaptive designs to ensure compatibility with various screen sizes and resolutions.",
    ],
  },
  {
    title: "Slot-Casino Game Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Created fun and visually appealing slot-casino games using Cocos Creator and TypeScript.",
      "Designed the spinning reels, symbols, and win calculations to make the games exciting.",
      "Worked with a team of artists, sound designers, and testers to make the games look and sound great.",
      "Added features like in-game purchases and bonus rounds to keep players engaged and generate revenue.",
      "Made sure the games ran smoothly on different devices and fixed any problems quickly.",
      "Followed rules to ensure fair gaming and responsible play.",
      "Used player feedback and data to improve the games and keep players coming back.",
      "Stayed updated on the latest trends in the casino gaming industry and used new ideas in our projects.",
      "Helped the company make more money and create better games.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "AOW Information Technology Pvt Ltd",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2023 - Apr 2023",
    points: [
      "Created a modern and user-friendly lead generation website using Next.js and Tailwind CSS.",
      "Ensured the website looks great and works smoothly on all devices, from desktops to mobile phones.",
      "Added interactive features like contact forms and buttons to engage users and generate leads.",
      "Used Next.js to make the website load quickly and perform well, improving search engine visibility.",
      "Streamlined the design process with Tailwind CSS, resulting in a polished and consistent look.",
      "Integrated analytics tools to track user behavior and lead generation, providing insights for business growth.",
      "Collaborated with marketing teams to align the website with branding and messaging strategies.",
      "Conducted testing to fix any issues and ensure a reliable website.",
      "Optimized the website for fast load times and better performance.",
      "Implemented SEO best practices for improved online visibility.",
      "Managed content updates to keep the website current and effective.",
      "The website contributed to increased online visibility and the generation of high-quality leads for the business.",
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
    name: "UsedAutoPartsPro",
    description:
      "Web-based platform that allows users to search, book used auto parts for sale.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwnd",
        color: "green-text-gradient",
      },
      {
        name: "SEO",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Jackpot World™ - FortuneTree",
    description:
      "Slot Casino game. 3 or more SCATTERs trigger free games. WILD substitutes for all other symbols and may trigger Jackpot game.",
    tags: [
      {
        name: "cocos2dx",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "cocos creator",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Jackpot World™ - HottestChili",
    description:
      "Slot Casino game. Coins on each rell 1,2 and 3 trigger Chilli Fortune Feature. Jackpot will be multiplied in Jackpot Feature.",
    tags: [
      {
        name: "cocos2dx",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "cocos creator",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://austin0721.github.io/HottestChiliGame/",
  },
];

export { services, technologies, experiences, testimonials, projects };
