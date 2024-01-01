import { ExperienceEntry, SkillsType, socialMediaLinksType } from "./types";
import { VscGithub } from "react-icons/vsc";
import {
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaMediumM,
  FaFacebookF,
} from "react-icons/fa";
import react from "../resources/skills-icons/react.svg";
import js from "../resources/skills-icons/jss.png";
import css from "../resources/skills-icons/css.png";
import java from "../resources/skills-icons/java.png";
import html from "../resources/skills-icons/html.png";
import ts from "../resources/skills-icons/ts.png";
import redux from "../resources/skills-icons/redux.png";
import git from "../resources/skills-icons/git.png";
import tailwind from "../resources/skills-icons/tailwind.png";
import nextjs from "../resources/skills-icons/nextjs.png";
import antd from "../resources/skills-icons/antd.png";
import sass from "../resources/skills-icons/sass.png";
import postman from "../resources/skills-icons/postman.png";

export const educationEntries: ExperienceEntry[] = [
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

  export const blogData =[{
    title:'10 Things Software Engineers Can Learn from an Eagle.',
    description:`While sitting at my office desk, I glanced at my mobile wallpaper of an Eagle. It made me wonder what we can learn from eagles as software engineers. So, I decided to write a blog about it...`,
   url:'https://medium.com/@dhirendra9032/10-things-software-engineers-can-learn-from-an-eagle-f4a42cebf115',
    readTime:'2 min read',
    imageUrl:'https://miro.medium.com/v2/resize:fit:720/format:webp/1*qu6J100XELfSpm520uyjOw.jpeg'
  },{
    title:'JavaScript Interview Marathon: 100 Questions, One Ultimate Guide.',
    description:`In this series, we’ll explore the 100 most common interview questions that will supercharge your JavaScript skills and help you nail any interview.`,
    readTime:'9 min read',
    url:'https://medium.com/@dhirendra9032/javascript-interview-marathon-100-questions-one-ultimate-guide-part-1-f1d74ddebf92',
    imageUrl:'https://miro.medium.com/v2/resize:fit:720/format:webp/1*p9QxdmBWqhzr90Zo1ko20g.png'
  },{
    title:'Mastering JavaScript Functions: A Simplified Guide to Understanding and Using Different Types',
    description:`Functions are a core building block of JavaScript programming. They allow us to encapsulate reusable blocks of code and perform specific tasks. In this blog post`,
    readTime:'3 min read',
    url:'https://medium.com/@dhirendra9032/mastering-javascript-functions-a-simplified-guide-to-understanding-and-using-different-types-8fd4af98ae77',
    imageUrl:'https://miro.medium.com/v2/resize:fit:720/format:webp/1*wydvmEoGqNiPEC2bDvFtWw.png'
  }]

  export const selfDescription:string = `I'm Dhirendra Kumar, a Frontend Engineer at Qapita Fintech India Pvt
  Ltd, specializing in JavaScript, CSS3, HTML5, React.js 18.0,
  TypeScript, and Redux. Passionate about crafting user-friendly
  interfaces, I focus on functional components in React to deliver
  responsive and modern web applications. Currently, I am enriching my
  skillset with Java. My portfolio showcases innovative projects that
  highlight my dedication to creating impactful user experiences in
  the fintech sector. I'm excited about new challenges and
  collaborations that push the boundaries of frontend development.`


  export const socialMediaLinks: socialMediaLinksType[] = [
    {
      link: "https://www.linkedin.com/in/dhirendra-kumar-9032/",
      logo: FaLinkedin ,
    },
    {
      link: "https://www.github.com/dhirendrakumar9032",
      logo: VscGithub ,
    },
    {
      link: "https://www.instagram.com/dhirendra9032/",
      logo: FaInstagram,
    },
    {
      link: "https://www.youtube.com/@dhirendrakumar90322",
      logo: FaYoutube,
    },
    {
      link: "https://www.medium.com/@dhirendra9032",
      logo: FaMediumM,
    },
    {
      link: "https://www.facebook.com/dhirendra9032",
      logo: FaFacebookF,
    },
  ];
  

  export const  skills:SkillsType[] = [
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