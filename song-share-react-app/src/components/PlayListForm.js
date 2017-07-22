import React, { Component } from "react";
import "../styles/App.css";

class PlayListForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTrack: {}
    };
  }

  updateTrack = e => {
    let newTrack = this.state.newTrack;
    newTrack[e.target.value] = e.target.value;
    this.setState({ newTrack });
  };

  addToList = e => {
    e.preventDefault();

    fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
      method: "POST",
      body: this.state.newTrack,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        alert("yay, you posted data");
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
      <form className="formData width">
        <div>
          <label className="formLabel">User Name:</label>
          <br />
          <input type="artist" />
        </div>
        <div>
          <label className="formLabel">User Name:</label>
          <br />
          <input type="artist" />
        </div>
        <div>
          <label className="formLabel">User Name:</label>
          <br />
          <input type="artist" />
        </div>
        <div>
          <label className="formLabel">User Name:</label>
          <br />
          <input type="artist" />
        </div>
        <input type="submit" onClick={this.updateTrack} />
      </form>
    );
  }
}

export default PlayListForm;
