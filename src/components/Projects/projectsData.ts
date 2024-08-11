export interface ProjectType {
  title: string;
  description: string;
  technology: string[];
  id: number;
  projectImgLinks: string[];
  liveDemoUrl?: string;
  githubUrl: string;
}

export const projects: ProjectType[] = [
  {
    title: "Job Application Email Generator",
    description:
      "The primary purpose of this application is to address the common problem of having to write job application emails from scratch each time. Whether you need to ask an HR representative for a referral or reach out to an employee",
    technology: [
      "React",
      "TypeScript",
      "SCSS",
      "Zustand",
      "Ant Design"
     
    ],
    id: 5,
    projectImgLinks: [
      "https://github.com/user-attachments/assets/0ad388b1-75bb-4f0c-98a2-043507cebe47",
      "https://github.com/user-attachments/assets/d1a06ac3-7e75-470b-a524-6140ffb809d0",
    ],
    liveDemoUrl:'https://job-application-mail-generator.vercel.app/',
    githubUrl: "https://github.com/dhirendrakumar9032/job_application_mail_generator",
  },

  {
    title: "Admin UI GeekTrust Challenge",
    description:
      "The Admin UI Geektrust Project is a user management system that provides functionalities for searching, editing, deleting, and paginating user records. The project leverages various modern web development technologies to deliver a responsive and user-friendly interface.",
    technology: [
      "React",
      "TypeScript",
      "SCSS",
      "Zustand",
      "React Quary"
     
    ],
    id: 1,
    projectImgLinks: [
      "https://i.imgur.com/dbv6Ifw.png",
      "https://imgur.com/dbv6Ifw.png",
      "https://imgur.com/i6MIojM.png"
    ],
    liveDemoUrl:'https://admin-ui-geektrust-project-june-2024.vercel.app/',
    githubUrl: "https://github.com/dhirendrakumar9032/admin-ui-geektrust-project-june-2024.git",
  },
  {
    title: "Portfolio",
    description:
      "An interactive portfolio showcasing my skills and projects as a Frontend Engineer. The site features a modern and clean design with engaging animations, a professional overview, a detailed project section with Swiper for carousel functionality, and a dynamic contact form. Key sections highlight my technical skills, work experience, and a personal introduction.",
    technology: [
      "React",
      "TypeScript",
      "Framer Motion",
      "Swiper",
      "SCSS",
      "Framer Motion",
      "Swiper",
      "Ant Design",
    ],
    id: 2,
    projectImgLinks: [
      "https://i.imgur.com/qMP0ckA.png",
      "https://i.imgur.com/FH62HtN.png",
    ],
    liveDemoUrl:'https://dhirendra-portfolio.vercel.app/',
    githubUrl: "https://github.com/dhirendrakumar9032/dhirendra_portfolio",
  },
  {
    title: "KanBan Board",
    description:
      `This project is a Kanban dashboard created with Next.js and TypeScript, styled using Tailwind CSS. It features a dark-themed UI with columns for tasks categorized as "Todo," "Work in progress," and "Done," each column containing task cards. Users can add tasks to each column and potentially move them between columns to track the progress of their work. `,
    technology: ["Next js", "TypeScript", "Tailwind", "SCSS"],
    id: 3,
    projectImgLinks: [
      "https://i.imgur.com/kUTxxCv.png",
      "https://i.imgur.com/5dfifg8.png",
    ],
    githubUrl:'https://github.com/dhirendrakumar9032/Kanban_Board'
  },
  {
    title: "Food Junction",
    description:
      "This project is an HTML, CSS, and JavaScript-based recipe website, featuring a colorful design and interactive elements. It showcases a curated selection of Indian dishes, complete with high-quality images and names. Users can search for recipes, with highlighted daily specials and latest additions, promoting an engaging culinary exploration.",
    technology: ["HTML", "CSs", "Javascript"],
    id: 4,
    projectImgLinks: [
      "https://i.imgur.com/PTD6fs8.png",
      "https://i.imgur.com/uTn41Aw.png",
      "https://i.imgur.com/f4qN4XQ.png"
    ],
    githubUrl:'https://github.com/dhirendra9032/Food_Junction_Point'
  },
];
