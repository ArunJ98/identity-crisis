import React, { Component } from 'react';
import './PlayerWaiting.css';
import { Button } from 'react';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

class PlayerWaiting extends React.Component {

  /* PROPS
    message: PropTypes.String,
    roomNum: PropTypes.String,
    name: PropTypes.String,
    shouldShowWelcome: PropTypes.Boolean,
  */
  constructor(props) {
    super();
  }

  renderWelcome() {
    if (!this.props.shouldShowWelcome) {
      return;
    } else {
      return (
        <div className = "PlayerWelcome">
          <p> Welcome {this.props.name}!</p>
        </div>
      );
    }
  }

  render() {
    return (
      <div className = "PlayerWaiting">
        {this.renderWelcome()}
        <div className = "PlayerWaiting-MSG">
          <p> {this.props.message}</p>
        </div>

        <div className = "BottomBarRoomId">
          <p>Room Code: {this.props.roomNum} </p>
        </div>
      </div>
    );
  }

}

export default PlayerWaiting;
