import React from 'react';
import {
  generateKey, parseLastHitInt, parseMultihit,
  isNumStartupEqualToNumActive, computeRecovery
} from '../utilities/utilities';

var barWidth = 0.8;

class RenderBars extends React.Component {

  render() {
    // Shared variable for frame iteration (startup, active, recovery)
    var f = 0;
    var startup = this.props.startup;
    var active = this.props.active;
    var total = this.props.total;
    var moveName = this.props.moveName;
    var moveType = this.props.moveType;


    // 1. Check to make sure the number of "startups" is equal to the number of "hitbox_actives" -
    //    for example, startup:         2/5/8/11
    //                 hitbox_active:   1/1/1/1
    if (startup === null
      || active === null
      || !isNumStartupEqualToNumActive(startup, active)) {

      return <div></div>
    }
    if (moveType === null || moveType === undefined) {
      moveType = '';
    }
    if (moveName === null || moveName === undefined) {
      moveName = '';
    }
    var activeClassName = "bar active";
    // If it's a dodge, color the ACTIVE bars blue instead of green
    if (moveType.toLowerCase().includes('dodge')
      || moveType.toLowerCase().includes('roll')
      || moveType.toLowerCase().includes('neutral get-up')
      || moveType.toLowerCase().includes('neutral ledge get-up')
      || moveType.toLowerCase().includes('ledge jump')
      || moveType.toLowerCase().includes('ledge get-up jump')
      || moveName.toLowerCase().includes('power of flight')
      || moveName.toLowerCase().includes('wings of rebellion')
      || moveName.toLowerCase().includes('kaclang')) {
      activeClassName = "bar invulnerable";
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
            className={activeClassName}
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
}

export default RenderBars;