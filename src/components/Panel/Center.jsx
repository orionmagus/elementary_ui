import React from "react";
import cn from "classnames";
import "./center.scss";

const CenteredPosition = props => {
  const { children, className, useWidth, useHeight } = props;
  const classes = [
    className,
    "center-content",
    `on${
      useHeight && useWidth
        ? "both"
        : useHeight && !useWidth
        ? "height"
        : "width"
    }`
  ].join(" ");
  return <div className={classes}>{children}</div>;
};

CenteredPosition.defaultProps = {
  useWidth: true,
  useHeight: false
};
CenteredPosition.displayNmae = "Centered";
export default CenteredPosition;
