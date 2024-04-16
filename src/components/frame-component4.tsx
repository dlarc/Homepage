import { FunctionComponent } from "react";
import "./frame-component4.css";

const FrameComponent4: FunctionComponent = () => {
  return (
    <section className="website-1-parent">
      <img className="website-1-icon" alt="" src="/website-1@2x.png" />
      <div className="nav-bar-wrapper">
        <header className="nav-bar">
          <div className="nav-bar1" />
          <div className="wrapper-new-logo-2">
            <img
              className="new-logo-2"
              loading="lazy"
              alt=""
              src="/new-logo-2@2x.png"
            />
          </div>
          <div className="nav-bar-inner">
            <div className="frame-parent">
              <div className="home-parent">
                <h3 className="home">HOME</h3>
                <div className="line-wrapper">
                  <div className="frame-item" />
                </div>
              </div>
              <h3 className="about3">ABOUT</h3>
              <h3 className="members">MEMBERS</h3>
              <h3 className="gallery">GALLERY</h3>
              <h3 className="contacts">CONTACTS</h3>
            </div>
          </div>
        </header>
      </div>
    </section>
  );
};

export default FrameComponent4;
