import axios from "axios";

// let baseURL ="";
// const baseURL = 'http://localhost:4000/api/v1';
const baseURL = "http://api.openweathermap.org";

export const http = axios.create({
  baseURL,
});

http.interceptors.response.use((res) => res);
