import React from "react";
import "./index.scss";
import react from "../../resources/skills-icons/react.svg";
import js from "../../resources/skills-icons/jss.png";
import css from "../../resources/skills-icons/css.png";
import java from "../../resources/skills-icons/java.png";
import html from "../../resources/skills-icons/html.png";
import ts from "../../resources/skills-icons/ts.png";
import redux from "../../resources/skills-icons/redux.png";
import git from "../../resources/skills-icons/git.png";
import tailwind from "../../resources/skills-icons/tailwind.png";
import nextjs from "../../resources/skills-icons/nextjs.png";
import antd from "../../resources/skills-icons/antd.png";
import sass from "../../resources/skills-icons/sass.png";
import postman from "../../resources/skills-icons/postman.png";

import { motion } from "framer-motion";

type Props = {};

const Skills = (props: Props) => {
  const skills = [
    { icon: react, name: "React JS" },
    { icon: js, name: "Javascript" },
    { icon: html, name: "HTML5" },
    { icon: css, name: "CSS3" },
    { icon: ts, name: "Typescript" },
    { icon: redux, name: "Redux" },
    { icon: nextjs, name: "Next JS" },
    { icon: git, name: "Github" },
    { icon: tailwind, name: "Tailwind" },
    { icon: java, name: "Java" },
    { icon: sass, name: "Sass" },
    { icon: antd, name: "Ant Design" },
    { icon: postman, name: "Postman" },

  ];

  const gridVariants = {
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.2, // Adjust the delay as needed
      },
    }),
    hidden: { opacity: 0 },
  };

  return (
    <div className="skills" id="skills">
      <div className="heading-container">
        <h2 className="heading">Technical Skills</h2>
        <span className="underline"></span>
      </div>
      <div className="skill-grid">
        {skills.map((skill, index) => (
          <div key={index}>
            <motion.div
              className="icon-container"
              key={skill.name}
              variants={gridVariants}
              initial="hidden"
              animate="visible"
              custom={index} // Passing the index for individual delay
            >
              <img className="icon" src={skill.icon} alt={skill.name} />
              <div className="skill-name">{skill.name}</div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
