import React from "react";
import {
  generateKey,
  parseLastHitInt,
  parseMultihit,
  isNumStartupEqualToNumActive,
  computeRecovery,
} from "../utilities/utilities";

class RenderBars extends React.Component {
  render() {
    // Shared variable for frame iteration (startup, active, recovery)
    var f = 0;
    var startup = this.props.startup;
    var active = this.props.active;
    var total = this.props.total;
    var moveName = this.props.moveName;
    var moveType = this.props.moveType;

    var baseHeight = 35;
    var baseX = 3;
    var baseSpacing = 2;
    var y = 2;
    var baseWidth = 5;
    var totalWidth = 1000;
    var totalHeight = baseHeight + y * 2;

    var startupColor = "#c2cdd0";
    var activeColor = "#e54040";
    var recoverColor = "#90A4AE";
    var fafColor = "#07B440";
    var intangColor = "#237eed";

    // 1. Check to make sure the number of "startups" is equal to the number of "hitbox_actives" -
    //    for example, startup:         2/5/8/11
    //                 hitbox_active:   1/1/1/1
    if (
      startup === null ||
      active === null ||
      !isNumStartupEqualToNumActive(startup, active)
    ) {
      return <div></div>;
    }
    if (moveType === null || moveType === undefined) {
      moveType = "";
    }
    if (moveName === null || moveName === undefined) {
      moveName = "";
    }
    var activeClassName = "bar active";
    // If it's a dodge, color the ACTIVE bars blue instead of green
    if (
      moveType.toLowerCase().includes("dodge") ||
      moveType.toLowerCase().includes("roll") ||
      moveType.toLowerCase().includes("neutral get-up") ||
      moveType.toLowerCase().includes("neutral ledge get-up") ||
      moveType.toLowerCase().includes("ledge jump") ||
      moveType.toLowerCase().includes("ledge get-up jump") ||
      moveName.toLowerCase().includes("power of flight") ||
      moveName.toLowerCase().includes("wings of rebellion") ||
      moveName.toLowerCase().includes("kaclang")
    ) {
      activeColor = intangColor;
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
          <rect
            key={generateKey(f)}
            width={baseWidth}
            height={baseHeight}
            rx="2"
            fill={startupColor}
            x={(baseX + (baseWidth + baseSpacing) * f).toString()}
            y={y}
          />
        );
      }

      // "Hitbox Active" frames should overlap the last startup frame because that's when the
      // move actually becomes active.

      // Check for 0 case because some moves (like grabs) won't have any startup.
      if (f !== 0) f -= 1;

      // Draw active frames
      for (f; f < numStartup + numActive - 1; f++) {
        frameBar.push(
          <rect
            key={generateKey(f)}
            width={baseWidth}
            height={baseHeight}
            fill={activeColor}
            x={(baseX + (baseWidth + baseSpacing) * f).toString()}
            y={y}
          />
        );
      }
    }

    // Draw recovery frames
    for (f; f < total; f++) {
      frameBar.push(
        <rect
          key={generateKey(f)}
          width={baseWidth}
          height={baseHeight}
          fill={recoverColor}
          x={(baseX + (baseWidth + baseSpacing) * f).toString()}
          y={y}
        />
      );
    }

    // Draw FAF frame at the end
    frameBar.push(
      <rect
        key={generateKey(f)}
        width={baseWidth}
        height={baseHeight}
        fill={fafColor}
        x={(baseX + (baseWidth + baseSpacing) * f).toString()}
        y={y}
      />
    );

    return (
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={
            "0 0 " + totalWidth.toString() + " " + totalHeight.toString()
          }
        >
          <rect width={totalWidth} height={totalHeight} fill="#404040" />
          {frameBar}
        </svg>
      </div>
    );
  }
}

export default RenderBars;
