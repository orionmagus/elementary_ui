import React from "react";
import cn from "classnames";
import posed, { h1, h3, span, div } from "react-pose";
import "./style.scss";

const elem = {
  span,
  h1,
  h3,
  div
};
export const TextBase = ({
  as,
  sub,
  heading,
  title,
  style,
  poseConfig,
  baseStyle,
  className,
  children,
  ...props
}) => {
  const nprops = {
    className: cn('text': {
      'sub': sub,
      'heading': heading,
      'title': title
    }, className),
    style: { ...baseStyle,...style},
    ...props
  },
    Elemen = poseConfig ? elem[as] || span: `${as}`;
  return <Elemen {...nprops} >{children}</Elemen>
};
TextBase.defaultProps = {
  as: "span",
  className: "",
  sub: false,
  heading: false,
  title: false,
  baseStyle: {},
  poseConfig: false
};
export const Text = TextBase, 
  Heading = props => <TextBase {...props} as='h1' heading />,
  SubHeading = props => <TextBase {...props} as='h3' sub heading />,
  Title = props => <TextBase {...props} title />,   
  SubTitle = props => <TextBase {...props} sub title />,
  T = Text,
  H = Heading,
  SH = SubHeading,
  Tt = Title,
  STt = SubTitle;
export default Text
