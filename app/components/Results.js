import React, {PropTypes} from 'react'
import styles from '../styles'
import UserDetails from './UserDetails'
import UserDetailsWrapper from './UserDetailsWrapper'
import MainWrapper from './MainWrapper'
import {Link} from 'react-router'
import Loading from './Loading'

const StartOver = (props) => {
  return (
    <div className="col-sm-12" style={styles.space}>
      <Link to="/playerOne">
        <button type="button" className="btn btn-lg btn-danger">
          Start Over
        </button>
      </Link>
    </div>
  )
}

const Results = (props) => {
  if (props.isLoading === true) {
    return <Loading/>
  }

  if (props.scores[0] === props.scores[1]) {
    return (
      <MainWrapper>
        <h1>It's a tie!</h1>
        <StartOver/>
      </MainWrapper>
    )
  }

  let winningIndex = props.scores[0] > props.scores[1]
    ? 0
    : 1;
  let losingIndex = winningIndex === 0
    ? 1
    : 0;
  return (
    <MainWrapper>
      <h1>Results</h1>
      <div className="col-sm-8 col-sm-offset-2">
        <UserDetailsWrapper header="Winner">
          <UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]}/>
        </UserDetailsWrapper>
        <UserDetailsWrapper header="Loser">
          <UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]}/>
        </UserDetailsWrapper>
      </div>
      <StartOver/>
    </MainWrapper>
  )
}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
}

export default Results
