import React, { useState } from "react";
import icons22 from "./style/icon-22-18.json";
import { fromJS } from "immutable";
import { mapMerg } from "./lib/lodash/transformUtils";
import "./style/icon.scss";
const processIconLibrary = iconRaw => {
    var { icons, viewBox } = iconRaw;
    mapMerg(icons, (d, k) => ({ [k]: { d, viewBox } }));
  },
  Icons = icons22.icons;

export const Icon = ({ className, style, size, viewBox, name, ...props }) => {
  const [select, setSelect] = useState(false);
  if (name === false) {
    return;
  }
  const svg_props = {
      className: `path-icon ${className} ${select ? " positive" : ""}`,
      viewBox,
      style: { ...style, "--sz": size + "px" },
      xmlns: "http://www.w3.org/2000/svg"
    },
    path_props = { d: Icons[name] },
    handler = e => {
      setSelect(!select);
      const mhndl = props.onClick || false;
      if (mhndl) {
        mhndl.apply(null, e);
      }
    };

  return (
    <span className="icon" onClick={v => handler(v)}>
      <svg {...svg_props}>
        <path {...path_props} />
      </svg>
      <span className="icon-label"> {name} </span>
    </span>
  );
};
Icon.defaultProps = {
  name: false,
  size: 24,
  viewBox: "0 0 28 22"
};
export default () => (
  <div className="fdf">
    {Object.keys(Icons).map((name, ik) => (
      <Icon key={ik} name={name} />
    ))}
  </div>
);
