import React from 'react';
import { Row, Col, Container } from 'reactstrap';

export default class AdComponent extends React.Component {
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <ins className="adsbygoogle"
                style={{ display: 'inline-block', width: '728px', height: '90px' }}
                data-ad-client="ca-pub-9988057974027423"
                data-ad-slot="1789615271"
                data-full-width-responsive="false"></ins>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}