import React from "react";
import {
  generateKey,
  parseLastHitInt,
  parseMultihit
} from "../../utilities/utilities";

var polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
  var angleInRadians = (angleInDegrees * Math.PI) / 180.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY - radius * Math.sin(angleInRadians)
  };
};

class DrawAnglesComponent extends React.Component {
  render() {
    // Circle SVG info
    var circleDiameter = 60;
    var circleRadius = circleDiameter / 2;
    var circleBorderWidth = 4;
    var circleCenter = circleRadius + circleBorderWidth;
    var circleBgColor = "#BFCFFF";

    var angleDrawings = [];

    // Break up multihits into arrays
    var angleList = parseMultihit(this.props.angleText);

    if (angleList !== undefined) {
      if (angleList === null) {
        return <div></div>;
      }

      for (var i = 0; i < angleList.length; i++) {
        // Check whether it's a Sakurai angle or one of those other crazy weird angles.
        // If so, we'll just display the number
        // Angle of 0 changes to 32 at knockback higher than 120
        if (angleList[i] === "0") {
          let polarCoords0 = polarToCartesian(
            circleCenter,
            circleCenter,
            circleRadius,
            angleList[i]
          );
          let polarCoords32 = polarToCartesian(
            circleCenter,
            circleCenter,
            circleRadius,
            32
          );
          angleDrawings.push(
            <g
              transform={
                "translate(" +
                (i * (circleDiameter + circleBorderWidth)).toString() +
                ", 0)"
              }
            >
              <circle
                cx={circleCenter}
                cy={circleCenter}
                r={circleRadius}
                fill={circleBgColor}
                strokeWidth={circleBorderWidth}
                stroke={"white"}
              />
              <line
                stroke={"white"}
                strokeWidth={circleBorderWidth / 2}
                x1={circleCenter}
                y1={circleCenter}
                x2={polarCoords0.x}
                y2={polarCoords0.y}
              />
              <line
                stroke={"blue"}
                strokeWidth={circleBorderWidth / 2}
                x1={circleCenter}
                y1={circleCenter}
                x2={polarCoords32.x}
                y2={polarCoords32.y}
              />
            </g>
          );
        }
        // Sakurai angle, which is 0 at low knockback and 38 at high knockback
        else if (angleList[i] === "361") {
          let polarCoords0 = polarToCartesian(
            circleCenter,
            circleCenter,
            circleRadius,
            angleList[i]
          );
          let polarCoords38 = polarToCartesian(
            circleCenter,
            circleCenter,
            circleRadius,
            38
          );
          angleDrawings.push(
            <g
              transform={
                "translate(" +
                (i * (circleDiameter + circleBorderWidth)).toString() +
                ", 0)"
              }
            >
              <circle
                cx={circleCenter}
                cy={circleCenter}
                r={circleRadius}
                fill={circleBgColor}
                strokeWidth={circleBorderWidth}
                stroke={"white"}
              />
              <line
                stroke={"white"}
                strokeWidth={circleBorderWidth / 2}
                x1={circleCenter}
                y1={circleCenter}
                x2={polarCoords0.x}
                y2={polarCoords0.y}
              />
              <line
                stroke={"purple"}
                strokeWidth={circleBorderWidth / 2}
                x={circleCenter}
                y={circleCenter}
              />
            </g>
          );
        }
        // Autolink angles
        else if (angleList[i] > 361) {
          angleDrawings.push(
            <g
              transform={
                "translate(" +
                (i * (circleDiameter + circleBorderWidth)).toString() +
                ", 0)"
              }
            >
              <circle
                cx={circleCenter}
                cy={circleCenter}
                r={circleRadius}
                fill={circleBgColor}
                strokeWidth={circleBorderWidth}
                stroke={"white"}
              />
              <text
                x={(circleCenter - circleBorderWidth) / 2}
                y={circleCenter + circleBorderWidth * 2}
                fill="purple"
                fontSize={25}
              >
                {angleList[i]}
              </text>
            </g>
          );
        } else {
          let polarCoords = polarToCartesian(
            circleCenter,
            circleCenter,
            circleRadius,
            angleList[i]
          );
          angleDrawings.push(
            <g
              transform={
                "translate(" +
                (i * (circleDiameter + circleBorderWidth)).toString() +
                ", 0)"
              }
            >
              <circle
                cx={circleCenter}
                cy={circleCenter}
                r={circleRadius}
                fill={circleBgColor}
                strokeWidth={circleBorderWidth}
                stroke={"white"}
              />
              <line
                stroke={"white"}
                strokeWidth={circleBorderWidth / 2}
                x1={circleCenter}
                y1={circleCenter}
                x2={polarCoords.x}
                y2={polarCoords.y}
              />
            </g>
          );
        }
      }
    }

    // Iterate over each "startup & active" pairing and draw them together

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        // viewBox={
        //   "0 0 " +
        //   (circleDiameter + circleBorderWidth * 2) * angleList.length +
        //   " " +
        //   (circleDiameter + circleBorderWidth * 2)
        // }
        viewBox={"0 0 400 " + (circleDiameter + circleBorderWidth * 2)}
        width="200px"
      >
        {angleDrawings}
      </svg>
    );
  }
}

export default DrawAnglesComponent;
