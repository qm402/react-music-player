import React from 'react';

const Spinner = () => {

    const loaderHeaderStyle = {
        margin: '0 auto 20px'
      };

    return (
        // <div className="loading">
        //     <h5 style={loaderHeaderStyle}>Loading..</h5>
        //     <div className="loading-bar"></div>
        //     <div className="loading-bar"></div>
        //     <div className="loading-bar"></div>
        //     <div className="loading-bar"></div>
        // </div>

        <div class="ui active centered inline loader"></div>
    )
}

export default Spinner;