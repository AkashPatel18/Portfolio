import React from "react";
import About from "./aboutme";

const Landing = () => {
  return (
    <>
      <div className="img_top">
        <img
          className="my_img"
          src="https://media-exp1.licdn.com/dms/image/C4E03AQHXdRgUlOEHNw/profile-displayphoto-shrink_400_400/0/1617264381796?e=1623888000&v=beta&t=b4C9rmH1tEtypqBHDTsHMCFFm-Gu1a5FcjYlr9YNgJU"
          alt=""
        ></img>
      </div>

      <div className="img_bottom">
        <div className="intro">
          <h1 id="intro_h1">Hey👋 I am Akash</h1>
        </div>

        <div className="social">
          <h2>
            <i style={{ color: "white", fontFamily: "monospace" }}>
              Let's connect and chat! Find me on the web...
            </i>
          </h2>
          <a className="socialLink" href="">
            Github
          </a>
          <a className="socialLink" href="">
            Linkedin
          </a>
          <a className="socialLink" href="">
            Instagram
          </a>
          <a className="socialLink" href=""></a>
        </div>
      </div>
      <About />
    </>
  );
};

export default Landing;
