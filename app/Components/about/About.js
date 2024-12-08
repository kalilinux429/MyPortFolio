import React from "react";
import "./About.css";
import AboutBox from "./AboutBox";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img
          src="https://i.ibb.co/k89WFzY/about-us-pic.png"
          alt=""
          className="about__img"
        />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              <b><i>
              I am a skilled React Frontend Developer with
              3.7 years of experience building responsive and user-friendly
              web applications. Proficient in React.js,Next jS, Node js JavaScript
              (ES6+), HTML5, and CSS3, I specialize in creating
              dynamic interfaces, integrating APIs, and managing state with
              Redux. Passionate about clean code and usability, I thrive in
              collaborative and agile environments, delivering scalable and
              efficient solutions.</i></b>
            </p>
            <a
              href="https://drive.google.com/file/d/15aXTkKLKW7srpwMnwaN4t51pEOxLxzc9/view?usp=sharing"
              className="btn"
              download={"SUchitKapale_3.7"}
            >
              Download Resume
            </a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Development</h3>
                <span className="skills__number">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">UI/UX Designing</h3>
                <span className="skills__number">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage ui__design"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">DSA</h3>
                <span className="skills__number">40%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage DSA"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  );
};

export default About;
