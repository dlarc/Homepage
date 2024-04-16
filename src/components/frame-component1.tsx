import { FunctionComponent } from "react";
import "./frame-component1.css";

const FrameComponent1: FunctionComponent = () => {
  return (
    <div className="gallery-home-page-wrapper">
      <div className="gallery-home-page">
        <div className="rectangle-container">
          <img
            className="rectangle-icon"
            loading="lazy"
            alt=""
            src="/rectangle-65-1@2x.png"
          />
          <img
            className="frame-child2"
            loading="lazy"
            alt=""
            src="/rectangle-66-1@2x.png"
          />
        </div>
        <div className="frame-div">
          <img
            className="frame-child3"
            loading="lazy"
            alt=""
            src="/rectangle-68@2x.png"
          />
          <img
            className="frame-child4"
            loading="lazy"
            alt=""
            src="/rectangle-67-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
