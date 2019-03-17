import React from "react";
import { T } from "../Text";
export const Interactive = props => {
    return (
      <div className="interactive item fluid">
        <T>{props.text || props.children}</T>
      </div>
    );
  },
  Btn = props => (
    <div className="interactive button">
      <T>{props.children}</T>
    </div>
  );
