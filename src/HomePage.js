import React, { Component } from 'react';
import logo from './logo.svg';
import './HomePage.css';
import { Button } from 'react';

class HomePage extends React.Component {

  /* PROPS
     onMakeGame: PropTypes.func,
     onJoinGame: PropTypes.func,
  */


  renderButtons() {
    return (
      <div>
        <a class="button" onClick={this.props.onMakeGame} role="button" id = "main-button" >Make game</a>
        <a class="button" onClick={this.props.onJoinGame} role="button" id = "main-button" >Join game</a>
      </div>
    )
  }

  render() {
    return (
      <div className="HomePage">
        <p className="HomePage-title">
          Indentity Crisis!
        </p>
        <p className="HomePage-subtitle">
          A silly guessing game for friends
        </p>
        <hr/>
        <p className="HomePage-creategame">
          Click below to make a new game or join an existing game.
        </p>
        <div className="HomePage-buttons">
          {this.renderButtons()}
        </div>
      </div>
    );
  }
}

export default HomePage;
