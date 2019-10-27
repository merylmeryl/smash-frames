import React, { useState } from "react";
import "./SingleMoveComponent.css";
import {
  Navbar,
  Collapse,
  Button,
  Row,
  Col,
  Container,
  Media,
} from "reactstrap";
import {
  generateKey,
  parseLastHitInt,
  parseMultihit,
  isNumStartupEqualToNumActive,
  computeRecovery,
} from "../utilities/utilities";

import RenderBars from "./RenderBarsComponent";
import HitboxImage from "./HitboxImageComponent";

const SingleMove = props => {
  const [collapse, setCollapse] = useState(false);

  const toggle = () => setCollapse(!collapse);

  if (props.data !== null) {
    return (
      <div>
        <Container className="moveBox mb-5">
          <Row className="moveName">
            <Col className="text-left">
              <div className="blockyTitle">{props.data.move_name}</div>
            </Col>
            <Col xs={2} className="pt-2">
              <label className="switch">
                <input
                  type="checkbox"
                  defaultChecked={false}
                  onClick={toggle}
                />
                <span className="slider round"></span>
              </label>
            </Col>
          </Row>
          <Collapse isOpen={collapse}>
            <div>
              <Row className="text-left px-0">
                <HitboxImage link={props.data.hitbox_img} />
                <Col className="graybg px-0 mx-0">
                  <Row className="py-2 mainStats whitebg">
                    {/* <Col xs={1}>
                      <div id="explosionSvg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          id="Layer_1"
                          enable-background="new 0 0 512.003 512.003"
                          viewBox="0 0 512.003 512.003"
                          class=""
                        >
                          <g>
                            <path
                              d="m379.667 276.369 107.232-62.409-114.293-13.231 73.449-124.563-124.564 73.449-8.713-134.615-66.924 127.551-78.97-74.556 7.696 114.238-132.935-16.272 93.251 87.548-109.79 62.979 116.853 12.659-73.443 124.564 124.555-73.448 12.688 116.737 62.949-109.677 87.552 93.256-16.273-132.935 132.939 16.272z"
                              fill="#ffd400"
                              data-original="#FFD400"
                              class=""
                              data-old_color="#ffd400"
                              style={{ fill: "#FCD40E" }}
                            />{" "}
                            <path
                              d="m501.582 210.893c-1.32-6.322-6.541-11.091-12.959-11.833l-91.381-10.577 61.733-104.696c3.476-5.894 2.521-13.39-2.313-18.227-4.839-4.837-12.332-5.79-18.228-2.313l-103.551 61.06-7.139-110.272c-.434-6.708-5.277-12.309-11.852-13.704-6.572-1.399-13.275 1.751-16.398 7.703l-57.732 110.03-64.581-60.974c-4.488-4.237-11.114-5.29-16.695-2.66-5.583 2.635-8.982 8.417-8.568 14.575l6.476 96.138-114.928-14.069c-6.439-.79-12.657 2.651-15.407 8.528-2.752 5.876-1.412 12.854 3.317 17.296l78.482 73.682-92.216 52.899c-5.637 3.232-8.55 9.727-7.219 16.086 1.332 6.359 6.607 11.138 13.066 11.838l93.739 10.155-61.637 104.537c-3.474 5.892-2.522 13.389 2.315 18.225 4.836 4.836 12.332 5.787 18.225 2.314l104.537-61.644 10.176 93.632c.702 6.457 5.48 11.729 11.838 13.062 1.027.215 2.059.319 3.078.319 5.293 0 10.295-2.812 13.006-7.535l52.868-92.109 73.688 78.488c3.006 3.201 7.174 4.854 11.377 4.729 8.09-.223 14.578-6.851 14.578-14.994 0-.897-.078-1.777-.229-2.633l-13.844-113.084 113.896 13.941c6.445.793 12.658-2.651 15.408-8.528 2.75-5.876 1.412-12.854-3.318-17.296l-78.586-73.771 89.836-52.285c5.586-3.251 8.461-9.71 7.142-16.033zm-129.461 52.512c-4.095 2.383-6.822 6.56-7.357 11.267-.536 4.707 1.183 9.392 4.638 12.634l59.811 56.147-87.402-10.699c-4.572-.567-9.164 1.019-12.428 4.282s-4.844 7.848-4.283 12.429l10.699 87.402-56.152-59.812c-3.254-3.465-7.957-5.185-12.678-4.632-4.721.552-8.9 3.31-11.266 7.433l-40.01 69.705-7.709-70.92c-.549-5.064-3.632-9.504-8.188-11.787-2.12-1.063-4.424-1.593-6.724-1.593-2.64 0-5.274.696-7.62 2.079l-74.502 43.934 43.932-74.51c2.588-4.389 2.771-9.791.485-14.346-2.285-4.554-6.726-7.637-11.791-8.186l-70.989-7.69 69.773-40.024c4.123-2.365 6.881-6.545 7.434-11.267s-1.165-9.426-4.631-12.681l-59.808-56.148 87.401 10.699c4.44.548 8.889-.924 12.137-3.997 3.246-3.074 4.953-7.438 4.652-11.899l-5.122-76.044 51.133 48.275c3.412 3.223 8.137 4.66 12.768 3.888s8.631-3.669 10.813-7.825l42.122-80.279 5.265 81.344c.338 5.199 3.348 9.853 7.953 12.289 4.604 2.438 10.146 2.31 14.635-.338l74.51-43.935-43.934 74.51c-2.578 4.373-2.771 9.752-.513 14.297s6.666 7.641 11.707 8.224l69.504 8.045z"
                              data-original="#000000"
                              class="active-path"
                              data-old_color="#000000"
                              style={{ fill: "#F09549" }}
                            />
                          </g>{" "}
                        </svg>
                      </div>
                    </Col> */}
                    <Col xs={12}>
                      <span className="blockyDmg">
                        {props.data.base_damage === null
                          ? ""
                          : props.data.base_damage + "%"}
                      </span>
                    </Col>
                  </Row>
                  <Row className="py-2 mainStats whitebg">
                    <Col xs={4}>
                      <span className="darkSubtitle">Active: </span>
                      <span className="red">
                        {props.data.hitbox_frames === null
                          ? props.data.hitbox_active
                          : props.data.hitbox_frames}
                      </span>
                    </Col>
                    <Col xs={4} className="pl-3">
                      <div>
                        <span className="darkSubtitle">Endlag:</span>{" "}
                        <span className="darkgray">
                          {computeRecovery(
                            props.data.startup_frames,
                            props.data.hitbox_active,
                            props.data.total_frames
                          )}
                        </span>
                      </div>
                    </Col>
                    <Col xs={4}>
                      <span className="darkSubtitle">FAF:</span>{" "}
                      <span className="green">
                        {props.data.total_frames === null
                          ? ""
                          : parseLastHitInt(props.data.total_frames) + 1}
                      </span>
                    </Col>
                  </Row>
                  <Row className="py-2 mainStats whitebg">
                    <Col xs={1}>
                      <div id="shieldSvg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox={"0 0 100 100"}
                        >
                          <circle cx="50" cy="50" r="50" fill="#91c8f2" />
                          <circle cx="75" cy="35" r="11" fill="#ffffff" />
                          Sorry, your browser does not support inline SVG.
                        </svg>
                      </div>
                    </Col>
                    <Col xs={3} className="smallText lightgray">
                      <span>Dmg:</span>{" "}
                      {props.data.shield_dmg === null
                        ? "-"
                        : props.data.shield_dmg}
                    </Col>
                    <Col className="smallText">
                      <span className="black">
                        Adv:{" "}
                        <span className="thinText">{props.data.advantage}</span>
                      </span>
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
                            <Col xs={12}>{props.data.angle}</Col>
                          </Row>
                        </Col>
                        <Col className="tinyText mb-2 pl-0">
                          <Row>
                            <Col xs={12}>
                              <b>KB Growth:</b>
                            </Col>
                            <Col xs={12}>{props.data.kbg}</Col>
                          </Row>
                        </Col>
                        <Col className="tinyText mb-2 pl-0">
                          <Row>
                            <Col xs={12}>
                              <b>Shield Lag:</b>
                            </Col>
                            <Col xs={12}>{props.data.shieldlag}</Col>
                          </Row>
                        </Col>
                      </Row>
                      <Row className="mb-2">
                        <Col className="tinyText mb-2 pl-0">
                          <Row>
                            <Col xs={12}>
                              <b>Base KB:</b>
                            </Col>
                            <Col xs={12}>{props.data.bkb_fkb}</Col>
                          </Row>
                        </Col>
                        <Col className="tinyText mb-2 pl-0">
                          <Row>
                            <Col xs={12}>
                              <b>Hitlag:</b>
                            </Col>
                            <Col xs={12}>{props.data.hitlag}</Col>
                          </Row>
                        </Col>
                        <Col className="tinyText mb-2 pl-0">
                          <Row>
                            <Col xs={12}>
                              <b>Shield Stun: </b>
                            </Col>
                            <Col xs={12}>{props.data.shieldstun}</Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg={4}>
                      <span className="tinytext darkgray">Notes:</span> <br />
                      <span className="tinyText notes">{props.data.notes}</span>
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
            <Col style={{ paddingRight: "1px", paddingLeft: "1px" }}>
              <RenderBars
                key={props.data.move_id}
                moveName={props.data.move_name}
                moveType={props.data.move_type}
                startup={props.data.startup_frames}
                active={props.data.hitbox_active}
                total={props.data.total_frames}
              />
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
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default SingleMove;
