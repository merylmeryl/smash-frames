import React, { Component } from 'react';
import Moves from './Moves';

import {
  Container,
  Jumbotron,
  Navbar,
  NavbarBrand,
  Row,
  Col,
  FormGroup,
  Input
} from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      moves: [],
      fighterList: []
    }
  }

  getFighterList = () => {
    fetch('/api/fighters')
      .then(res => res.json())
      .then(res => {
        var fighterList = res.map(r => { return { fighter_id: r.id, fighter_name: r.fighter_name } });
        this.setState({ fighterList });
        console.log(fighterList);
      });
  };

  getMovesByFighter = (fighterId) => {
    fetch(`/api/moves/fighter/${fighterId}`)
      .then(res => res.json())
      .then(moves => {
        this.setState({ moves });
      });
  }

  handleChangeFighter = (e) => {
    this.getMovesByFighter(e.target.value);
  }

  componentDidMount() {
    this.getFighterList();
  }

  render() {
    return (
      <Container fluid className="centered">
        <Navbar dark color="dark">
          <NavbarBrand href="/">Smash Frames</NavbarBrand>
        </Navbar>
        <Row>
          <Col>
            <Jumbotron>
              <h1 className="display-3">Smash Frames</h1>
              <img src="https://photos.app.goo.gl/o18fUUz2kV12pE5aA" />
              <p className="lead">Frame data for Super Smash Bros. Ultimate</p>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-5">Current Fighter</h1>
            <FormGroup>
              <Input type="select" onChange={this.handleChangeFighter}>
                {this.state.fighterList.length > 0 && <option>Select a fighter.</option>}
                {this.state.fighterList.map((fighter, i) => <option key={i} value={fighter.fighter_id}>{fighter.fighter_name}</option>)}
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Moves data={this.state.moves} />
      </Container>
    );
  }
}

export default App;
