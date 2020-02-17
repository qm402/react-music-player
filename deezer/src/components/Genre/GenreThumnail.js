import React from 'react';

const AlbumThumbnail = (props) => {
    return (
        <div className="music-thumb">
            <h2>{props.genre.name}</h2>
            <img src={props.genre.picture_medium} alt={props.genre.name}/>
        </div>
    )
}

export default AlbumThumbnail;