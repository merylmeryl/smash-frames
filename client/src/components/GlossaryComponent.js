import React from "react";
import { Link } from "react-router-dom";
import BasicHeader from "./BasicHeaderComponent";
import { Navbar, Jumbotron, Row, Col, Container } from "reactstrap";
import { withRouter } from "react-router";
import "./MembersComponent.css";

class Members extends React.Component {
  render() {
    return (
      <div className="credits centered">
        <BasicHeader fighterCss="default" />
        <Container>
          <Row className="mb-3">
            <Col xs={3} className="mb-3" style={{ fontWeight: "bold" }}>
              Frame
            </Col>
            <Col>The smallest unit of time. 1 frame = 1/60 of a second.</Col>
          </Row>
          <Row className="mb-3">
            <Col xs={3} className="mb-3" style={{ fontWeight: "bold" }}>
              Startup/Endlag
            </Col>
            <Col>
              Punishable windows of time at the start and end of a move,
              before/after the hitboxes are active.
            </Col>
          </Row>
          <Row className="mb-3">
            <Col xs={3} style={{ fontWeight: "bold" }}>
              FAF (First Actionable Frame)
            </Col>
            <Col>First frame on which you can perform another move.</Col>
          </Row>
          <Row className="mb-3">
            <Col xs={3} style={{ fontWeight: "bold" }}>
              Angle
            </Col>
            <Col>
              Angle at which the opponent will be knocked away when hit.
              Different "bones" on the character often have different angles.
              Angles above 360 are treated differently: <br />
              <a
                href="https://www.ssbwiki.com/Sakurai_angle"
                target="_blank"
                style={{ color: "blue" }}
              >
                Sakurai Angle (361)
              </a>
              <br />
              <a
                href="https://www.ssbwiki.com/Autolink_angle"
                target="_blank"
                style={{ color: "blue" }}
              >
                Autolink Angles (362+)
              </a>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col xs={3} style={{ fontWeight: "bold" }}>
              Base KB
            </Col>
            <Col>
              Base Knockback. Determines how far the opponent will be launched
              at 0%.
            </Col>
          </Row>
          <Row className="mb-3">
            <Col xs={3} style={{ fontWeight: "bold" }}>
              KB Growth
            </Col>
            <Col>
              Knockback Growth. Determines how Knockback grows as opponent's %
              increases.
            </Col>
          </Row>
          <Row className="mb-3">
            <Col xs={3} style={{ fontWeight: "bold" }}>
              Shield Lag
            </Col>
            <Col>
              Attacker suffers this many frames of lag when they hit a shield.
            </Col>
          </Row>
          <Row className="mb-3">
            <Col xs={3} style={{ fontWeight: "bold" }}>
              Shield Stun
            </Col>
            <Col>
              Defender suffers this many frames of lag when their shield gets
              hit.
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default withRouter(Members);
