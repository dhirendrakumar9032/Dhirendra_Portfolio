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
      title: "Project 1",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, consequuntur!",
      technology: ["React", "Typescript", "JS"],
      id: 1,
    },
    {
      title: "Project 2",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, consequuntur!",
      technology: ["React", "Typescript", "JS"],
      id: 2,
    },
    {
      title: "Project 3",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, consequuntur!",
      technology: ["React", "Typescript", "JS"],
      id: 3,
    },
    {
      title: "Project 4",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, consequuntur!",
      technology: ["React", "Typescript", "JS"],
      id: 4,
    },
    {
      title: "Project 5",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, consequuntur!",
      technology: ["React", "Typescript", "JS"],
      id: 5,
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
        // autoplay={{
        //   delay: 4000,
        //   disableOnInteraction: true,
        //   pauseOnMouseEnter: true,
        // }}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {projects.map((project: any) => (
          <SwiperSlide>
            <div className={"infoSection"}>
              <h1>Silentmoon</h1>
              <p>
                A yoga and meditation app that we built as a team with React,
                MongoDB, Express, and Node.js. My task as a gitmaster and
                backend developer was to program the backend with connection
                using a restful API and to model the database in MongoDB.
              </p>
              <div className={"technologySection"}>
                {/* Render technology icons here */}
              </div>
              <div className={"buttons"}>
                <a href="#live-demo" className={"liveDemoButton"}>
                  Live Demo
                </a>
                <a href="#github-repo" className={"githubButton"}>
                  GitHub Repository
                </a>
              </div>
            </div>
            <div className={"imageSection"}>
              {/* Assume you have an image with the class 'backgroundImage' */}
              <img
                src="your-image-url.jpg"
                alt="Background"
                className="backgroundImage"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Projects;
