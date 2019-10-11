import React from 'react';
import './MoveBoxComponent.css';
import {
  Navbar, Jumbotron, Row, Col, Container, Media
} from 'reactstrap';

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

var spacesToNewlines = (str) => {
  if (str !== null) {
    return str.replace(' ', '\n');
  }
  return null;
}

var computeRecovery = (startup, active, total) => {
  if (startup !== null && active !== null && total !== null
    && startup !== undefined && active !== undefined && total !== undefined) {
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
      <div>
        <Container className="moveBox mb-5">
          <Row className="mb-3">
            <Col className="text-left">
              <div className="name">
                {props.data.move_name}
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={4} className="mb-1">
              <img className="img-fluid" src={props.data.hitbox_img === null ? '' : props.data.hitbox_img} />
            </Col>
            <Col xs={12} lg={8}>
              <Container className="borderedMoveData">
                <Row className="text-left mt-3 mb-3">
                  <Col xs={6} sm={6} className="totalFramesText">FAF: {props.data.total_frames === null ? '' : parseLastHitInt(props.data.total_frames) + 1}</Col>
                  <Col><div className="baseDmg">Dmg: {props.data.base_damage === null ? '0%' : props.data.base_damage + '%'}</div></Col>
                </Row>
                <Row className="text-left mb-3 pl-3">
                  <Col><div className="activeText">Active: {props.data.hitbox_frames === null ? (props.data.hitbox_active + ' frames') : props.data.hitbox_frames}</div></Col>
                  <Col><div className="startupText">Recovery: {computeRecovery(props.data.startup_frames, props.data.hitbox_active, props.data.total_frames)}</div></Col>
                </Row>
                <Row>
                  <Col className="timelineCol">
                    <div className="timelineBackground">
                      <RenderBars key={props.data.move_id} moveName={props.data.move_name} startup={props.data.startup_frames} active={props.data.hitbox_active} total={props.data.total_frames} />
                    </div>
                  </Col>
                </Row>
                <Row className="moreStats mb-3">
                  <Col>
                    <Container className="text-left pl-0">
                      <Row className="mb-2">
                        <Col xs={3} sm={3}><div className="statsTitle">Hitlag:</div></Col>
                        <Col xs={4} sm={2} className="text-left"><div className="statsText">{props.data.hitlag}</div></Col>
                      </Row>
                      <Row className="mb-4 text-left">
                        <Col xs={4} sm={3} className="pr-0"><div className="statsTitle">Base KB:</div></Col>
                        <Col xs={8} sm={3}><div className="statsText">{spacesToNewlines(props.data.bkb_fkb)}</div></Col>
                        <Col xs={4} sm={3} className="pr-0"><div className="statsTitle">KB Growth:</div></Col>
                        <Col xs={8} sm={3}><div className="statsText">{spacesToNewlines(props.data.kbg)}</div></Col>
                        <Col xs={4} sm={3} className="pr-0"><div className="statsTitle">Angle:</div></Col>
                        <Col xs={8} sm={3}><div className="statsText">{spacesToNewlines(props.data.angle)}</div></Col>
                      </Row>
                      <Row className="mb-2">
                        <Col className="statsTitleSecondary">Shield</Col>
                      </Row>
                      <Row className="mb-3 pl-3">
                        <Col xs={3}><div className="statsTitle">Lag:</div></Col>
                        <Col xs={9}><div className="statsText">{props.data.shieldlag}</div></Col>
                        <Col xs={3}><div className="statsTitle">Stun:</div></Col>
                        <Col xs={9}><div className="statsText">{props.data.shieldstun}</div></Col>
                        <Col xs={3}><div className="statsTitle">Damage:</div></Col>
                        <Col xs={9}><div className="statsText">{props.data.shield_dmg}</div></Col>
                        <Col xs={3}><div className="statsTitle">Advantage:</div></Col>
                        <Col xs={9}><div className="statsText">{props.data.advantage}</div></Col>
                      </Row>
                      <Row className="text-left mb-2">
                        <Col xs={3}><div className="statsTitleSecondary">Notes: </div></Col>
                      </Row>
                      <Row className="text-left pl-3">
                        <Col><div className="statsText">{props.data.notes}</div></Col>
                      </Row>
                    </Container>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </div >
    );
  }
  else {
    return <div></div>
  }
}

export default MoveBox;    