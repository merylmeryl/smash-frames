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
import "./MovesComponent.css";

const RenderMoveTabs = moveData => {
  var groundMoves = [];
  var aerialMoves = [];
  var specialMoves = [];
  var grabMoves = [];
  var dodgeMoves = [];
  var recoverMoves = [];

  moveData = moveData.moveData;

  if (moveData !== null) {
    for (var key in moveData) {
      if (moveData.hasOwnProperty(key)) {
        if (
          moveData[key].category === null ||
          moveData[key].category === "Ground"
        ) {
          groundMoves.push(moveData[key]);
        } else if (moveData[key].category === "Aerial") {
          aerialMoves.push(moveData[key]);
        } else if (moveData[key].category === "Special") {
          specialMoves.push(moveData[key]);
        } else if (moveData[key].category === "Grab") {
          grabMoves.push(moveData[key]);
        } else if (moveData[key].category === "Dodge") {
          dodgeMoves.push(moveData[key]);
        } else if (moveData[key].category === "Recover") {
          recoverMoves.push(moveData[key]);
        }
      }
    }
  }

  return (
    <React.Fragment>
      <TabPane tabId="Ground">
        {groundMoves.map(move => {
          return <SingleMove data={move} className="mb-2" key={move.id} />;
        })}
      </TabPane>
      <TabPane tabId="Aerial">
        {aerialMoves.map(move => {
          return <SingleMove data={move} className="mb-2" key={move.id} />;
        })}
      </TabPane>
      <TabPane tabId="Special">
        {specialMoves.map(move => {
          return <SingleMove data={move} className="mb-2" key={move.id} />;
        })}
      </TabPane>
      <TabPane tabId="Grab">
        {grabMoves.map(move => {
          return <SingleMove data={move} className="mb-2" key={move.id} />;
        })}
      </TabPane>
      <TabPane tabId="Dodge">
        {dodgeMoves.map(move => {
          return <SingleMove data={move} className="mb-2" key={move.id} />;
        })}
      </TabPane>
      <TabPane tabId="Recover">
        {recoverMoves.map(move => {
          return <SingleMove data={move} className="mb-2" key={move.id} />;
        })}
      </TabPane>
    </React.Fragment>
  );
};

const Moves = props => {
  const [activeTab, setActiveTab] = useState("Ground");

  const toggle = tab => {
    if (activeTab != tab) setActiveTab(tab);
  };

  return (
    <React.Fragment>
      <div className="moveTabContainer">
        <Nav tabs>
          <NavItem
            className={"moveTab " + (activeTab === "Ground" ? "active" : "")}
          >
            <NavLink
              onClick={() => {
                toggle("Ground");
              }}
            >
              Ground
            </NavLink>
          </NavItem>
          <NavItem
            className={"moveTab " + (activeTab === "Aerial" ? "active" : "")}
          >
            <NavLink
              onClick={() => {
                toggle("Aerial");
              }}
            >
              Aerial
            </NavLink>
          </NavItem>
          <NavItem
            className={"moveTab " + (activeTab === "Special" ? "active" : "")}
          >
            <NavLink
              onClick={() => {
                toggle("Special");
              }}
            >
              Special
            </NavLink>
          </NavItem>
          <NavItem
            className={"moveTab " + (activeTab === "Grab" ? "active" : "")}
          >
            <NavLink
              onClick={() => {
                toggle("Grab");
              }}
            >
              Grab & Throw
            </NavLink>
          </NavItem>
          <NavItem
            className={"moveTab " + (activeTab === "Dodge" ? "active" : "")}
          >
            <NavLink
              onClick={() => {
                toggle("Dodge");
              }}
            >
              Dodge
            </NavLink>
          </NavItem>
          <NavItem
            className={"moveTab " + (activeTab === "Recover" ? "active" : "")}
          >
            <NavLink
              onClick={() => {
                toggle("Recover");
              }}
            >
              Recover
            </NavLink>
          </NavItem>
        </Nav>
      </div>
      <Container fluid className="centered">
        <Row>
          <Col>
            <br />
            <TabContent activeTab={activeTab}>
              <RenderMoveTabs moveData={props.moves} />
              {/* {props.moves.map(move => (
              <div key={move.id}>
                <SingleMove
                  data={move}
                  fighter={props.fighter}
                  className="mb-2"
                />
              </div>
            ))} */}
            </TabContent>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Moves;
