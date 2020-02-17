import React, { Component } from 'react';
import AlbumThumbnail from './GenreThumnail';
import Spinner from '../elements/Spinner';
import LoadMore from '../elements/LoadMore';
import Navigation from '../Navigation/Navigation';

class AlbumView extends Component {

    state = {
        isLoading: false,
        genres: [],
        indexStart: 0,
        error: null
    }

    componentDidMount(){
        this.setState({isLoading: true });
        const endpoint = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre`;
        this.fetchItems(endpoint);
    }


    fetchItems = (endpoint) => {
        fetch(endpoint)
        .then(res => res.json())
        .then(
          (res) => {
            this.setState({
              genres: [...this.state.genres, ...res.data],
              isLoading: false
            });
            console.log(res);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              error
            });
          }
        )
    }

    render() {
        return (
            <div className="wrapper">
                <h1>Album View</h1>
                <Navigation />
                <div className="music-thumb-wrapper">
                    {this.state.genres.map((genre, index) => {
                        return <AlbumThumbnail key={index} genre={genre} />
                    })}
                 
                </div>
                {this.state.isLoading ? <Spinner /> : null}
      
            </div>
        );
    }
}

export default AlbumView;