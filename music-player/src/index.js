import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Browse from './Pages/Browse/Browse';
import Header from './Components/Header/Header';
import AudioPlayer from './Components/AudioPlayer/AudioPlayer';


import './style.css';


class App extends React.Component {

    state = {
        currentlyPlaying: ''
    };

    handleCurrentTrack = (track) => {
      this.setState({
          currentlyPlaying: track
      }, () => {
          console.log(this.state);
      })
    }

    render(){
    
        return (
              <div className="site-wrapper">
                <AudioPlayer preview={this.state.currentlyPlaying.preview}/>
                <BrowserRouter>
                   <Header />
                    <Switch>
                        <Route path="/browse" exact>
                            <Browse handleCurrentTrack={this.handleCurrentTrack} />
                        </Route>
                        <Route path="/" exact>
                            <Home />
                        </Route>
                    </Switch>
                </BrowserRouter>
               
              
            </div>
        )
    }
}


ReactDOM.render(<App/>, document.querySelector('#root'));