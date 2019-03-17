import React from "react";
import ReactDOM from "react-dom";
import Search from "./components/Search";
import { H, SH, T, Tt, STt } from "./components/Text";
import { Panel, Content } from "./components/Panel";
import { CometLoader } from "./components/Loader";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import posed, { PoseGroup } from "react-pose";
import Load from "./Load";
import "./styles.scss";

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: true },
  exit: { opacity: 0 }
});

const contentRoute = props => {
    <Route
      render={props => {
        <RouteContainer key={props.location.key}>
          <Switch location={props.location}>
            <Route exact path="/" component={Content} key="home" />
            <Route path="/icons" component={Load} key="about" />
          </Switch>
        </RouteContainer>;
      }}
    />;
  },
  sideBarNav = props => (
    <nav>
      <Link to="/">Page Grid</Link>
      <Link to="/icons">Icons</Link>
      <Link to="/calendar">Calendar</Link>
      <Link to="/show_case">Show Case</Link>
    </nav>
  );

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Panel NavBar={sideBarNav} content={contentRoute} />
      </BrowserRouter>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
