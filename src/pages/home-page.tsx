import { FunctionComponent } from "react";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import NA1 from "../components/NA1";
import NA from "../components/NA";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import "./home-page.css";

const HomePage: FunctionComponent = () => {
  return (
    <div className="home-page">
      <section className="about" />
      <div className="about1" />
      <section className="wrapper-rectangle-51-parent">
        <div className="wrapper-rectangle-51">
          <img
            className="wrapper-rectangle-51-child"
            loading="lazy"
            alt=""
            src="/rectangle-51@2x.png"
          />
        </div>
        <button className="send-button">
          <div className="send-button-child" />
          <div className="send">SEND</div>
        </button>
      </section>
      <FrameComponent4 />
      <FrameComponent3 />
      <NA1 />
      <section className="n-a">
        <div className="about2" />
        <div className="n-a1">
          <h1 className="core-team">CORE TEAM</h1>
        </div>
        <div className="n-a2">
          <NA />
          <FrameComponent1 />
        </div>
      </section>
      <section className="home-page-inner">
        <div className="rectangle-parent">
          <div className="frame-child" />
          <h1 className="lets-work-together-container">
            <span>LET’’’</span>
            <span className="span">’</span>
            <span>S WORK TOGETHER</span>
          </h1>
        </div>
      </section>
      <FrameComponent />
    </div>
  );
};

export default HomePage;
