import React, { Component } from "react";
import "../styles/App.css";
import "../styles/index.css";
import NavBar from "./NavBar";
import PlayListForm from "./PlayListForm";
import PlayList from "./PlayList";

class App extends Component {
  fetchData = e => {
    e.preventDefault();
    fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting")
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({ songs: data });
      });
  };

  render() {
    return (
      <div className="App">
        <NavBar />
        <PlayListForm />
        <PlayList />
      </div>
    );
  }
}

export default App;
