import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Navigation.css';


const Navigation = () => {
    return (
   
        <div className="nav-wrapper">
            <div className="nav-col">
                <Link to="/">Home</Link>
            </div>
            <div className="nav-col">
                <Link to="/chartview">Charts</Link>
            </div>
            <div className="nav-col">
                <Link to="/genreview">GenreView</Link>
            </div>


        </div>
  
    )
}

export default Navigation;