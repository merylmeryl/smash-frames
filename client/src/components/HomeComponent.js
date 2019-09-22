import React from 'react';
import FighterMenuItem from './FighterMenuItemComponent';
import Header from './HeaderComponent';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import {
  Navbar, Jumbotron, Row, Col, Container
} from 'reactstrap';
import { iconData } from '../utilities/iconData';
import { hyphenateFighterName } from '../utilities/utilities';

function Home(props) {
  return (
    <div>
      <Header fighterCss="default" />
      <Jumbotron className="centered">
        <img src="https://smashframes-images.s3.us-east-2.amazonaws.com/600px-Smash_Ball.png" alt="smash ball" width="50" /><h1>SAFE ON SHIELD</h1>
        <p className="lead">Frame data for Super Smash Bros. Ultimate</p>
        <br />
        <p><a href="https://discord.gg/jVRzwqq" style={{ color: "#7289DA" }} target="_blank" rel="noopener noreferrer"><img src="https://smashframes-images.s3.us-east-2.amazonaws.com/Discord-Logo-Color.png" width="25" alt="discord" />Join our Discord</a> to receive updates, volunteer and chat with us!</p>
        <br />
        <h3>Release Dates</h3>

        <hr></hr>
        <Container className="text-centered text-sm-left">
          <Row><Col xs={12} sm={3} className="text-centered text-sm-left font-weight-bold">October 15th, 2019</Col><Col sm={1} className="d-none d-sm-block"> - </Col><Col>MVP Release.  Startup, Active, Recovery frames for all fighters.  May have some inaccuracies.  Will allow you to easily compare two moves between different fighters.</Col></Row>
        </Container>
      </Jumbotron>
      <Container><Row><Col><span className="full-width-bar"></span></Col></Row></Container>
      <Container>
        <Row>
          {iconData.sort(function (a, b) {
            return a.name.localeCompare(b.name);
          }).map((icon) =>
            <Col xs={6} md={3} lg={2} key={icon.name}>
              <FighterMenuItem
                key={icon.name}
                fighterName={hyphenateFighterName(icon.name)}
                imageURL_portrait={icon.imageURL_portrait}
                fighterCss={icon.name.toLowerCase()} />
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default withRouter(Home);