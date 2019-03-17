import React from "react";
import ReactDOM from "react-dom";
import Search from "./components/Search";
import { H, SH, T, Tt, STt } from "./components/Text";
import { Panel } from "./components/Panel";
import { CometLoader } from "./components/Loader";
import "./styles.scss";

function App() {
  return (
    <div className="App">
      <Panel />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
