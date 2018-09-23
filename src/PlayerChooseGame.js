import React, { Component } from 'react';
import './PlayerChooseGame.css';
import { Button } from 'react';

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
  }

  handleNameChange(event) {
    //this.setState({name: event.target.value});
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

    //this.props.onEnterGame();
  }

  renderButton() {
    return (
      <div>
        <a class="button" onClick={this.props.onEnterGame(this.state.name, this.state.room, this.state.twitterName)} role="button" id = "player-begin">Join Game</a>
      </div>
    )
  }

  render() {
    return (

      <div className="PlayerChooseGame">
        <div className="PlayerChoose-Header">
          <p className="PlayerChoose-Header-Text">
            Enter your information
            </p>
        </div>
        <div className="PlayerChoose-Form">
            <p className="PlayerChoose-Form-Text">
              Name:
            </p>
            <input className="PlayerChoose-Form-Field" type="text" value={this.state.value} onChange={this.handleNameChange}  placeholder="Enter your name" />

            <p className="PlayerChoose-Form-Text">
              Room Code:
            </p>
            <input className="PlayerChoose-Form-Field" type="text" value={this.state.value} onChange={this.handleRoomChange} placeholder="Enter the room code"/>

            <p className="PlayerChoose-Form-Text">
              Twitter Handle:
            </p>
            <input className="PlayerChoose-Form-Field" type="text" value={this.state.value} onChange={this.handleTwitterChange} placeholder="Enter your twitter handle"/>

        </div>
        <center> {this.renderButton()} </center>
      </div>
    );
  }
}

export default PlayerChooseGame;
