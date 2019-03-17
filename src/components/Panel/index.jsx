import React from "react";
import pose from "react-pose";
import cn from "classnames";
import "./style.scss";

const ResizeableDiv = props => {
    return <div />;
  },
  base = (Elemen, baseCls = "", baseStyle = {}) => ({
    style,
    className,
    children,
    ...props
  }) => {
    const nprops = {
      className: cn(baseCls, className),
      style: { ...baseStyle, ...style },
      ...props
    };
    return <Elemen {...nprops}>{children}</Elemen>;
  };
export const Page = base("div", "page"),
  MainSide = base("main", "main-side"),
  PortalRoot = base("div", "portal-root"),
  Header = base("header", "header"),
  Footer = base("footer", "footer"),
  SideBar = base("aside", "sidebar"),
  Content = base("div", "content");

export const Panel = props => {
  return (
    <div className="debug page-lyt">
      <Page className="debug">
        <SideBar>SideBar</SideBar>
        <MainSide>
          <Header>Header</Header>
          <Content>Main</Content>
          <Footer>Footer</Footer>
        </MainSide>
      </Page>
      <PortalRoot />
    </div>
  );
};
export default Panel;
