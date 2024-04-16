import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./frame-component2.css";

export type FrameComponent2Type = {
  group2?: string;
  rectangle65?: string;
  nEILJOHNALBITO?: string;
  aDVISER?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propPadding1?: CSSProperties["padding"];
  propTextAlign?: CSSProperties["textAlign"];
  propWidth?: CSSProperties["width"];
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  group2,
  rectangle65,
  nEILJOHNALBITO,
  aDVISER,
  propPadding,
  propPadding1,
  propTextAlign,
  propWidth,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const nEILJOHNALBITOStyle: CSSProperties = useMemo(() => {
    return {
      textAlign: propTextAlign,
    };
  }, [propTextAlign]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="slider-home-page-member-inner">
      <div className="frame-container">
        <img className="frame-inner" alt="" src={group2} />
        <div className="frame-wrapper" style={frameDivStyle}>
          <div className="wrapper-rectangle-65-parent" style={groupDivStyle}>
            <div className="wrapper-rectangle-65">
              <img
                className="wrapper-rectangle-65-child"
                loading="lazy"
                alt=""
                src={rectangle65}
              />
            </div>
            <div className="rectangle-div" />
            <h2 className="neil-john-albito" style={nEILJOHNALBITOStyle}>
              {nEILJOHNALBITO}
            </h2>
            <div className="adviser-wrapper" style={frameDiv1Style}>
              <h3 className="adviser">{aDVISER}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
