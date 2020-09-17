import React from 'react';
import './App.css';
import PlaceImage from './components/PlaceImage';
import Header from './components/layout/Header'

class App extends React.Component {
  state = {
    stats_array: [
      {
        id: 1,
        title: 'Build Points',
        value: 37
      },
      {
        id: 2,
        title: 'Unrest',
        value: 0
      },
      {
        id: 3,
        title: 'Control DC',
        value: 42
      },
      {
        id: 4,
        title: 'Economy',
        value: 61
      },
      {
        id: 5,
        title: 'Loyalty',
        value: 42
      },
      {
        id: 6,
        title: 'Stability',
        value: 47
      },
    ],
    change_id: 10
  }

//  Change Value
  onChange1 = (id_) => {
    this.setState({
      change_id: id_
    });
  }
  onChange2 = (e) => {
    this.setState({ stats_array: this.state.stats_array.map(sarray => {
      if(sarray.id === this.state.change_id && e.key === 'Enter') {
        sarray.value = e.target.value
        }
        return sarray;
      })
    });
  }

  render() {
    return (
      <div>
        <Header />
        <PlaceImage
          statarray={this.state.stats_array}
          onChange1={this.onChange1}
          onChange2={this.onChange2}
        />
      </div>
    );
  }
}

export default App;