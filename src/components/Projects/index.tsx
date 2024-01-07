import { useEffect, useState } from "react";
import { Carousel } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import { debounce } from "lodash";
import "swiper/css";
import "swiper/css/effect-cards";
import { ProjectType, projects } from "../Projects/projectsData";
import leftArrow from "../../resources/icons/left-arrow.png";
import { CardComponent } from "./ProjectCard";
import "./index.scss";

const Projects = () => {
  const [screenWidth, setScreenWidth] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = debounce(() => {
      if (window.innerWidth <= 768) {
        setScreenWidth(true);
      }else{
        setScreenWidth(false);
      }
    }, 200);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderProjectCard = (project: ProjectType) => (
    <SwiperSlide key={project.id}>
      <div className="infoSection">
        <div className="project-title">
          <h1 className="project-title">{project.title}</h1>
          <div className="swipe-left">
            <img className="left-arrow" src={leftArrow} alt="frontend" />
            Swipe
          </div>
        </div>
        <p className="project-description">{project.description}</p>
        <div className="technologySection">
          <h3>Tech-Stack</h3>
          <div className="tech-stack">
            {project.technology.map((tech, idx) => (
              <span key={idx} className="tech-pill">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="buttons">
          <a
            href={project.liveDemoUrl}
            target="_blank"
            rel="noreferrer"
            className="button liveDemoButton"
          >
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="button githubButton"
          >
            GitHub Repo
          </a>
        </div>
      </div>
      <Carousel autoplay autoplaySpeed={3000}>
        {project.projectImgLinks.map((link) => (
          <div className="imageSection">
            <img
              src={link}
              key={link}
              alt="Project background"
              className="backgroundImage"
            />
          </div>
        ))}
      </Carousel>
    </SwiperSlide>
  );

  return (
    <div className="projects" id="projects">
      <div className="heading-container">
        <h2 className="heading">Projects</h2>
        <span className="underline"></span>
      </div>
      {!screenWidth && (
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
          loop={true}
        >
          {projects.map(renderProjectCard)}
        </Swiper>
      )}
      {screenWidth && (
        <Carousel autoplay autoplaySpeed={3000}>
          {projects.map((project) => (
            <CardComponent {...project} />
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default Projects;
