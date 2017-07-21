import React, { Component } from "react";
import "../styles/App.css";

class PlayList extends Component {
  render() {
    let songs = this.props.songs.map(songs => {
      return (
        <div className="songs" key={songs._id}>
          <p>User:{songs.songTitle}</p>
          <p>Artist:{songs.songTitle}</p>
          <p>Title:{songs.songTitle}</p>
          <p>Notes:{songs.songNotes}</p>
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
