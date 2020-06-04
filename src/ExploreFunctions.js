import React from 'react';
import AppFunction from './AppFunction';
import './ExploreFunctions.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

// function checkAll(items) {
//   for (const item in items) {
//     if (items[item] === false) {
//       console.log('false found')
//       return false
//     }
//   }
//   return true;
// }

class ExploreFunctions extends React.Component {
  render() {
    return (
        <div>
            <p className="ExploreFunctions-header">Explore Functions:  </p>
            <p>click on any type(s) of apps you are looking for</p>
            <Button className="btn mr-3 mb-2 border-success text-success" variant="light" onClick={() => this.props.setAll(true)}>Select all</Button>
            <Button className="btn mb-2 border-danger border-3 text-danger" variant="light" onClick={() => this.props.setAll(false)}>Clear all</Button>
            <br />
{/* <AppFunction id="all" name="All" activated={checkAll(this.props.settings)} onClick={(data) => this.props.onClick("all")}/>
{" "}           */}
{" "}
<AppFunction id="manual_contact_tracing" name="Manual Contact Tracing" activated={this.props.settings["manual_contact_tracing"]} onClick={(data) => this.props.onClick(data)}/>
{" "}
<AppFunction id="symptom_reporting" name="Symptom Reporting" activated={this.props.settings["symptom_reporting"]} onClick={(data) => this.props.onClick(data)}/>
{" "}
<AppFunction id="exposure_notification" name="Exposure Notification" activated={this.props.settings["exposure_notification"]} onClick={(data) => this.props.onClick(data)}/>
{" "}
<AppFunction id="lab_logistics" name="Lab Logistics" activated={this.props.settings["lab_logistics"]} onClick={(data) => this.props.onClick(data)}/>
{" "}
<AppFunction id="policy" name="Policy" activated={this.props.settings["policy"]} onClick={(data) => this.props.onClick(data)}/>
{" "}
<AppFunction id="symptom_checker" name="Symptom Checker" activated={this.props.settings["symptom_checker"]} onClick={(data) => this.props.onClick(data)}/>
{" "}
<AppFunction id="locate_testing_centers" name="Locate Testing Centers" activated={this.props.settings["locate_testing_centers"]} onClick={(data) => this.props.onClick(data)}/>
{" "}
<AppFunction id="postcare_support" name="Postcare Support" activated={this.props.settings["postcare_support"]} onClick={(data) => this.props.onClick(data)}/>
{" "}
<AppFunction id="information_and_statistics" name="Information And Statistics" activated={this.props.settings["information_and_statistics"]} onClick={(data) => this.props.onClick(data)}/>
{" "}
<AppFunction id="movement_tracking" name="Movement Tracking" activated={this.props.settings["movement_tracking"]} onClick={(data) => this.props.onClick(data)}/>
{" "}
<AppFunction id="business_readiness" name="Business Readiness" activated={this.props.settings["business_readiness"]} onClick={(data) => this.props.onClick(data)}/>
{" "}
<AppFunction id="health_passport" name="Health Passport" activated={this.props.settings["health_passport"]} onClick={(data) => this.props.onClick(data)}/>
       </div>
    )
  }
}

export default ExploreFunctions;
