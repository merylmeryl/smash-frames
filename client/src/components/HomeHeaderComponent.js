import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {
  Navbar, NavbarToggler, Collapse, Nav, NavItem
} from 'reactstrap';

class HomeHeader extends Component {

  render() {
    return (
      <React.Fragment>
        <Navbar expand="md" className={"navbar-expand-sm fixed-top " + this.props.fighterCss}>
          <div className="container">
            <div className="navTriangle"></div>
          </div>
        </Navbar>
      </React.Fragment >
    );
  }
}

export default HomeHeader;