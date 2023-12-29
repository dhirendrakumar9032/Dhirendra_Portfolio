import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, EffectCards, Pagination } from "swiper/modules";
import "swiper/css/effect-cards";
import { projects, Project } from './projectsData'; 
import "./index.scss";

const Projects = () => {
  const renderProjectCard = (project: Project) => (
    <SwiperSlide key={project.id}>
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
            <a href="#live-demo" className="button liveDemoButton">Live Demo</a>
            <a href="#github-repo" className="button githubButton">GitHub Repository</a>
          </div>
        </div>
        <div className="imageSection">
          <img
            src="https://i.imgur.com/LRz7s3L.png"
            alt="Project background"
            className="backgroundImage"
          />
        </div>
      </div>
    </SwiperSlide>
  );

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
        {projects.map(renderProjectCard)}
      </Swiper>
    </div>
  );
};

export default Projects;
