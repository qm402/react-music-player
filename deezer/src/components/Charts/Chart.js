import React from 'react';
import Spinner from './../elements/Spinner';

class Chart extends React.Component {

    state = {
        chart: '',
        isLoading: false
    }

    componentDidMount(){
        this.setState({isLoading: true });
        const endpoint = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${this.props.match.params.trackId}`
        this.fetchItems(endpoint);
    }

    fetchItems = (endpoint) => {
        fetch(endpoint)
        .then(res => res.json())
        .then(
          (res) => {            
            this.setState({
             chart: res,
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
     
    }



    render() {

      return (
            <div className="wrapper">
                  <h1>Chart Details</h1>
                  {this.state.isLoading ? <Spinner /> : 
                    <div className="ui card">
                    <div className="image">
                      <img src={this.state.chart} alt="" />
                    </div>
                    <div className="content">
                      <a className="header">{this.state.chart.title}</a>
                      <div className="meta">
                        <span className="date">{this.state.chart.rank}</span>
                      </div>
                      <div className="description">
                       
                      </div>
                    </div>
                    <div className="extra content">
                      <a>
                        <i className="user icon" />
                        {this.state.chart.rank} Rank
                      </a>
                    </div>
                </div>
                  
                  }
             </div>
        );
    }
}



export default Chart;