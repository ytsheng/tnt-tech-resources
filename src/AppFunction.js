import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-tippy/dist/tippy.css';
import { Tooltip } from 'react-tippy';

class AppFunction extends React.Component {

  render() {
    var button;
    if (this.props.activated) {
      button = <Tooltip
        title={this.props.description}>
            <Button
                className="mb-2"
                variant="primary"
                size="lg"
                onClick={() => this.onClick(this.props.id)}>
                {this.props.name}
            </Button>
        </Tooltip>
    } else {
      button = <Tooltip
        title={this.props.description}>
            <Button
            className="mb-2"
            variant="secondary"
            size="lg"
            onClick={() => this.onClick(this.props.id)}>
              {this.props.name}
            </Button>
        </Tooltip>
    }

    return button;
  }

  onClick(id) {
    this.props.onClick(id)
  }
}

export default AppFunction;
