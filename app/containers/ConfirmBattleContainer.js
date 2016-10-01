import React, {PropTypes} from 'react';
import ConfirmBattle from '../components/ConfirmBattle';
import githubHelpers from '../utils/githubHelpers'

class ConfirmBattleContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      playerInfo: []
    };
  }

  componentDidMount() {
    const query = this.props.location.query;
    githubHelpers
      .getPlayersInfo([query.playerOne, query.playerTwo])
      .then((players) => {
        this.setState({
          isLoading: false,
          playersInfo: [players[0], players[1]]
        });
      });
  }

  render() {
    return (<ConfirmBattle isLoading={this.state.isLoading} playersInfo={this.state.playersInfo}/>)
  }
}

ConfirmBattleContainer.contextTypes = {
  router: PropTypes.object.isRequired
}

export default ConfirmBattleContainer;
