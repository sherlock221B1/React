import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TopBar from "./components/Top-Bar";
import { Body } from "./components/Body";

function App() {
  return (
    <div className="App">
      <TopBar city="Dagon" />
      <Body />
    </div>
  );
}

export default App;
