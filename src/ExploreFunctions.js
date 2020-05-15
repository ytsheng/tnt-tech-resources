import React from 'react';
import AppFunction from './AppFunction';
import './ExploreFunctions.css';

class ExploreFunctions extends React.Component {
  render() {
    return (
        <div>
            <p className="ExploreFunctions-header">Explore Functions:</p>
            <AppFunction className="Appfunction" name="Exposure Notification" activated={true}/>
            <AppFunction className="Appfunction" name="Manual Contact Tracing" activated={true}/>
        </div>
    );
  }
}

export default ExploreFunctions;
