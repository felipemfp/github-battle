import React from 'react';
import ReactRouter, {Link} from 'react-router';
import styles from '../styles';
import MainWrapper from './MainWrapper'

const Home = (props) => {
  return (
    <MainWrapper>
      <h1>GitHub Battle</h1>
      <p className="lead">Pick two users and let's go to the battle</p>
      <Link to="/playerOne">
        <button className="btn btn-lg btn-success" type="button">Get Started</button>
      </Link>
    </MainWrapper>
  )
}

export default Home;
