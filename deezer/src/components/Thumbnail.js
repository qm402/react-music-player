import React from 'react';
import { Link } from 'react-router-dom';

const Thumbnail = (props) => {
    return (
        <div className="music-thumb">
            <h2>{props.track.title}</h2>
            <Link to={{ pathname: `chartview/${props.trackId}` }} ><img src={props.track.album.cover_medium} alt={props.track.title}></img></Link>
        </div>
    )
}

export default Thumbnail;


