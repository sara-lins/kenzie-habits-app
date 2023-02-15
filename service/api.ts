import axios from "axios";

const ApiServer = axios.create({
  baseURL: "https://kenzie-habits-server.onrender.com/api/task/",
});

export default ApiServer;
