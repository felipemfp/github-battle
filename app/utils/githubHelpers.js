import axios from 'axios'

const HOST = 'https://api.github.com';
const ID = 'YOUR_CLIENT_ID';
const SECRET = 'YOUR_SECRET_ID';
const PARAM = `?client_id=${ID}&client_secret=${SECRET}`;

const getUserInfo = (username) => {
  return axios.get(`${HOST}/users/${username}${PARAM}`);
}

const getRepos = (username) => {
  return axios.get(`${HOST}/users/${username}/repos${PARAM}&per_page=100`);
}

const getTotalStars = (repos) => {
  return repos.data.reduce((prev, current) => {
    return prev + current.stargazers_count
  }, 0);
}

const getPlayersData = (player) => {
  return getRepos(player.login)
    .then(getTotalStars)
    .then((totalStars) => {
      return {
        public_repos: player.public_repos,
        followers: player.followers,
        totalStars: totalStars
      }
    });
}

const calculateScores = (players) => {
  return players.map((player) => {
    return player.followers * 3 + player.totalStars + player.public_repos * 2;
  });
}

const helpers = {
  getPlayersInfo: (players) => {
    return axios.all(players.map((username) => {
      return getUserInfo(username);
    })).then((info) => {
      return info.map((user) => {
        return user.data;
      });
    }).catch((err) => {
      console.warn('Error in getPlayersInfo', err);
    });
  },

  battle: (players) => {
    return axios.all(players.map((player) => {
        return getPlayersData(player);
      })).then(calculateScores)
      .catch((err) => {
        console.warn('Error in battle', err);
      })
  }
};

export default helpers;
