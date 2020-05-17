import React from 'react';
import logo from './tnt-logo.png';
import './App.css';
import ExploreFunctions from './ExploreFunctions'
import AppList from './AppList'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      exposure_notification: false,
      symptom_reporting: false,
      manual_contact_tracing: true,
      symptom_checker: false,
      symptom_reporting: false,
      lab_logistics: false,
      information_and_statistics: false,
      locate_testing_centers: false,
      policy: false,
      postcare_support: false,
      business_readiness: false,
      immunity_passport: false,
      movement_tracking: false,
      postcare_support: false,
      immunity_passport: false,
    };
  }

  render() {
    return (
      <div>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="App-content">
          <h1></h1>
          <ExploreFunctions settings={this.state} onClick={(data) => this.onExploreClick(data)}/>
          <br/>
          <br/>
          <AppList filter={this.state}/>
        </div>
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
