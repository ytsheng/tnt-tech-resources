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
          <a href="https://www.testandtrace.com"><img src={logo} alt="logo" /> #TestAndTrace Homepage </a>
          <br/>
          <h1 className="App-header">The Best Contact Tracing Tech Resources</h1>
        </div>
        <br/>
        <br/>
        <div className="App-content">
          <p className="App-header-intro">Entrepreneurs, app developers, government agencies and more are working on a range of technologies for containing the COVID-19 outbreak in the United States.They include mobile and web-based solutions designed to facilitate activities such as contact tracing and screening for symptoms of the coronavirus.</p>
          <p className="App-header-intro">The following list covers the all technological applications that are COVID-19 related.</p>
          <br/>
          <br/>
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
