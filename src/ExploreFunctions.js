import React from 'react';
import AppFunction from './AppFunction';
import './ExploreFunctions.css';

class ExploreFunctions extends React.Component {
  render() {
    return (
        <div>
            <p className="ExploreFunctions-header">Explore Functions:</p>
            <AppFunction
              id="exposure_notification"
              name="Exposure Notification"
              activated={this.props.settings["exposure_notification"]}
              onClick={(data) => this.props.onClick(data)}/>
            {' '}
            <AppFunction
              id="manual_contact_tracing"
              name="Manual Contact Tracing"
              activated={this.props.settings["manual_contact_tracing"]}
              onClick = {(data) => this.props.onClick(data)}/>
            {' '}
            <AppFunction
              id="symptom_reporting"
              name="Symptom Reporting"
              activated={this.props.settings["symptom_reporting"]}
              onClick={(data) => this.props.onClick(data)}/>
        </div>
    );
  }
}

export default ExploreFunctions;
