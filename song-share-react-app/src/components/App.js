import React, { Component } from "react";
import "../styles/App.css";
import "../styles/index.css";
import NavBar from "./NavBar";
import PlayListForm from "./PlayListForm";
import PlayList from "./PlayList";

class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="musicData">
          <PlayListForm className="width" addToDb={this.addToList} />
          <PlayList className="width" />
        </div>
      </div>
    );
  }
}

export default App;
