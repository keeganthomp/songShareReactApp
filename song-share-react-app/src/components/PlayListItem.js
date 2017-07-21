import React, {Component} from 'react';
import "../styles/App.css"

class PlayList extends Component{
    render(){
        return(
            <div className="songs">
                <p>User:</p>
                <p>Artist:</p>
                <p>Title:</p>
                <p>Notes:</p>
                </div>
        );
    }
}

export default PlayList;