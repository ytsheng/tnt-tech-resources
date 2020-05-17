import React from 'react';
import AppFunction from './AppFunction';
import './ExploreFunctions.css';

class ExploreFunctions extends React.Component {
  render() {
    return (
        <div>
            <p className="ExploreFunctions-header">Explore Functions:</p>
            <p>click on any type(s) of apps you are looking for</p>
            <AppFunction id="manual_contact_tracing" name="Manual Contact Tracing" activated={this.props.settings["manual_contact_tracing"]} onClick={(data) => this.props.onClick(data)}/>
            {" "}
            <AppFunction id="information_and_statistics" name="Information And Statistics" activated={this.props.settings["information_and_statistics"]} onClick={(data) => this.props.onClick(data)}/>
            {" "}
            <AppFunction id="immunity_passport" name="Immunity Passport" activated={this.props.settings["immunity_passport"]} onClick={(data) => this.props.onClick(data)}/>
            {" "}
            <AppFunction id="business_readiness" name="Business Readiness" activated={this.props.settings["business_readiness"]} onClick={(data) => this.props.onClick(data)}/>
            {" "}
            <AppFunction id="symptom_checker" name="Symptom Checker" activated={this.props.settings["symptom_checker"]} onClick={(data) => this.props.onClick(data)}/>
            {" "}
            <AppFunction id="exposure_notification" name="Exposure Notification" activated={this.props.settings["exposure_notification"]} onClick={(data) => this.props.onClick(data)}/>
            {" "}
            <AppFunction id="policy" name="Policy" activated={this.props.settings["policy"]} onClick={(data) => this.props.onClick(data)}/>
            {" "}
            <AppFunction id="movement_tracking" name="Movement Tracking" activated={this.props.settings["movement_tracking"]} onClick={(data) => this.props.onClick(data)}/>
            {" "}
            <AppFunction id="locate_testing_centers" name="Locate Testing Centers" activated={this.props.settings["locate_testing_centers"]} onClick={(data) => this.props.onClick(data)}/>
            {" "}
            <AppFunction id="postcare_support" name="Postcare Support" activated={this.props.settings["postcare_support"]} onClick={(data) => this.props.onClick(data)}/>
            {" "}
            <AppFunction id="lab_logistics" name="Lab Logistics" activated={this.props.settings["lab_logistics"]} onClick={(data) => this.props.onClick(data)}/>
            {" "}
            <AppFunction id="symptom_reporting" name="Symptom Reporting" activated={this.props.settings["symptom_reporting"]} onClick={(data) => this.props.onClick(data)}/>
        </div>
    )
  }
}

export default ExploreFunctions;
