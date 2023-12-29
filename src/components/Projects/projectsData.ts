export interface ProjectType {
  title: string;
  description: string;
  technology: string[];
  id: number;
  projectImgLinks: string[];
}

export const projects: ProjectType[] = [
  {
    title: "Dhirendra Kumar - Frontend Web Developer Portfolio",
    description:
      "An interactive portfolio showcasing my skills and projects as a Frontend Engineer. The site features a modern and clean design with engaging animations, a professional overview, a detailed project section with Swiper for carousel functionality, and a dynamic contact form. Key sections highlight my technical skills, work experience, and a personal introduction.",
    technology: ["React", "TypeScript", "Framer Motion", "Swiper", "SCSS"],
    id: 3,
    projectImgLinks:['https://i.imgur.com/qMP0ckA.png','https://i.imgur.com/FH62HtN.png']
  },
  {

    title: "Dhirendra Kumar - Frontend Web Developer Portfolio",
    description:
      "An interactive portfolio showcasing my skills and projects as a Frontend Engineer. The site features a modern and clean design with engaging animations, a professional overview, a detailed project section with Swiper for carousel functionality, and a dynamic contact form. Key sections highlight my technical skills, work experience, and a personal introduction.",
    technology: ["React", "TypeScript", "Framer Motion", "Swiper", "SCSS"],
    id: 4,
    projectImgLinks:['https://i.imgur.com/qMP0ckA.png']
  },
];
