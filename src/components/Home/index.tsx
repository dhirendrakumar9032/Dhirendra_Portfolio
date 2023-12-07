import { Button, Image } from "antd";
import React from "react";
import heroLogo from "../../resources/icons/hero-img.png";
import "./index.scss";
import { Link } from "react-scroll";

type Props = {
};

const Home = (props: Props) => {

  const buttons = [
    { text: 'Get Started',  type: 'primary' as const },
  ];

  return (
    <div className="hero-container" id="home">
      <section className="hero">
      <div className="hero-greeting"><span className="wave">👋</span> Hi ! I am Dhirendra Kumar</div>
        <div className="hero-title">Front-End Web Developer</div>
        <div className="hero-subtitle">
        I am dedicated to developing the digital face of technologically robust products, crafting front-end platforms that not only foster social innovation but also prioritize sustainability.
        </div>

        {buttons.map((button, index) => (
          <Link to="about" smooth={true} duration={500}>
          <Button key={index} className="start-btn" type={button.type} >
            {button.text}
          </Button>
          </Link>
        ))}

      </section>
      <section className="hero-image-container">
        <Image src={heroLogo} preview={false} />
      </section>
    </div>
  );
};

export { Home };
