import React from 'react';
import { Row, Col } from 'reactstrap';
import MoveBox from './components/MoveBoxComponent';
import { parseMultihit } from './utilities/parseMultihit.js';

// TODO: Remove parseMultihit and simply allow any type of move to be passed in to the
//       MoveBoxComponent.

const Moves = (props) => {
  const { data } = props;

  if (!data) {
    return <div></div>;
  }

  return (
    <Row className="moves">
      <Col sm="12">
        {data.map((move, i) =>
          <div key={'mb' + i} style={{ marginBottom: '8%' }}><MoveBox
            key={'mb' + i}
            moveType={move.move_type}
            moveName={move.move_name}
            totalFrames={move.total_frames}
            baseDamage={move.base_damage == null ? 0 : move.base_damage}
            startup={move.startup_frames}
            active={move.hitbox_active}
            notes={move.notes}
            shieldlag={move.shieldlag}
            shieldstun={move.shieldstun}
          />
          </div>
        )}
        {/* <Table className="table table-striped">
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
        </Table> */}
      </Col>
    </Row>
  );
};

export default Moves;