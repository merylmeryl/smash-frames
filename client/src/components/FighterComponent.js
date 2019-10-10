import React from 'react';
import { withRouter } from 'react-router-dom';

import Header from './HeaderComponent';
import FighterCard from './FighterCardComponent';
import MoveBox from './MoveBoxComponent';
import AdComponent from './AdComponent';

import { iconData } from '../utilities/iconData';
import { parseFighterName } from '../utilities/utilities';


import {
  Container,
  Row,
  Col,
  FormGroup,
  Input
} from 'reactstrap';

import { BrowserRouter as Router, Route } from "react-router-dom";

class Fighter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      moves: [],
      rivalMoves: [],
      fighters: [],
      selectedMove: null,
      selectedRivalMove: null,
      selectedFighter: null,
      hasError: false,
    }
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
  }

  componentDidMount() {
    this.getFighters();

    // Get the fighter by the URL parameter
    // For example, safeonshield.com/fighter/bowser will retrieve Bowser's data
    var { fighterName } = this.props.match.params;

    if (fighterName !== null) {
      fighterName = parseFighterName(fighterName);
      this.getFighterByName(fighterName);
    }
  }

  getFighters = () => {
    fetch('/api/fighters')
      .then(res => res.json())
      .then(res => {
        var fighters = res.map(r => { return { fighter_id: r.id, fighter_name: r.fighter_name } });
        this.setState({ fighters });
      });
  };

  getFighterByName = (fighterName) => {
    fetch(`/api/fighters/${fighterName}`)
      .then(res => res.json())
      .then(res => res.map(r => { return { fighter_id: r.id, fighter_name: r.fighter_name } })[0])
      .then((selectedFighter) => {
        if (selectedFighter === null || selectedFighter === undefined) {
          return null;
        }
        else {
          return this.setState({ selectedFighter: selectedFighter },
            () => this.getMovesByFighter(this.state.selectedFighter.fighter_id))
        }
      })
  }

  getMovesByFighter = (fighterId) => {
    fetch(`/api/moves/fighter/${fighterId}`)
      .then(res => res.json())
      .then(moves => {
        this.setState({ moves });
      });
  }

  getMovesByRivalFighter = (fighterId) => {
    fetch(`/api/moves/fighter/${fighterId}`)
      .then(res => res.json())
      .then(rivalMoves => {
        this.setState({ rivalMoves });
      });
  }

  handleChangeFighter = (e) => {
    this.getMovesByFighter(e.target.value);
  }

  handleChangeRivalFighter = (e) => {
    if (e.target.value !== "Select a rival! (Coming Soon)") {
      this.getMovesByRivalFighter(e.target.value);
    }
  }

  handleChangeSelectedMove = (e) => {
    let moveId = parseInt(e.target.value);
    let move = this.state.moves.find(item => item.id === moveId);

    this.setState({ selectedMove: move });
  }
  handleChangeSelectedRivalMove = (e) => {
    let moveId = parseInt(e.target.value);
    let move = this.state.rivalMoves.find(item => item.id === moveId);

    this.setState({ selectedRivalMove: move });
  }

  render() {
    if (this.state.selectedFighter === null || this.state.selectedFighter === undefined || this.state.hasError) {
      return <div>
        <p>

        </p>
      </div>;
    }
    else {
      const fighterAssets = iconData.find(fighter => fighter.name.toLowerCase() === this.state.selectedFighter.fighter_name.toLowerCase());

      return (
        <div>
          <Header fighterCss={this.props.match.params.fighterName.toLowerCase()} />
          <FighterCard assets={fighterAssets} />
          <Container fluid className="centered sticky">
            <Row className="moves">
              <Col xs={1}>
                <h3>VS</h3>
              </Col>
              <Col xs={2}>
                <FormGroup>
                  <Input type="select" onChange={this.handleChangeRivalFighter}>
                    {this.state.fighters.length > 0 && <option>Select a rival!  (Coming Soon)</option>}
                    {this.state.fighters.map((fighter) => <option key={fighter.fighter_id} value={fighter.fighter_id}>{fighter.fighter_name}</option>)}
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <br />
                {this.state.moves.map((move) =>
                  <div key={move.id} style={{ marginBottom: '4%' }}><MoveBox data={move} /></div>
                )}
              </Col>
            </Row>
            {/* <Row>
              <Col>
                <MoveBox data={this.state.selectedMove} />
              </Col>
            </Row> */}
            {/* <Row className="fighterDropdowns">
              <Col>
                <h1 className="display-5">Rival's Fighter</h1>
                <FormGroup>
                  <Input type="select" onChange={this.handleChangeRivalFighter}>
                    {this.state.fighters.map((fighter) => <option key={fighter.fighter_id} value={fighter.fighter_id}>{fighter.fighter_name}</option>)}
                  </Input>
                </FormGroup>
              </Col>
              <Col>
                <h1 className="display-5">Rival's Move</h1>
                <FormGroup>
                  <Input type="select" onChange={this.handleChangeSelectedRivalMove}>
                    {this.state.rivalMoves.map((move) => <option key={move.id} value={move.id}>{move.move_name}</option>)}
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <MoveBox data={this.state.selectedRivalMove} />
              </Col>
            </Row> */}
          </Container>
          <AdComponent />
        </div>
      );
    }
    // if (this.state.selectedRivalMove === null) {
    //   return (
    //     <div>
    //       <Header fighterCss={this.props.match.params.fighterName.toLowerCase()} />
    //       <Container fluid className="centered">
    //         <Row className="fighterDropdowns">
    //           <Col>
    //             <h1 className="display-5">My Fighter</h1>
    //             <FormGroup>
    //               <Input type="select" onChange={this.handleChangeFighter}>
    //                 {this.state.fighters.map((fighter, i) => <option key={fighter.fighter_id} value={fighter.fighter_id}>{fighter.fighter_name}</option>)}
    //               </Input>
    //             </FormGroup>
    //           </Col>
    //         </Row>
    //         <Row className="fighterDropdowns">
    //           <Col>
    //             <h1 className="display-5">Rival's Fighter</h1>
    //             <FormGroup>
    //               <Input type="select" onChange={this.handleChangeRivalFighter}>
    //                 {this.state.fighters.map((fighter) => <option key={fighter.fighter_id} value={fighter.fighter_id}>{fighter.fighter_name}</option>)}
    //               </Input>
    //             </FormGroup>
    //           </Col>
    //           <Col>
    //             <h1 className="display-5">Rival's Move</h1>
    //             <FormGroup>
    //               <Input type="select" onChange={this.handleChangeSelectedRivalMove}>
    //                 {this.state.rivalMoves.map((move) => <option key={move.id} value={move.id}>{move.move_name}</option>)}
    //               </Input>
    //             </FormGroup>
    //           </Col>
    //         </Row>
    //         <Row className="moves">
    //           <Col>
    //             {this.state.moves.map((move) =>
    //               <div key={move.id} style={{ marginBottom: '8%' }}><MoveBox data={move} /></div>
    //             )}
    //           </Col>
    //         </Row>
    //       </Container>
    //     </div>
    //   );
    // }
    // else {
    //   return (
    //     <div>
    //       <Header />
    //       <Container fluid className="centered">
    //         <Row className="fighterDropdowns">
    //           <Col>
    //             <h1 className="display-5">My Fighter</h1>
    //             <FormGroup>
    //               <Input type="select" onChange={this.handleChangeFighter}>
    //                 {this.state.fighters.map((fighter) => <option key={fighter.fighter_id} value={fighter.fighter_id}>{fighter.fighter_name}</option>)}
    //               </Input>
    //             </FormGroup>
    //           </Col>
    //           <Col>
    //             <h1 className="display-5">My Move</h1>
    //             <FormGroup>
    //               <Input type="select" onChange={this.handleChangeSelectedMove}>
    //                 {this.state.moves.map((move) => <option key={move.id} value={move.id}>{move.move_name}</option>)}
    //               </Input>
    //             </FormGroup>
    //           </Col>
    //         </Row>
    //         <Row>
    //           <Col>
    //             <MoveBox data={this.state.selectedMove} />
    //           </Col>
    //         </Row>
    //         <Row className="fighterDropdowns">
    //           <Col>
    //             <h1 className="display-5">Rival's Fighter</h1>
    //             <FormGroup>
    //               <Input type="select" onChange={this.handleChangeRivalFighter}>
    //                 {this.state.fighters.map((fighter) => <option key={fighter.fighter_id} value={fighter.fighter_id}>{fighter.fighter_name}</option>)}
    //               </Input>
    //             </FormGroup>
    //           </Col>
    //           <Col>
    //             <h1 className="display-5">Rival's Move</h1>
    //             <FormGroup>
    //               <Input type="select" onChange={this.handleChangeSelectedRivalMove}>
    //                 {this.state.rivalMoves.map((move) => <option key={move.id} value={move.id}>{move.move_name}</option>)}
    //               </Input>
    //             </FormGroup>
    //           </Col>
    //         </Row>
    //         <Row>
    //           <Col>
    //             <MoveBox data={this.state.selectedRivalMove} />
    //           </Col>
    //         </Row>
    //       </Container>
    //     </div>
    //   );
    // }

  }
}

export default withRouter(Fighter);
