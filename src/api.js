import axios from 'axios';

export default axios.create({
  baseURL: `https://deployment-api1.herokuapp.com/`
});