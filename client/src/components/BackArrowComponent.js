import React from 'react';
import { Link } from "react-router-dom";
import { withRouter } from 'react-router';

class BackArrow extends React.Component {

  render() {

    return (
      <div className="backArrow">
        <Link to="/">
          <svg className="backHexagon" width="90" height="70" xmlns="http://www.w3.org/2000/svg">

            <g>
              <title>background</title>
              <rect fill="none" id="canvas_background" height="402" width="582" y="-1" x="-1" />
            </g>
            <g>
              <title>Layer 1</title>
              <path id="svg_1" fill="#FFED65" d="m0,0l90,0l-31.5,70l-58.5,-15.5l0,-54.5z" />
            </g>
          </svg>
          <svg className="arrowSvg" width="43" height="41" xmlns="http://www.w3.org/2000/svg">

            <g>
              <title>background</title>
              <rect fill="none" id="canvas_background" height="402" width="582" y="-1" x="-1" />
            </g>
            <g>
              <title>Layer 1</title>
              <path id="svg_1" fill={this.props.color} d="m16.0698,0l0,8.29762l0,0.97619l15.0654,0c15.5676,0 16.0698,31.72619 0,31.72619l-9.0392,0l0,-12.5l5.524,0c3.5152,0 3.5152,-7.0238 0,-7.0238l-11.5502,0l0,9.7619l-16.0698,-15.6191l16.0698,-15.619z" />
            </g>
          </svg>
        </Link>
      </div>

    );
  }
}

export default withRouter(BackArrow);