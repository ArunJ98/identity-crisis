import React, { Component } from 'react';
import './SpectatorPending.css';
import { Button } from 'react';
import guyProfile from './images/ic_guy.png'
import girlProfile from './images/ic_girl.png'
import posed from "react-pose";

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

const Box = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
});

class SpectatorPendingAvatar extends React.Component {

  /* PROPS
     playerName: PropTypes.String,
     numPlayers: PropTypes.number,
  */

  constructor() {
    super();
  }

  hashCode(s) {
    return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);
  }

  render() {
    const numPlayers = this.props.numPlayers;
    console.log("Hashcode " + this.hashCode(this.props.playerName));
    let male = this.hashCode(this.props.playerName) % 2;
    const imgWidth = Math.min(Math.max(70/numPlayers, 12),20) + "%";

    if (male) {
      return (
          <div className="SpectatorPending-avatar" style={{width: imgWidth}}>
            <img src={require("./images/ic_guy.png")} alt="" className="profileImg" />
            <p className="SpectatorPending-avatar-name"> {this.props.playerName} </p>
          </div>
      );
    } else {
      return (
          <div className="SpectatorPending-avatar" style={{width: imgWidth}}>
            <img src={require("./images/ic_girl.png")} alt="" className="profileImg"/>
            <p className="SpectatorPending-avatar-name"> {this.props.playerName} </p>
          </div>
      );
    }
  }
}

export default SpectatorPendingAvatar;
