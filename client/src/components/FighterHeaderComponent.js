import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Navbar } from "reactstrap";
import Autocomplete from "react-autocomplete";
import "./FighterAutocomplete.css";

import BackArrow from "./BackArrowComponent";
// import Autocomplete from './xAutocompleteComponent';

function matchStateToTerm(selectedFighter, value) {
  return (
    selectedFighter.label.toLowerCase().indexOf(value.toLowerCase()) !== -1
  );
}

class FighterHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      isModalOpen: false,
      selectedFighter: "",
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar
          expand="md"
          className={"navbar-expand-sm fixed-top " + this.props.fighterCss}
        >
          <div className="container">
            <BackArrow color={this.props.color} />
            <div className="navTriangle"></div>

            {/* <div className="autocompleteContainer">
              <label htmlFor="rivals-autocomplete">VS</label>
              <Autocomplete
                value={this.props.selectedRival}
                inputProps={{
                  placeholder: "COMPARE TO...",
                  id: "rivals-autocomplete",
                }}
                items={this.props.fighterNames}
                getItemValue={item => item.label}
                shouldItemRender={matchStateToTerm}
                onChange={this.props.changeRival}
                onSelect={this.props.changeRival}
                renderItem={(item, isHighlighted) => (
                  <div
                    style={{
                      background: isHighlighted ? "lightgray" : "white",
                    }}
                  >
                    {item.label}
                  </div>
                )}
              />
            </div> */}
            {/* <Autocomplete suggestions={this.props.fighters} /> */}
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
      </React.Fragment>
    );
  }
}

export default FighterHeader;
