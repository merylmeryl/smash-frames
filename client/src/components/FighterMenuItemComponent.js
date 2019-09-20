import React from 'react';
import { withRouter } from 'react-router';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { hyphenateFighterName } from '../utilities/utilities';

import {
  Media
} from 'reactstrap';

var imgStyle = {
  width: "150px",
};


class FighterMenuItem extends React.Component {

  render() {

    return (
      <div>
        <Link to={"/fighter/" + hyphenateFighterName(this.props.fighterName)}>
          <Media>
            <Media middle>
              <Media style={imgStyle} object src={this.props.imageURL} alt={this.props.fighterName} />
            </Media>
          </Media>
        </Link>
      </div>
    );
  }
}

export default withRouter(FighterMenuItem);
