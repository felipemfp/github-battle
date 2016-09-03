import React, {PropTypes} from 'react';
import ConfirmBattle from '../components/ConfirmBattle';

class ConfirmBattleContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      playerInfo: []
    };
  }

  componentDidMount(){
    const query = this.props.location.query;
    // Fetch info from GitHub then update state
  }

  render() {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playersInfo={this.state.playersInfo} />
    )
  }
}

ConfirmBattleContainer.contextTypes = {
  router: PropTypes.object.isRequired
}

export default ConfirmBattleContainer;
