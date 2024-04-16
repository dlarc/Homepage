import { FunctionComponent } from "react";
import "./frame-component3.css";

const FrameComponent3: FunctionComponent = () => {
  return (
    <section className="instance-wrapper">
      <div className="instance">
        <div className="instance-inner">
          <div className="frame-group">
            <div className="welcome-to-wrapper">
              <h1 className="welcome-to">WELCOME TO</h1>
            </div>
            <h1 className="digital-photography-club">
              DIGITAL PHOTOGRAPHY CLUB
            </h1>
          </div>
        </div>
        <div className="component-1-parent">
          <button className="component-1">
            <div className="n-a3" />
            <div className="know-more">KNOW MORE</div>
          </button>
          <div className="n-a4">
            <div className="butto-ntop">
              <div className="n-a5" />
              <img className="butto-ntop-child" loading="lazy" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
