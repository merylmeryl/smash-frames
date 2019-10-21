import React, { useState } from 'react';
import './MoveBoxComponent.css';
import {
  Navbar, Collapse, Button, Row, Col, Container, Media
} from 'reactstrap';
import {
  generateKey, parseLastHitInt, parseMultihit,
  isNumStartupEqualToNumActive, computeRecovery
} from '../utilities/utilities';

import RenderBars from './RenderBarsComponent';
import RenderHitData from './RenderHitDataComponent';
import RenderShieldData from './RenderShieldDataComponent';
import RenderNotes from './RenderNotesComponent';

const MoveBox = (props) => {
  const [collapse, setCollapse] = useState(false);

  const toggle = () => setCollapse(!collapse);

  if (props.data !== null) {
    return (
      <div>
        <Container className="moveBox mb-5 p-0">
          <Row className="moveName">
            <Col className="text-left">
              <div className="blockyTitle">
                {props.data.move_name}: {props.data.base_damage === null ? '' : props.data.base_damage + '%'}
              </div>
            </Col>
            <Col xs={2} className="pt-2">
              <label className="switch">
                <input type="checkbox" defaultChecked={false} onClick={toggle} />
                <span className="slider round"></span>
              </label>
            </Col>
          </Row>
          <Collapse isOpen={collapse}>
            <div>
              <Row className="text-left px-0">
                <Col lg={4} className="px-0 leftBorder">
                  <img className="img-fluid hitboxImage" src={props.data.hitbox_img === null ? '' : props.data.hitbox_img} />
                </Col>
                <Col className="graybg px-0 mx-0">
                  <Row className="py-2 mainStats whitebg">
                    <Col className="pl-3">
                      <div><span className="darkSubtitle">Endlag:</span>  <span className="darkgray">{computeRecovery(props.data.startup_frames, props.data.hitbox_active, props.data.total_frames)}</span></div>
                    </Col>
                    <Col>
                      <span className="darkSubtitle">FAF:</span> <span className="green">{props.data.total_frames === null ? '' : parseLastHitInt(props.data.total_frames) + 1}</span>
                    </Col>
                    <Col>
                      <span className="darkSubtitle lightgray">On Shield:</span>
                    </Col>
                    <Col className="smallText lightgray">
                      <span>Dmg:</span> {props.data.shield_dmg === null ? '-' : props.data.shield_dmg}
                    </Col>
                    <Col className="smallText">
                      <span className="black">Adv: <span className="thinText">{props.data.advantage}</span></span>
                    </Col>
                  </Row>
                  <Row className="pt-2 px-0 mb-2 darkgray">
                    <Col className="px-0">
                      <Row className="mb-2">
                        <Col className="tinyText mb-2 pl-0">
                          <Row>
                            <Col xs={12}>
                              <b>Angle:</b>
                            </Col>
                            <Col xs={12}>
                              {props.data.angle}
                            </Col>
                          </Row>
                        </Col>
                        <Col className="tinyText mb-2 pl-0">
                          <Row>
                            <Col xs={12}>
                              <b>KB Growth:</b>
                            </Col>
                            <Col xs={12}>
                              {props.data.kbg}
                            </Col>
                          </Row>
                        </Col>
                        <Col className="tinyText mb-2 pl-0">
                          <Row>
                            <Col xs={12}>
                              <b>Shield Lag:</b>
                            </Col>
                            <Col xs={12}>
                              {props.data.shieldlag}
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                      <Row className="mb-2">
                        <Col className="tinyText mb-2 pl-0">
                          <Row>
                            <Col xs={12}>
                              <b>Base KB:</b>
                            </Col>
                            <Col xs={12}>
                              {props.data.bkb_fkb}
                            </Col>
                          </Row>
                        </Col>
                        <Col className="tinyText mb-2 pl-0">
                          <Row>
                            <Col xs={12}>
                              <b>Hitlag:</b>
                            </Col>
                            <Col xs={12}>
                              {props.data.hitlag}
                            </Col>
                          </Row>
                        </Col>
                        <Col className="tinyText mb-2 pl-0">
                          <Row>
                            <Col xs={12}>
                              <b>Shield Stun: </b>
                            </Col>
                            <Col xs={12}>
                              {props.data.shieldstun}
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg={4}>
                      <span className="tinytext darkgray">Notes:</span> <br /><span className="tinyText notes">{props.data.notes}</span>
                    </Col>
                  </Row>
                  {/* <Row>
                      <Col>
                        <RenderHitData hitlag={props.data.hitlag} bkb_fkb={props.data.bkb_fkb} kbg={props.data.kbg} angle={props.data.angle} />
                      </Col>
                      <Col>
                        <RenderShieldData lag={props.data.shieldlag} stun={props.data.shieldstun} dmg={props.data.shield_dmg} advantage={props.data.advantage} />
                      </Col>
                      <Col>
                        <RenderNotes notes={props.data.notes} />
                      </Col>
                    </Row> */}
                </Col>
                {/* <Col><div className="selfDmg">{props.data.self_dmg === null ? '' : props.data.self_dmg + '%'}</div></Col> */}
              </Row>
            </div>
          </Collapse>
          <Row className="text-left py-0 frameRow">
            <Col xs={12} lg={4} className="smallerBlockyTitle frameCol">
              Active: <span>{props.data.hitbox_frames === null ? (props.data.hitbox_active) : props.data.hitbox_frames}</span>
            </Col>
            <Col style={{ paddingRight: '1px', paddingLeft: '1px' }}>
              <RenderBars key={props.data.move_id} moveName={props.data.move_name} moveType={props.data.move_type} startup={props.data.startup_frames} active={props.data.hitbox_active} total={props.data.total_frames} />
            </Col>
          </Row>
          {/* <Row className="text-left mb-3 pl-3">
                  <Col xs={4} > <div className="frameText">Active: {props.data.hitbox_frames === null ? (props.data.hitbox_active) : props.data.hitbox_frames}</div></Col>
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

                      </Row>
                    </Container>
                  </Col>
                </Row> */}
        </Container>
      </div >
    );
  }
  else {
    return <div></div>
  }
}

export default MoveBox;    