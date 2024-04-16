import { FunctionComponent, useCallback } from "react";
import "./frame-component.css";

const FrameComponent: FunctionComponent = () => {
  const onABOUTTextClick = useCallback(() => {
    // Please sync "About Page" to the project
  }, []);

  const onMEMBERSTextClick = useCallback(() => {
    // Please sync "Members Page" to the project
  }, []);

  const onGALLERYTextClick = useCallback(() => {
    // Please sync "Gallery Page" to the project
  }, []);

  const onCONTACTTextClick = useCallback(() => {
    // Please sync "Contact Page" to the project
  }, []);

  const onFACEBOOKTextClick = useCallback(() => {
    window.open("https://www.facebook.com/ursb.dpc");
  }, []);

  return (
    <section className="frame-section">
      <div className="frame-child5" />
      <div className="frame-wrapper1">
        <div className="frame-parent1">
          <div className="pages-parent">
            <div className="pages">PAGES</div>
            <div className="home-group">
              <div className="home1">HOME</div>
              <div className="about6" onClick={onABOUTTextClick}>
                ABOUT
              </div>
              <div className="members1" onClick={onMEMBERSTextClick}>
                MEMBERS
              </div>
              <div className="gallery1" onClick={onGALLERYTextClick}>
                GALLERY
              </div>
              <div className="contact" onClick={onCONTACTTextClick}>
                CONTACT
              </div>
            </div>
          </div>
          <div className="socials-parent">
            <div className="socials">SOCIALS</div>
            <div className="facebook-parent">
              <div className="facebook" onClick={onFACEBOOKTextClick}>
                FACEBOOK
              </div>
              <div className="email">EMAIL</div>
            </div>
          </div>
          <div className="help-parent">
            <div className="help">HELP</div>
            <div className="faq-parent">
              <div className="faq">FAQ</div>
              <div className="privacy-policy">PRIVACY POLICY</div>
              <div className="contact-us">CONTACT US</div>
            </div>
          </div>
        </div>
      </div>
      <footer className="line-parent">
        <div className="line-div" />
        <div className="frame-wrapper2">
          <div className="all-rights-reserved-parent">
            <div className="all-rights-reserved">
              ©2024. All Rights Reserved
            </div>
            <div className="digital-photography-club1">
              DIGITAL PHOTOGRAPHY CLUB
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default FrameComponent;
