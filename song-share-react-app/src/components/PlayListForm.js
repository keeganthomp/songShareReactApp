import React, { Component } from "react";
import "../styles/App.css";

class PlayListForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      songArtist: "",
      songTitle: "",
      SongNotes: ""
    };
  }

  addToList = e => {
    e.preventDefault();
    this.setState({
      userName: e.target.value,
      songTitle: e.target.value,
      songArtist: e.target.value,
      songNotes: e.target.value
    });
    let listItem = JSON.stringify(this.state);

    fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
      method: "POST",
      body: listItem,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        console.log(response, "yay");
      })
      .catch(err => {
        console.log(err, "boo!");
      });
    this.setState({
      userName: "",
      songNotes: "",
      songArtist: "",
      songTitle: ""
    });
  };

  render() {
    return (
      <form>
        <label>User Name:</label>
        <input type="artist" />
        <label>User Name:</label>
        <input type="artist" />
        <label>User Name:</label>
        <input type="artist" />
        <label>User Name:</label>
        <input type="artist" />
      </form>
    );
  }
}

export default PlayListForm;
