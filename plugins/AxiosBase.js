import axios from 'axios';
// import config from '../store/config';

export default axios.create({
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('UserToken')
      // Authorization: 'Bearer ' + config.ApiToken
    }
  })
