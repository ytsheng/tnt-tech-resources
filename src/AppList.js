import React from 'react';
import AppItem from './AppItem';

class AppList extends React.Component {
  render() {
    return (
      <div>
        <AppItem
          platforms={"iOS, Android"}
          is_free={"Yes"}
          is_optin={"Yes"}
          status={"Currently Available"}
          en_api={"Planned"}
        />
        <AppItem
          platforms={"iOS, Android"}
          is_free={"Yes"}
          is_optin={"Yes"}
          status={"Currently Available"}
          en_api={"Planned"}
        />
        <AppItem
          platforms={"iOS, Android"}
          is_free={"Yes"}
          is_optin={"Yes"}
          status={"Currently Available"}
          en_api={"Planned"}
        />
        <AppItem
          platforms={"iOS, Android"}
          is_free={"Yes"}
          is_optin={"Yes"}
          status={"Currently Available"}
          en_api={"Planned"}
        />
      </div>
    );
  }
}

export default AppList;
