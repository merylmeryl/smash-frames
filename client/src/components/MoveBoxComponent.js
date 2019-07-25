import React from 'react';
import './MoveBoxComponent.css';

var parseFirstHitNum = (frames) => {
  return parseInt(frames.replace('...', '').split('/')[0].trim());
}

var parseLastHitNum = (frames) => {
  return parseInt(frames.replace('...', '').split('/')[0].trim());
}

var parseMultihit = (frames) => {
  return frames.replace('...', '').split('/');
}

var isNumStartupEqualToNumActive = (startup, active) => {
  return startup.split('/').length === active.split('/').length;
}

var computeRecovery = (startup, active, total) => {
  if (startup !== null && active !== null && total !== null) {
    return parseLastHitNum(total) - (parseLastHitNum(startup) - 1 + parseLastHitNum(active));
  }

}

// 3. If everything is okay, iterate through the startup frames and display them,
//    then display their corresponding hitbox_active value.
//    If there's only one hitbox frame, display it on top of the startup frame.

var barWidth = 1;

function RenderBars({ startup, active, total, moveName }) {

  // Shared variable for frame iteration (startup, active, recovery)
  var f = 0;


  // 1. Check to make sure the number of "startups" is equal to the number of "hitbox_actives" -
  //    for example, startup:         2/5/8/11
  //                 hitbox_active:   1/1/1/1
  if (startup === null
    || active === null
    || !isNumStartupEqualToNumActive(startup, active)) {

    return <div></div>
  }
  console.log("move:", moveName, "startup: ", parseMultihit(startup), "active", parseMultihit(active));
  // Break up multihits into arrays
  var startupFrames = parseMultihit(startup);
  var activeFrames = parseMultihit(active);
  var frameBar = [];

  // Iterate over each "startup & active" pairing and draw them together
  for (var i = 0; i < startupFrames.length; i++) {

    var numStartup = parseInt(startupFrames[i]);
    var numActive = parseInt(activeFrames[i]);

    // Draw the startup frames
    for (f; f < numStartup; f++) {
      frameBar.push(
        <div key={f + 's'}
          className="bar startup"
          style={{
            left: f * barWidth + '%',
          }}>
        </div>
      );
    }

    // "Hitbox Active" frames should overlap the last startup frame because that's when the
    // move actually becomes active.

    // Check for 0 case because some moves (like grabs) won't have any startup.
    if (f !== 0) f -= 1;

    // Draw the active frames
    for (f; f < numStartup + numActive - 1; f++) {
      frameBar.push(
        <div
          key={f + 'a'}
          className="bar active"
          style={{
            left: f * barWidth + '%',
          }}>
        </div>
      );
    }
  }


  for (f; f < total; f++) {
    frameBar.push(
      <div key={f + 'r'}
        className="bar recovery"
        style={{
          left: f * barWidth + '%',
        }}>
      </div>
    );
  }

  console.log("move: ", moveName, "frameBar: ", frameBar);

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
      <div className="recoveryText">Recovery: {computeRecovery(props.startup, props.active, props.totalFrames)}</div>
      <div className="timelineBackground">
        <RenderBars moveName={props.moveName} startup={props.startup} active={props.active} total={props.totalFrames} />
      </div>
      <div className="additionalStats"></div>
      <div className="divider"></div>
      <div className="notes">Notes: </div>
      <div className="noteContent">{props.notes}</div>
      <div className="shieldData">
        <div className="shieldlagTitle">Shield Lag:</div>
        <div className="shieldlagText">{props.shieldlag}</div>
        <div className="shieldstunTitle">Shield Stun:</div>
        <div className="shieldstunText">{props.shieldstun}</div>
      </div>
    </div>
  );
}

export default MoveBox;    