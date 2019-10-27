import React, { useState } from "react";
import {
  Row,
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";

import SingleMove from "./SingleMoveComponent";

const Moves = props => {
  const [activeTab, setActiveTab] = useState("Ground");

  const toggle = tab => {
    if (activeTab != tab) setActiveTab(tab);
  };

  const groundMoves = [
    "Jab",
    "Dash Attack",
    "F-Smash",
    "U-Smash",
    "D-Smash",
    "F-Throw",
    "B-Throw",
    "D-Throw",
  ];

  const aerialMoves = ["N-Air", "F-Air", "B-Air", "U-Air", "D-Air"];

  const specialMoves = ["N-Special", "F-Special", "U-Special", "D-Special"];

  return (
    <div>
      {/* <Nav tabs>
        <NavItem>
          <NavLink
            onClick={() => {
              toggle("Ground");
            }}
          >
            Ground
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            onClick={() => {
              toggle("Special Attacks");
            }}
          >
            Special Attacks
          </NavLink>
        </NavItem>
      </Nav> */}
      <Container fluid className="centered">
        <Row>
          <Col>
            <br />
            {props.moves.map(move => (
              <div key={move.id}>
                <SingleMove
                  data={move}
                  fighter={props.fighter}
                  className="mb-2"
                />
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Moves;
