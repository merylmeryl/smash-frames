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
var noHitMoveTypes = ['N-Air Dodge', 'D-Air Dodge', 'DD-Air Dodge', 'S-Air Dodge', 'DU-Air Dodge', 'Du-Air Dodge', 'U-Air Dodge'];

function RenderBars({ moveName, moveType, startup, active, total, name }) {

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

function RenderNotes({ notes }) {
  if (notes === null) {
    return <div></div>;
  }
  else {
    return <div>
      <Row className="text-left mb-2 mt-4">
        <Col xs={3}><div className="statsTitleSecondary">Notes: </div></Col>
      </Row>
      <Row className="text-left pl-2">
        <Col><div className="notesText">{notes}</div></Col>
      </Row>
    </div>
  }
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
                <Row className="text-left mt-3 mb-3 pl-3">
                  <Col><div className="baseDmg">{props.data.base_damage === null ? '' : props.data.base_damage + '%'}</div></Col>
                  <Col><div className="selfDmg">{props.data.self_dmg === null ? '' : props.data.self_dmg + '%'}</div></Col>
                </Row>
                <Row className="text-left mb-3 pl-3">
                  <Col xs={4} > <div className="frameText">Active: {props.data.hitbox_frames === null ? (props.data.hitbox_active) : props.data.hitbox_frames}</div></Col>
                  <Col><div className="frameText">Endlag: {computeRecovery(props.data.startup_frames, props.data.hitbox_active, props.data.total_frames)}</div></Col>
                  <Col xs={3} className="frameText">FAF: {props.data.total_frames === null ? '' : parseLastHitInt(props.data.total_frames) + 1}</Col>
                </Row>
                <Row>
                  <Col className="timelineCol">
                    <div className="timelineBackground">
                      <RenderBars key={props.data.move_id} moveName={props.data.move_name} moveType={props.data.move_type} startup={props.data.startup_frames} active={props.data.hitbox_active} total={props.data.total_frames} />
                    </div>
                  </Col>
                </Row>
                <Row className="moreStats mb-3">
                  <Col>
                    <Container className="text-left pl-2">
                      <Row className="bottomStats mt-3 ml-3">
                        <Col sm={6}>
                          <RenderHitData hitlag={props.data.hitlag} bkb_fkb={props.data.bkb_fkb} kbg={props.data.kbg} angle={props.data.angle} />
                        </Col>
                        <Col sm={6}>
                          <RenderShieldData lag={props.data.shieldlag} stun={props.data.shieldstun} dmg={props.data.shield_dmg} advantage={props.data.advantage} />
                        </Col>
                        <Col>
                          <RenderNotes notes={props.data.notes} />
                        </Col>
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