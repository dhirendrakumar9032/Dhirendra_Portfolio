import {  Image } from "antd";
import heroLogo from "../../resources/icons/hero-img.png";
import "./index.scss";
import { VscGithub } from "react-icons/vsc";
import {
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaMediumM,
  FaFacebookF,
} from "react-icons/fa";

import { motion } from "framer-motion";
import { TfiEmail } from "react-icons/tfi";
import { VscCallOutgoing } from "react-icons/vsc";


type socialMediaLinksType = {
  link: string;
  logo: JSX.Element;
};

const Home = () => {
  const socialMediaLinks: socialMediaLinksType[] = [
    {
      link: "https://www.linkedin.com/in/dhirendra-kumar-9032/",
      logo: <FaLinkedin />,
    },
    {
      link: "https://www.github.com/dhirendrakumar9032",
      logo: <VscGithub />,
    },
    {
      link: "https://www.instagram.com/dhirendra9032/",
      logo: <FaInstagram />,
    },
    {
      link: "https://www.youtube.com/@dhirendrakumar90322",
      logo: <FaYoutube />,
    },
    {
      link: "https://www.medium.com/@dhirendra9032",
      logo: <FaMediumM />,
    },
    {
      link: "https://www.facebook.com/dhirendra9032",
      logo: <FaFacebookF />,
    },
  ];

  return (
    <div className="hero-container" id="home">
      <section className="hero">
        <div className="hero-greeting">
          <span className="wave">👋</span> Hi ! I am
          <span className="separate-color"> Dhirendra Kumar </span>
        </div>
        <div className="hero-title">
          Front-End <span className="separate-color">Developer</span>
        </div>
        <div className="hero-subtitle">
          I am dedicated to developing the{" "}
          <span className="separate-color">
            digital face of technologically robust products,
          </span>{" "}
          crafting front-end platforms that not only foster
          <span className="separate-color">
            {" "}
            social innovation but also prioritize sustainability.
          </span>
        </div>
        <div className="social-media-link">
          {socialMediaLinks.map(({ link, logo }, index) => (
            <motion.a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="links"
              initial={{ y: 5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              whileHover={{ y: -5, opacity: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              {logo}
            </motion.a>
          ))}
        </div>
        <div className="can-connect-on">
          <div className="email">
            <TfiEmail /> dhirendra9032@gmail.com
          </div>
          <div className="email">
            <VscCallOutgoing />
            +91, 8604390422
          </div>
        </div>
      </section>
      <section className="hero-image-container">
        <Image src={heroLogo} preview={false} />
      </section>
    </div>
  );
};

export { Home };
