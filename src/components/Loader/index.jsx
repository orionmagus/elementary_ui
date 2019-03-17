import React from "react";
import "./style.scss";
import pose from "react-pose";
const StaggerAnimHeight = pose.div({});
export const Loader = ({ comet, ...props }) => (
    <div className="wrap-loader" {...props}>
      <div className={`${comet === true ? "comet" : "bar"}-loader`}>
        {props.children}
      </div>
    </div>
  ),
  BarLoader = props => <span />,
  CometLoader = props => <Loader {...props} comet={true} />;
Loader.defaultProps = {
  comet: true
};
export default Loader;
<div
  style={{
    background: "rgba(150,180,230, 0.3)"
  }}
>
  <CometLoader />
</div>;
