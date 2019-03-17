import React from "react";
import posed from "react-pose";

const withPose = poseConfig => WrappedComponent => {
  const InnerRef = React.forwardRef(({ style, ...props }, ref) => (
      <WrappedComponent {...props} ref={ref} style={style} />
    )),
    PosedComponent = posed(InnerRef)(poseConfig);
  return <PosedComponent pose={isOpen ? "open" : "closed"} />;
};

export default withPose;
