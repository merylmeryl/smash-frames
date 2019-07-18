import React from 'react';
import { Row, Col } from 'reactstrap';

// Scale each frame up by 3px so it's not too thin / hard to see
var scale = 10;
var timeBorderRadius = '3px';

function Timeline(props) {

  return (
    <div
      style={{
        height: '50px',
        padding: '-4px',
        display: 'block',
        width: scale * props.startup + props.active + props.recovery + 'px',
        margin: '5px'
      }}>
      <p className="timelineText"
        style={{
          display: 'inline-block',
          float: 'left',
          width: scale * props.startup + 'px'
        }}>
        Startup</p>
      <p className="timelineText"
        style={{
          width: scale * (props.total - props.startup) + 'px',
        }}>
        Active</p>
      <p className="timelineText"
        style={{
          width: scale * (props.total - props.startup) + 'px',
        }}>
        Recovery</p>
      <div className="startup">
        <span
          style={{
            display: 'inline-block',
            width: scale * props.startup + 'px',
            height: '25px',
            background: '#f7d909',
            borderRadius: timeBorderRadius,
            border: '2px solid #0d1d10',
            float: 'left',
            margin: '-2px',
            marginRight: '-1px',
          }}>
        </span>
      </div>
      <div className="active">

        <span
          style={{
            display: 'inline-block',
            width: scale * props.active + 'px',
            height: '25px',
            background: '#72f10e',
            borderRadius: timeBorderRadius,
            border: '2px solid #0d1d10',
            float: 'left',
            margin: '-2px',
            marginLeft: '-1px'
          }}>
        </span>
      </div>

      <div className="recovery">

        <span
          style={{
            display: 'inline-block',
            width: scale * props.recovery + 'px',
            height: '25px',
            background: '#e6234c',
            borderRadius: timeBorderRadius,
            border: '2px solid #0d1d10',
            float: 'left',
            margin: '-2px',
            marginLeft: '-1px'
          }}>
        </span>
      </div>
    </div>
  );
}

export default Timeline;    