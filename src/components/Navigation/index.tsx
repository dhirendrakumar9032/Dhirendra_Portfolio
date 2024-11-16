import { useContext } from "react";
import { Link } from "react-scroll";
import { FaHome } from "react-icons/fa";
import { NavigationContext } from "../../App";
import "./index.scss";
import { NaveItems } from "../../utils/types";
import { BriefcaseBusiness, CircleUserRound, Contact, LampDesk, NotebookPen } from "lucide-react";

const Navigation = () => {
  const { isNavVisible } = useContext(NavigationContext);

  const navItems:NaveItems[] = [
    {
      id: "home",
      icon: (
        <Link to="home" smooth={true} duration={500}>
          <FaHome />
        </Link>
      ),
    },
    {
      id: "about",
      icon: (
        <Link to="about" smooth={true} duration={500}>
          <CircleUserRound />
        </Link>
      ),
    },
    {
      id: "skills",
      icon: (
        <Link to="skills" smooth={true} duration={500}>
           <LampDesk />
        </Link>
      ),
    },
    {
      id: "projects",
      icon: (
        <Link to="projects" smooth={true} duration={500}>
           <BriefcaseBusiness />
        </Link>
      ),
    },
    {
      id: "blogs",
      icon: (
        <Link to="blogs" smooth={true} duration={500}>
           <NotebookPen />
        </Link>
      ),
    },
    {
      id: "contact",
      icon: (
        <Link to="contact" smooth={true} duration={500}>
          <Contact />
        </Link>
      ),
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      className={` ${
        isNavVisible ? "navigation-container" : "navigation-container-hide"
      }`}
    >
      <div className="navigation-bar">
        {navItems.map((item) => (
          <div
            key={item.id}
            className="nav-item"
            onClick={() => scrollToSection(item.id)}
          >
            {item.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
