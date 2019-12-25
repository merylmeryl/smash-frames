import React from "react";
import { withRouter } from "react-router-dom";

import FighterHeader from "./FighterHeaderComponent";
import FighterCard from "./FighterCardComponent";
import Moves from "./MovesComponent";
import AdComponent from "./AdComponent";

import { iconData } from "../utilities/iconData";
import { parseFighterName } from "../utilities/utilities";

import { Container, Row, Col, FormGroup, Input } from "reactstrap";

import { BrowserRouter as Router, Route } from "react-router-dom";

class Fighter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      moves: [],
      rivalMoves: [],
      fighters: [],
      selectedMove: null,
      selectedRival: null,
      selectedRivalMove: null,
      selectedFighter: null,
      hasError: false,
    };
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
    fetch("/api/fighters")
      .then(res => res.json())
      .then(res => {
        var fighters = res.map(r => {
          return { fighter_id: r.id, fighter_name: r.fighter_name };
        });
        this.setState({ fighters });
      });
  };

  getFighterByName = fighterName => {
    fetch(`/api/fighters/${fighterName}`)
      .then(res => res.json())
      .then(
        res =>
          res.map(r => {
            return { fighter_id: r.id, fighter_name: r.fighter_name };
          })[0]
      )
      .then(selectedFighter => {
        if (selectedFighter === null || selectedFighter === undefined) {
          return null;
        } else {
          return this.setState({ selectedFighter: selectedFighter }, () =>
            this.getMovesByFighter(this.state.selectedFighter.fighter_id)
          );
        }
      });
  };

  getMovesByFighter = fighterId => {
    fetch(`/api/moves/fighter/${fighterId}`)
      .then(res => res.json())
      .then(moves => {
        this.setState({ moves });
      });
  };

  getMovesByRivalFighter = fighterId => {
    fetch(`/api/moves/fighter/${fighterId}`)
      .then(res => res.json())
      .then(rivalMoves => {
        this.setState({ rivalMoves });
      });
  };

  handleChangeFighter = e => {
    this.getMovesByFighter(e.target.value);
  };

  handleChangeRivalFighter = e => {
    if (e.target.value !== "Select a rival! (Coming Soon)") {
      this.getMovesByRivalFighter(e.target.value);
    }
  };

  handleChangeSelectedMove = e => {
    let moveId = parseInt(e.target.value);
    let move = this.state.moves.find(item => item.id === moveId);

    this.setState({ selectedMove: move });
  };
  handleChangeSelectedRivalMove = e => {
    let moveId = parseInt(e.target.value);
    let move = this.state.rivalMoves.find(item => item.id === moveId);

    this.setState({ selectedRivalMove: move });
  };
  handleChangeRival = e => {
    this.setState({ selectedRival: e.target.value });
  };

  render() {
    if (
      this.state.selectedFighter === null ||
      this.state.selectedFighter === undefined ||
      this.state.hasError
    ) {
      return (
        <div>
          <p></p>
        </div>
      );
    } else {
      const fighterAssets = iconData.find(
        fighter =>
          fighter.name.toLowerCase() ===
          this.state.selectedFighter.fighter_name.toLowerCase()
      );

      return (
        <div>
          <FighterHeader
            fighterCss={this.props.match.params.fighterName.toLowerCase()}
            fighterNames={this.state.fighters
              .map(fighter => {
                return { label: fighter.fighter_name };
              })
              .sort(function(a, b) {
                return a.label.localeCompare(b.label);
              })}
            changeRival={this.handleChangeRival}
          />
          <FighterCard assets={fighterAssets} />
          <Moves
            moves={this.state.moves}
            fighter={this.state.selectedFighter.fighter_name.toLowerCase()}
          />
        </div>
      );
    }
  }
}

export default withRouter(Fighter);
