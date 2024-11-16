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
    title: "Movie Verse",
    description:
      "MovieVerse, the ultimate destination for discovering and exploring movies! This web application allows users to browse a vast collection of movies, view detailed information about each title, and search for their favorite films.",
    technology: [
      "React",
      "TypeScript",
      "SCSS",
      "Vite",
     
    ],
    id: 6,
    projectImgLinks: [
      "https://github.com/user-attachments/assets/a4e5a114-be7f-49a2-bae1-b91d4f04faf0",
      "https://github.com/user-attachments/assets/ccf12d84-6c1b-44b9-a610-f5a06fec8316",
    ],
    liveDemoUrl:'https://movie-verse-tan.vercel.app/',
    githubUrl: "https://github.com/dhirendrakumar9032/MovieVerse",
  },
  {
    title: "Zomato Clone",
    description:
      "Built a Zomato clone using React, TypeScript, and Tailwind CSS, replicating key features such as restaurant listings, search, and menu browsing. The project emphasizes a responsive design and efficient data handling for a seamless user experience.",
    technology: ["ReactJS", "Typescript", "Tailwind", "Vite"],
    id: 4,
    projectImgLinks: [
      "https://github.com/user-attachments/assets/864b0064-83ed-46c7-9170-02142e8b68d5",
      "https://github.com/user-attachments/assets/daab0db3-58e1-4d91-962e-b18620499267",
    ],
    githubUrl:'https://github.com/dhirendrakumar9032/Zomato_Clone'
  },
  {
    title: "Job Application Email Generator",
    description:
      "The primary purpose of this application is to address the common problem of having to write job application emails from scratch each time. Whether you need to ask an HR representative for a referral or reach out to an employee",
    technology: [
      "React",
      "TypeScript",
      "Tailwind",
      "Vite",
     
    ],
    id: 5,
    projectImgLinks: [
      "https://github.com/user-attachments/assets/c003cb80-02e1-4550-80ab-449281d57a09",
      "https://github.com/user-attachments/assets/62140916-52e9-4687-ba5b-78cc0ca423cd",
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
      "Ant Design",
    ],
    id: 2,
    projectImgLinks: [
      "https://i.imgur.com/qMP0ckA.png",
      "https://i.imgur.com/FH62HtN.png",
    ],
    liveDemoUrl:'https://dhirendra-portfolio.vercel.app/',
    githubUrl: "https://github.com/dhirendrakumar9032/dhirendra_portfolio",
  }
  

];
