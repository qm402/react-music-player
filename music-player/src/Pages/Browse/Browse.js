import React, { Component } from 'react';
import Loader from '../../Components/Loader/Loader';
import LoadMore from '../../Components/LoadMore/LoadMore';
import playIcon from './play.png';

import './Browse.css';



class Browse extends Component {

    state = {
        loading: false,
        startingIndex: 0,
        tracks: [],
        trackPlaying: ''
    }

    componentDidMount(){
        this.setState({loading: true });
        const endpoint = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart?index=${this.state.startingIndex}&limit=20`;
        this.fetchItems(endpoint);
    }

    fetchItems = (endpoint) => {
        fetch(endpoint)
        .then(results => {
            return results.json();
        }).then(data => {
            this.setState({
                tracks: [...this.state.tracks,...data.tracks.data],
                loading: false,
                startingIndex: 25
            })
           console.log(this.state.tracks)
        })
    }

    // Sending to parent with call back through props
    handlePlay = track => e => {
         e.preventDefault();     
        this.props.handleCurrentTrack(track);
    }

    // Load more
    handleLoadMore = () => {
        this.setState({loading: true})
        let endpoint = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart?index=${this.state.startingIndex}&limit=20`
        this.fetchItems(endpoint);
    }


    divStyle = {
        marginTop: '20px'
    }

    render() {
        return (
            <div style={this.divStyle} >

             <div className="ui five cards">
                {this.state.tracks.map((track, index) => {
                    return (
                        <div key={index} className="ui card">
                            <div className="image dimmable ">
                                <div className="ui blurring inverted dimmer">
                                <div className="content">
                                    <div className="center">
                                    <div className="ui teal button">Add Friend</div>
                                    </div>
                                </div>
                                </div>
                                <div className="image-container" onClick={this.handlePlay(track)}>
                                    <img className="image-section" src={track.album.cover_medium} alt={track.title}/>
                                    <div className="middle-section">
                                        <div className="play-icon"><img src={playIcon} alt="Play" /></div>
                                    </div>
                                </div>

                            </div>
                            <div className="content">
                                <div className="header">{track.title}</div>
                                <div className="meta">
                                <a className="group">{track.artist.name}</a>
                                </div>
                                <div className="description"></div>
                            </div>
                            <div className="extra content">
                                <a className="right floated created" onClick={this.handlePlay(track)}>Play</a>
                            </div>
                         </div>
                    )
                })}

            </div>

            {this.state.loading ? <Loader text="Loading charts"/> :   <LoadMore onClick={this.handleLoadMore} />}
          
            </div>
        );
    }
}


export default Browse;