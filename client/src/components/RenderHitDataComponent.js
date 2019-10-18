import React from 'react';
import {
  Row, Col
} from 'reactstrap';

function RenderHitData({ hitlag, bkb_fkb, kbg, angle }) {
  if (hitlag === null && bkb_fkb === null && kbg === null && angle === null) {
    return <div></div>;
  }
  else {
    return <div>
      <Row className="mb-2">
        <Col className="statsTitleSecondary">Hit</Col>
      </Row>
      <Row className="mb-2 pl-2">
        <Col xs={3} sm={3}><div className="statsTitle">Hitlag:</div></Col>
        <Col xs={4} sm={2} className="text-left"><div className="statsText">{hitlag}</div></Col>
      </Row>
      <Row className="mb-4 text-left pl-2">
        <Col xs={4} sm={5} className="pr-0 mb-2"><div className="statsTitle">Base KB:</div></Col>
        <Col xs={8} sm={7} className="mb-2"><div className="statsText">{bkb_fkb}</div></Col>
        <Col xs={4} sm={5} className="pr-0 mb-2"><div className="statsTitle">KB Growth:</div></Col>
        <Col xs={8} sm={7} className="mb-2"><div className="statsText">{kbg}</div></Col>
        <Col xs={4} sm={5} className="pr-0 mb-2"><div className="statsTitle">Angle:</div></Col>
        <Col xs={8} sm={7}><div className="statsText">{angle}</div></Col>
      </Row>
    </div>
  }
}

export default RenderHitData;