import React from 'react';
import Home from './HomeComponent';
import Fighter from './FighterComponent';
import { iconData } from '../utilities/iconData';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Main extends React.Component {

  render() {

    return (
      <div>
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/fighter/:fighterName" component={Fighter} />
        </Router>
      </div>
    );
  }
}

export default Main;
