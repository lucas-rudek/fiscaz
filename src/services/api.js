import axios from "axios";

const api = axios.create({
  baseURL: "https://60f2p.sse.codesandbox.io/"
});

export default api;
