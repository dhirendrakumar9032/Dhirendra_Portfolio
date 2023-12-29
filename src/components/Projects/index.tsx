import { Swiper, SwiperSlide } from "swiper/react";
import { Carousel } from "antd";
import "swiper/css";
import { Autoplay, EffectCards, Pagination } from "swiper/modules";
import "swiper/css/effect-cards";
import { projects, ProjectType } from './projectsData'; 
import "./index.scss";

const Projects = () => {
  const renderProjectCard = (project: ProjectType) => (
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
            <a href={project.liveDemoUrl} target="_blank" rel="noreferrer" className="button liveDemoButton">Live Demo</a>
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="button githubButton">GitHub Repository</a>
          </div>
        </div>
        <Carousel autoplay autoplaySpeed={3000}>
       
        {project.projectImgLinks.map(link =><div className="imageSection">
         <img
            src={link}
            key={link}
            alt="Project background"
            className="backgroundImage"
          />
          
        </div>)}
        
        </Carousel>
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
        // autoplay={{
        //   delay: 8000,
        //   disableOnInteraction: false,
        //   pauseOnMouseEnter: true,
        // }}
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
