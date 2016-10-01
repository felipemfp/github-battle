import axios from 'axios'

const id = 'YOUR_CLIENT_ID';
const secret = 'YOUR_SECRET_ID';
const param = `?client_id=${id}&client_secret=${secret}`;

const getUserInfo = (username) => {
  return axios.get('https://api.github.com/users/' + username + param);
}

const helpers = {
  getPlayersInfo: function(players) {
    return axios.all(players.map((username) => {
      return getUserInfo(username);
    })).then((info) => {
      return info.map((user) => {
        return user.data;
      });
    }).catch((err) => {
      console.warn('Error in getPlayersInfo', err)
    });
  }
};

export default helpers;
