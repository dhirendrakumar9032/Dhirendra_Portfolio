import React from "react";
import "./index.scss";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="about-container" id="about">
      <div className="heading-container">
        <h2 className="heading">About Us</h2>
        <span className="underline"></span>
      </div>
      <div className="about-main">
        <div className="about-logo"><img></img></div>
        <div className="about-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et fuga unde, debitis laborum molestiae autem est rem quod ratione asperiores quam sint culpa obcaecati aliquam, doloribus alias eligendi quaerat recusandae dolore atque accusantium illum rerum nam cum. Est doloremque sed fugit totam, temporibus molestiae pariatur et placeat animi ipsa numquam maxime, dolore minus. Repellat libero odio exercitationem, culpa quisquam ipsum doloremque alias rerum vel debitis sequi eligendi voluptas explicabo earum quaerat veritatis laboriosam commodi esse consequuntur. A dolorem, quisquam ducimus labore quae sed tenetur explicabo, quis delectus ab dicta laborum dolore facere nisi ex animi autem amet eos maxime vero!
        </div>
      </div>
    </div>
  );
};

export { About };
