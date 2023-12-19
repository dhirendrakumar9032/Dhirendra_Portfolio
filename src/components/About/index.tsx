import React from "react";
import "./index.scss";
import ExperienceSection from "./experience";

type Props = {};

const About = (props: Props) => {
  const educationEntries = [
    {
      role: "Software Engineer (Frontend)",
      company: "Qapita Fintech India Pvt Ltd, Hyderabad",
      period: "Jan 2022 - Present",
      responsibilities: [
        "Worked on new feature enhancement for the Qapmap product using the following tech stack: React.js, TypeScript, SCSS, Ant Design, Redux, and Zustand.",
        "Collaborated with the Project Manager, UI/UX Designer, and Tester to understand the requirements and objectives of the project.",
        "Developed reusable components on Storybook, utilizing the tech stack React Js of React.js, TypeScript, SCSS, and Ant Design.",
        "Participated in Agile ceremonies, including daily stand-up meetings, sprint planning, sprint reviews, and retrospectives.",
        "Collaborated with the team to break down project tasks into manageable Sass user stories and estimated the effort required for each.",
        "I also worked on support tickets, debugging and fixing reported bugs from clients or testers.",
      ],
    },
  ];

  return (
    <div className="about-container" id="about">
      <div className="heading-container">
        <h2 className="heading">About Us</h2>
        <span className="underline"></span>
      </div>
      <div className="about-main">
        <div className="about">
          <div className="about-logo"></div>
          <div className="about-description">
            I'm Dhirendra Kumar, a Frontend Engineer at Qapita Fintech India Pvt
            Ltd, specializing in JavaScript, CSS3, HTML5, React.js 18.0,
            TypeScript, and Redux. Passionate about crafting user-friendly
            interfaces, I focus on functional components in React to deliver
            responsive and modern web applications. Currently, I am enriching my
            skillset with Java. My portfolio showcases innovative projects that
            highlight my dedication to creating impactful user experiences in
            the fintech sector. I'm excited about new challenges and
            collaborations that push the boundaries of frontend development.
          </div>
        </div>
        <ExperienceSection entries={educationEntries} />
      </div>
    </div>
  );
};

export { About };
