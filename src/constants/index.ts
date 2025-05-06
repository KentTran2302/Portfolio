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
    docker,
    kotlin,
    java,
    martinrea,
    swril,
    geogrind,
    iosStore,
    pickup,
    shoppy,
    qualifacts,
    uow,
    resumeconnect,
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
      title: "Frontend Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Web Developer",
      icon: backend,
    },
    {
      title: "Infrastructure Engineer",
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
      name: "Java",
      icon: java,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Kotlin",
      icon: kotlin,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Developer Intern",
      company_name: "University of Waterloo",
      icon: uow,
      iconBg: "#FFFFFF",
      date: "Januaray 2025 - April 2025",
      points: [
        "Collaborated with senior engineers and designers to develop a Django web application to host scholarly articles, achieving a monthly usage of 2,000+ researchers",
        "Built a search engine using AWS ElasticSearch, boosting query speed by 30% across 10,000+ documents",
        "Reduced feature rollout time by 70% by building CI/CD pipelines using Docker and GitHub Actions to automate Django deployments on DigitalOcean",
        "Integrated centralized logging with Django middleware and Sentry, reducing error tracking time by 20%"
      ],
    },
    {
      title: "Software Developer Intern",
      company_name: "Qualifacts OnCall Health",
      icon: qualifacts,
      iconBg: "#FFFFFF",
      date: "May 2024 - August 2024",
      points: [
        "Saved medical documentation time up to 25 hours weekly by building an AI Chrome Extension using Django and React to automate clinical note-taking for therapists by transcribing Zoom sessions",
        "Leveraged Redis and AWS CDN to cache 20,000+ documents monthly, improving P90 API response time by 30x",
        "Developed production monitoring services with Splunk SPL to track user activity and system errors in real time, reducing incident detection time by 30% across critical services",
      ],
    },
    {
      title: "Software Developer Intern",
      company_name: "Smart Waterloo Region Innovation Lab",
      icon: swril,
      iconBg: "#FFFFFF",
      date: "September 2023 - December 2023",
      points: [
        "Migrated an event manager app to use React Native with Bun.js and improved its chat feature to reduce the average loading time from 1.2s to 150ms by using Redis caching",
        "Teamed up with engineers to upgrade data infrastructure to prevent data overfetching and reduce significant bandwidth traffic by using Web3 wallet context and JWS-based authentication",
      ],
    },
    {
      title: "Software Developer Intern",
      company_name: "Martinrea Inc.",
      icon: martinrea,
      iconBg: "#FFFFFF",
      date: "January 2023 - April 2023",
      points: [
        "Built a Flask web app with MongoDB and MySQL to integrate with a computer vision program, reducing sensor installation and maintenance cost by $58,000 annually",
        "Increased object detection accuracy by 50% through automated image processing and Mean Square Error formula Projects",
      ],
    },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
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
      name: "ResumeConnect",
      description: 
        "Led a team to build a platform for uploading resumes, getting community feedback, and AI-improved versions. Engineered React frontend, Flask/MongoDB backend, and Neurelo for schema validation and query optimization.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "flask",
          color: "pink-text-gradient",
        }, 
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
      ],
      image: resumeconnect,
      source_code_link: "https://github.com/kinaz-xxr/ResumeConnect",
    },
    {
      name: "GeoGrind",
      description:
        "Web-based platform, iOS mobile and Desktop application that helps university students to navigate their campus life, discover study partners near them, connect over courses, and redefine the boundaries of collaborative learning.",
      tags: [
        {
          name: "react-typescript",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "pink-text-gradient",
        },
        {
          name: "kotlin-springboot",
          color: "green-text-gradient",
        },
        {
          name: "grpc",
          color: "pink-text-gradient",
        },
        {
          name: "scss",
          color: "blue-text-gradient",
        },
      ],
      image: geogrind,
      source_code_link: "https://github.com/GeoGrind",
    },
    {
      name: "iOS Product Store", 
      description:
        "An ecommerce shopping web application that sells ios products with the best prices on the market. Also, a user-friendly interface and reliable payment method utilizes Stripe payment gateway which increases user experiences.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "reactjs",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
        {
          name: "stripe",
          color: "blue-text-gradient",
        },
      ],
      image: iosStore,
      source_code_link: "https://github.com/Kenttrann2302/Kent-s-ios-products-store",
    },
    {
      name: "PickUp",
      description:
        "Your ultimate destination for connecting with local sports enthusiasts! Discover and join pickup games happening right in your neighborhood. Whether you're a seasoned athlete or just looking to have some fun, Pickup has you covered. Don't miss out on the action – join the game today!",
      tags: [
        {
          name: "react-javascript",
          color: "blue-text-gradient",
        },
        {
          name: "node-express-js",
          color: "green-text-gradient",
        },
        {
          name: "restapi",
          color: "pink-text-gradient",
        },
      ],
      image: pickup,
      source_code_link: "https://github.com/PickUp89",
    },
    {
      name: "Admin DashBoard App",
      description:
        "This is a website using React.js to create an admin dashboard for a company called Shoppy where ecommerce is using.",
      tags: [
        {
          name: "react-javascript",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "restapi",
          color: "pink-text-gradient",
        },
      ],
      image: shoppy,
      source_code_link: "https://github.com/Kenttrann2302/Kent-Admin-Dashboard--App",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };