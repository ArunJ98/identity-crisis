import React, { Component } from 'react';
import PlayerChooseGame from './PlayerChooseGame.js';
import PlayerWaiting from './PlayerWaiting.js';

class PlayerController extends React.Component {

  constructor() {
    super();
    this.state = {
      scene: "CHOOSEGAME"
    }
  }

  onEnterGame = (playerName, room, twitterName = '') => {
    this.shouldShowWelcome = true;
    this.message = "We're just waiting for the host of room " + room + " to start the game!";
    this.playerName = playerName;
    this.room = room;
    this.twitterName = twitterName;
    console.log("ENTERING GAME " + this.room);
    this.setState({
      scene: "WAITING"
    });
  }

  onShowQuestion() {
    this.setState({
      scene: "QUESTION"
    });
  }

  onSubmitAnswer() {
    this.shouldShowWelcome = false;
    this.message = "Your question has been submitted, " + this.playerName + "!";
    this.setState({
      scene: "WAITING",
    });
  }

  render() {
    if (this.state.scene == "CHOOSEGAME") {
      return (
        <PlayerChooseGame
          onEnterGame={this.onEnterGame}/>
      );
    } else {
      return (
        <PlayerWaiting
          shouldShowWelcome={this.shouldShowWelcome}
          message={this.message}
          roomNum={this.room}
          name={this.playerName}/>
      );
    }

  }

}

export default PlayerController;
