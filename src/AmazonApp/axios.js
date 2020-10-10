import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: "http://localhost:5001/website-f5daf/europe-west3/api",
});

export default instance;
