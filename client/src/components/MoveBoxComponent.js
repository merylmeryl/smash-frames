import React from 'react';
import './MoveBoxComponent.css';

const generateKey = (pre) => {
  return `${pre}_${new Date().getMilliseconds()}_${Math.random()}`;
}

var parseLastHitInt = (frames) => {
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
    return parseLastHitInt(total) - (parseLastHitInt(startup) - 1 + parseLastHitInt(active));
  }
}

// 3. If everything is okay, iterate through the startup frames and display them,
//    then display their corresponding hitbox_active value.
//    If there's only one hitbox frame, display it on top of the startup frame.

var barWidth = 1;

function RenderBars({ startup, active, total }) {

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
  // Break up multihits into arrays
  var startupFrames = parseMultihit(startup);
  var activeFrames = parseMultihit(active);
  var frameBar = [];

  // Iterate over each "startup & active" pairing and draw them together
  for (var i = 0; i < startupFrames.length; i++) {

    var numStartup = parseInt(startupFrames[i]);
    var numActive = parseInt(activeFrames[i]);

    // Draw startup frames
    for (f; f < numStartup; f++) {
      frameBar.push(
        <div key={generateKey(f)}
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

    // Draw active frames
    for (f; f < numStartup + numActive - 1; f++) {
      frameBar.push(
        <div
          key={'a' + f + generateKey(f)}
          className="bar active"
          style={{
            left: f * barWidth + '%',
          }}>
        </div>
      );
    }
  }

  // Draw recovery frames
  for (f; f < total; f++) {
    frameBar.push(
      <div key={'r' + f + generateKey(f)}
        className="bar recovery"
        style={{
          left: f * barWidth + '%',
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

  if (props.data !== null) {
    return (
      <div className="moveBox">
        <div className="name">
          {/* {props.data.moveType}: {props.data.moveName} */}
          {props.data.move_name}
        </div>
        <div className="outline"></div>
        {/* <div className="buttons"></div> */}
        {/* <div className="image"></div> */}
        <div className="totalFramesText">FRAMES: {props.data.total_frames}</div>
        <div className="baseDmg">{props.data.base_damage === null ? '0%' : props.data.base_damage + '%'}</div>
        <div className="sosText">SOS: NO</div>
        <div className="startupText">Startup: {props.data.startup_frames}</div>
        <div className="activeText">Active: {props.data.hitbox_frames === null ? props.data.hitbox_active : props.data.hitbox_frames}</div>
        <div className="recoveryText">FAF: {props.data.total_frames === null ? '' : parseLastHitInt(props.data.total_frames) + 1}</div>
        <div className="timelineBackground">
          <RenderBars key={props.data.move_id} moveName={props.data.move_name} startup={props.data.startup_frames} active={props.data.hitbox_active} total={props.data.total_frames} />
        </div>
        <div className="additionalStats"></div>
        <div className="divider"></div>
        <div className="notes">Notes: </div>
        <div className="noteContent">{props.data.notes}</div>
        <div className="shieldData">
          <div className="shieldlagTitle">Shield Lag:</div>
          <div className="shieldlagText">{props.data.shieldlag}</div>
          <div className="shieldstunTitle">Shield Stun:</div>
          <div className="shieldstunText">{props.data.shieldstun}</div>
        </div>
      </div>
    );
  }
  else {
    return <div></div>
  }
}

export default MoveBox;    