import axios from 'axios';

const config = {
  baseURL: "https://foodexplore-api-felipegiusti.onrender.com"
}

/**
 * @exports {AxiosInstance}
 */
export const api = axios.create(config);
