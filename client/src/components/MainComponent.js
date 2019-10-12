import React from 'react';

import Home from './HomeComponent';
import Fighter from './FighterComponent';
import Members from './MembersComponent';
import Glossary from './GlossaryComponent';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Main extends React.Component {

  render() {

    return (
      <div>
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/fighter/:fighterName" component={Fighter} />
          <Route exact path="/members" component={Members} />
          <Route exact path="/glossary" component={Glossary} />
        </Router>
      </div>
    );
  }
}

export default Main;
