import React from 'react';
import './AppItem.css';
import AppItemDetails from './AppItemDetails';

class AppItem extends React.Component {
  render() {
    var name;
    if (this.props.homepage.length > 0) {
      name = <strong><a href={this.props.homepage}>{this.props.name}</a></strong>
    } else {
      name = <strong>{this.props.name}</strong>
    }
    return (
        <div>
            <h1>{name}</h1>
            <br/>
            <table className="Table">
                <tbody>
                    <tr>
                        <td className="Cell-header"><strong>What platforms is it on?</strong></td>
                        <td className="Cell-header"><strong>Free?</strong></td>
                        <td className="Cell-header"><strong>User Installation Required?</strong></td>
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
            <AppItemDetails
                details={this.props.details}
                functions={this.props.functions}
                state_adoption={this.props.state_adoption}
                target_audience={this.props.target_audience}
                technologies={this.props.technologies}
                country_coverage={this.props.country_coverage}
            />
            <br/>
        </div>
    );
  }
}

export default AppItem;
