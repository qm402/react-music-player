import React from 'react';

const LoadMore = (props) => {
    return <button className="loadMoreBtn" onClick={props.onClick}><h3>{props.text}</h3></button>
}

export default LoadMore;