import React from 'react';
import './AudioPlayer.css';

function AudioPlayer(props) {
    return (
        <div className="audio-player">
            <audio className="audio-player-control" controls autoPlay src={props.preview} >
                Your browser does not support the
                <code>audio</code> element.
            </audio>
        </div>

    );
}

export default AudioPlayer;