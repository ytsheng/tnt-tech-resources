import React from 'react';
import {Tabs, TabList, Tab, PanelList, Panel} from 'react-tabtab';
import * as customStyle from 'react-tabtab/lib/themes/bulma';

class AppItemDetails extends React.Component {
  render() {
    return (
      <Tabs customStyle={customStyle}>
        <TabList>
          <Tab className="Tab-header">Details</Tab>
          <Tab className="Tab-header">Tab2</Tab>
          <Tab className="Tab-header">Tab3</Tab>
        </TabList>
        <PanelList>
          <Panel>
            Accusamus enim nisi itaque voluptas nesciunt repudiandae velit. <br/>
            Ad molestiae magni quidem saepe et quia voluptatibus minima. <br/>
            Omnis autem distinctio tempore. Qui omnis eum illum adipisci ab.
          </Panel>
          <Panel>
            Officiis commodi facilis optio eum aliquam.<br/>
            Tempore libero sit est architecto voluptate. Harum dolor modi deleniti animi qui similique facilis. Sit delectus voluptatem praesentium recusandae neque quo quod.
          </Panel>
          <Panel>
            Ut voluptas a voluptas quo ut dolorum.<br/>
            Dolorem sint velit explicabo sunt distinctio dolorem adipisci tempore.<br/>
            Est repellat quis magnam quo nihil amet et. Iste consequatur architecto quam neque suscipit.
          </Panel>
        </PanelList>
      </Tabs>
    )
  }
}

export default AppItemDetails;
