import React from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import AppFunction from './AppFunction';
import './ExploreFunctions.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const ExploreFunctions = ({ setAll, onClick, settings }) => (
  <div>
    <p className="ExploreFunctions-header">Explore Functions:</p>
    <p>click on any type(s) of apps you are looking for</p>
    <Button className="btn mr-3 mb-2 border-success text-success" variant="light" onClick={() => setAll(true)}>Select all</Button>
    <Button className="btn mb-2 border-danger border-3 text-danger" variant="light" onClick={() => setAll(false)}>Clear all</Button>
    <br />

    {' '}
    <AppFunction id="manual_contact_tracing" name="Manual Contact Tracing" activated={settings.manual_contact_tracing} onClick={(data) => onClick(data)} />
    {' '}
    <AppFunction id="symptom_reporting" name="Symptom Reporting" activated={settings.symptom_reporting} onClick={(data) => onClick(data)} />
    {' '}
    <AppFunction id="exposure_notification" name="Exposure Notification" activated={settings.exposure_notification} onClick={(data) => onClick(data)} />
    {' '}
    <AppFunction id="lab_logistics" name="Lab Logistics" activated={settings.lab_logistics} onClick={(data) => onClick(data)} />
    {' '}
    <AppFunction id="policy" name="Policy" activated={settings.policy} onClick={(data) => onClick(data)} />
    {' '}
    <AppFunction id="symptom_checker" name="Symptom Checker" activated={settings.symptom_checker} onClick={(data) => onClick(data)} />
    {' '}
    <AppFunction id="locate_testing_centers" name="Locate Testing Centers" activated={settings.locate_testing_centers} onClick={(data) => onClick(data)} />
    {' '}
    <AppFunction id="postcare_support" name="Postcare Support" activated={settings.postcare_support} onClick={(data) => onClick(data)} />
    {' '}
    <AppFunction id="information_and_statistics" name="Information And Statistics" activated={settings.information_and_statistics} onClick={(data) => onClick(data)} />
    {' '}
    <AppFunction id="movement_tracking" name="Movement Tracking" activated={settings.movement_tracking} onClick={(data) => onClick(data)} />
    {' '}
    <AppFunction id="business_readiness" name="Business Readiness" activated={settings.business_readiness} onClick={(data) => onClick(data)} />
    {' '}
    <AppFunction id="health_passport" name="Health Passport" activated={settings.health_passport} onClick={(data) => onClick(data)} />
  </div>
);

ExploreFunctions.propTypes = {
  settings: PropTypes.objectOf(PropTypes.bool).isRequired,
  setAll: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ExploreFunctions;
