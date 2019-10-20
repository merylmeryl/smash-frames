import React from 'react';
import './MoveBoxComponent.css';
import {
  Navbar, Collapse, CardBody, Card, Row, Col, Container, Media
} from 'reactstrap';
import {
  generateKey, parseLastHitInt, parseMultihit,
  isNumStartupEqualToNumActive, computeRecovery
} from '../utilities/utilities';

import RenderBars from './RenderBarsComponent';
import RenderHitData from './RenderHitDataComponent';
import RenderShieldData from './RenderShieldDataComponent';
import RenderNotes from './RenderNotesComponent';

class MoveBox extends React.Component {

  render() {
    if (this.props.data !== null) {
      return (
        <div>
          <Container className="moveBox mb-5 p-0">
            <Row>
              <Col className="text-left">
                <div className="moveName blockyTitle">
                  {this.props.data.move_name}: {this.props.data.base_damage === null ? '' : this.props.data.base_damage + '%'}
                </div>
              </Col>
            </Row>
            <Row className="text-left mx-0">
              <Col md={4} className="px-0 leftBorder">
                <img className="img-fluid hitboxImage" src={this.props.data.hitbox_img === null ? '' : this.props.data.hitbox_img} />
              </Col>
              <Col className="graybg">
                <Row className="py-2 mainStats whitebg">
                  <Col className="pl-3">
                    <div><span className="darkSubtitle">Endlag:</span>  <span className="darkgray">{computeRecovery(this.props.data.startup_frames, this.props.data.hitbox_active, this.props.data.total_frames)}</span></div>
                  </Col>
                  <Col>
                    <span className="darkSubtitle">FAF:</span> <span className="green">{this.props.data.total_frames === null ? '' : parseLastHitInt(this.props.data.total_frames) + 1}</span>
                  </Col>
                  <Col>
                    <span className="darkSubtitle lightgray">On Shield:</span>
                  </Col>
                  <Col className="smallText lightgray">
                    <span>Dmg:</span> {this.props.data.shield_dmg === null ? '-' : this.props.data.shield_dmg}
                  </Col>
                  <Col className="smallText">
                    <span className="black">Advantage: <span className="thinText">{this.props.data.advantage}</span></span>
                  </Col>
                </Row>
                <Row className="pt-3 mb-2 darkgray">
                  <Col>
                    <Row className="mb-2">
                      <Col className="tinyText">
                        <Row>
                          <Col>
                            <b>Angle:</b>
                          </Col>
                          <Col>
                            {this.props.data.angle}
                          </Col>
                        </Row>
                      </Col>
                      <Col className="tinyText">
                        <Row>
                          <Col>
                            <b>KB Growth:</b>
                          </Col>
                          <Col>
                            {this.props.data.kbg}
                          </Col>
                        </Row>
                      </Col>
                      <Col className="tinyText">
                        <Row>
                          <Col>
                            <b>Shield Lag:</b>
                          </Col>
                          <Col>
                            {this.props.data.shieldlag}
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row className="mb-2">
                      <Col className="tinyText">
                        <Row>
                          <Col>
                            <b>Base KB:</b>
                          </Col>
                          <Col>
                            {this.props.data.bkb_fkb}
                          </Col>
                        </Row>
                      </Col>
                      <Col className="tinyText">
                        <Row>
                          <Col>
                            <b>Hitlag:</b>
                          </Col>
                          <Col>
                            {this.props.data.hitlag}
                          </Col>
                        </Row>
                      </Col>
                      <Col className="tinyText">
                        <Row>
                          <Col>
                            <b>Shield Stun: </b>
                          </Col>
                          <Col>
                            {this.props.data.shieldstun}
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                  <Col lg={4}>
                    <span className="darkSubtitle darkgray">Notes:</span> <br /><span className="tinyText notes">{this.props.data.notes}</span>
                  </Col>
                </Row>
                {/* <Row>
                      <Col>
                        <RenderHitData hitlag={this.props.data.hitlag} bkb_fkb={this.props.data.bkb_fkb} kbg={this.props.data.kbg} angle={this.props.data.angle} />
                      </Col>
                      <Col>
                        <RenderShieldData lag={this.props.data.shieldlag} stun={this.props.data.shieldstun} dmg={this.props.data.shield_dmg} advantage={this.props.data.advantage} />
                      </Col>
                      <Col>
                        <RenderNotes notes={this.props.data.notes} />
                      </Col>
                    </Row> */}
              </Col>
              {/* <Col><div className="selfDmg">{this.props.data.self_dmg === null ? '' : this.props.data.self_dmg + '%'}</div></Col> */}
            </Row>
            <Row className="text-left mx-0 py-0 frameRow">
              <Col xs={12} lg={4} className="smallerBlockyTitle frameCol">
                Active: <span className="red">{this.props.data.hitbox_frames === null ? (this.props.data.hitbox_active) : this.props.data.hitbox_frames}</span>
              </Col>
              <Col style={{ paddingRight: '1px', paddingLeft: '1px' }}>
                <div className="timelineBackground">
                  <RenderBars key={this.props.data.move_id} moveName={this.props.data.move_name} moveType={this.props.data.move_type} startup={this.props.data.startup_frames} active={this.props.data.hitbox_active} total={this.props.data.total_frames} />
                </div>
              </Col>
            </Row>
            {/* <Row className="text-left mb-3 pl-3">
                  <Col xs={4} > <div className="frameText">Active: {this.props.data.hitbox_frames === null ? (this.props.data.hitbox_active) : this.props.data.hitbox_frames}</div></Col>
                </Row>
                <Row>
                  <Col className="timelineCol">
                    <div className="timelineBackground">
                      <RenderBars key={this.props.data.move_id} moveName={this.props.data.move_name} moveType={this.props.data.move_type} startup={this.props.data.startup_frames} active={this.props.data.hitbox_active} total={this.props.data.total_frames} />
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
}

export default MoveBox;    