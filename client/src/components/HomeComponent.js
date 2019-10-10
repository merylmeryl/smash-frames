import React from 'react';
import FighterMenuItem from './FighterMenuItemComponent';
import HomeHeader from './HeaderComponent';
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
      <HomeHeader fighterCss="default" />
      <Jumbotron className="centered">
        <img src="https://smashframes-images.s3.us-east-2.amazonaws.com/600px-Smash_Ball.png" alt="smash ball" width="50" /><h1>SAFE ON SHIELD</h1>
        <p className="lead">Frame data for Super Smash Bros. Ultimate</p>
        Frame data shouldn't be confusing.  Our goal is to take all frame data and display it in clear and attractive infographics.
        <br />
        <br />
        This site is still in development, so there will be data errors and weirdness for a while.
        <br />
        <br />
        <p><a href="https://discord.gg/jVRzwqq" style={{ color: "#7289DA" }} target="_blank" rel="noopener noreferrer"><img src="https://smashframes-images.s3.us-east-2.amazonaws.com/Discord-Logo-Color.png" width="25" alt="discord" />&nbsp;Join our Discord</a> to receive updates, volunteer and chat with us!
        </p>
        <p><a href="https://www.patreon.com/bePatron?u=24781171" style={{ color: "#FF5900" }} data-patreon-widget-type="become-patron-button"><img src="https://smashframes-images.s3.us-east-2.amazonaws.com/emblems/Patreon_logo+small.png" width="25" alt="patreon" />&nbsp;Become a Patron!</a>  With your support we can build it faster and with better features!<script async src="https://c6.patreon.com/becomePatronButton.bundle.js"></script></p>
        <Link to="/members" style={{ color: 'black' }}>Credits</Link>
      </Jumbotron>
      <Container className="mt-4">
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