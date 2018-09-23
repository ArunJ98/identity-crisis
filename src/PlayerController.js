import React, { Component } from 'react';
import PlayerChooseGame from './PlayerChooseGame.js'

class PlayerController extends React.Component {

  constructor() {
    super();
  }

  onEnterGame = (playerName, room, twitterName = '') => {
    console.log("SUBMITTING");
  }

  render() {
    return (
      <PlayerChooseGame
        onEnterGame={this.onEnterGame}/>
    );
  }

}

export default PlayerController;
