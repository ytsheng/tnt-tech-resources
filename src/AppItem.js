import React from 'react';
import './AppItem.css';
import AppItemDetails from './AppItemDetails';

class AppItem extends React.Component {
  render() {
    return (
        <div>
            <h3>
              <strong><a href="https://ndresponse.gov/covid-19-resources/care19">Care19</a></strong>
            </h3>
            <br/>
            <table className="Table">
                <tbody>
                    <tr>
                        <td className="Cell-header"><strong>Supported Platforms</strong></td>
                        <td className="Cell-header"><strong>Free</strong></td>
                        <td className="Cell-header"><strong>Opt-in/Opt-out</strong></td>
                        <td className="Cell-header"><strong>App Release Status</strong></td>
                        <td className="Cell-header"><strong>Exposure Notification API Compliant</strong></td>
                    </tr>
                    <tr>
                        <td className="Cell">{this.props.platforms}</td>
                        <td className="Cell">{this.props.is_free}</td>
                        <td className="Cell">{this.props.is_optin}</td>
                        <td className="Cell">{this.props.status}</td>
                        <td className="Cell">{this.props.en_api}</td>
                    </tr>
                </tbody>
            </table>
            <br/>
            <AppItemDetails/>
            <br/>
        </div>
    );
  }
}

export default AppItem;
