import {  Button, Image, message } from "antd";
import { motion } from "framer-motion";
import { VscCallOutgoing } from "react-icons/vsc";
import { TfiEmail } from "react-icons/tfi";
import { socialMediaLinks } from "../../utils/data";
import IconWrapper from "../../utils/IconWrapper";
import heroLogo from "../../resources/icons/hero-img.png";
import resume from '../../resources/dhirendra-kumar-resume.pdf';
import "./index.scss";



const Home = () => {
  
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'dhirendra-kumar-resume.pdf';
    link.click();
    message.success('PDF Downloaded Successfully!', 3)
  };


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
             <IconWrapper icon={logo} />
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
          <Button type="primary" onClick={handleDownload}>Hire me</Button>
        </div>
      </section>
      <section className="hero-image-container">
        <Image src={heroLogo} preview={false} />
      </section>
    </div>
  );
};

export { Home };
