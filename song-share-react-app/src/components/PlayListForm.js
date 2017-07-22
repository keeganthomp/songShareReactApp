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
    console.log(this.state.newTrack);
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
        <div className="formDiv">
          <label className="formLabel">User Name:</label>
          <br />
          <input className="formInput" type="text" />
        </div>
        <div className="formDiv">
          <label className="formLabel">Artist/Band:</label>
          <br />
          <input className="formInput" type="text" />
        </div>
        <div className="formDiv">
          <label className="formLabel">Song Title:</label>
          <br />
          <input className="formInput" type="text" />
        </div>
        <div className="formDiv">
          <label className="formLabel">Notes About Song:</label>
          <br />
          <textarea className="formNotes" type="text" />
        </div>
        <input
          className="submitForm"
          type="submit"
          onClick={this.updateTrack}
        />
      </form>
    );
  }
}

export default PlayListForm;
