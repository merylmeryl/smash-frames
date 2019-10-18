import React from 'react';
import {
  Row, Col
} from 'reactstrap';

function RenderNotes({ notes }) {
  if (notes === null) {
    return <div></div>;
  }
  else {
    return <div>
      <Row className="text-left mb-2 mt-4">
        <Col xs={3}><div className="statsTitleSecondary">Notes: </div></Col>
      </Row>
      <Row className="text-left pl-2">
        <Col><div className="notesText">{notes}</div></Col>
      </Row>
    </div>
  }
}

export default RenderNotes;