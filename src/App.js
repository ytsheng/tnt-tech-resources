import React from 'react';
import logo from './logo.svg';
import './App.css';
import ExploreFunctions from './ExploreFunctions'
import AppList from './AppList'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      exposure_notification: true,
      symptom_reporting: false,
      manual_contact_tracing: true,
    };
  }

  render() {
    return (
      <div className="App-content">
        <ExploreFunctions settings={this.state} onClick={(data) => this.onExploreClick(data)}/>
        <br/>
        <br/>
        <AppList filter={this.state}/>
      </div>
    );
  }

  onExploreClick(data) {
    this.setState(function(state, props) {
      return {
        [data]: !state[data]
      }
    })
  }
}

export default App;
