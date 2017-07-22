import React, { Component } from "react";
import "../styles/App.css";
import PlayListItem from "./PlayListItem";

class PlayList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: []
    };
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

  fetchData = e => {
    // e.preventDefault();
    fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting")
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({ songs: data });
        console.log("songs from clicking 'update button':", this.state.songs)
      });
  };

  render() {
    return (
      <div className="width">
        <form>
          <input className="updateButton" type="button" onClick={this.fetchData} value="update" />
        </form>
        <div>
          <PlayListItem songs={this.state.songs} />
        </div>
      </div>
    );
  }
}

export default PlayList;
