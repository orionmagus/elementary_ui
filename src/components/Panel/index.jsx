import React from "react";
import posed from "react-pose";
import SplitText from "react-pose-text";
import { Icon } from "../../Load";
import Center from "./Center";
import { CometLoader } from "../Loader";
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
const Container = posed.div({
  enter: { staggerChildren: 50 }
});
const EnterLeft = posed.div({
  draggable: true,
  init: { opacity: 1 },
  drag: { opacity: 0.5 },
  dragEnd: {
    x: 0,
    y: 0,
    transition: { type: "spring" }
  },
  enter: { x: 0, opacity: 1 },
  exit: { x: 50, opacity: 0 }
});
export const Page = base("div", "page"),
  MainSide = base("main", "main-side"),
  PortalRoot = base("div", "page portal-root"),
  Header = base("header", "header"),
  Footer = base("footer", "footer"),
  SideBar = base(
    posed.aside({
      wide: { "--sidebar-width": "230px" },
      mini: { "--sidebar-width": "50px" },
      offscreen: { "--sidebar-width": "0px" },
      initialPose: "wide"
    }),
    "sidebar",
    { "--sidebar-width": "230px" }
  ),
  Content = () => {
    const cil = [
      "stats 0",
      "stats 1",
      "stats 2",
      "stats 3",
      "stats 4",
      "stats 5",
      "main-chart",
      "aux 0",
      "aux 1",
      "aux 2",
      "aux 3",
      "aux 4",
      "aux 5"
    ];
    return (
      <Container className="content col6 ro220xfrx164 main3x2">
        {cil.map(c => (
          <EnterLeft key={c} className={c} />
        ))}
      </Container>
    );
  },
  Goo = props => <div className="goo" {...props} />,
  Inner = props => <div className="inner" {...props} />,
  Overlay = props => <div className="overlay" {...props} />;

const charPoses = {
  enter: { y: 0 },
  exit: { y: ({ initialOffset }) => initialOffset }
};

export const TextAnim = ({ text }) => (
  <SplitText initialOffset={50} charPoses={charPoses}>
    {text}
  </SplitText>
);
/*
 <PortalRoot>
        <Overlay style={{ visibility: "hidden" }}>
          <Center>
            <CometLoader style={{ background: "rgba(0, 0, 0, 0.05)" }}>
              Loading...
            </CometLoader>
          </Center>
        </Overlay>
      </PortalRoot>
      
      */
export const Panel = props => {
  const { Pcontent, NavBar } = props;
  return (
    <div className="page-lyt">
      <Page>
        <SideBar>
          <Inner>
            <a className="toggler">
              <Icon name="menu" />
            </a>
          </Inner>
        </SideBar>
        <MainSide>
          <Header>
            <NavBar />
          </Header>
          <Pcontent />
          <Footer>Footer</Footer>
        </MainSide>
      </Page>
    </div>
  );
};
Panel.defaultProps = {
  NavBar: Inner,
  Pcontent: Content
};
export default Panel;
