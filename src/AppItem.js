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
            <table className="Table" class="fixed">
                <col width="300px" />
                <col width="300px" />
                <col width="300px" />
                <col width="300px" />
                <col width="300px" />
                <tbody>
                    <td className="Cell-header"><strong>Platform</strong></td>
                    <td className="Cell-header"><strong>Free</strong></td>
                    <td className="Cell-header"><strong>Opt-in/Opt-out</strong></td>
                    <td className="Cell-header"><strong>Launch Date</strong></td>
                    <td className="Cell-header"><strong>Apple/Google API Compliant</strong></td>
                    <tr>
                        <td className="Cell">iOS, Android</td>
                        <td className="Cell">Yes</td>
                        <td className="Cell">Opt-in</td>
                        <td className="Cell">Currently Available</td>
                        <td className="Cell">Planned</td>
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
