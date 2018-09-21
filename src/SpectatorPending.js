import React, { Component } from 'react';
import './SpectatorPending.css';
import { Button } from 'react';

class SpectatorPending extends React.Component {

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
      <div className="SpectatorPending">
        <p className="SpectatorPending-title">
          Room
        </p>
      </div>
    );
  }
}

export default SpectatorPending;
