import React, { component } from "react";
import "../styles/App.css";

class PlayListForm extends Component {
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
