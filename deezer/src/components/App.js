import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Home from './Home';
import ChartView from './Charts/ChartView';
import Chart from './Charts/Chart';
import GenreView from './Genre/GenreView';



const App = () => {
        return (
        <BrowserRouter>
            <React.Fragment> {/* No need for div wrapper */}
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/chartview/:trackId" component={Chart} exact />
                    <Route path="/chartview" component={ChartView} exact />
                    <Route path="/genreview" component={GenreView} exact />
                </Switch>
            </React.Fragment>
        </BrowserRouter>
        );
}


export default App;

