import React from 'react';
import { withRouter } from 'react-router';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { hyphenateFighterName, parseFighterName } from '../utilities/utilities';
import './FighterMenuItemComponent.css';

import {
  Media
} from 'reactstrap';

var imgStyle = {
  width: "150px",
  height:"99px"
};


class FighterMenuItem extends React.Component {

  render() {

    return (
      <div className="mb-1">
        <Link to={"/fighter/" + hyphenateFighterName(this.props.fighterName)}>
          <div className="fighterMenuItem rounded">
            <span className="fighterMenuItemTitle"><p>{parseFighterName(this.props.fighterName)}</p></span>
            <Media style={imgStyle} object src={this.props.imageURL_portrait} alt={this.props.fighterName} />
          </div>
        </Link>
      </div>
    );
  }
}

export default withRouter(FighterMenuItem);
