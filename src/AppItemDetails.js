import React from 'react';
const ReactDOM = require('react-dom')
const ReactMarkdown = require('react-markdown')


class AppItemDetails extends React.Component {
  render() {
    console.log(this.props)
    const input = `
#### Details
${this.props.details}
#### Functions
${this.props.functions}
#### Tech Used
${this.props.technologies}
#### Country Coverage
${this.props.country_coverage}
#### States Adoption
${this.props.state_adoption}
#### Target User Type
${this.props.target_audience}
#### Creators:
###### Organizations: ${this.props.organizations}
###### People: ${this.props.people}

`;
    return (
      <ReactMarkdown source={input} />
    )
  }
}

export default AppItemDetails;
