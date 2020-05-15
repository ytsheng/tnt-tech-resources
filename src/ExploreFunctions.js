import React from 'react';
import AppFunction from './AppFunction';
import './ExploreFunctions.css';

class ExploreFunctions extends React.Component {
  render() {
    return (
        <div>
            <p className="ExploreFunctions-header">Explore Functions:</p>
            <AppFunction name="Exposure Notification" activated={true}/>
            {' '}
            <AppFunction name="Manual Contact Tracing" activated={true}/>
            {' '}
            <AppFunction name="Symptom Reporting" activated={true}/>
        </div>
    );
  }
}

export default ExploreFunctions;
