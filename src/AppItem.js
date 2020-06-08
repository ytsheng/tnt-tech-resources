import React from 'react';
import './AppItem.css';
import AppItemDetails from './AppItemDetails';

import { MISSING_FIELD_TEXT } from './constants';

class AppItem extends React.Component {
  render() {
    const {
      homepage = null,
      name = MISSING_FIELD_TEXT,
      details = MISSING_FIELD_TEXT,
      functions = MISSING_FIELD_TEXT,
      platforms = MISSING_FIELD_TEXT,
      is_free = MISSING_FIELD_TEXT,
      is_optin = MISSING_FIELD_TEXT,
      status = MISSING_FIELD_TEXT,
      en_api = MISSING_FIELD_TEXT,
      state_adoption = MISSING_FIELD_TEXT,
      target_audience = MISSING_FIELD_TEXT,
      technologies = MISSING_FIELD_TEXT,
      country_coverage = MISSING_FIELD_TEXT,
    } = this.props;

    return (
        <div>
            <h1>{
              homepage
              ? <strong><a href={homepage}>{name}</a></strong>
              : <strong>{name}</strong>
            }</h1>
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
                        <td className="Cell">{platforms}</td>
                        <td className="Cell">{is_free}</td>
                        <td className="Cell">{is_optin}</td>
                        <td className="Cell">{status}</td>
                        <td className="Cell">{en_api}</td>
                    </tr>
                </tbody>
            </table>
            <br/>
            <AppItemDetails
                details={details}
                functions={functions}
                state_adoption={state_adoption}
                target_audience={target_audience}
                technologies={technologies}
                country_coverage={country_coverage}
                // XXX: These fields do not not seem to map to any columns the current Master List
                // people={people}
                // organizations={organizations}
            />
            <br/>
        </div>
    );
  }
}

export default AppItem;
