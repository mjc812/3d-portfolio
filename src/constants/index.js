//code belongs to https://github.com/adrianhajdin/project_3D_developer_portfolio/blob/main/src/hoc/SectionWrapper.jsx. 
//proper citations will be added soon

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
      title: "Web Developer",
      icon: web,
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
      title: "Content Creator",
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

  const socials = {
    github: "Github",
    linkedIn: "LinkedIn",
    youTube: "YouTube",
    reddit: "Reddit",
    unity: "Unity"
  }
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
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
      name: "Forest",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
      achievements: [
        "Designed the architecture, scenes, and prefabs models of a 3D game made with Unity and C#",
        "Designed systems for audio management, AI movement and behaviors, player movement and rotation, dynamic post-processing effects, UI, and in-game item interaction for an immersive gameplay experience",
        "Developed modular and reusable UI components that serve as building blocks for the game’s UI pages",
        "Achieved an average of 200k Tris, 300k Verts, and 180 frames per second, representing a 86%, 95%, 64% increase in optimization from the initial import of assets, respectively",
        "Shipped and available for demo on Unity game gallery, video demo available at (Youtube link)"
      ],
      socials: [
        {
          name: socials.github,
          href: "https://www.github.com"
        },
        {
          name: socials.unity,
          href: "https://www.unity.com"
        },
      ],
      embedded: {
        href:  "https://www.youtube.com"
      }
    },
    {
      name: "Easy Linux Format",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
      achievements: [
        "Designed and wrote domain specific language to abstract away linux commands with a more intuitive grammar and syntactic system",
        "Adhered to good domain specific language design by keeping the language self-contained, abstraction gradient low, conceptual model simple, and fully documented",
        "Minimized the diffuseness while maximizing the consistency between methods and features of the language",
        "Tokenized raw user input into a list of token, then parsed the list into a validated AST tree using a nodes to represent different blocks of the language",
        "Performed a dynamic analysis using the visitor pattern on the generated AST tree to execute the code produced by the user"
      ],
      socials: [
        {
          name: socials.github,
          href: "https://www.github.com"
        },
        {
          name: socials.youTube,
          href: "https://www.youtube.com"
        },
        {
          name: socials.unity,
          href: "https://www.unity.com"
        },
      ]
    },
    {
      name: "Pymethod",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
      achievements: [
        "Spearheaded a team to develop a full-stack web application that performs a static and online dynamic analysis on python programs to trace its control flow, and renders the data visually using a centrality graph",
        "Laid the technology stack and designed the architecture of the project",
        "Managed time-sensitive updates, content changes and bug fixes that were implemented after multiple user studies",
        "Engaged in 1:1 and group discussions to ensure that all other developers were caught up with the latest updates",
        "Implemented the static and dynamic analyses to parse a given program, then implemented RESTful API points to communicate the data from the analyses"
      ],
      socials: [
        {
          name: socials.github,
          href: "https://www.github.com"
        },
        {
          name: socials.youTube,
          href: "https://www.youtube.com"
        },
        {
          name: socials.unity,
          href: "https://www.unity.com"
        },
      ]
    },
  ];
  
  export { socials, services, technologies, experiences, testimonials, projects };