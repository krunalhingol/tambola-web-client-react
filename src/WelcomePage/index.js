import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './style.scss';
import { GENERATE_SEQUENCE } from '../routingConstants';

class WelcomePage extends Component {
  gotoLink = (url) => {
    const { history } = this.props;
    history.push(url);
  };
  render() {
    return (
      <div className="welcome-page">
        <h3 className="welcome-text">Welcome to Tambola</h3>
        <Button
          className="link-button"
          onClick={() => {
            this.gotoLink(GENERATE_SEQUENCE);
          }}
        >
          Sequence Generator
        </Button>
      </div>
    );
  }
}

export default WelcomePage;
