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
          <Row className="justify-content-center">
            <Col md={1}>
              <span className="buddies">∩ᶘ^ᴥ^ᶅ∩</span>
            </Col>
            <Col md={7}>
              {" "}
              Thanks to all of the awesome, brilliant people who work on this
              site!
            </Col>
            <Col md={1}>
              {" "}
              <span className="buddies">∩ᶘ^ᴥ^ᶅ∩</span>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <p>
                <b>
                  Pakoraptor (
                  <a href="https://twitter.com/pakobird">
                    <img
                      src="https://d2io28u36gemnx.cloudfront.net/misc/twitter+bird.png"
                      style={{ width: "20px" }}
                    />
                    <span style={{ color: "#29A8DF" }}>pakobird</span>):
                  </a>
                </b>{" "}
                Full-Stack Developer
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                <b>Un Diablo (Rafael Tudela):</b> Designer
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                <b>Plague von Karma (May Evans):</b> Hitbox and frame data
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                <b>EyeDonutz:</b> Hitbox and frame data
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                <b>Isabella J:</b> Hitbox visualizations
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                <b>Struggleton:</b> Hitbox visualizations
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                <b>Foxy Joe:</b> Hitbox visualizations
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                <b>
                  <a
                    href="https://rubendal.github.io/ssbu/#/Character"
                    target="_blank"
                    style={{ color: "blue" }}
                  >
                    Ruben's Data Viewer
                  </a>
                </b>
                : The holiest of data sources
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                <b>Sakurai and the Smash development team</b>: For making this
                awesome game and, most importantly, bringing Wolf back ᶘ ͡°ᴥ͡°ᶅ
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default withRouter(Members);
