import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class AppFunction extends React.Component {


  render() {
    return (
      <Button variant="primary" size="lg" active>
        {this.props.name}
      </Button>
    );
  }
}

export default AppFunction;
