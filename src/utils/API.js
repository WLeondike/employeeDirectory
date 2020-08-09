import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=50&nat=us";

// Get random users from API
export default {
  randomUser: () => {
    return axios.get(BASEURL);
  }
};