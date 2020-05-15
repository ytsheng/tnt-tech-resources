import React from 'react';
import AppItem from './AppItem';

class AppList extends React.Component {
  render() {
    return (
      <div>
        <AppItem/>
        <AppItem/>
        <AppItem/>
        <AppItem/>
      </div>
    );
  }
}

export default AppList;
