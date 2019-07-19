import React from 'react';
import './MoveBoxComponent.css';

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
  console.log(i);

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
  console.log(i);

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