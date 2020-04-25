import React, { Component } from 'react';
import { Button } from 'reactstrap';
import tambola from 'tambola-generator';
import { generateRandomNumber } from './utils';
import './style.scss';

export class SequenceGenerator extends Component {
  constructor(props) {
    super(props);
    const sequence = tambola.getDrawSequence();
    sequence.unshift(10);
    this.state = {
      sequence,
      currentIndex: 0,
      wheeler: false,
      wheelerIndex: 0,
      wheelerInterval: 0,
    };
  }

  nextItem = () => {
    const { currentIndex, sequence } = this.state;
    if (currentIndex >= sequence.length - 1) {
      return;
    }
    this.wheelerHandler();
    this.setState({ currentIndex: currentIndex + 1 });
  };
  prevItem = () => {
    const { currentIndex } = this.state;
    if (currentIndex <= 0) {
      return;
    }
    this.wheelerHandler();
    this.setState({ currentIndex: currentIndex - 1 });
  };
  wheelerStateIndex = () => {
    const wheelerIndex = generateRandomNumber() || 15;
    this.setState({ wheelerIndex });
  };
  toggleWheeler = () => {
    const { wheeler } = this.state;
    let { wheelerInterval } = this.state;
    if (!wheeler) {
      wheelerInterval = setInterval(this.wheelerStateIndex, 200);
    } else {
      clearInterval(wheelerInterval);
    }
    this.setState({ wheeler: !wheeler, wheelerInterval });
  };

  wheelerHandler = () => {
    this.toggleWheeler();
    setTimeout(this.toggleWheeler, 10000);
  };

  render() {
    const { sequence, currentIndex, wheeler, wheelerIndex } = this.state;
    const currentItem = sequence[currentIndex];

    return (
      <div className="sequence-generator">
        {/* <Button className="prev-button" onClick={this.prevItem} disabled={currentIndex <= 0 || wheeler}>
          Prev
        </Button> */}
        {!wheeler && <div className="sequence-item">{currentItem}</div>}
        {wheeler && <div className="sequence-item">{wheelerIndex}</div>}
        <Button className="next-button" onClick={this.nextItem} disabled={currentIndex >= sequence.length - 1 || wheeler}>
          Spin
        </Button>
      </div>
    );
  }
}

export default SequenceGenerator;
