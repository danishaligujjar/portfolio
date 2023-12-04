
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
    weblogics,
    ehs,
    axiom,
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
      title: "REACT @ JAVASCRIPT",
      icon: web,
    },
    {
      title: "DJANGO @ PYTHON",
      icon: mobile,
    },
    {
      title: "ODOO",
      icon: backend,
    },
    {
      title: "POINT OF SALE",
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
  
  const experiences = [
    {
      title: "Javascript Developer",
      company_name: "WebLogics ",
      icon: weblogics,
      iconBg: "#E6DEDD",
      date: "Jul 2019 - Sep 2019",
      points: [
        "HTML/CSS Mastery: Assisted in creating and enhancing web interfaces using HTML and CSS to improve website aesthetics and user experience.",
        "JavaScript Proficiency: Gained proficiency in JavaScript to add interactive elements and functionality to web pages.",
        "Collaborative Development: Collaborated with senior developers on team projects, learning best practices in coding, version control, and project management.",
        " Learning Environment: Engaged in a dynamic learning environment, where I had the opportunity to absorb knowledge and skills from experienced professionals.",
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "Elite International Education Group Inc.",
      icon: ehs,
      iconBg: "#E6DEDD",
      date: "2021 - Jul 2022",
      points: [
        "Web Development: Developing and optimizing interactive web applications using a combination of HTML, CSS, and JavaScript to deliver pixel-perfect user interfaces.",
        "UI/UX Collaboration: Collaborating with our design teams to translate wireframes and mockups into interactive, user-friendly web interfaces that meet design and branding standards.",
        "Bootstrap and Tailwind Mastery: Proficiently utilizing Bootstrap and Tailwind CSS frameworks to expedite front-end development while maintaining a consistent and visually appealing design.",
        "Performance Optimization: Implementing best practices for optimizing web page load times, ensuring a smooth user experience across devices and browsers.",
        "Responsive Design: Ensuring that all web applications are fully responsive and mobile-friendly, catering to a diverse user base.",
        "Version Control: Using version control systems such as Git to manage and track changes in collaborative projects.",
      ],
    },
    {
      title: "Software Engineer (Odoo Backend Developer)",
      company_name: "Axiom World",
      icon: axiom,
      iconBg: "#E6DEDD",
      date: "Apr 2023 - Present",
      points: [
        "Custom Module Development: Crafting custom Odoo modules tailored to client requirements, ensuring seamless integration with existing systems.",
        "Database Management: Proficiently managing databases, optimizing data structures, and ensuring data integrity within the Odoo ecosystem.",
        "Performance Optimization: Continuously optimizing backend code and database queries for improved system speed and efficiency.",
        "API Integration: Integrating Odoo with external systems and APIs to facilitate data exchange and enhance functionality.",
        "Bug Resolution: Identifying and resolving backend issues promptly to maintain system stability.",
        "Code Review: Conducting thorough code reviews to maintain high-quality standards and adherence to best practices.",
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
      name: "Car Rent",
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
    },
    {
      name: "Job IT",
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
    },
    {
      name: "Trip Guide",
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
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };