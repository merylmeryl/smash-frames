import React from 'react';
import './MoveBoxComponent.css';

// TODO: Change this component so that it displays multihits more accurately.
// 1. Check to make sure the number of "startups" is equal to the number of "hitbox_actives" -
//    for example, startup:         2/5/8/11
//                 hitbox_active:   1/1/1/1
// 2. If not, or if there are other weird characters in there,
//    then don't display the move and log it to the console with error output.
// 3. If everything is okay, iterate through the startup frames and display them,
//    then display their corresponding hitbox_active value.
//    If there's only one hitbox frame, display it on top of the startup frame.

var barWidth = 1;

function RenderBars({ numStartup, numActive, numRecovery }) {
  let frameBar = [];
  var i;
  for (i = 0; i < numStartup; i++) {
    frameBar.push(
      <div key={i + 's'}
        className="bar startup"
        style={{
          left: i * barWidth + '%',
        }}>
      </div>
    );
  }

  i -= 1;

  for (i; i < numStartup + numActive; i++) {
    frameBar.push(
      <div
        key={i + 'a'}
        className="bar active"
        style={{
          left: i * barWidth + '%',
        }}>
      </div>
    );
  }

  for (i; i < numStartup + numActive + numRecovery; i++) {
    frameBar.push(
      <div key={i + 'r'}
        className="bar recovery"
        style={{
          left: i * barWidth + '%',
        }}>
      </div>
    );
  }

  return (
    <div className="frameContainer">
      {frameBar}
    </div>
  )
}

function MoveBox(props) {

  return (
    <div className="moveBox">
      <div className="name">
        {/* {props.moveType}: {props.moveName} */}
        {props.moveName}
      </div>
      <div className="outline"></div>
      {/* <div className="buttons"></div> */}
      {/* <div className="image"></div> */}
      <div className="totalFramesText">FRAMES: {props.totalFrames}</div>
      <div className="baseDmg">{props.baseDamage + '%'}</div>
      <div className="sosText">SOS: NO</div>
      <div className="startupText">Startup: {props.startup}</div>
      <div className="activeText">Active: {props.active}</div>
      <div className="recoveryText">Recovery: {props.recovery}</div>
      <div className="timelineBackground">
        <RenderBars numStartup={props.startup} numActive={props.active} numRecovery={props.recovery} />
      </div>
      <div className="additionalStats"></div>
      <div className="divider"></div>
      <div className="notes">Notes: </div>
      <div className="noteContent">{props.notes}</div>
      <div className="shieldData">
        <div className="shieldlagTitle">Shield Lag:</div>
        <div className="shieldlagText">17</div>
        <div className="shieldstunTitle">Shield Stun:</div>
        <div className="shieldstunText">17</div>
      </div>
    </div>
  );
}

export default MoveBox;    