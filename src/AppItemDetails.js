import React from 'react';
import {Tabs, TabList, Tab, PanelList, Panel} from 'react-tabtab';
import * as customStyle from 'react-tabtab/lib/themes/bulma';

class AppItemDetails extends React.Component {
  render() {
    return (
      <Tabs customStyle={customStyle}>
        <TabList>
          <Tab className="Tab-header">Details</Tab>
          <Tab className="Tab-header">Functions</Tab>
          <Tab className="Tab-header">States Adoption</Tab>
          <Tab className="Tab-header">Target User Type</Tab>
        </TabList>
        <PanelList>
          <Panel>
            {this.props.details}
          </Panel>
          <Panel>
            {this.props.functions}
          </Panel>
          <Panel>
            {this.props.state_adoption}
          </Panel>
          <Panel>
            {this.props.target_audience}
          </Panel>
        </PanelList>
      </Tabs>
    )
  }
}

export default AppItemDetails;
