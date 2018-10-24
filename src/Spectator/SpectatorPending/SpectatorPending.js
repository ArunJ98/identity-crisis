import React, { Component } from 'react';
import './SpectatorPending.css';
import { Button } from 'react';
import posed from "react-pose";
import SpectatorPendingAvatar from './SpectatorPendingAvatar.js'


import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";


class SpectatorPending extends React.Component {

  /* PROPS
     onMakeGame: PropTypes.func,
  */

  constructor() {
    super()

    this.state = {
      players:["Arun1"]
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.addPlayer("test"), 1000);
  }

  addPlayer(player) {
    const updatePlayers = this.state.players;
    updatePlayers.push(player);
    this.setState({
      players: updatePlayers
    });
  }

  renderButton() {
    return (
      <div>
        <a class="button" onClick={this.props.onMakeGame} role="button" id = "spectatorPendingButton">Start Game!</a>
      </div>
    )
  }

  renderPlayer(player) {
    return <SpectatorPendingAvatar
              playerName={player}
              numPlayers={this.state.players.length}/>
  }

  renderPlayers() {
    const numPlayers = this.state.players.length;
    let renderedPlayers =[]

    for(let i = 0; i < numPlayers; i++) {
      renderedPlayers.push(this.renderPlayer(this.state.players[i]));
    }

    return (
      <div className="SpectatorPending-users">
        {renderedPlayers}
      </div>
    );
  }


  render() {
    if (isMobile) {
      return (<div> <p> We currently do not support making games on mobile </p> </div>);
    }

    return (
      <div className="SpectatorPending">
        <div className="SpectatorPending-title">
            <p className="SpectatorPending-title-p"> Room </p>
        </div>
        <hr/>
        {this.renderPlayers()}
        <div className="SpectatorPending-button">
          {this.renderButton()}
        </div>
      </div>
    );
  }
}

export default SpectatorPending;
