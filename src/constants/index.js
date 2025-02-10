import {
  mobile,
  backend,
  creator,
  javascript,
  typescript,
  html,
  css,
  web,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  flutter,
  carrent,
  jobit,
  tripguide,
  aws,
  aws_services,
  threejs,
  tedx,
  grafix,
  inkhaven,
  placement,
  sevai,
} from "../assets";

const navLinks = [
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

export default navLinks;

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "AWS Developer",
    icon: backend,
  },
  {
    title: "AWS Services",
    icon: creator,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Flutter",
    icon: flutter,
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
    name: "AWS",
    icon: aws,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "aws_Services",
    icon: aws_services,
  },
];

const experiences = [
  {
    title: "Flutter Developer",
    company_name: "",
    icon: grafix, // Using grafix image directly
    date: "October 2024 - Jan",
    points: [
      "Designed and developed the TicketVerse application from scratch using Flutter, implementing a complete ticket management and verification system.",
      "Integrated backend APIs to enable role-based authentication, ticket validation, and real-time QR code scanning functionality.",
      "Built a user-friendly and responsive UI/UX with role-specific interfaces and modern design elements like neumorphic styling and animations.",
    ],
  },
  {
    title: "Designer",
    company_name: "",
    icon: tedx, // Using tedx image directly
    date: "August 2024 - Currently",
    points: [
      "Designed visually appealing posters and promotional materials to enhance the branding and visibility of Ted-X events at GCT.",
      "Produced engaging videos for event promotion and post-event highlights, showcasing key moments and ensuring a professional presentation.",
      "Worked closely with event organizers to align design concepts with the event theme, ensuring consistent and impactful communication.",
    ],
  },
];

const projects = [
  {
    name: "Placement_App",
    description:
      "The Placement App is a dedicated platform designed for GCT Coimbatore students to streamline their placement journey. It provides real-time updates on job opportunities, company recruitment processes, and placement-related events. The app offers access to company profiles, interview experiences, and preparation materials, helping students stay informed and well-prepared. With features like job listings, aptitude tests, and resource sharing, it serves as a one-stop solution for managing placements efficiently. Built using Flutter, the app ensures a smooth user experience, making it easier for students to navigate their career opportunities.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Supabase",
        color: "pink-text-gradient",
      },
    ],
    image: placement,
    source_code_link: "https://github.com/Rahulranesh/Placement_app.git",
  },
  {
    name: "Ink-Haven",
    description:
      "InkHaven is a blogging platform that allows users to create, share, and engage with content. It provides a seamless experience for writing and publishing blog posts, while also enabling readers to comment and interact with the content. The app includes features such as real-time comment sections, post interactions, and user profiles. Designed with an intuitive UI, InkHaven fosters a community-driven environment where users can easily share their thoughts and connect with others through comments and discussions.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Provider",
        color: "pink-text-gradient",
      },
    ],
    image: inkhaven,
    source_code_link: "https://github.com/Rahulranesh/Blogging.git",
  },
  {
    name: "Sevai",
    description:
      "SEVAI is a food delivery app that allows users to browse, order, and pay for food from various restaurants. With a user-friendly interface, SEVAI offers features like menu browsing, cart management, checkout, and receipt generation. The app also supports light and dark modes for a personalized user experience. SEVAI integrates secure payment methods and provides real-time updates on order status. Designed to make food delivery convenient and efficient, it aims to offer a seamless experience from ordering to payment and delivery tracking.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Provider",
        color: "pink-text-gradient",
      },
    ],
    image: sevai,
    source_code_link: "https://github.com/Rahulranesh/food_delivery.git",
  },
];

export { services, technologies, experiences, projects, navLinks };
