import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class AppFunction extends React.Component {

  render() {
    var button;
    if (this.props.activated) {
      button = <Button
        className="mb-2"
        variant="primary"
        size="lg"
        onClick={() => this.onClick(this.props.id)}>
        {this.props.name}
      </Button>
    } else {
      button = <Button
        className="mb-2"
        variant="secondary"
        size="lg"
        onClick={() => this.onClick(this.props.id)}>
          {this.props.name}
      </Button>
    }
    return button;
  }

  onClick(id) {
    this.props.onClick(id)
  }
}

export default AppFunction;
