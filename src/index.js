import React from "react";
import ReactDOM from "react-dom";
import Search from "./components/Search/index.jsx";
import "./styles.scss";
const T = props => (
    <span className="text" {...props}>
      {props.children}
    </span>
  ),
  Heading = props => (
    <span className="text" {...props}>
      {props.children}
    </span>
  ),
  SubHeading = props => (
    <span className="text h" {...props}>
      {props.children}
    </span>
  ),
  Title = props => (
    <span className="text" {...props}>
      {props.children}
    </span>
  ),
  Interactive = props => {
    return (
      <div className="ba-cut">
        <div className="interactive item fluid">
          <T>{props.text || props.children}</T>
        </div>
      </div>
    );
  },
  Btn = props => (
    <div className="ba-cut">
      <div className="interactive button">
        <T>{props.children}</T>
      </div>
    </div>
  ),
  Panel = props => (
    <div className="interactive button">
      {" "}
      <T>{props.children}</T>
    </div>
  ),
  AppBar = props => <div className="interactive button"> Text</div>;

function App() {
  return (
    <div className="skin">
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
      <Search />
      <Interactive text="Item" />
      <Btn>Button</Btn>
      <Search className="icon hover" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
