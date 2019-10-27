import React from "react";
import { Col } from "reactstrap";

const HitboxImage = props => {
  if (props.link === null) {
    return <div></div>;
  }
  return (
    <React.Fragment>
      <Col lg={5} className="px-0 leftBorder">
        <img className="img-fluid hitboxImage" src={props.link} />
      </Col>
    </React.Fragment>
  );
};

export default HitboxImage;
