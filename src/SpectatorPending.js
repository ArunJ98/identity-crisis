import React, { Component } from 'react';
import './SpectatorPending.css';
import { Button } from 'react';
import guyProfile from './images/ic_guy.png'
import girlProfile from './images/ic_girl.png'
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
      players:["Arun", "Da-Jin", "CHU CHU", "Charles", "Sam", "Victor", "Sammy", "Alex", "Chris", "Kyrie"]
    };
  }

  addPlayer(player) {
    this.setState({
      players: this.state.players.push(player)
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
    const numPlayers = this.state.players.length;
    let male = Math.floor(Math.random() * 2);
    const imgWidth = Math.max(70/numPlayers, 12) + "%";

    if (male) {
      return (
          <div className="SpectatorPending-avatar" style={{width: imgWidth}}>
            <img src={require("./images/ic_guy.png")} alt="" className="profileImg" />
            <p className="SpectatorPending-avatar-name"> {player} </p>
          </div>
      );
    } else {
      return (
          <div className="SpectatorPending-avatar" style={{width: imgWidth}}>
            <img src={require("./images/ic_girl.png")} alt="" className="profileImg"/>
            <p className="SpectatorPending-avatar-name"> {player} </p>
          </div>
      );
    }
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
