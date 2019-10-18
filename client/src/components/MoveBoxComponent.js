import React from 'react';
import './MoveBoxComponent.css';
import {
  Navbar, Jumbotron, Row, Col, Container, Media
} from 'reactstrap';
import {
  generateKey, parseLastHitInt, parseMultihit,
  isNumStartupEqualToNumActive, computeRecovery
} from '../utilities/utilities';

import RenderBars from './RenderBarsComponent';
import RenderHitData from './RenderHitDataComponent';
import RenderShieldData from './RenderShieldDataComponent';
import RenderNotes from './RenderNotesComponent';

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