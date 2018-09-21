import React, { Component } from 'react';
import './PlayerChooseGame.css';
import { Button } from 'react';

class PlayerChooseGame extends React.Component {

  /* PROPS
     onStart: PropTypes.func,
  */


  renderButton() {
    return (
      <div>
        <a class="button" onClick={this.props.onMakeGame} role="button" id = "main-button">Start Game!</a>
      </div>
    )
  }

  render() {
    return (
      <div className="PlayerChooseGame">
        <p className="PlayerChooseGame-title">
          Player
        </p>
      </div>
    );
  }
}

export default PlayerChooseGame;
