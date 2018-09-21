import React, { Component } from 'react';
import SpectatorPending from './SpectatorPending.js'
import music from './music.mp3'

class SpectatorController extends React.Component {

  constructor() {
    super();

    this.audio = new Audio(music);
    this.audio.play();
  }

  render() {
    return (
      <SpectatorPending/>
    );
  }

}

export default SpectatorController;
