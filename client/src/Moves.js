import React from 'react';
import { Row, Col, Table } from 'reactstrap';

const Moves = (props) => {
  const { data } = props;

  if (!data) {
    return <div></div>;
  }

  return (
    <Row className="moves">
      <Col sm="12">
        <Table className="table table-striped">
          <thead class="thead-dark">
            <tr>
              <td>Attack</td>
              <td>Startup Frames</td>
              <td>Total Frames</td>
              <td>Base Damage</td>
              <td>Landing Lag</td>
              <td>Shield Lag</td>
              <td>Shield Stun</td>
              <td>Hitbox</td>
            </tr>
          </thead>
          <tbody>
            {data.map((move, i) =>
              <tr key={i}>
                <td>{move.move_name}</td>
                <td>{move.startup_frames}</td>
                <td>{move.total_frames}</td>
                <td>{move.base_damage}</td>
                <td>{move.landing_lag}</td>
                <td>{move.shieldlag}</td>
                <td>{move.shieldstun}</td>
                <td>{move.hitbox_type}</td>
              </tr>)}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default Moves;