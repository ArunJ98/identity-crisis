import React, { Component } from 'react';
import './PlayerVote.css';
import { Button } from 'react';
import ReactCountdownClock from 'react-countdown-clock';

class PlayerVote extends React.Component {


  constructor(props) {
    super();
    this.originalTime = 60;
    this.state = {
      timer: null,
      width: 50,
      timeLeft: 60,
    }
  }


  componentDidMount() {
    let timer = setInterval(this.tick, 50);
    this.setState({timer});
  }

  componentWillUnmount() {
    this.clearInterval(this.state.timer);
  }

  tick  = () => {
    const newWidth = (this.originalTime - this.state.timeLeft) / this.originalTime * 100;
    console.log(newWidth);
    this.setState({
      timeLeft: this.state.timeLeft - .05,
      width: (this.originalTime - this.state.timeLeft) / this.originalTime * 100,
    });

  }

  renderHeader() {
    return (
      <div className="PlayerVote-Header">
        <p className="PlayerVote-Header-Text">
          Cast your vote below!
          </p>
      </div>
    );
  }

  renderFooter() {
    return (
      <div>
      <div className="PlayerVote-Footer-Bar" style={{width: this.state.width +"%"}}>
      </div>
        <div className="PlayerVote-Footer">
          <p className="PlayerVote-Footer-Timer"> {Math.round(this.state.timeLeft)} </p>
        </div>
      </div>
    );
  }


  renderButtons() {
    return (
      <div class = "PlayerVoteButtons">
          <div>
            <a class="button" onClick={this.handleEnterGame} role="button" id = "player-vote-btn">Option 1</a>
          </div>

          <div>
            <a class="button" onClick={this.handleEnterGame} role="button" id = "player-vote-btn">Option 2</a>
          </div>

          <div>
            <a class="button" onClick={this.handleEnterGame} role="button" id = "player-vote-btn">Option 3</a>
          </div>

          <div>
            <a class="button" onClick={this.handleEnterGame} role="button" id = "player-vote-btn">Option 4</a>
          </div>

      </div>
    );
  }

  render() {
    return (
      <div className="PlayerVote">
        {this.renderHeader()}
        {this.renderButtons()}

        {this.renderFooter()}
      </div>
    );
  }

}

export default PlayerVote;
