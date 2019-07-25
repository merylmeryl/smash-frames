import React, { Component } from 'react';
import {
  Navbar, Jumbotron, Row, Col, Container
} from 'reactstrap';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      isModalOpen: false
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  handleLogin(event) {
    this.toggleModal();
    alert("Username: " + this.username.value + " Password: " + this.password.value
      + " Remember: " + this.remember.checked);
    event.preventDefault();

  }

  render() {
    return (
      <React.Fragment>
        <Navbar expand="md" className="navbar-expand-sm fixed-top">
          <div className="container">
            <div className="navTriangle"></div>
            {/* <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  Home
                </NavItem>
              </Nav>
            </Collapse> */}
          </div>
        </Navbar>
        <Jumbotron className="centered">
          <img src="https://smashframes-images.s3.us-east-2.amazonaws.com/600px-Smash_Ball.png" alt="smash ball" width="50" /><h1>SAFE ON SHIELD</h1>
          <p className="lead">Frame data for Super Smash Bros. Ultimate</p>
          <br />
          <p><a href="https://discord.gg/jVRzwqq" style={{ color: "#7289DA" }} target="_blank" rel="noopener noreferrer"><img src="https://smashframes-images.s3.us-east-2.amazonaws.com/Discord-Logo-Color.png" width="25" alt="discord" />Join our Discord</a> to receive updates, volunteer and chat with us!</p>
          <br />
          <br />
          <h3>Release Dates</h3>
          <hr></hr>
          <Container className="text-centered text-sm-left">
            <Row><Col xs={12} sm={3} className="text-centered text-sm-left font-weight-bold">August 15, 2019</Col><Col sm={1} className="d-none d-sm-block"> - </Col><Col>MVP Release.  Startup, Active, Recovery frames for all fighters.  May have some inaccuracies.  Will allow you to easily compare two moves between different fighters.</Col></Row>
            <br />
            <Row><Col xs={12} sm={3} className="text-centered text-sm-left font-weight-bold">September 15, 2019</Col><Col sm={1} className="d-none d-sm-block"> - </Col><Col>Character Pages.  Each character will have his/her own beautiful page.</Col></Row>
          </Container>
        </Jumbotron>
      </React.Fragment >
    );
  }
}

export default Header;