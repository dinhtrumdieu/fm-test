import axios from 'axios';
import {BASE_API_URL} from '../../utils/Const';

const url = BASE_API_URL;
const factories = {
  requestSignIn: data => {
    return axios({
      method: 'POST',
      url: `${url}/auth/login`,
      data: data,
    });
  },
};

export default factories;
