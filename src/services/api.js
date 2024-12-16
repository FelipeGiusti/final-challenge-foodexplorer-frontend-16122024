import axios from 'axios';

const config = {
  baseURL: "http://localhost:3000"
}

/**
 * @exports {AxiosInstance}
 */
export const api = axios.create(config);
