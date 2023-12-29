import React from "react";
import "./index.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { Autoplay, EffectCards, Pagination } from "swiper/modules";

type Props = {};

const Projects = (props: Props) => {
  const projects = [
    {
      title: "Dhirendra Kumar - Frontend Web Developer Portfolio",
      description:
        "An interactive portfolio showcasing my skills and projects as a Frontend Engineer. The site features a modern and clean design with engaging animations, a professional overview, a detailed project section with Swiper for carousel functionality, and a dynamic contact form. Key sections highlight my technical skills, work experience, and a personal introduction.",
      technology: ["React", "TypeScript", "Framer Motion", "Swiper", "SCSS"],
      id: 1,
    },
    {
      title: "Dhirendra Kumar - Frontend Web Developer Portfolio",
      description:
        "An interactive portfolio showcasing my skills and projects as a Frontend Engineer. The site features a modern and clean design with engaging animations, a professional overview, a detailed project section with Swiper for carousel functionality, and a dynamic contact form. Key sections highlight my technical skills, work experience, and a personal introduction.",
      technology: ["React", "TypeScript", "Framer Motion", "Swiper", "SCSS"],
      id: 3,
    },
    {
      title: "Dhirendra Kumar - Frontend Web Developer Portfolio",
      description:
        "An interactive portfolio showcasing my skills and projects as a Frontend Engineer. The site features a modern and clean design with engaging animations, a professional overview, a detailed project section with Swiper for carousel functionality, and a dynamic contact form. Key sections highlight my technical skills, work experience, and a personal introduction.",
      technology: ["React", "TypeScript", "Framer Motion", "Swiper", "SCSS"],
      id: 4,
    },
  ];

  return (
    <div className="projects" id="projects">
      <div className="heading-container">
        <h2 className="heading">Projects</h2>
        <span className="underline"></span>
      </div>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Autoplay, Pagination]}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} >
            <div className="card">
              <div className="infoSection">
                <h1 className="project-title">{project.title}</h1>
                <p className="project-description">{project.description}</p>
                <div className="technologySection">
                  <h3>Tech-Stack</h3>
                  <div className="tech-stack">
                  {project.technology.map((tech, idx) => (
                    <span key={idx} className="tech-pill">{tech}</span>
                  ))}
                  </div>
                 
                </div>
                <div className="buttons">
                  <a href="#live-demo" className="button liveDemoButton">
                    Live Demo
                  </a>
                  <a href="#github-repo" className="button githubButton">
                    GitHub Repository
                  </a>
                </div>
              </div>
              <div className="imageSection">
                <img
                  src="https://i.imgur.com/LRz7s3L.png" // Replace with your image URL
                  alt="Project background"
                  className="backgroundImage"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};


export default Projects;
