import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
            <div className="ui menu">
                <div className="header item">Music Player</div>
                <Link to="/" className="item">Home</Link>
                <Link to="/browse" className="active item">Browse</Link>
                {/* <div className="ui dropdown item" tabIndex={0}>
                Dropdown
                <i className="dropdown icon" />
                <div className="menu transition hidden" tabIndex={-1}>
                    <div className="item">Action</div>
                    <div className="item">Another Action</div>
                    <div className="item">Something else here</div>
                    <div className="divider" />
                    <div className="item">Separated Link</div>
                    <div className="divider" />
                    <div className="item">One more separated link</div>
                </div>
                </div> */}
                <div className="right menu">
                <div className="item">
                    <div className="ui action left icon input">
                    <i className="search icon" />
                    <input type="text" placeholder="Search" />
                    <button className="ui button">Submit</button>
                    </div>
                </div>
                </div>
            </div>

    );
};

export default Header;