import React from 'react';
import { Link } from "react-router-dom";
import Header from './HeaderComponent';
import {
  Navbar, Jumbotron, Row, Col, Container
} from 'reactstrap';
import { withRouter } from 'react-router';

class Members extends React.Component {

  render() {

    return (
      <div>
        <Header fighterCss="default" />
        <Jumbotron className="left">
          <Container><Row><Col>
            <br /><br />
            <p>Thanks to everyone who helped make this site.</p>
            <p><b>Pakoraptor (Meryl Dara):</b> Full-Stack Developer</p>
            <p><b>Un Diablo (Rafael Tudela):</b> Designer</p>
            <p><b>Plague von Karma (May Evans):</b> Hitbox and frame data</p>
            <p><b>EyeDonutz:</b> Hitbox and frame data</p>
            <p><b>Isabella J:</b> Hitbox visualizations</p>
            <p><b>Struggleton:</b> Hitbox visualizations</p>
            <p><b>Meshima:</b> Hitbox visualizations</p>
          </Col></Row></Container>
        </Jumbotron>
      </div>
    )
  }
}
export default withRouter(Members);