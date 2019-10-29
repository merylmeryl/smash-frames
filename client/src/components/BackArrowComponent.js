import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

class BackArrow extends React.Component {
  render() {
    return (
      <div className="backArrow">
        <Link to="/">
          <div style={{ width: "995px" }}>
            <svg
              viewBox="0 0 1920 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M405 0H0V70L405 0Z" fill="#425055" />
              <path d="M0 0H90L58.5 70L0 54.5V0Z" fill="#FFED65" />
              <path
                d="M31.0698 8V16.2976V17.2738H46.1352C61.7028 17.2738 62.205 49 46.1352 49H37.096V36.5H42.62C46.1352 36.5 46.1352 29.4762 42.62 29.4762H31.0698V39.2381L15 23.619L31.0698 8Z"
                fill="#282221"
              />
            </svg>
          </div>
        </Link>
      </div>
    );
  }
}

export default withRouter(BackArrow);
