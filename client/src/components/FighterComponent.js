import React from 'react';

import Header from './HeaderComponent';
import MoveBox from './MoveBoxComponent';

import {
  Container,
  Row,
  Col,
  FormGroup,
  Input
} from 'reactstrap';

class Fighter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      moves: [],
      rivalMoves: [],
      fighters: [],
      selectedMove: null,
      selectedRivalMove: null
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

  // getMoveById = (moveId) => {
  //   fetch(`/api/moves/${moveId}`)
  //     .then(res => res.json())
  //     .then(moves => {
  //       this.setState({ moves });
  //     });
  // }

  handleChangeFighter = (e) => {
    this.getMovesByFighter(e.target.value);
  }

  handleChangeRivalFighter = (e) => {
    this.getMovesByRivalFighter(e.target.value);
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
  componentDidMount() {
    this.getFighters();
  }

  render() {

    if (this.state.selectedMove === null || this.state.selectedRivalMove === null) {
      return (
        <div>
          <Header />
          <Container fluid className="centered">
            <Row className="fighterDropdowns">
              <Col>
                <h1 className="display-5">My Fighter</h1>
                <FormGroup>
                  <Input type="select" onChange={this.handleChangeFighter}>
                    {this.state.fighters.map((fighter, i) => <option key={fighter.fighter_id} value={fighter.fighter_id}>{fighter.fighter_name}</option>)}
                  </Input>
                </FormGroup>
              </Col>
              <Col>
                <h1 className="display-5">My Moves</h1>
                <FormGroup>
                  <Input type="select" onChange={this.handleChangeSelectedMove}>
                    {this.state.moves.map((move, i) => <option key={move.id} value={move.id}>{move.move_name}</option>)}
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <Row className="fighterDropdowns">
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
            <Row className="moves">
              <Col>
                {this.state.moves.map((move) =>
                  <div key={move.id} style={{ marginBottom: '8%' }}><MoveBox data={move} /></div>
                )}
              </Col>
            </Row>
          </Container>
        </div>
      );
    }
    else {
      return (
        <div>
          <Header />
          <Container fluid className="centered">
            <Row className="fighterDropdowns">
              <Col>
                <h1 className="display-5">My Fighter</h1>
                <FormGroup>
                  <Input type="select" onChange={this.handleChangeFighter}>
                    {this.state.fighters.map((fighter) => <option key={fighter.fighter_id} value={fighter.fighter_id}>{fighter.fighter_name}</option>)}
                  </Input>
                </FormGroup>
              </Col>
              <Col>
                <h1 className="display-5">My Move</h1>
                <FormGroup>
                  <Input type="select" onChange={this.handleChangeSelectedMove}>
                    {this.state.moves.map((move) => <option key={move.id} value={move.id}>{move.move_name}</option>)}
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <MoveBox data={this.state.selectedMove} />
              </Col>
            </Row>
            <Row className="fighterDropdowns">
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
            </Row>
          </Container>
        </div>
      );
    }

  }
}

export default Fighter;
