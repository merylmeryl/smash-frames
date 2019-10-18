import React from 'react';
import {
  Row, Col
} from 'reactstrap';

function RenderShieldData({ lag, stun, dmg, advantage }) {
  if (lag === null && stun === null && dmg === null && advantage === null) {
    return <div></div>;
  }
  else {
    return <div>
      <Row className="mb-2">
        <Col className="statsTitleSecondary">Shield</Col>
      </Row>
      <Row className="mb-3 pl-2">
        <Col xs={4} sm={5} className="mb-2"><div className="statsTitle pr-0">Lag:</div></Col>
        <Col xs={8} sm={7} className="mb-2"><div className="statsText">{lag}</div></Col>
        <Col xs={4} sm={5} className="mb-2"><div className="statsTitle pr-0">Stun:</div></Col>
        <Col xs={8} sm={7} className="mb-2"><div className="statsText">{stun}</div></Col>
        <Col xs={4} sm={5} className="mb-2"><div className="statsTitle pr-0">Damage:</div></Col>
        <Col xs={8} sm={7} className="mb-2"><div className="statsText">{dmg}</div></Col>
        <Col xs={4} sm={5} className="mb-2"><div className="statsTitle pr-0">Advantage:</div></Col>
        <Col xs={8} sm={7}><div className="statsText">{advantage}</div></Col>
      </Row>
    </div>
  }
}

export default RenderShieldData;