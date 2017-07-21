import React, { Component } from "react";
import "../styles/App.css";
import PlayListItem from "./PlayListItem";

class PlayList extends Component {
  constructor(props) {
    super(props);
      this.state = {
        songs: []
      }

  }
  componentDidMount() {
    fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting")
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({ songs: data });
        console.log("SONGS:", this.state.songs);
      });
  }

  render() {
    return (
      <div>
        <button>Update List</button>
        <div>
          <PlayListItem songs={this.state.songs} />
        </div>
      </div>
    );
  }
}

export default PlayList;
