import React, { Component } from "react";
import "../styles/App.css";

class PlayList extends Component {
  render() {
    let songs = this.props.songs.map(songs => {
      return (
        <div className="songs" key={songs._id}>
          <p className="songContent">
            <span className="songLabel">User:</span>
            {songs.songTitle}
          </p>
          <p className="songContent">
            <span className="songLabel">Artist:</span>
            {songs.songTitle}
          </p>
          <p className="songContent">
            <span className="songLabel">Title:</span>
            {songs.songTitle}
          </p>
          <p className="songContent">
            <span className="songLabel">Notes:</span>
            {songs.songNotes}
          </p>
        </div>
      );
    });
    return (
      <div className="songItem">
        {songs}
      </div>
    );
  }
}

export default PlayList;
