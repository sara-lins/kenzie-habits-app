import axios from "axios";

const ApiServer = axios.create({
  baseURL: "",
  timeout: 5000,
});

export default ApiServer;
