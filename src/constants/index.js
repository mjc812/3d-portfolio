//code belongs to https://github.com/adrianhajdin/project_3D_developer_portfolio/blob/main/src/hoc/SectionWrapper.jsx. 
//proper citations will be added soon

import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    csharp,
    carrent,
    java,
    jobit,
    tripguide,
    threejs,
    realtor,
    unity,
    woodlands_0,
    woodlands_1,
    woodlands_2,
    woodlands_3,
    woodlands_4,
    woodlands_5,
    woodlands_6,
    woodlands_7,
    woodlands_8
    } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Experience",
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
      title: "Full Stack Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Game Developer",
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
      name: "CSharp",
      icon: csharp,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Unity",
      icon: unity,
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
      name: "git",
      icon: git,
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
      title: "Software Engineer",
      company_name: "Realtor.com",
      icon: realtor,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    }
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
      name: "Woodlands",
      description:
        "An immersive action game made with Unity 3D and C#",
      long_description:
        "This is the 'Woodlands'. 'Woodlands' is a high-octane FPS game with Unity 3D  that combines elements of horror, survival, and intense action. Designed with C# and .NET, I crafted a unique and immersive gaming experience, with heavy emphasis on the fine details. Traverse a beautiful, fog-shrouded forest. Explore and loot items from abandoned buildings to help you survive. Encounter a variety of mutant creatures. Arm yourself with powerful weapons and engage in thrilling combat.",
      tags: [
        {
          name: "Unity",
          color: "blue-text-gradient",
        },
        {
          name: "C#",
          color: "green-text-gradient",
        },
        {
          name: ".NET",
          color: "pink-text-gradient",
        },
      ],
      photos: [
        woodlands_0,
        woodlands_1,
        woodlands_2,
        woodlands_3,
        woodlands_4,
        woodlands_5,
        woodlands_6,
        woodlands_7,
        woodlands_8      
      ],
      image: carrent,
      source_code_link: "https://github.com/mjc812/The-Forest",
      achievements: [
        "Developed a complete and immersive 3D game with C and the Unity game engine",
        "Architected intricate game mechanics including AI behaviors, 3D sound design, game-state management, in-game interactions, and player control mechanics through 60+ custom scripts",
        "Crafted user-centric UI components for interactive game pages, prioritizing clarity and ease of use",
        "Strategically optimized assets and code, yielding performance enhancements including: 240% drop in draw calls, 95% in verts, 86% in tris, and a 64% increase in FPS"
      ],
      socials: [
        {
          name: socials.github,
          href: "https://github.com/mjc812/The-Forest"
        },
      ],
      embedded: {
        href: "https://www.youtube.com/embed/wT84aCECnmc"
      }
    },
    {
      name: "Easy Linux Format",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        long_description:
        "this is the  elf",
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
      photos: [
        woodlands_0
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
      long_description:
        "this is pymethod",
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
      photos: [
        woodlands_0
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