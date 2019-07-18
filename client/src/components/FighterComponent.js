import React from 'react';

import Header from './HeaderComponent';
import Moves from '../Moves';
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
      fighterList: []
    }
  }

  getFighterList = () => {
    fetch('/api/fighters')
      .then(res => res.json())
      .then(res => {
        var fighterList = res.map(r => { return { fighter_id: r.id, fighter_name: r.fighter_name } });
        this.setState({ fighterList });
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
      <div>
        <Header />
        <Container fluid className="centered">
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
        {/* <MoveBox style={{ marginBottom: '20px' }} startup={30} active={5} recovery={12} />
        <MoveBox style={{ marginBottom: '20px' }} startup={15} active={10} recovery={33} />
        <MoveBox style={{ marginBottom: '50px' }} /> */}
        {/* <Timeline startup='22' active='30' recovery='22' /> */}
      </div>
    );
  }
}

export default Fighter;
