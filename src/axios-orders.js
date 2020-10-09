import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-proj-633c1.firebaseio.com/'
});

export default instance;