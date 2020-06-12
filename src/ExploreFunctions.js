import React from 'react';
import AppFunction from './AppFunction';
import './ExploreFunctions.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


class ExploreFunctions extends React.Component {
    render() {
        return (
            <div>
            <p className="ExploreFunctions-header">Explore Functions:</p>
            <p>click on any type(s) of apps you are looking for</p>
            <Button className="btn mr-3 mb-2 border-success text-success" variant="light" onClick={() => this.props.setAll(true)}>Select all</Button>
            <Button className="btn mb-2 border-danger border-3 text-danger" variant="light" onClick={() => this.props.setAll(false)}>Clear all</Button>
            <br />

            {" "}
            <AppFunction
                id="manual_contact_tracing"
                name="Manual Contact Tracing"
                activated={this.props.settings["manual_contact_tracing"]}
                onClick={(data) => this.props.onClick(data)}
                description={`Apps that provide a series of tasks that help tracers
                    (human investigators) to trace groups that might be exposed.`}/>
            {" "}
            <AppFunction
                id="symptom_reporting"
                name="Symptom Reporting"
                activated={this.props.settings["symptom_reporting"]}
                onClick={(data) => this.props.onClick(data)}
                description={`Apps that allows users to report their symptoms and
                    health status.`}/>
            {" "}
            <AppFunction
                id="exposure_notification"
                name="Exposure Notification"
                activated={this.props.settings["exposure_notification"]}
                onClick={(data) => this.props.onClick(data)}
                description={`Apps that alerts people/general public on potential
                    Covid19 exposure. In other words, this may be called "Digital
                    Contact Tracing".`}/>
            {" "}
            <AppFunction
                id="lab_logistics"
                name="Lab Logistics"
                activated={this.props.settings["lab_logistics"]}
                onClick={(data) => this.props.onClick(data)}
                description={`Apps that provide a series of lab logistic tasks for
                    the users for example, providing test results and/or tracking the
                    status of COVID-19 tests and/or managing logistics for critical
                    medical supplies `}/>
            {" "}
            <AppFunction
                id="policy"
                name="Policy"
                activated={this.props.settings["policy"]}
                onClick={(data) => this.props.onClick(data)}
                description={``}/>
            {" "}
            <AppFunction
                id="symptom_checker"
                name="Symptom Checker"
                activated={this.props.settings["symptom_checker"]}
                onClick={(data) => this.props.onClick(data)}
                description={`Apps that provides information that allows users to
                    check their own symptoms and health status.`}/>
            {" "}
            <AppFunction
            id="locate_testing_centers"
            name="Locate Testing Centers"
            activated={this.props.settings["locate_testing_centers"]}
            onClick={(data) => this.props.onClick(data)}
            description={`Apps that provide users information about where Covid19
                test centers and/or health facilities are. `}/>
            {" "}
            <AppFunction
                id="postcare_support"
                name="Postcare Support"
                activated={this.props.settings["postcare_support"]}
                onClick={(data) => this.props.onClick(data)}
                description={`Apps that provide care to people who have been
                    treated.`}/>
            {" "}
            <AppFunction
                id="information_and_statistics"
                name="Information And Statistics"
                activated={this.props.settings["information_and_statistics"]}
                onClick={(data) => this.props.onClick(data)}
                description={`Apps that spread Covid19 related data/statistics to the
                    Target Audience, this includes educational resources.`}/>
            {" "}
            <AppFunction
                id="movement_tracking"
                name="Movement Tracking"
                activated={this.props.settings["movement_tracking"]}
                onClick={(data) => this.props.onClick(data)}
                description={`Apps that tracks movement information through
                    technologies such as "Bluetooth", "GPS" etc to help inform health
                    authority.`}/>
            {" "}
            <AppFunction
                id="business_readiness"
                name="Business Readiness"
                activated={this.props.settings["business_readiness"]}
                onClick={(data) => this.props.onClick(data)}
                description={`Apps that help business to reopen and help business manage in this
                    tough situation.`}/>
            {" "}
            <AppFunction
                id="health_passport"
                name="Health Passport"
                activated={this.props.settings["health_passport"]}
                onClick={(data) => this.props.onClick(data)}
                description={`Apps that share users' health status or provide
                    Covid19 immunity proof.`}/>
            </div>
        )
    }
}

export default ExploreFunctions;
