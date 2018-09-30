import React, { Component } from 'react';
import './PlayerChooseGame.css';
import { Button } from 'react';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

class PlayerChooseGame extends React.Component {

  /* PROPS
     onEnterGame: PropTypes.func,
  */
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      room: '',
      twitterName: ''
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleRoomChange = this.handleRoomChange.bind(this);
    this.handleTwitterChange = this.handleTwitterChange.bind(this);
    this.handleEnterGame = this.handleEnterGame.bind(this);
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handleRoomChange(event) {
    this.setState({room: event.target.value});
  }

  handleTwitterChange(event) {
    this.setState({twitterName: event.target.value});
  }

  handleEnterGame() {
    console.log("SUBMTITING");
    console.log("Name" + this.state.name);
    console.log("Room" + this.state.room);
    console.log("Twitter" + this.state.twitterName);

    this.props.onEnterGame(this.state.name, this.state.room, this.state.twitterName);
  }

  renderButton() {
    return (
      <div>
        <a class="button" onClick={this.handleEnterGame} role="button" id = "player-begin">Join Game</a>
      </div>
    )
  }

  renderPhone() {
    return (
      <div className="PlayerChooseGame-Phone">
        <div className="PlayerChoose-Header">
          <p className="PlayerChoose-Header-Text">
            Enter your information
            </p>
        </div>
        <div className="PlayerChoose-Form">
            <p className="PlayerChoose-Form-Text">
              Name:
              </p>
              <input className="PlayerChoose-Form-Field" type="text" value={this.state.name} onChange={this.handleNameChange}  placeholder="Enter your name" />

              <p className="PlayerChoose-Form-Text">
              Room Code:
              </p>
              <input className="PlayerChoose-Form-Field" type="text" value={this.state.room} onChange={this.handleRoomChange} placeholder="Enter the room code"/>

              <p className="PlayerChoose-Form-Text">
              Twitter Handle:
              </p>
              <input className="PlayerChoose-Form-Field" type="text" value={this.state.twitterName} onChange={this.handleTwitterChange} placeholder="Enter your twitter handle"/>

          </div>
          <div class = "PlayerChoose-Form-Button">
            <center> {this.renderButton()} </center>
          </div>

        </div>
      );
  }

  renderDesktop() {
    return (
      <div>
        <p> We currently only support joining a game on mobile devices</p>
      </div>
      );
  }


  render() {
    if (!isBrowser) {
      return this.renderPhone();
    } else {
      return this.renderDesktop();
    }
  }
}

export default PlayerChooseGame;
