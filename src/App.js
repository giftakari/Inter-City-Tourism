import React from "react";
import logo from "./logo.svg";
import NavBar from "./components/NavBar/NavBar";
import TourList from "./components/TourList";
import "./App.scss";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <TourList />
      </React.Fragment>
    );
  }
}
export default App;
