import React from 'react';
import Navigation from './Navigation/Navigation';


class App extends React.Component {

    state = {
        isLoading: false,
        genres: [],
        indexStart: 0,
        error: null
    }




    render() {

        return (
            <div className="wrapper">
                <h1>Home</h1>
                <Navigation />
                <div className="ui three column grid">
                <div className="column">
                    <div className="ui segment">
                        1
                    </div>
                </div>

                <div className="column">
                    <div className="ui segment">
                        2
                    </div>
                </div>

                <div className="column">
                    <div className="ui segment">
                        3
                    </div>
                </div>

                <div className="column">
                    <div className="ui segment">
                        4
                    </div>
                </div>

                </div>

   

            
                
            </div>

        );
    }
}



export default App;

