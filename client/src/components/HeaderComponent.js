import React, { Component } from 'react';
import {
  Navbar, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Row, Col
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
        <Row>
          <Col>
            <Jumbotron className="centered">
              <h1 className="display-3">Smash Frames</h1>
              <p className="lead">Frame data for Super Smash Bros. Ultimate</p>
            </Jumbotron>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Header;