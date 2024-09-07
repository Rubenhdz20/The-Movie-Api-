import axios from "axios";

const api = axios.create({ // Creates a new Axios instance with custom default settings. This instance can be used to make requests with the predefined configuration, simplifying repeated requests to the same API.
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    api_key: import.meta.env.VITE_API_KEY,
  },
});

export default api;