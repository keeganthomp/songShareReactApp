import React, { Component } from "react";
import "../styles/App.css";

class PlayListForm extends Component {
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
      body: listItem.JSON,
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
        <input type="submit" onClick={this.addToList} />
      </form>
    );
  }
}

export default PlayListForm;
