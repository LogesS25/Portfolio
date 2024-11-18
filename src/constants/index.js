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

  tailwind,
  nodejs,
  mongodb,
  git,
  meta,
  starbucks,
  tesla,
  shopify,



  ecomm,
  reactnative,
  chatpdf,
  medico,
  externallinkicon,
  udemy,
  smartinternz,
  aws,
  entryexit,
  pizza,




} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Work Experience",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "certificate",
    title: "Certifications",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: creator,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: web,
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
    name: "git",
    icon: git,
  },

];

const experiences = [
  {
    title: "DATA STRUCTURES AND ALGORITHMS:DEEP DIVE USING JAVA",
    company_name: "Udemy",
    icon: udemy,
    iconBg: "#383E56",
    date: "May 2024",
    points: [
      "Completed an in-depth course on Udemy focused on mastering data structures and algorithms using Java.",
      "Gained expertise in arrays, linked lists, stacks, queues, trees, graphs, sorting algorithms, and search algorithms",

    ],
    link: "https://www.udemy.com/certificate/UC-98741e3c-2c01-4adc-80c2-0532c7d5488f/",

  },
  {
    title: "Meta Front-End Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Mar 2024",
    points: [
      "Created a responsive website using HTML to structure content, CSS to handle visual style, and JavaScript to develop interactive experiences. ",
      "Learnt Bootstrap CSS Framework to create webpages and work with GitHub repositories and version control.",
    ],
    link: "https://www.coursera.org/account/accomplishments/professional-cert/9JDFNFFDV3QH",
  },
  {
    title: "Externship on Modern Application Development (Java Spring Boot)",
    company_name: "SmartInternz",
    icon: smartinternz,
    iconBg: "#E6DEDD",
    date: "15 May 2023 - 7 July 2023",
    points: [
      "Developed a Full-stack application (Medico) with ReactJS, SpringBoot and MongoDB",
    ],
    link: "https://drive.google.com/file/d/1sVs25IqTTgFDmqflX-pe-xs8Dl0O6uSB/view",
  },
  {
    title: "AWS Fundamentals",
    company_name: "AWS",
    icon: aws,
    iconBg: "#383E56",
    date: "Mar 19 2024",
    points: [
      "Learned and gained proficiency in essential concepts, services, and use use cases within AWS cloud ecosystem",

    ],
    link: "https://coursera.org/share/80965c01672587346c32c74e125d3a1b",
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
    name: "ECOMM STORE",
    description:
      "Developed an efficient and responsive e-commerce website using Next.js for frontend, Sanity for content management, and Stripe for secure payment processing.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "sanity",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "pink-text-gradient",
      },
    ],
    image: ecomm,
    source_code_link: "https://github.com/LogesS25/ecommshop",
    hostlink: "https://github.com/LogesS25/ecommshop",
  },
  {
    name: "Video Sharing Application",
    description:
      "React Native-powered video sharing app, powered by Appwrite for secure data management. Effortlessly upload, share, and discover captivating videos across various genres. Connect with creators, engage with content, and explore a world of inspiration, all while ensuring your privacy and security.",
    tags: [
      {
        name: "ReactNative",
        color: "blue-text-gradient",
      },
      {
        name: "Appwrite",
        color: "green-text-gradient",
      },
    ],
    image: reactnative,
    source_code_link: "https://github.com/LogesS25/react-native-app",
    hostlink: "https://github.com/LogesS25/react-native-app",
  },
  {
    name: "CHAT-PDF",
    description:
      "A comprehensive chat application with PDF integration. This project is designed to provide a seamless chat experience where users can upload PDF files, create chats around them, and interact with an AI assistant. The AI assistant uses the OpenAI API to generate responses based on the chat context.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindCSS",
        color: "blue-text-gradient",
      },
      {
        name: "Drizzle ORM",
        color: "green-text-gradient",
      },
      {
        name: "POSTgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "Neon_Database_Serverless",
        color: "green-text-gradient",
      },
      {
        name: "Axios",
        color: "green-text-gradient",
      },
      {
        name: "Pinecone",
        color: "pink-text-gradient",
      },
      {
        name: "OpenAI",
        color: "pink-text-gradient",
      },

    ],
    image: chatpdf,
    source_code_link: "https://github.com/LogesS25/ChatPDF",
    hostlink: "https://chat-pdf-mu-eight.vercel.app/",
  },
  {
    name: "Building Entry Exit System",
    description:
      "The Building Entry System is a comprehensive solution for tracking people entering and leaving a building. Developed using Node.js, TypeScript, Express.js, and MongoDB, this application manages entry and exit events, provides historical records, and delivers insightful analytics.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
    ],
    image: entryexit,
    source_code_link: "https://github.com/LogesS25/Building-EntrySystem",
    hostlink: "https://building-entry-system-client.vercel.app/",
  },
  {
    name: "Food Delivery Application",
    description:
      "I have developed this react native app using typescript. this app contains a basic home page with details of the resturant and inside each resturant we can add the food items to the cart. The cart will show all the items in the respective resturants. And then we can click order and will be redirected to the home page again.",
    tags: [
      {
        name: "ReactNative",
        color: "blue-text-gradient",
      },
      {
        name: "Zustand State Management",
        color: "green-text-gradient",
      },
    ],
    image: pizza,
    source_code_link: "https://github.com/LogesS25/Pizza_ReactNative",
    hostlink: "https://github.com/LogesS25/Pizza_ReactNative",
  },
  {
    name: "Medico",
    description:
      "Designed and implemented a comprehensive hospital management website using React.js for frontend and MongoDB for backend data storage.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
    ],
    image: medico,
    source_code_link: "https://github.com/SmartInternProject/medico_",
    hostlink: "https://github.com/SmartInternProject/medico_",
  },
];

export { services, technologies, experiences, testimonials, projects };