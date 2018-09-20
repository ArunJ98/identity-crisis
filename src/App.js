import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react';

class App extends React.Component {

  _onMakeGame(){
    return true;
  }

  _onJoinGame(){
    return true;
  }

  renderButtons() {
    return (
      <div>
        <a class="button" onclick={this._onMakeGame()} role="button" id = "main-button">Make game</a>
        <a class="button" onclick={this._onJoinGame()} role="button"id = "main-button" >Join game</a>
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        <p className="App-title">
          Indentity Crisis!
        </p>
        <p className="App-subtitle">
          A silly guessing game for friends
        </p>
        <hr/>
        <p className="App-creategame">
          Click below to make a new game or join an existing game.
        </p>
        <div className="App-buttons">
          {this.renderButtons()}
        </div>
      </div>
    );
  }
}

export default App;
