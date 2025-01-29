import axios from "axios";

let baseUrl =
  import.meta.env.MODE === "development"
    ? "http://localhost:5001/api"
    : "https://real-time-chat-application-4-sj4n.onrender.com/api";

const http = axios.create({ baseURL: baseUrl });

http.interceptors.request.use(
  (request) => {
    const accessToken = localStorage.getItem("token");
    if (accessToken) {
      request.headers["authorization"] = `${accessToken}`;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use((response) => response),
  (error) => Promise.reject(error);

export default http;
