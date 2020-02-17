import React from 'react';

const Loader = (props) => {

    const loaderStyle = {
        width: '100%',
        height: '50px',
        margin: '15px auto 10px'
    }

    return (
        <button style={loaderStyle} className="ui loading button">{props.text}</button>
    );
}

export default Loader;