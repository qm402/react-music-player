import React, { Component } from 'react';
import Thumbnail from './../Thumbnail';
import Spinner from './../elements/Spinner';
import LoadMore from './../elements/LoadMore';
import Navigation from '../Navigation/Navigation';

class ChartView extends Component {

    state = {
        isLoading: false,
        tracks: [],
        indexStart: 0,
        error: null
    }

    componentDidMount(){
        this.setState({isLoading: true });
        const endpoint = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart?index=${this.state.indexStart}&limit=12`
        this.fetchItems(endpoint);
    }

    handleLoadMore = () => {
        let indexStart = this.state.indexStart + 12;
        this.setState({indexStart: indexStart, isLoading: true})
        const endpoint = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart?index=${indexStart}&limit=12`;
        this.fetchItems(endpoint);
    }


    fetchItems = (endpoint) => {
        fetch(endpoint)
        .then(res => res.json())
        .then(
          (res) => {
            this.setState({
              tracks: [...this.state.tracks, ...res.tracks.data],
              isLoading: false
            });
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
        console.log(this.state.tracks)
    }

    render() {
        return (
            <div className="wrapper">
                <h1>Chart View</h1>
                <Navigation />
                <div className="music-thumb-wrapper">
                    {this.state.tracks.map((track) => {
                        return <Thumbnail key={track.id} track={track} trackId={track.id}/>
                    })}
                 
                </div>
                {this.state.isLoading ? <Spinner /> : null}
                {!this.state.isLoading ? <LoadMore onClick={this.handleLoadMore} text={'Load Charts'}/> : null}


            </div>
        );
    }
}

export default ChartView;