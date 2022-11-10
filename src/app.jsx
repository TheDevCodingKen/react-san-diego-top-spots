import axios from 'axios';
import React, { Component } from 'react';
import TopSpot from './topspot';

export class App extends Component {
  constructor(props) {
    // initialize the state of the app
    super(props);
    this.state = {
      topspots: []
    };
  }

  componentWillMount() {
    axios
    .get('https://sd-top-spots.tbox.tools/')
    .then(response => response.data)
    .then(topspots => this.setState({ topspots }));
  }

  render() {
    return (
      <div className='App'>
        <div className='headerContainer container'>
          <div className='row container'>
            <header>
              <h1>San Diego Top Spots</h1>
              <p>A list of the top 30 places to see in San Diego, California.</p>
            </header>
          </div>
        </div>
        {/* Generate a list of presentational components */}
        <div className='container'>
          <div className='row row-cols-md-2'>
            {
            this.state.topspots.map(topspot => (
              <TopSpot
                key={ topspot.id }
                name={ topspot.name }
                description={ topspot.description }
                location={ topspot.location }
                latitude={ topspot.location[0] }
                longitude={ topspot.location[1] }
              />
            ))
          }
          </div>
        </div>
      </div>
    );
  }
  }

export default App;
