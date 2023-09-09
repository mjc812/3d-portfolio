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
    java,
    npm,
    tripguide,
    threejs,
    intellij,
    github,
    jira,
    realtor,
    unity,
    woodlands_thumbnail,
    woodlands_0,
    woodlands_1,
    woodlands_2,
    woodlands_3,
    woodlands_4,
    woodlands_5,
    woodlands_6,
    woodlands_7,
    woodlands_8,
    elf_thumbnail,
    elf_0,
    elf_1,
    elf_2,
    elf_3,
    elf_4,
    elf_5,
    hobby_0,
    hobby_1,
    hobby_2,
    hobby_3,
    hobby_4,
    hobby_5,
    hobby_6,
    hobby_7,
    hobby_8,
    hobby_9,
    hobby_10,
    hobby_11,
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
      name: "Java",
      icon: java,
    },
    {
      name: "CSharp",
      icon: csharp,
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
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "npm",
      icon: npm,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Unity",
      icon: unity,
    },
    {
      name: "IntelliJ",
      icon: intellij,
    },
    {
      name: "GitHub",
      icon: github,
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
    unity: "Unity",
    documentation: "Documentation"
  }
  
  const experiences = [
    {
      title: "Software Engineer",
      company_name: "Realtor.com",
      icon: realtor,
      iconBg: "#383E56",
      date: "Jan 2020 - Aug 2020",
      points: [
        "Responsible for creating modular, high-performance, and scalable UI components that serve as building-blocks for company products.",
        "Emphasized thorough documentation to provide easy and effective use of UI components for developers across 20 teams in Realtor.com.",
        "Resulted in shared usage of UI components across 40+ production applications that service 85+ million users every month.",
        "Provided ongoing support for maintenance, features, system improvements, and bugs of UI components.",
        "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
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
  
  const hobbies = [
    hobby_0,
    hobby_1,
    hobby_2,
    hobby_3,
    hobby_4,
    hobby_5,
    hobby_6,
    hobby_7,
    hobby_8,
    hobby_9,
    hobby_10,
    hobby_11,
  ]

  const projects = [
    {
      name: "Woodlands",
      description:
        "An immersive action game made with Unity 3D and C#",
      long_description:
        "This is the 'Woodlands'. 'Woodlands' is a high-octane FPS game with Unity 3D  that combines elements of horror, survival, and intense action. Designed with C# and .NET, I crafted a unique and immersive gaming experience, with heavy emphasis on the fine details. Traverse a beautiful, fog-shrouded forest. Explore and loot items from abandoned buildings to help you survive. Encounter a variety of mutant creatures. Arm yourself with powerful weapons and engage in thrilling combat.",
      tags: [
        {
          name: "unity",
          color: "blue-text-gradient",
        },
        {
          name: "C-Sharp",
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
      image: woodlands_thumbnail,
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
        "A domain specific language designed to abstract away complex linux commands.",
        long_description:
        "Easy Linux Format (ESL) is a domain-specific language (DSL) designed to replace complex Linux commands for both new and experienced users. This DSL abstract away Linux commands with intuitive and English-oriented instructions, making system management accessible to a wider audience.",
      tags: [
        {
          name: "java",
          color: "green-text-gradient",
        },
        {
          name: "restapi",
          color: "orange-text-gradient",
        },
        {
          name: "react",
          color: "blue-text-gradient",
        },
      ],
      photos: [
        elf_0,
        elf_1,
        elf_2,
        elf_3,
        elf_4,
        elf_5,
      ],
      image: elf_thumbnail,
      source_code_link: "https://github.com/",
      achievements: [
        "Designed and implemented a domain-specific language and grammar to abstract away Linux commands.",
        "Converted user input into an AST tree using nodes to represent different blocks of the language.",
        "Utilized the Visitor pattern for a dynamic analysis and execution of the user’s code.",
        "Organized and oversaw user studies to record feedback and iteratively improve the language design.",
        "Maintained sound DSL design principles by ensuring self-containment, a low abstraction gradient, a simplified conceptual model, and comprehensive documentation.",
        "Regularly organized and led collaborative development meetings with cross-functional teams to ensure project progress, identify and address challenges, and foster a culture of knowledge sharing."
      ],
      socials: [
        {
          name: socials.github,
          href: "https://github.com/mjc812/Easy-Linux-Format"
        },
        {
          name: socials.documentation,
          href: "https://www.notion.so/ELF-Cheat-Sheet-5499fa84b8b5460e991a75b3d6f95dfc#bab23b7c92cb43c3bbd428c71735a9e0"
        }
      ]
    },
    {
      name: "Pymethod",
      description:
        "A full-stack application for developers that traces the control flow of python program to identify hotspots",
      long_description:
        "Pymethod was a utility program that I spearheaded with the goal of helping python developers identify hotspots in their code. It quickly traces the control flow of given programs, and visualizes the analysis data using a centrality graph.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      photos: [
        
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
      achievements: [
        "Spearheaded a team to develop a full-stack application that traces the control flow of python program to identify hotspots",
        "Established the technology stack and the project’s architectural framework",
        "Implemented static and online dynamic analyses to evaluate a given python program",
        "Established RESTful API points to communicate analyses data",
        "Implemented a centrality graph in React on the front-end to visualize data analysis"
      ],
      socials: [
        {
          name: socials.github,
          href: "https://www.github.com"
        }
      ]
    },
  ];
  
  export { hobbies, socials, services, technologies, experiences, testimonials, projects };