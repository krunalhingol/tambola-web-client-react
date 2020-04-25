import React, { Component } from 'react';
import { Container, Button } from 'reactstrap';
import './style.scss';

class AppComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFooter: false,
    };
  }

  toggleContactUs = () => this.setState({ showFooter: !this.state.showFooter });
  render() {
    const { showFooter } = this.state;
    return (
      <div className="tambola-container">
        <Button color="link" className="contact-us-link" onClick={this.toggleContactUs}>
          Contact Us
        </Button>
        <Container className="app-root">{this.props.children}</Container>
        {showFooter && (
          <div className="tambola-footer">
            Contact us for suggestions.
            <a href="mailto:krunalhingol1995@gmail.com" target="_blank" rel="noopener noreferrer" className="link">
              krunalhingol1995@gmail.com
            </a>
          </div>
        )}
      </div>
    );
  }
}

export default AppComponent;
