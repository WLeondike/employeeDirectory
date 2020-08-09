import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=50&nat=us";

// Get random user from API
export default {
  randomUser: () => {
    return axios.get(BASEURL);
  }
};