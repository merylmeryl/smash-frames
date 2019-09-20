import React from 'react';

import {
  Jumbotron,
  Container,
  Row,
  Col
} from 'reactstrap';

import { BrowserRouter as Link, Router, Route } from "react-router-dom";

class FighterCard extends React.Component {

  render() {

    return (
      <div>
        <Jumbotron className="left fighter">
          <Container fluid={false}>
            <Row>
              <Col xs={12} sm={6}>
                <img width="100%" max-width="450px" src={this.props.assets.imageURL_large} alt={this.props.assets.name} />
              </Col>
              <Col xs={12} sm={6}>
                <Row className="mt-l">
                  <Col xs={12}>
                    <div className="emblem">
                      <img src={this.props.assets.imageURL_emblem} alt="emblem" />
                      <h1>
                        {this.props.assets.name}
                      </h1>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div >
    );
  }
}

export default FighterCard;
