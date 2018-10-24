import React, { Component } from 'react';
import HomePage from './HomePage.js'
import SpectatorController from './Spectator/SpectatorController.js'
import PlayerController from './Player/PlayerController.js'
import PlayerVote from './Player/PlayerVote.js'

class GameController extends React.Component {

  constructor() {
    super();
    this.state = {
      experience: "HOME"
    }
  }

  onMakeGame = () => {
    this.setState({
      experience: "SPECTATOR"
    });
  }

  onJoinGame = () => {
    this.setState({
      experience: "PLAYER"
    });
  }

  render() {
    if (this.state.experience == "HOME") {
      return (
        <HomePage
          onMakeGame = {this.onMakeGame}
          onJoinGame = {this.onJoinGame}/>
      );
    } else if (this.state.experience == "SPECTATOR") {
      return (
        <SpectatorController/>
      );
    } else if (this.state.experience == "PLAYER") {
      return (
        <PlayerController/>
      );
    }
  }

}

export default GameController;
